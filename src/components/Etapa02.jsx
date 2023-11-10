export default function Etapa02() {
  return (
    <div className="container-02">
      <div className="box-02">
        <div>
          <h2>Endereço</h2>
        </div>
        <div>
          {/*Usar API de paises*/}
          <select name="" id="">
            <option value="" selected hidden>
              Brasil
            </option>
          </select>
          {/*Usar API de Estados*/}
          <select name="" id="">
            <option value="" selected disabled hidden>
              Estado
            </option>
            <option value="">Rio de Janeiro</option>
          </select>
          {/*Usar API de Cidades*/}
          <select name="" id="">
            <option value="" selected disabled hidden>
              Cidades
            </option>
            <option value="">Volta Redonda</option>
          </select>
          {/*Usar API de Rua*/}
          <input type="text" name="" id="" placeholder="Rua" />
          {/*Usar API de Bairro*/}
          <input type="text" name="" id="" placeholder="Bairro" />
        </div>
      </div>
    </div>
  );
}
