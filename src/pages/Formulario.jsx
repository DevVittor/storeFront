import '../styles/formulario.css'
function Formulario() {
    return (
        <div className="container_register">
            <div className="dados_pessoais">
                <div>
                    <h2>Criar Perfil</h2>
                </div>
                <div className="picture_description">
                    <div className="picture_profile">
                        <img src="https://images.pexels.com/photos/18885907/pexels-photo-18885907/free-photo-of-vista-traseira-praia-litoral-preto-e-branco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        <label for="avatar">
                            <span>Enviar Foto</span>
                            <input type="file" id="avatar"/>
                        </label>
                    </div>
                    <div className="sobre_description">
                        <div className="sobre_profile">
                            <h3>Sobre Mim</h3>
                            <span>0/150</span>
                        </div>
                        <div>
                            <textarea
                            name="sobre"
                            row="5" 
                            col="30"
                            >
                                Apenas fale mais sobre você
                            </textarea>
                        </div>
                    </div>
                </div>
                <input 
                type="text"
                name="nome"
                min-length="2"
                max-length="16"
                spellcheck="false"
                required
                placeholder="Nome"/>
                <input 
                type="text"
                name="sobrenome"
                min-length="2"
                max-length="16"
                placeholder="Sobrenome"/>
            </div>
            <div className=""></div>
        </div>
    )
}
export default Formulario;
