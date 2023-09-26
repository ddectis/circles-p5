import styles from '../styles/sidebar-button.module.css';


export default function SidebarButton(props){
    return (
        <button className={styles.toggleSidebarButton} onClick={props.toggleSidebar}>|||</button>
    )
}