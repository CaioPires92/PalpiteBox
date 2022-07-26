import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 5
  })

  const notas = [0, 1, 2, 3, 4, 5]
  const [succes, setSucces] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSucces(true)
      setRetorno(data)
    } catch (err) {}
  }

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  return (
    <div className="flex items-center flex-col  my-8">
      <PageTitle title="Pesquisa" />
      <h1 className="font-bold text-2xl">Criticas e Sugestões</h1>
      <p className="font-bold my-8">
        Restautante X sempre buscar por atender melhor os seus clientes Por isso
        estamos sempres abertos a ouvir a sua opinião
      </p>

      {!succes && (
        <div className="flex items-center justify-center flex-col ">
          <div>
            <label className="mt-5 flex font-bold">Seu nome</label>
            <input
              className="p-1 bg-gray-200 w-80 font-normal"
              type="text"
              placeholder="Nome"
              required
              name="Nome"
              value={form.Nome}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="mt-5 flex flex-col font-bold">Seu Email</label>
            <input
              className="p-1 bg-gray-200 w-80 font-normal"
              type="email"
              required
              name="Email"
              value={form.Email}
              onChange={onChange}
              placeholder="Email"
            />
          </div>

          <div>
            <label className="mt-5 flex flex-col font-bold">Seu Whatsapp</label>
            <input
              className="p-1 bg-gray-200 w-80 font-normal"
              type="tel"
              name="Whatsapp"
              value={form.Whatsapp}
              onChange={onChange}
              placeholder="Whatsapp"
            />
          </div>

          <label className="mt-8 flex flex-col font-bold">Nota</label>
          <div className="flex gap-3  text-center font-bold ">
            {notas.map(nota => {
              return (
                <label>
                  {nota} <br />
                  <input
                    type="radio"
                    name="Nota"
                    value={nota}
                    onChange={onChange}
                  />
                </label>
              )
            })}
          </div>

          <button
            onClick={save}
            className="bg-teal-600 px-20 py-4 rounded-lg text-white font-bold shadow-lg hover:shadow-2xl my-8"
          >
            Salvar
          </button>
        </div>
      )}
      {succes && (
        <div className="flex items-center justify-center flex-col font-bold">
          <p className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-6">
            Obrigado por contribuir com sua sugestão ou critica.
          </p>
          {retorno.showCoupon && (
            <div className="text-center border p-4 mb-4">
              Seu cupom: <br />
              <span className="font-bold text-4xl">{retorno.Cupom}</span>
            </div>
          )}
          {retorno.showCoupon && (
            <div className="text-center border p-4">
              <span className="font-bold block mb-2">{retorno.Promo}</span>
              <br />
              <span className="italic font-normal">
                Tire um print ou foto desta tela e apresente ao garçon.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Pesquisa
