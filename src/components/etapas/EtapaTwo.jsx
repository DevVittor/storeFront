import { useEffect, useState } from "react";
import "../../styles/EtapaTwo.css";
import PropTypes from 'prop-types';
export const EtapaTwo = ({numero,children, onNext}) => {

    const [payments, setPayments] = useState([]);
    const [numberZap,setNumberZap] = useState(null);
    const [priceHour,setPriceHour] = useState(null);
    const [etniaValue,setEtniaValue] = useState("");
    const [bodyValue,setBodyValue] = useState("");
    const [heightValue,setHeightValue] = useState(150);
    const [pesoValue,setPesoValue] = useState(50)
    const [next,setNext] = useState(false);

    useEffect(()=>{
        console.log(etniaValue);
        console.log("Peso:",pesoValue)
    },[etniaValue,pesoValue])

    useEffect(() => {
        if (payments.length !== 0 && numberZap !== null && priceHour !== null) {
            setNext(true);
            onNext({payments,numberZap,priceHour})
        } else {
            setNext(false);
        }
    }, [payments, numberZap, priceHour]);

    const handlePayments = (event) => {
        const checkboxValue = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setPayments((prevPayments) => [...prevPayments, checkboxValue]);
        } else {
            setPayments((prevPayments) => prevPayments.filter((payment) => payment !== checkboxValue));
        }
    };
    function handleZap(e){
        const numberZap = e.target.value;
        if (numberZap === "" || isNaN(numberZap)){
            setNumberZap(null);
        }else{
            const convertZap = parseFloat(numberZap);
            setNumberZap(convertZap);
        }
    }
    function handlePriceHour(e){
        const getPriceHour  = e.target.value;
        if (getPriceHour === "" || isNaN(getPriceHour)) {
            setPriceHour(null);
        } else {
            const convertPriceHour = parseFloat(getPriceHour);
            setPriceHour(convertPriceHour);
        }
    }
    function handleEtnia(e){
        setEtniaValue(e.target.value);
    }
    function handleBodyData(e){
        setBodyValue(e.target.value);
    }
    function handleHeight(e) {
        const heightAtual = e.target.value;
        const convertHeight = (heightAtual / 100).toFixed(2);
        setHeightValue(Number(convertHeight));
      }
      
    function handlePeso(e){
        const pesoAtual = e.target.value;
        const convertPeso = parseFloat(pesoAtual.toFixed(2));
        setPesoValue(convertPeso);
    }

    return (
        <div className="container_etapa_type">
            <h2><i className="ri-signpost-line"></i> 0{numero}|03</h2>
            <div className="modal_formas_pagamentos_acomp">
                <div className="box_pagamento_acomp">
                    <input type="checkbox" id="input_dinheiro_acomp" value="Dinheiro" onChange={handlePayments} />
                    <label htmlFor="input_dinheiro_acomp">Dinheiro</label>
                </div>
                <div className="box_pagamento_acomp">
                    <input type="checkbox" id="input_pix_acomp" value="Pix" onChange={handlePayments} />
                    <label htmlFor="input_pix_acomp">Pix</label>
                </div>
                <div className="box_pagamento_acomp">
                    <input type="checkbox" id="input_credito_acomp" value="Cartão de crédito" onChange={handlePayments} />
                    <label htmlFor="input_credito_acomp">Cartão de crédito</label>
                </div>
                <div className="box_pagamento_acomp">
                    <input type="checkbox" id="input_debito_acomp" value="Cartão de Débito" onChange={handlePayments} />
                    <label htmlFor="input_debito_acomp">Cartão de Débito</label>
                </div>
            </div>
            <div className="modal_zap_price_acomp">
                <input type="text" placeholder="Whatsapp" value={numberZap || ""} onChange={handleZap}/>
                <input type="text" placeholder="Valor por hora" value={priceHour || ""} onChange={handlePriceHour}/>
            </div>
            <div className="modal_acomp_gen_etnia_body">
                <div className="modal_genero_acomp">
                    <select defaultValue="Genero" name="" id="" required>
                        <option value="" disabled >Gênero</option>
                        <option value="">Mulher</option>
                        <option value="">Homem</option>
                        <option value="">Trans</option>
                    </select>
                </div>
                <div className="modal_etnia_acomp">
                        <select name="" onChange={handleEtnia} value={etniaValue} id="">
                            <option value="" disabled hidden>Etnia</option>
                            <option value="Branco">Branca(o)</option>
                            <option value="Morena">Morena(o)</option>
                            <option value="Parda">Parda(o)</option>
                            <option value="Negra">Negra(o)</option>
                            <option value="Asiática">Asiática(o)</option>
                            <option value="Indigêna">Indigêna</option> 
                        </select> 
                    </div>
                    <div className="modal_corpo_acomp">
                        <select name="" value={bodyValue} onChange={handleBodyData} id="">
                            <option value="" hidden disabled>Corpo</option>
                            <option value="Magro">Magro</option>
                            <option value="Normal">Normal</option>
                            <option value="Sarado">Sarado</option>
                            <option value="Gordo">Gordo</option>
                        </select>
                    </div>
            </div>
            <div className="modal_altura_peso_acomp">
                <div className="modal_altura_acomp">
                    <label htmlFor="range_heigth_acomp">Altura: {heightValue}M</label>
                    <input type="range" name="height" step={1} min={120} max={250} id="range_heigth_acomp" onChange={handleHeight}/>
                </div>
                <div className="modal_peso_acomp">
                    <label htmlFor="range_peso_acomp">Peso: {pesoValue}Kg</label>
                    <input type="range" name="peso" step={1} min={30} max={250} id="range_peso_acomp" onChange={handlePeso}/>
                </div>
            </div>
            {next && children}
        </div>
    )
}
EtapaTwo.propTypes = {
    numero: PropTypes.number,
    children: PropTypes.node,
    onNext: PropTypes.func,
}