import Link from 'next/link';
import GoBackToContents from '../../../components/GoBackToContents';
import Layout from '../../../components/layout';
import styles from '../../../styles/lesson.module.css';

export default function AnyoneCanPlay(props) {

    //voice leading challenge Improve these selections of chord voicing with Voice Leading

    return (
        <Layout>
            <div className={styles.lesson_content}>
            
            <h2>Anyone Can Learn to Play</h2>
            <p>
                When we played as children, we manifested our imagination into the world through joyful acts of self-expression. We called it Play. Meanwhile, the verb for making music is -- and it's no coincidence -- also Play.
                The purpose of this program is to foster your ability to Play in that child-like sense.
                <br /><br />
                I'm going to give you the mental framework and tools to think about music and, through lots of practice on your end, you're going to manifest your musical imagination into the world through joyful acts of self-expression

                <br /><br />
                This course will present the fundamentals of music theory in a practical way. You will apply these principals toward building your own system to approach playing music. We'll learn about how to talk about music, how to analyze your favorite pop songs, how to improvise.
            </p>
            <GoBackToContents />
        </div>
        </Layout>
        
        
        )
    
}
