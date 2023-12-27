import {useState,useEffect} from 'react';
import '../styles/formulario.css';
function FormEtapas(){
  const [pagamento,setPagamento] = useState([]);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    avatar:"",
    nome: "",
    sobrenome: "",
    description:"",
    idade:"",
    genero:"",
    operado:"",
    altura:"",
    peso:"",
    etnia:"",
    corOlhos:"",
    oculos:"",
    aparelho:"",
    tatuagem:"",
    listPamento:[],
    // Adicione mais campos conforme necessário para cada etapa
  });
console.log(step)
  const nextStep = () => {
    if(step === 1 && (formData.avatar)){
      return;
    }else if (step === 2 && (!formData.nome || !formData.sobrenome || !formData.description)) {
      return;
    }else if(step === 3 && 
      (!formData.genero || !formData.etnia || !formData.idade || !formData.altura || !formData.peso )){
      return;
    }else if(step === 4 && (!formData.corOlhos)){
      return; 
    }else{
      setStep(step + 1); 
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handlePaymentChange = (e) => {
    const paymentMethod = e.target.name; // Obtém o nome do método de pagamento (Pix, por exemplo)
    const isChecked = e.target.checked; // Verifica se o checkbox foi marcado

    if (isChecked) {
      // Se estiver marcado, adiciona o método de pagamento ao array
      setPagamento([...pagamento, paymentMethod]);
    } else {
      // Se não estiver marcado, remove o método de pagamento do array
      const updatedPayment = pagamento.filter((method) => method !== paymentMethod);
      setPagamento(updatedPayment);
    }
  };

  console.log(pagamento);
  useEffect(() => {
    setFormData(prevState => ({
      ...prevState,
      listPagamento: pagamento, // Atualiza listPagamento sempre que pagamento mudar
    }));
  }, [pagamento]);

  console.log("Resultado",formData.listPagamento);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para o servidor
    // ou realizar qualquer outra lógica de manipulação dos dados
    console.log("Dados do formulário:", formData);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return(
          <div className="form_avatar">
            <h2>Foto do Perfil</h2>
            <label htmlFor="input_avatar">
              <input
                type="file"
                id="input_avatar"
                name="avatar"
                required
                accept="image/.jpg,.png,webp,.jpeg"
                value={formData.avatar}
                onChange={handleChange}
              />
              <span>Enviar Foto</span>
            </label>
              <p><b>Aviso:</b> Apenas fotos verticais, com o tamanho de até 2mb e dos formatos .jpeg, .jpg, .png, .webp</p>
            <button onClick={nextStep}>Próximo</button>
            <h4>Etapa {step} de 4</h4>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Sobre</h2>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Primeiro nome"
            />
            <input
              type="text"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleChange}
              placeholder="Último nome"
            />
            <textarea 
              value={formData.description}
              onChange={handleChange} 
              name="description" 
              placeholder="Fale um pouco sobre você"
              >
            </textarea> 
            <button onClick={prevStep}>Anterior</button>
            <button onClick={nextStep}>Próximo</button>
          </div>
        );
      case 3:
        return (
          <div className="form_corpo">
            <h2>Corpo</h2>
            <select value={formData.genero} onChange={handleChange} name="genero">
              <option value="">Gênero</option>
              <option value="Mulher">Mulher</option>
              <option value="Homem">Homem</option>
              <option value="Trans">Trans</option>
            </select>
            {formData.genero === "Trans" && ( 
            <select required value={formData.operado} onChange={handleChange} name="operado">
              <option value="">Você operou?</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            )} 
            <select value={formData.etnia} onChange={handleChange} name="etnia">
              <option value="">Etnia</option>
              <option value="Branca(o)">Branca(o)</option>
              <option value="Morena(o)">Morena(o)</option>
              <option value="Negra(o)">Negra(o)</option>
              <option value="Asiatica(o)">Asiatica(o)</option>
              <option value="Indigena">Indigena</option>
            </select>
            <select value={formData.idade || ""} onChange={handleChange} name="idade">
              <option value="">Idade</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
            </select>
            <input
              type="number"
              name="altura"
              value={formData.altura}
              onChange={handleChange}
              placeholder="Altura"
            />
            <input
            type="number"
            name="peso"
            value={formData.peso}
            onChange={handleChange}
            placeholder="Peso"
            />
            <button onClick={prevStep}>Anterior</button>
            <button onClick={nextStep}>Próximo</button>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Formas de Pagamento</h2>
            <label htmlFor="pix">
              <input
                type="checkbox"
                required
                id="pix"
                name="Pix"
                checked={pagamento.includes("Pix")} 
                onChange={handlePaymentChange}
              />
              <span>Pix</span>
            </label>

            <button onClick={prevStep}>Anterior</button>
            <button onClick={nextStep}>Próximo</button>
          </div>
        );
        // Adicione mais casos para mais etapas
      default:
        return (
          <div>
            <h2>Resumo</h2>
            <p>Primeiro nome: {formData.nome}</p>
            <p>Último nome: {formData.sobrenome}</p>
            <p>Idade: {formData.idade}</p>
            <p>Email: {formData.email}</p>
            <button onClick={prevStep}>Anterior</button>
            <button onClick={handleSubmit}>Enviar</button>
          </div>
        );
    }
  };
  return(
    <>
      <form onSubmit={handleSubmit}>
        {renderForm()}
      </form>
    </>
  )
}
export default FormEtapas;
