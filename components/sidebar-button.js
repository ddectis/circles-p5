import styles from '../styles/SidebarButton.module.css';


export default function SidebarButon(props){
    return (
        <button className={styles.toggleSidebarButton} onClick={props.toggleSidebar}>|||</button>
    )
}