import { MdMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoMegaphone } from "react-icons/io5";
import { IoIosRocket } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { Maps } from '../Maps/Maps';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
export const Menu = ({mode,atual}) => {
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

    return (
        <div className="" id="menu">
            <>
                {menu ? (
                    <div className="relative flex items-center justify-center">
                        <MdMenuOpen className="dark:text-white text-2xl cursor-pointer" onClick={openMenu} id="iconOpen" />
                        {menu && (
                            <div className="dark:bg-dark dark:shadow-md shadow-md bg-white p-3 rounded-md absolute top-8 right-0">
                                <nav>
                                    <ul className="flex flex-col gap-1 dark:text-zinc-200 w-[180px]">
                                        <li><Link className="flex items-center gap-2 w-full" to="/perfil/novo"><FaUserEdit />Criar Perfil</Link></li>
                                        <li><Link className="flex items-center gap-2 w-full" to="/Impulsionar"><IoIosRocket />Impulsionar Perfil</Link></li>
                                        <li><Link className="flex items-center gap-2 w-full" to="/#"><IoMegaphone  />Divulgar Marca</Link></li>
                                        <li><Link className="flex items-center gap-2 w-full" to={`/`}><IoMdSettings />Editar Conta</Link></li>
                                        <li><span className="flex items-center gap-2 w-full cursor-pointer" onClick={mode}>{atual === 'dark' ? <IoIosSunny /> : <FaMoon/>}Dark Mode: {atual === 'dark'? 'Light' : 'Dark'}</span></li>
                                        <li><Link className="flex items-center gap-2 w-full" to="/#"><FaPowerOff />Sair</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </div>
                ) : (
                    <MdMenu className="dark:text-white text-2xl cursor-pointer" onClick={openMenu} id="iconClose" />
                )}
            </>
            {createProfile && <Maps />}
        </div>
    )
}