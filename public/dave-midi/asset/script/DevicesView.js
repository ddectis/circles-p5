import replaceElementTags from './util/replaceElementTags.js';

/*
Listens for events from MIDI and updates the UI appropriately.
*/
export default class {

	#dom = {

		input: {

			list: document.querySelector('#devices table:nth-of-type(1) tbody'),
			item: document.querySelector('#devices template:nth-of-type(1)')
		}
	};

	onPermissionDenied() {

		console.error('MIDI API permission denied.');
	}

	onAPICreationFailed() {

		console.error('MIDI API could not be created.');
	}

	onAPICreationSuccess(_inputDevices, _outputDevices) {

		this.#dom.input.list.innerHTML = '';

		for (const device of _inputDevices) {

			replaceElementTags(

				this.#dom.input.list.appendChild(

					this.#dom.input.item.content.firstElementChild.cloneNode(true)
				),
				{
					'id': device.id,
					'name': device.name,
					'manufacturer': device.manufacturer || 'Not specified',
					'connection': device.connection,
					'state': device.state,
					'version': device.version
				}
			);
		}
	}

	/*
	User selected an input device.
	(The appropriate radio button is likely already selected but it does not hurt to make sure.)
	*/
	onInputDeviceSelected(_device) {

		const selector = `input[name="selected-input-device"][value="${_device.id}"]`;
		const element = this.#dom.input.list.querySelector(selector);
		element.checked = true;
	}
};