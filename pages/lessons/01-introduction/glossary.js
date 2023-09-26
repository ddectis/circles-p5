import Link from 'next/link';
import Layout from '../../../components/layout';
import styles from '../../../styles/lesson-template.module.css';

export default function Glossary(props) {

    //voice leading challenge Improve these selections of chord voicing with Voice Leading

    return (
        <Layout>
            <div className={styles.lesson_content}>
                <h2 className={styles.lesson_title}>Glossary of Music Terms</h2>
                <div className={styles.lesson_block}>
                    <p>
                        Yak Yak Yak
                    </p>
                </div>
                
            </div>
        </Layout>
        
        
        )
    
}
