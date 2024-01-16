export default function EtapaOne() {

    return (
        <div className="container_etapa_type">
            <h2><i className="ri-signpost-line"></i> 01|03</h2>
            <div className="modal_name_lastname">
                <input type="text" name="" id="" placeholder="Nome"/>
                <input type="text" name="" id="" placeholder="Sobrenome"/>
            </div>
            <div className="modal_about">
                <textarea name="" id="" cols="30" rows="10" placeholder="Sobre Mim"></textarea>
                <span>1/150</span>
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
                        <select name="" id="">
                            <option value="" disabled selected hidden>Estado</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                        </select>
                    </div>
                    <div className="modal_cidade_acomp">
                        <select name="" id="">
                            <option value="" disabled selected hidden>Cidade</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio de Janeiro</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
