import WindowSize from "../../components/WindowSize/WindowSize"
import styles from '../Maps/Maps.module.css'
import { useState } from "react";
export const Maps = () => {
    const altura = WindowSize();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <main>
            <section>
                <div className={styles.container} style={{ height: `${altura}px` }}>
                    <form className={styles.box_form}>
                        <div className={styles.title_form}>
                            <h2>Criando um Perfil</h2>
                        </div>
                        <div className={styles.name_lastname}>
                            <input type="text" name="" id="" placeholder="Nome" />
                            <input type="text" name="" id="" placeholder="Sobrenome" />
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <div className={styles.gen}>
                                <input className="" type="radio" name="" id="gen_woman"
                                    value="Mulher" checked={selectedOption === "Mulher"} onChange={handleOptionChange} />
                                <label className="" htmlFor="gen_woman">Mulher</label>
                            </div>
                            <div className={styles.gen}>
                                <input className="" type="radio" name="" id="gen_homem"
                                    value="Homem" checked={selectedOption === "Homem"} onChange={handleOptionChange} />
                                <label className="" htmlFor="gen_homem">Homem</label>
                            </div>
                            <div className={styles.gen}>
                                <input className="" type="radio" name="" id="gen_trans"
                                    value="Trans" checked={selectedOption === "Trans"} onChange={handleOptionChange} />
                                <label className="" htmlFor="gen_trans">Trans</label>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 w-full">
                            <input className="w-auto" type="date" name="" id="" />
                        </div>
                        <div className={styles.cache_altura_peso}>
                            <input type="number" name="" id="" placeholder="Cache" />
                            <input type="number" name="" id="" placeholder="Altura" />
                            <input type="number" name="" id="" placeholder="Peso" />
                        </div>
                    </form>
                </div>
            </section >
        </main >
    )
}
