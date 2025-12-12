import { useState } from "react";
import FormContainer from "./components/FormContainer";
import InputText from "./components/InputText";
import InputNumber from "./components/InputNumber";
import SelectEstilo from "./components/SelectEstilo";
import RadioNota from "./components/RadioNota";
import TextAreaReview from "./components/TextAreaReview";
import ButtonSubmit from "./components/ButtonSubmit";

function App() {
  const [nome, setNome] = useState("");
  const [diretor, setDiretor] = useState("");
  const [ano, setAno] = useState("");
  const [estilo, setEstilo] = useState("");
  const [nota, setNota] = useState(null);
  const [review, setReview] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      nome,
      diretor,
      ano,
      estilo,
      nota,
      review,
    });
    alert("Filme cadastrado!");
  }

  return (
    <div className="app">
      <h1>Cadastro de Filmes</h1>

      <FormContainer onSubmit={handleSubmit}>
        <InputText label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <InputText label="Diretor" value={diretor} onChange={(e) => setDiretor(e.target.value)} />
        <InputNumber label="Ano" value={ano} onChange={(e) => setAno(e.target.value)} />

        <SelectEstilo value={estilo} onChange={(e) => setEstilo(e.target.value)} />

        <RadioNota value={nota} onChange={setNota} />

        <TextAreaReview value={review} onChange={(e) => setReview(e.target.value)} />

        <ButtonSubmit />
      </FormContainer>
    </div>
  );
}

export default App;
