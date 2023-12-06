import styles from './Footer.module.css';
export default function Footer() {
    return (
        <footer>
            <div className={styles.footer_container}>
                <div className={styles.footer_direito}>
                    <span>Todos os direitos reservados</span>
                </div>
                <div className={styles.footer_social}>
                    <nav>
                        <ul>
                            <li><a href="#"><i className="ri-instagram-line"></i></a></li>
                            <li><a href="#"><i className="ri-twitter-x-line"></i></a></li>
                            <li><a href="#"><i className="ri-telegram-line"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}