import { useEffect, useState } from "react";
import axios from 'axios';

export default function EtapaOne() {

    const [countNumber,setCountNumber] = useState("");
    const[estados,setEstados] = useState([]);
    const [cidades,setCidades] = useState([]);
    const [selectedEstado, setSelectedEstado] = useState("");
    const[imgAvatar,setImgAvatar] = useState(null);

    useEffect(() => {
        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
            .then((res) => {
                console.log(res.data);
                const response = res.data;
                setEstados(response);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        if (selectedEstado) {
            axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedEstado.id}/distritos?orderBy=nome`)
                .then((res) => {
                    console.log(res.data);
                    const response = res.data;
                    setCidades(response);
                })
                .catch(error => console.log(error));
        }
    }, [selectedEstado]);

    const handleEstadoChange = (e) => {
        const selectedEstado = estados.find(item => item.nome === e.target.value);
        setSelectedEstado(selectedEstado);
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            setImgAvatar(URL.createObjectURL(file));
        }
    };

    return (
        <div className="container_etapa_type">
            <h2><i className="ri-signpost-line"></i> 01|03</h2>
            <div className="box_avatar_acomp">
                <div className="avatar_img_acomp">
                    {imgAvatar ? <img src={imgAvatar} alt="Avatar" /> :  <img src="https://images.pexels.com/photos/247297/pexels-photo-247297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar" />}
                </div>
                <div className="avatar_input_acomp">
                    <input type="file" accept="image/png, image/jpg, image/jpeg, image/webp" name="" id="avatar_profile_acomp" onChange={handleFileChange}/>
                    <label htmlFor="avatar_profile_acomp">
                        <span><i className="ri-upload-cloud-fill"></i>Enviar Foto</span>
                    </label>
                </div>
            </div>
            <div className="modal_name_lastname">
                <input type="text" name="" id="" placeholder="Nome"/>
                <input type="text" name="" id="" placeholder="Sobrenome"/>
            </div>
            <div className="modal_about">
                <textarea name="" id="" cols="30" rows="10" maxLength={150} placeholder="Sobre Mim" value={countNumber} onChange={(e)=>setCountNumber(e.target.value)}></textarea>
                <span className={countNumber.length === 150 ? "limitCaracteres" : ""}>{countNumber === "" || countNumber.length === 0 ? 0 : countNumber.length}/150</span>
            </div>
            <div className="modal_genero_estado_acomp">
                <div className="modal_data_genero">
                    <div className="modal_date_acomp">
                        <select name="" id="">
                            <option value="" disabled selected hidden>Idade</option>
                            <option value="" >18</option>
                            <option value="" >19</option>
                            <option value="" >20</option>
                            <option value="" >21</option>
                        </select>
                    </div>
                    <div className="modal_genero_acomp">
                        <select name="" id="">
                            <option value="" disabled selected hidden>Gênero</option>
                            <option value="">Mulher</option>
                            <option value="">Homem</option>
                            <option value="">Trans</option>
                        </select>
                    </div>
                </div>
                <div className="modal_estado_cidade_acomp">
                    <div className="modal_estado_acomp">
                        <select name="" id="" onChange={handleEstadoChange} value={selectedEstado ? selectedEstado.nome : ""}>
                            <option value="" disabled selected hidden>Estado</option>
                            {estados.map((item, index) => (
                                <option key={index} title={item.nome} value={item.nome}>{item.nome}</option>
                            ))}
                        </select>
                        {selectedEstado && <span>{selectedEstado.sigla}</span>}
                    </div>
                    <div className="modal_cidade_acomp">
                        <select name="" id="">
                            <option value="" disabled selected hidden>Cidade</option>
                            {cidades.map((item,index)=>(
                                <option key={index} value={item.cidades}>{item.nome}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
