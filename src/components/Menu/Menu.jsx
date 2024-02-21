import { MdMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { RiFireFill } from "react-icons/ri";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoMegaphone } from "react-icons/io5";
import styles from './Menu.module.css';
import { Maps } from '../Maps/Maps';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Menu = () => {
    const [createProfile, setCreateProfile] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (createProfile && !e.target.closest("#create_profile") && !e.target.closest("#criar_anuncio")) {
                setCreateProfile(false)
            }
        })
    }, [createProfile]);

    function openMenu() {
        setMenu(!menu);
    }
    useEffect(() => {
        if (createProfile) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
        }
    }, [createProfile]);

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (menu && !e.target.closest("#menu") && !e.target.closest("#iconOpen") && !e.target.closest("#iconClose")) {
                setMenu(false);
            }
        })
    }, [menu])

    function openModal() {
        setCreateProfile(!createProfile);
    }

    return (
        <div className={styles.container} id="menu">
            <div>
                <button className={styles.create} onClick={openModal} id="criar_anuncio">Criar Anúncio</button>
            </div>
            <div>
                {menu ? (
                    <MdMenuOpen className={styles.icon} onClick={openMenu} id="iconOpen" />
                ) : (
                    <MdMenu className={styles.icon} onClick={openMenu} id="iconClose" />
                )}
            </div>
            {createProfile && <Maps />}
            {menu && (
                <div className={styles.modal}>
                    <nav>
                        <ul>
                            <li><Link to="/#"><RiFireFill className={styles.icone} />Destacar</Link></li>
                            <li><Link to="/#"><BsFillPatchCheckFill className={styles.icone} />Verificar</Link></li>
                            <li><Link to="/#"><IoMegaphone className={styles.icone} />Divulgar Marca</Link></li>
                            <li><Link to={`/`}><IoMdSettings className={styles.icone} />Editar Conta</Link></li>
                            <li><Link to="/#"><FaPowerOff className={styles.icone} />Sair</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    )
}