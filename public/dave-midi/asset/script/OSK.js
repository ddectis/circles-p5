/*
Representation of a musical keyboard.

'Listener' classes may contain the following methods:

onOSKReady - called at start. useful point to draw initial UI.
onNoteReleased(_note, _velocity = 0) - velocity will always be 0 here.
onNotePressed(_note, _velocity)
*/
export default class {

	// How many octaves to display.
	#octaves = 4;

	// Lowest key value on the MIDI keyboard.
	#lowestNote = 36;

	// Note labels; change 'em if you like but keep the order; for now we only deal with Cmaj.
	#notes = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];
	#sharps = [ 1, 3, 6, 8, 10 ];

	// This publishes 'events' to interested listeners.
	#events = null;

	constructor(_eventPub) {

		this.#events = _eventPub;

		this.#events.publish('onOSKReady', this.#octaves, this.#lowestNote, this.#notes, this.#sharps);
	}

	/*
	We have received a MIDI event.
	*/
	onMIDIEvent(_data) {

		const [ command, note, velocity ] = _data;

		switch (command) {

			// A key was pressed or released.

			case 144:

				this.#key(note, velocity);
			break;
		}
	}

	/*
	A key was pressed (_velocity > 0) or released (_velocity == 0).
	*/
	#key(_note, _velocity) {

		this.#events.publish(_velocity == 0 ? 'onNoteReleased' : 'onNotePressed', _note, _velocity);
	}
};