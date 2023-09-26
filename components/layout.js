import sidebarStyles from '../styles/sidebar-contents.module.css';
import lessonStyles from '../styles/lesson-template.module.css'
import React, { useEffect, useState } from 'react';
import SidebarContents from './sidebar-contents'
import SidebarBackground from './sidebar-background';
import GoBackToContents from '/components/go-back-to-contents';
import SidebarButton from './sidebar-button';

export default function Layout(props) {

    const [isSideBarOpen, setIsSidebarOpen] = useState(true);

    useEffect(()=>{
        console.log("ReRendering Sidebar");
        const sidebar = document.getElementById("sidebar");
        const isHiddenClass = sidebarStyles.isHidden;
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
        <div className={lessonStyles.lesson_container}>
            <div>
                <SidebarContents
                    toggleSidebar={toggleSidebar}

                />
                <SidebarBackground
                    toggleSidebar={toggleSidebar}
                />
            </div>
            <div>
                <SidebarButton
                    toggleSidebar={toggleSidebar}
                />
            </div>
            {props.children}
            <GoBackToContents/>
        </div>
        
        )
    
}
