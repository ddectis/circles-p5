import styles from '../styles/SidebarButton.module.css';


export default function SidebarButton(props){
    return (
        <button className={styles.toggleSidebarButton} onClick={props.toggleSidebar}>|||</button>
    )
}