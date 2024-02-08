import { useEffect, useState } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
export const EtapaOne = ({numero,children,onNext,next,dataEtapa})=> {

    const [name,setName] = useState(dataEtapa.name || "");
    const [lastName,setLastName] = useState(dataEtapa.lastName || "");
    const [age,setAge]= useState(dataEtapa.age || 18);
    const [countNumber,setCountNumber] = useState(dataEtapa.countNumber || "");
    const [estados,setEstados] = useState([]);
    const [cidades,setCidades] = useState([]);
    const [selectedEstado, setSelectedEstado] = useState("");
    const [selectedCidade, setSelectedCidade] = useState(dataEtapa.selectedCidade || "");
    const [dataEstado,setDataEstado] = useState(dataEtapa.dataEstado || "");
    const [imgAvatar,setImgAvatar] = useState(dataEstado.imgAvatar || null);
    console.log(countNumber.length);

    console.log("Estado:",selectedEstado.nome,"Cidade",selectedCidade);
    console.log("Nome",name !== "", "Sobrenome",lastName !== "");

    useEffect(() => {
        if (name !== "" && lastName !== "" && age >= 18 && dataEstado != "" &&
        countNumber !== "" && countNumber.length >= 50 && selectedCidade != "" && imgAvatar !== null ) {
            next(false);
            onNext({name,lastName,age,dataEstado,selectedCidade,imgAvatar})
        } else {
            next(true);
        }
    }, [name,lastName,age,dataEstado,countNumber,selectedCidade,imgAvatar]);    

    useEffect(() => {
        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
            .then((res) => {
                const response = res.data;
                setEstados(response);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        if (selectedEstado) {
            axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedEstado.id}/distritos?orderBy=nome`)
                .then((res) => {
                    const response = res.data;
                    setCidades(response);
                })
                .catch(error => console.log(error));
        }
    }, [selectedEstado]);

    const handleEstadoChange = (e) => {
        const selectedEstado = estados.find(item => item.nome === e.target.value);
        setSelectedEstado(selectedEstado);
        setDataEstado(selectedEstado.nome);
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            setImgAvatar(URL.createObjectURL(file));
        }
    };
    function handleAge(e){
        setAge(e.target.value);
    }
    function handleFirstName(e){
        setName(e.target.value);
    }
    function handleLastName(e){
        setLastName(e.target.value);
    }
    function handleCidade(e){
        setSelectedCidade(e.target.value);
    }


    return (
        <div className="container_etapa_type">
            <h2><i className="ri-signpost-line"></i> 0{numero}|03</h2>
            <div className="box_avatar_acomp">
                <div className="avatar_img_acomp">
                    {imgAvatar ? <img src={imgAvatar} alt="Avatar" /> :  <img src="https://images.pexels.com/photos/247297/pexels-photo-247297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar" />}
                </div>
                <div className="avatar_input_acomp">
                    <input required type="file" accept="image/png, image/jpg, image/jpeg, image/webp" name="" id="avatar_profile_acomp" onChange={handleFileChange}/>
                    <label htmlFor="avatar_profile_acomp">
                        <span><i className="ri-upload-cloud-fill"></i>Enviar Foto</span>
                    </label>
                </div>
            </div>
            <div className="modal_name_lastname">
                <input type="text" name="" id="" placeholder="Nome" value={name} onChange={handleFirstName}/>
                <input type="text" name="" id="" placeholder="Sobrenome" value={lastName} onChange={handleLastName}/>
            </div>
            <div className="modal_about">
                <textarea name="" id="" cols="30" rows="10" maxLength={150} placeholder="Sobre Mim" value={countNumber} onChange={(e)=>setCountNumber(e.target.value)}></textarea>
                <span className={countNumber.length === 150 ? "limitCaracteres" : ""}>{countNumber === "" || countNumber.length === 0 ? 0 : countNumber.length}/150</span>
            </div>
            <div className="modal_genero_estado_acomp">
                <div className="modal_date_acomp">
                        <label htmlFor="rangeAge">Idade: {age}</label>
                        <input type="range" name="age" min={1} max={100} step="1" id="rangeAge" value={age} onChange={handleAge} />
                </div>
                <div className="modal_estado_cidade_acomp">
                    <div className="modal_estado_acomp">
                        <select name="" id="" onChange={handleEstadoChange} value={selectedEstado}>
                            <option value="" disabled  >Estado</option>
                            {estados.map((item, index) => (
                                <option key={index} title={item.nome} value={item.nome}>{item.nome}</option>
                            ))}
                        </select>
                        {selectedEstado && selectedEstado.sigla !== undefined ? <span>{selectedEstado.sigla}</span> : <span>Sigla</span>}
                    </div>
                    {selectedEstado  && 
                    <div className="modal_cidade_acomp">
                        <select name="" id="" onChange={handleCidade} value={selectedCidade}>
                            <option value="" disabled >Cidade</option>
                            {cidades.map((item,index)=>(
                                <option key={index} value={item.nome}>{item.nome}</option>
                            ))}
                        </select>
                    </div>
                }
                </div>
            </div>
            {children}
        </div>
    );
}
EtapaOne.propTypes = {
    numero: PropTypes.number,
    children: PropTypes.node,
    onNext: PropTypes.func,
    next: PropTypes.bool,
    dataEtapa: PropTypes.object.isRequired
}