import { useState } from 'react'
import BomDia from './Components/Bomdia'
import Botao from './Components/Botao'
import Conteudo from './Components/Conteudo'
import Elemento from './Components/Elemento'
import Estilizacao from './Components/Estilizacao'
import Imagem from './Components/Imagem'
import Mensagem from './Components/Mensagem'
import Ola from './Components/Ola'
import Site from './Components/Site'
import Tarefa from './Components/Tarefa'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ola/>
      <Mensagem/>
      <Tarefa/>
      <Imagem/>
      <Botao/>
      <Site/>
      <Conteudo/>
      <BomDia/>
      <Estilizacao/>
      <Elemento/>
     
      
      
      
      
    </>
  )
}

export default App
