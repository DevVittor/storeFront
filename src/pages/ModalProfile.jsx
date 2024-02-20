import styles from './ModalProfile.module.css';

function ModalProfile({ item }) {
    return (
        <div className={styles.container} id='modaProfile'>
            <h2>{item.nome}</h2>
            <h3>{item.caches}</h3>
            <h4>{item.altura}</h4>
            <p>{item.sobre}</p>
        </div>
    )
}

export default ModalProfile;