
/*
Keep a list of class instances and publish 'events' to them (call named-at-runtime methods on them).
*/
export default class {

	#listeners = [];

	constructor(..._listeners) { this.#listeners = _listeners; }

	publish(_event, ..._params) {

		for (const listener of this.#listeners)
			if (typeof listener[_event] == 'function')
				listener[_event](..._params);
	}
};