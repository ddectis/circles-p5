import replaceElementTags from './util/replaceElementTags.js';

/*
Renders the on screen keyboard as HTML, updating elements as needed.
*/
export default class {

	#dom = {

		container: document.querySelector('#osk'),
		white: document.querySelector('#osk li:first-child'),
		black: document.querySelector('#osk li:last-child'),
		key: document.querySelector('#osk template')
	};

	onOSKReady(_octaves, _lowestNote, _notes, _sharps) {

		// Iterate octaves.

		for (let octaveIndex = 0; octaveIndex < _octaves; octaveIndex++) {

			// Iterate notes.

			for (let noteIndex = 0; noteIndex < 12; noteIndex++) {

				// Calculate this note's expected MIDI value.
				const value = _lowestNote + (octaveIndex * 12) + noteIndex;

				// Get the human-readable thing known as a note.
				const note = _notes[noteIndex];

				const target = _sharps.includes(noteIndex) ? this.#dom.black : this.#dom.white;

				replaceElementTags(

					target.appendChild(
	
						this.#dom.key.content.firstElementChild.cloneNode(true)
					),
					{
						'value': value,
						'note': note
					}
				);
			}
		}
	}

	onNotePressed(_value, _velocity) {

		const element = this.#dom.container.querySelector(`button[data-note="${_value}"]`);
		element.setAttribute('aria-selected', 'true');
	}

	onNoteReleased(_value) {

		const element = this.#dom.container.querySelector(`button[data-note="${_value}"]`);
		element.setAttribute('aria-selected', 'false');
	}
};