export default function Painel({ children }) {
    return (
        <div className="flex items-center">
            <div className="flex flex-col p-5 gap-10 w-[400px] bg-red-500 ">
                <h2 className="text-white font-bold text-3xl">Menu Principal</h2>
                <nav>
                    <ul className="flex flex-col gap-2 text-white ">
                        <li className="cursor-pointer">Painel</li>
                        <li className="cursor-pointer">Destacar</li>
                        <li className="cursor-pointer">Verificar</li>
                    </ul>
                </nav>
            </div>
            <div className="bg-white h-full w-full p-20">
                {children}
            </div>
        </div>
    )
}
