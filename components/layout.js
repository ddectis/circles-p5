
import Link from 'next/link';
import styles from '../styles/lesson-contents.module.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import LessonContents from '../components/lesson-contents'

export default function Layout(props) {

    const router = useRouter();

    useEffect(()=>{
        console.log("ye");
        const sidebar = document.getElementById("sidebar");
        const isHiddenClass = styles.isHidden;
        sidebar.classList.toggle(isHiddenClass)
    },[props.isOpen])

    const handleClick = (e) => {
        e.preventDefault();
        console.log("click");
        console.log(e);
        router.push(e.target.href, { replace: true });
    }

    
    //voice leading challenge Improve these selections of chord voicing with Voice Leading

    return (
        <div>
            <div>
                <LessonContents/>
            </div>
            <div>
                {props.children}
            </div>
        </div>
        
        )
    
}
