import WindowSize from "../components/WindowSize/WindowSize"
import Destacar from "./Destacar/Destacar";
import Verificar from './Verificar/Verificar';
import { MdOutlineRocketLaunch } from "react-icons/md";
import {Helmet} from 'react-helmet';
export default function Impulsionar() {
    const altura = WindowSize();
    return (
        <div className="flex items-center justify-center gap-20 flex-col py-5 dark:bg-dark bg-white bg-gradient" style={{ minHeight: `${altura}px` }}>
            <Helmet>
                <title>AcompX - Impulsionar</title>
            </Helmet>
            <div className="flex items-center justify-center gap-2">
                <MdOutlineRocketLaunch className="dark:text-white text-4xl" />
                <h2 className="font-bold text-4xl dark:text-white">Impulsione o seu perfil</h2>
            </div>
            <div className="h-full w-full  flex items-center justify-center flex-wrap gap-10 ">
                <Destacar />
                <Verificar />
            </div>
        </div>
    )
}
