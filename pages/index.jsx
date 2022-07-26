import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <div className="flex items-center justify-center flex-col">
      <PageTitle title="Seja bem vindo" />
      <p className="mt-6 text-center mt-10 font-bold">
        Restautante X sempre buscar por atender melhor os seus clientes <br />
        Por isso estamos sempres abertos a ouvir a sua opnião
      </p>
      <div className="flex items-center justify-center mt-10">
        <Link href="/pesquisa">
          <a className="bg-teal-600 p-6 rounded-lg text-white font-bold shadow-lg hover:shadow-2xl ">
            Dar opinião ou sugestão
          </a>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon && (
        <p className="mt-10 mt-6 text-center font-bold">{data.message}</p>
      )}
    </div>
  )
}

export default Index
