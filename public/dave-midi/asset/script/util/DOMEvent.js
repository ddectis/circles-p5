/*
DOMEvent.
Execute methods when stuff happens to an element.
Copyright 2023 David Kirkbride. All rights reserved.
Last edited: 6 Jul 2023.

DOMEvent constructor (instantiate once only):

	DOMEvent([ ...nameOfEachDOMEventToListenFor ], ..._listeningObjectsWhoseMethodsWillBeCalled);

Contrived attribute usage examples:

	Simple example: Call the function 'doSomething' on every listener that has that function.

		<button data-event="click:doSomething">

	With parameters:

		<button data-event="click:doSomething(myLiteralParam1,myLiteralParam2,...)">

	Send element value as parameter:

		<input type="text" data-event="input:doSomethingElse(@value)"/>

	Send values from other elements as parameters:

		<input type="text" id="text-one"/>
		<input type="text" class="some-text"/>
		<form data-event="!submit:doAnotherThing(@value(#text-one),@value(.some-text))">

	Listen for multiple events:

		<input type="text" data-event="input:doSomething;change:doSomethingElse"/>

Parameters will be passed in order to the method specified. The DOMEvent (_event) parameter will be sent last.
Parameters that look like bool, null or number will be parsed into their respective formats.
Remember: DOM events that have not been registered in the constructor will not fire!

When any event is fired, the onDomEvent function will also be called on any listener that has it. This allows you to
handle any event from a single method.
*/

export default class {

	#listeners = [];

	constructor(_eventTypes = [], ..._listeners) {

		this.#listeners = _listeners;

		for (const eventType of _eventTypes)
			document.addEventListener(eventType, this.#domEvent.bind(this));
	}

	#domEvent(_event) {

		const attr = _event.target.getAttribute('data-event');
		if (!attr)
			return;

		const attrParts = attr.split(';');

		for (const attrPart of attrParts) {

			const stringParts = attrPart.split(':');
			const [ rawEventType, methodString ] = stringParts;

			const preventDefault = rawEventType.startsWith('!');
			const eventType = preventDefault ? rawEventType.substring(1) : rawEventType;

			if (eventType != _event.type)
				continue;

			if (preventDefault)
				_event.preventDefault();

			const methodParts = methodString.split('(');
			const methodName = methodParts.shift();
			const methodParamString = methodParts.join('(');

			let params = [];

			if (methodParamString)
				params = methodParamString.substring(0, methodParamString.length - 1).split(',');

			for (let index = 0; index < params.length; index++) {

				if (params[index].startsWith('@value')) {

					const paramParts = params[index].split('(');

					if (paramParts.length == 1) {

						params[index] = _event.target.value;
					} else {

						const selector = paramParts[1].substring(0, paramParts[1].length - 1);
						const target = document.querySelector(selector);
						params[index] = target.value;
					}
				}

				if (params[index] == 'true')
					params[index] = true;

				if (params[index] == 'false')
					params[index] = false;

				if (params[index] && !window.isNaN(params[index]))
					params[index] = Number.parseFloat(params[index]);

				if (params[index] == 'null')
					params[index] = null;
			}

			params.push(_event);

			for (const listener of this.#listeners) {

				if (typeof listener.onDomEvent === 'function')
					listener.onDomEvent(methodName, ...params);

				if (typeof listener[methodName] === 'function')
					listener[methodName](...params);
			}
		}
	}
};