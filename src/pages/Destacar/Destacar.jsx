import { RiFireFill } from "react-icons/ri";
import { IoSquareOutline } from "react-icons/io5";
import { MdAddHome } from "react-icons/md";
export default function Destacar() {

  return (
    <section>
      <div
        className="flex items-center justify-center"
      >
        <div className="w-[300px] shadow-md p-5 dark:bg-dark rounded-md flex flex-col gap-3 dark:border-zinc-700 border border-zinc-200">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <RiFireFill className="text-vermelhoIcon text-xl" />
                <h2 className="flex items-center gap-2 text-xl dark:text-white font-semibold">
                  Destaque
                </h2>
              </div>
              <div>
                <h2 className="font-medium dark:text-white font-md">R$ 4,97/á vista</h2>
              </div>
            </div>
            <div>
              <p className="dark:text-zinc-300 text-[15px] font-light leading-4 text-wrap">
                Faça o seu perfil ser visualizado por diversos usuários, pois você poderá
                ter o seu perfil na aba de destaque do início do site com selos para confirmar
                e passar credibilidade para o usuário e uma borda para captar mais atenção.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 py-2 dark:bg-dark p-2 rounded-sm dark:border-zinc-700 border border-zinc-200">
            <nav>
              <ul className="flex flex-col gap-1">
                <li className="flex items-center gap-2 dark:text-white text-md font-medium">
                  <RiFireFill className="text-vermelhoIcon"/>
                  Selo de Destaque
                </li>
                <li className="flex items-center gap-2 dark:text-white text-md font-medium">
                  <MdAddHome />
                  Destacado no Inicio
                </li>
                <li className="flex items-center gap-2 dark:text-white text-md font-medium">
                  <IoSquareOutline />
                  Borda Destacada
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full flex justify-center items-center pt-2">
            <button className="flex justify-center items-center gap-1 font-semibold py-1 text-lg w-full dark:bg-white bg-card text-white dark:text-black rounded-[3px]">
              <RiFireFill className="text-vermelhoIcon" />
              Destacar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
