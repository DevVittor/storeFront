import AgeRange from './AgeRange';
import Altura from './Altura';
import Cache from './Cache';
import CorOlhos from './CorOlhos';
import Corpo from './Corpo';
import Etnia from './Etnia';
import FormasPagamentos from './FormasPagamentos';
import Generos from './Generos';
import styles from './Maps.module.css';
import Peso from './Peso';
import SelectService from './SelectService';
import Tons from './Tons';
import UploadImages from './UploadImages';
import WindowSize from './WindowSize';
export default function Maps() {
    const alturaHeight = WindowSize();

    return (
        <div className={styles.container} style={{ minHeight: `${alturaHeight}px` }}>
            <div className={styles.content} id='create_profile'>
                <div>
                    <SelectService />
                </div>
                <div className={styles.inputs_one}>
                    <input type="text" name="" id="" placeholder='Nome' />
                    <input type="text" name="" id="" placeholder='Sobrenome' />
                    <input type="text" name="" id="" placeholder='Celular/Whatsapp' />
                </div>
                <div className={styles.idade_altura_peso}>
                    <div className={styles.age}>
                        <AgeRange />
                    </div>
                    <div className={styles.age}>
                        <Altura />
                    </div>
                    <div className={styles.age}>
                        <Peso />
                    </div>
                </div>
                <div className={styles.estado_sigla_cidade}>
                    <div className="">
                        <select name="" id="">
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                        </select>
                    </div>
                    <div className={styles.sigla}>
                        <span>RJ</span>
                    </div>
                    <div className="">
                        <select name="" id="">
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                        </select>
                    </div>
                    <div className="">
                        <input type="text" name="" id="" placeholder='Rua' />
                    </div>
                    <div className="">
                        <input type="text" name="" id="" placeholder='Bairro' />
                    </div>
                </div>
                <div>
                    <div>
                        <FormasPagamentos />
                    </div>
                    <div>
                        <Cache />
                    </div>
                </div>

                <div className={styles.cache_etnia_gen}>
                    <Etnia />
                    <CorOlhos />
                    <Generos />
                    <Corpo />
                    <Tons />
                </div>
                <div className={styles.sobre}>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Fale sobre você"></textarea>
                </div>
                <div>
                    <UploadImages />
                </div>
            </div>
        </div>
    );
}
