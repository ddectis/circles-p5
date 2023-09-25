
import Link from 'next/link';
import styles from '../styles/lesson-contents.module.css';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LessonContents from '../components/lesson-contents'
import SidebarButon from './sidebar-button';


export default function Layout(props) {

    const router = useRouter();
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);

    useEffect(()=>{
        console.log("ReRendering Sidebar");
        const sidebar = document.getElementById("sidebar");
        const isHiddenClass = styles.isHidden;
        sidebar.classList.toggle(isHiddenClass)
    },[isSideBarOpen])

    const toggleSidebar = () =>{
        console.log("sidebar toggle click");  
        setIsSidebarOpen(!isSideBarOpen);
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("is-hidden")
        
      }
    
    //voice leading challenge Improve these selections of chord voicing with Voice Leading

    return (
        <div>
            <div>
                <LessonContents
                    toggleSidebar={toggleSidebar}
                />
            </div>
            <div>
                <SidebarButon 
                    toggleSidebar={toggleSidebar}
                />
                {props.children}
            </div>
        </div>
        
        )
    
}
