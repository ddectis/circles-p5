import styles from '../styles/sidebar-background.module.css';



export default function SidebarBackground(props){

    const handleClick = () =>{
        console.log("background click");
        props.toggleSidebar();
        const sidebarBackground = document.getElementById('sidebar-background')
        sidebarBackground.classList.toggle('isHidden')
    }

    return (
        <div className={`${styles.clickTarget} ${styles.isHidden}`} onClick={handleClick} id='sidebar-background'>
            
        </div>
    )
}