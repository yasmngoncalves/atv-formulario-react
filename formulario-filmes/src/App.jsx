import { useState, useEffect } from "react";
import FormContainer from "./components/FormContainer";
import InputText from "./components/InputText";
import InputNumber from "./components/InputNumber";
import SelectEstilo from "./components/SelectEstilo";
import RadioNota from "./components/RadioNota";
import TextAreaReview from "./components/TextAreaReview";
import ButtonSubmit from "./components/ButtonSubmit";
import Spinner from "./components/Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  const [nome, setNome] = useState("");
  const [diretor, setDiretor] = useState("");
  const [ano, setAno] = useState("");
  const [estilo, setEstilo] = useState("");
  const [nota, setNota] = useState(null);
  const [review, setReview] = useState("");

  // Simulação de carregamento da API (como a prof pediu)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // espera de 1.5s só pra mostrar o spinner
  }, []);

  if (loading) {
    return <Spinner />;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novoFilme = {
      nome,
      diretor,
      ano,
      estilo,
      nota,
      review,
    };

    console.log("Filme cadastrado:", novoFilme);
    alert("Filme cadastrado com sucesso!");
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
