import styles from './Demo.module.css';

function Demo() {
    return (
        <div className={styles.container}>
            <div className={styles.destaque}>
                <div className={styles.cards}>
                    <img src="https://images.pexels.com/photos/20204362/pexels-photo-20204362/free-photo-of-conifera-alvorecer-amanhecer-aurora.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
            <div className={styles.box}>
                <img src="https://images.pexels.com/photos/714256/pexels-photo-714256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.destaque}>
                <div className={styles.cards}>
                    <img src="https://images.pexels.com/photos/20147088/pexels-photo-20147088/free-photo-of-praia-litoral-california-penhasco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Demo