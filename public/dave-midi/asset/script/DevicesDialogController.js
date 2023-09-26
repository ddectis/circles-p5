
/*
Opens and closes the MIDI devices dialog.
This is simply here to keep this crap out of MIDI.js. 
*/
export default class {

	#dom = {

		dialog: document.querySelector('#devices')
	};

	openDevicesDialog() {

		this.#dom.dialog.open = true;
	}

	closeDevicesDialog() {

		this.#dom.dialog.open = false;
	}
};