import Link from 'next/link';
import GoBackToContents from '../../../components/go-back-to-contents';
import Layout from '../../../components/layout';
import styles from '../../../styles/lesson-template.module.css';

export default function Glossary(props) {

    //voice leading challenge Improve these selections of chord voicing with Voice Leading

    return (
        <Layout>
            <div className={styles.lesson_content}>
                <h2>Glossary of Music Terms</h2>
                <p>
                    Yak Yak Yak
                </p>
            <GoBackToContents />
            </div>
        </Layout>
        
        
        )
    
}
