import "../../styles/EtapaProfile.css";
function EtapaProfile() {
    return (
            <div className="modal_etapa_profile">
                <div className="picture_etapa_profile">
                    <label htmlFor="file_input_picture_profile">
                        <input type="file" name="" id="file_input_picture_profile" />
                        <span>Enviar Foto</span>
                    </label>
                    <div className="rules_etapa_profile">
                        <h3>Regras:</h3>
                        <nav>
                            <ul>
                                <li>Formatos Aceitos: <b>.PNG</b>, <b>.JPG</b> e <b>.WEBP</b></li>
                                <li>Tamanho máximo: <b>2Mb</b></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
    )
}
export default EtapaProfile;