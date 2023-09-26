/*
Usage:

const midi = new MIDI(

	new EventPub(

		new MyClassThatWantsToListenToMIDI(),
		new AnotherClassThatWantsToListenToMIDI(),
		...
	)
);

'Listener' classes (i.e MyClassThatWantsToListenToMIDI) may contain the following methods:

onPermissionDenied - called when permission is denied.
onAPICreationFailed - called when API cant be created for some reason, I dunno.
onAPICreationSuccess(_inputDevices, _outputDevices) - called when inputs and outputs have been discovered.
onInputDeviceSelected(_device) - called when user selects an input device.
onOutputDeviceSelected(_device) -called when user selected an output device.
onMIDIEvent(_data) - called when an event is recieved from the MIDI instrument; _data is [ command, note, velocity ].
*/
export default class {

	// Reference to the MIDI API.
	#api = null;

	// The API's collection of devices is messy and not an array, let's keep nice arrays here.
	#inputDevices = [];
	#outputDevices = [];

	// The selected (in-use) devices.
	#selectedInputDevice = null;
	#selectedOutputDevice = null;

	// This publishes 'events' to interested listeners.
	#events = null;

	constructor(_eventPub) {

		this.#events = _eventPub;
		this.scanDevices();
	}

	// -----------------------------------------------------------------------------------------------------------------
	// Public methods.

	/*
	Scan for devices and store a reference to them (the API).
	MIDI access has gotta be requested via a user action; call this from a user event such as click.
	*/
	async scanDevices() {

		if (!await this.#askPermission()) {

			this.#events.publish('onPermissionDenied');
			return;
		}

		this.#api = await this.#requestAccess();
		if (!this.#api) {

			this.#events.publish('onAPICreationFailed');
			return;
		}

		// Collate devices from MIDI API.

		this.#inputDevices = [];
		for (const entry of this.#api.inputs)
			this.#inputDevices.push(entry[1]);

		this.#outputDevices = [];
		for (const entry of this.#api.outputs)
			this.#outputDevices.push(entry[1]);

		// Notify view of new devices.

		this.#events.publish('onAPICreationSuccess', this.#inputDevices, this.#outputDevices);

		// If the user had a device selected, re-select it if it still exists. Otherwise default to first device.

		let selectID = this.#inputDevices[0].id;
		let savedID = window.localStorage.getItem('selected-input-device');

		if (this.#inputDevices.find(_device => _device.id == savedID))
			selectID = savedID;

		this.selectInputDevice(selectID);

		// Same for output device.

		selectID = this.#outputDevices[0].id;
		savedID = window.localStorage.getItem('selected-output-device');

		if (this.#outputDevices.find(_device => _device.id == savedID))
			selectID = savedID;

		this.selectOutputDevice(selectID);
	}

	/*
	Select an input device to use.
	*/
	selectInputDevice(_deviceID) {

		const device = this.#inputDevices.find(_device => _device.id == _deviceID);
		if (!device) {

			console.error('Invalid input device selected.');
			return;
		}

		// Un-hook the API listener for the currently selected device, if there is one.

		if (this.#selectedInputDevice)
			this.#selectedInputDevice.onmidimessage = null;

		// And hook up the new input device.

		this.#selectedInputDevice = device;
		this.#selectedInputDevice.onmidimessage = this.#onMIDIEvent.bind(this);

		// Store the selected device ID for 'refresh convenience' and notify our listeners that a device was selected.

		window.localStorage.setItem('selected-input-device', this.#selectedInputDevice.id);
		this.#events.publish('onInputDeviceSelected', this.#selectedInputDevice);
	}

	/*
	Select an output device to use.
	*/
	selectOutputDevice(_deviceID) {

		const device = this.#outputDevices.find(_device => _device.id == _deviceID);
		if (!device) {

			console.error('Invalid output device selected.');
			return;
		}

		// Un-hook the API listener for the currently selected device, if there is one.

		if (this.#selectedOutputDevice)
			this.#selectedOutputDevice.onmidimessage = null;

		// And hook up the new output device.

		this.#selectedOutputDevice = device;
		this.#selectedOutputDevice.onmidimessage = this.#onMIDIEvent.bind(this);

		// Store the selected device ID for 'refresh convenience' and notify our listeners that a device was selected.

		window.localStorage.setItem('selected-output-device', this.#selectedOutputDevice.id);
		this.#events.publish('onOutputDeviceSelected', this.#selectedOutputDevice);
	}

	// -----------------------------------------------------------------------------------------------------------------
	// Private methods.

	/*
	We have received a MIDI event. Notify our listeners.
	*/
	#onMIDIEvent(_event) {

		this.#events.publish('onMIDIEvent', _event.data);
	}

	/*
	Ask for permission from the browser to use the Web MIDI API.
	TODO; What the hell is prompt?
	*/
	async #askPermission() {

		const response = await navigator.permissions.query({ name: 'midi', sysex: true });

		if (response.state === 'denied')
			return false;
		else if (response.state === 'prompt')
			return true;

		return true;
	}

	/*
	Request access to the MIDI port / API.
	*/
	async #requestAccess() {

		const response = await navigator.requestMIDIAccess();

		if (!response)
			return null;

		return response;
	}
};