import DOMEvent from './util/DOMEvent.js';
import EventPub from './util/EventPub.js';

import MIDI from './MIDI.js';
import DevicesView from './DevicesView.js';
import DevicesDialogController from './DevicesDialogController.js';

import OSK from './OSK.js';
import OSKView from './OSKView.js';

(async () => {

	const devicesDialogController = new DevicesDialogController();

	new DOMEvent(

		[
			'click',
			'change'
		],
		new MIDI(

			new EventPub(

				new DevicesView(),
				new OSK(

					new EventPub(

						new OSKView()
					)
				),
				devicesDialogController
			)
		),
		devicesDialogController
	);
})();