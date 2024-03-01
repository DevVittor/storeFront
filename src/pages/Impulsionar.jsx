import WindowSize from "../components/WindowSize/WindowSize"
import Destacar from "./Destacar/Destacar";
import Verificar from './Verificar/Verificar';
import { MdOutlineRocketLaunch } from "react-icons/md";
export default function Impulsionar() {
    const altura = WindowSize();
    return (
        <div className="flex items-center justify-center flex-col py-5 bg-gradient" style={{ minHeight: `${altura}px` }}>
            <div className="flex items-center justify-center gap-2">
                <MdOutlineRocketLaunch className="text-white text-3xl" />
                <h2 className="font-bold text-3xl text-white">Impulsione o seu perfil</h2>
            </div>
            <div className="h-full w-full  flex items-center justify-center flex-wrap gap-10 ">
                <Destacar />
                <Verificar />
            </div>
        </div>
    )
}
