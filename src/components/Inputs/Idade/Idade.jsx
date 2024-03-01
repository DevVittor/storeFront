import styles from '../Idade/Idade.module.css'
export const Idade = () => {
    const dias = [];
    for (let i = 1; i <= 31; i++) {
        dias.push(<option key={i} value={i}>{i}</option>)
    }

    const meses = [];
    for (let i = 1; i <= 12; i++) {
        meses.push(<option key={i} value={i}>{i}</option>)
    }

    const anos = [];
    const anoAtual = new Date();
    const ano = anoAtual.getFullYear(); // Aqui você chama a função getFullYear()
    console.log(ano);
    for (let i = 1954; i <= ano; i++) {
        anos.push(<option key={i} value={i}>{i}</option>)
    }

    return (
        <div className={styles.datas}>
            <div className="">
                <label htmlFor="">Data de nascimento</label>
            </div>
            <div className={styles.selects}>
                <div className={styles.data}>
                    <select name="" id="">
                        {dias}
                    </select>
                </div>
                <div className={styles.data}>
                    <select name="" id="">
                        {meses}
                    </select>
                </div>
                <div className={styles.data}>
                    <select name="" id="">
                        {anos}
                    </select>
                </div>
            </div>
        </div>
    )
}
