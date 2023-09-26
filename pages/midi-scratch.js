import Layout from '../components/layout';
import styles from '../styles/lesson-template.module.css';
import Midi from '../components/midi'

export default function MidiScratch(props) {

    //voice leading challenge Improve these selections of chord voicing with Voice Leading

    return (
        <Layout>
            <div>
                <Midi/>
            </div>   
            <div className={styles.lesson_content}>
                <h1>Midi Scratch Page</h1>
                
            </div>
        </Layout>
        
        
        )
    
}
