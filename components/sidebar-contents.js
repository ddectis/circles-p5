import Link from 'next/link';
import styles from '../styles/sidebar-contents.module.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SidebarContents(props) {

    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        console.log("lesson click on sidebar");
        console.log(e);
        props.toggleSidebar();
        router.push(e.target.href);
        
    }
    
    //voice leading challenge Improve these selections of chord voicing with Voice Leading

    return (
        <div className={styles.contents} id="sidebar">
  
            <h2>Program Contents</h2>
            <ol className={styles.contents_container}>
                <li className={styles.program_heading}><h3 className={styles.contents_heading}>Introduction</h3></li>
                <ul>
                    <li>
                        <Link 
                            href="/lessons/01-introduction/anyone-can-play" 
                            onClick={handleClick}
                            className={styles.contents_link}>
                                Anyone can learn to Play
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/lessons/01-introduction/inner-ear-intro" 
                            onClick={handleClick}
                            className={styles.contents_link}>
                                Find Your Inner Ear
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/lessons/01-introduction/glossary" 
                            onClick={handleClick}
                            className={styles.contents_link}>
                                Glossary of Terms
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/midi-scratch"
                            onClick={handleClick}
                            className={styles.contents_link}>
                                MIDI!
                        </Link>
                    </li>
                </ul>
                <li className={styles.program_heading}><h3 className={styles.contents_heading}>Intervals</h3></li>
                <ul>
                    <li>What is an interval?</li>
                    <li>The pattern of an Octave</li>
                    <li>Challenge: Ear Training</li>
                </ul>
                <li className={styles.program_heading}><h3 className={styles.contents_heading}>Scale Construction</h3></li>
                <ul>
                    <li>Intro to Scales</li>
                    <li>Major Pattern</li>
                    <li>Minor Pattern</li>
                    <li>Challenge: Scale Drill</li>
                </ul>
                <li className={styles.program_heading}><h3 className={styles.contents_heading}>Chord Construction</h3></li>
                <ul>
                    <li>Intro to Triads</li>
                    <li>Major Chord</li>
                    <li>Minor Minor Chord</li>
                    <li>Challenge: Chord Construction & Recognition</li>
                </ul>
                <li className={styles.program_heading}>Nashville Numbers</li>
                <ul>
                    <li>Intro to Nashville Numbers</li>
                    <li>How to use them?</li>
                    <li>Major Pattern</li>
                    <li>Minor Pattern</li>
                    <li>Visualizing the Octave</li>
                    <li>Challenge: Analyze songs using Nashville Numbers</li>
                </ul>
                <li className={styles.program_heading}>Chord Progressions</li>
                <ul>
                    <li>Intro to Chord Progressions</li>
                    <li>Common Progressions</li>
                    <li>Challenge: Song Analysis II</li>
                </ul>
                <li className={styles.program_heading}>Extensions and Seasoning</li>
                <ul>
                    <li>Voice Leading</li>
                    <li>Suspensions</li>
                    <li>Tension and Resolution</li>
                    <li>Challenge: </li>
                </ul>
                <li className={styles.program_heading}>Composition with Chord Progressions</li>
                <li className={styles.program_heading}>Improvisation</li>
                <ul>
                    <li>Intro to Improvisation</li>
                    <li>Finding the key</li>
                    <li>Scales</li>
                    <li>Steps & Leaps</li>
                    <li>Repitition</li>
                    <li>Challenge: Scale Drill</li>
                </ul>
                <li className={styles.program_heading}>Honing Your Inner Ear</li>
                <ul>
                    <li>What is your Inner Ear?</li>
                    <li>Major Pattern</li>
                    <li>Minor Pattern</li>
                    <li>Challenge: Scale Drill</li>
                </ul>
            </ol>
        </div>
        
        )
    
}
