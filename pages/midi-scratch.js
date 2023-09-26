import Layout from '../components/layout';
import styles from '../styles/lesson-template.module.css';
import Midi from '../components/midi'

export default function MidiScratch(props) {

    //voice leading challenge Improve these selections of chord voicing with Voice Leading

    return (
        <Layout>
             <body>
                <header role="menubar">
                    <button type="button" data-event="click:openDevicesDialog;click:scanDevices">MIDI Devices</button>
                </header>

                <main />

                <section id="osk">
                    <header>
                    <h1>Keyboard</h1>
                    </header>

                    <div>
                    <ul>
                        <li />
                        <li />
                    </ul>
                    </div>

                    <template>
                    <button type="" data-note="{{value}}">{{note}}</button>
                    </template>
                </section>

                <dialog id="devices">
                    <section>
                    <header>
                        <h1>MIDI Devices</h1>
                        <button type="button" data-event="click:closeDevicesDialog">x</button>
                    </header>

                    <div>
                        <table>
                        <thead>
                            <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Manufacturer</th>
                            <th>Connection</th>
                            <th>State</th>
                            <th>Version</th>
                            </tr>
                        </thead>

                        <tbody></tbody>
                        </table>

                        <template>
                        <tr>
                            <td>
                            <input
                                type="radio"
                                name="selected-input-device"
                                value="{{id}}"
                                data-event="change:selectInputDevice({{id}})"
                                id={`input-device-${id}`}
                            />
                            </td>

                            <td>
                            <label htmlFor={`input-device-${id}`}>{name}</label>
                            </td>

                            <td>
                            <label htmlFor={`input-device-${id}`}>{manufacturer}</label>
                            </td>

                            <td>
                            <label htmlFor={`input-device-${id}`}>{connection}</label>
                            </td>

                            <td>
                            <label htmlFor={`input-device-${id}`}>{state}</label>
                            </td>

                            <td>
                            <label htmlFor={`input-device-${id}`}>{version}</label>
                            </td>
                        </tr>
                        </template>
                    </div>

                    <footer role="menubar">
                        <button type="button" data-event="click:closeDevicesDialog">Close</button>
                    </footer>
                    </section>
                </dialog>
            </body>
        </Layout>
        
        
        )
    
}
