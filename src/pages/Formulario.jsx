import '../styles/formulario.css'
function Formulario() {
    document.title = "Sobre";
    return (
        <div className="container_register">
            <div className="box_info">
                <div className="box_dados">
                    <label htmlFor="input_avatar">
                        <input type="file" id="input_avatar" />
                        <h2>Enviar Foto</h2>
                    </label>
                </div>
                <div className="dados_pessoais">
                    <div className="name_lastname">
                        <h2>Dados do Perfil</h2>
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Sobrenome" />
                        <input type="text" placeholder="Data de Nascimento" />
                        <input type="text" placeholder="Gênero" />
                        <input type="text" placeholder="Peso" />
                        <input type="text" placeholder="Altura" />
                        <input type="text" placeholder="Cachê por hora" />
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className="box_body">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Formulario;
