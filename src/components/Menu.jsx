import { MdMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiFireFill } from "react-icons/ri";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaDoorOpen } from "react-icons/fa";
import styles from './Menu.module.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Menu() {
    const [menu, setMenu] = useState(false);
    function openMenu() {
        setMenu(!menu);
    }

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (menu && !e.target.closest("#menu") && !e.target.closest("#iconOpen") && !e.target.closest("#iconClose")) {
                setMenu(false);
            }
        })
    }, [menu])

    return (
        <div className={styles.container} id="menu">
            <div>
                {menu ? (
                    <MdMenuOpen className={styles.icon} onClick={openMenu} id="iconOpen" />
                ) : (
                    <MdMenu className={styles.icon} onClick={openMenu} id="iconClose" />
                )}
            </div>
            {menu && (
                <div className={styles.modal}>
                    <nav>
                        <ul>
                            <li><Link to={`/`}><FaHome className={styles.home} />Inicio</Link></li>
                            <li><Link to="/#"><RiFireFill className={styles.destaque} />Destacar</Link></li>
                            <li><Link to="/#"><BsFillPatchCheckFill className={styles.check} />Verificar</Link></li>
                            <li><Link to="/#"><FaDoorOpen className={styles.logout} />Sair</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    )
}
export default Menu;