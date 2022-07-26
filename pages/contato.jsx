import React from 'react'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <>
      <PageTitle title="Contato" />
      <h1 className="bg-red-400">Contato</h1>
      <ul>
        <li>Telefone: 19 999999</li>
        <li>Endereço: Rua Jose Padilha, n100</li>
        <li>Bairro: Centro</li>
        <li>Cidade: São Paulo</li>
      </ul>
    </>
  )
}

export default Contato
