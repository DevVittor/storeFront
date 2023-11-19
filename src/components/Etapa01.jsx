export default function Etapa01() {
  return (
    <div className="container-etapa01">
      <div className="">
        <div className="box-escolha">
          <label htmlFor="">
            <span>Mulher</span>
            <input type="checkbox" name="" id="" />
          </label>
          <img
            src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>Sobre você</div>
        <div>
          <input type="text" name="" id="" placeholder="Nome" />
          <input type="text" name="" id="" placeholder="Sobrenome" />
          <input type="date" name="" id="" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="A sua mensagem"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
