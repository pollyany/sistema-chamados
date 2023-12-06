import { FiUser } from "react-icons/fi";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { useState } from "react";
import { db } from '../../services/firebaseConnection'
import { addDoc, collection} from 'firebase/firestore'
import { toast } from "react-toastify";

export default function Customers() {
  const [nome, setNome] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [endereco, setEndereco] = useState('')

  async function handleRegister(e) {
    e.preventDefault()

    if (nome !== '' && cnpj !== '' && endereco !== '') {
      await addDoc(collection(db, "customers"), {
        nomeFantasia: nome,
        cnpj: cnpj,
        endereco: endereco
      })
      .then(() => {
        setNome('')
        setCnpj('')
        setEndereco('')
        toast.success("Cadastrado com sucesso!")
      })
      .catch((error) => {
        console.log(error)
        setNome('')
        setCnpj('')
        setEndereco('')
        toast.error("Erro ao cadastrar!")
      })
    } else {
      toast.error("Preencha todos os campos!")
    }
  }
  return (
    <>
      <Header/>
      <div className="content">
        <Title name="Clientes"><FiUser size={25}/></Title>
        <div className="container">
          <form onSubmit={handleRegister} className="form-profile">
            <label htmlFor="nome">Nome Fantasia</label>
            <input type="text" name="nome" id="nomeFantasia" placeholder="Nome da empresa"
            value={nome}
            onChange={(e) => setNome(e.target.value)} />

            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" name="cnpj" id="cnpj" placeholder="Digite o CNPJ"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)} />

            <label htmlFor="endereco">Endereço</label>
            <input type="text" name="endereco" id="endereco" placeholder="Endereço da empresa"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)} />

            <button type="submit">Salvar</button>
          </form>
        </div>

      </div>
    </>
  )
};
