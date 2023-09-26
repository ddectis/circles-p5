import GoBackToContents from '../../../components/go-back-to-contents';
import Layout from '../../../components/layout';
import styles from '../../../styles/lesson-template.module.css';

export default function InnerEarIntro(props){
    return (
        <Layout>
            <div className={styles.lesson_content}>
                <h2 className={styles.lesson_title}>Find your Inner Ear</h2>
                <p>The process of improvisation can also be called spontaneous composition. 
                    As I improvise, the engine that provides the melodies I play is what I call 
                    my <b>Inner Ear</b> 
                </p>
            </div>
        </Layout>
    )
}