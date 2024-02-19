import styles from './ModalProfile.module.css';
function ModalProfile({ item }) {
    return (
        <div className={styles.container}>
            <h2>{item.nome}</h2>
            <h3>{item.caches}</h3>
        </div>
    )
}

export default ModalProfile;