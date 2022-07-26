import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 p-4 text-white mt-10">
        <div className="container mx-auto text-center font-bold">
          Projeto denvolvido por:
          <a className="hover:underline" href="#">
            {' '}
            Caio Pires
          </a>{' '}
          /
          <a className="hover:underline" href="#">
            {' '}
            Linkedin{' '}
          </a>
          /
          <a className="hover:underline" href="#">
            {' '}
            Github
          </a>
          <div className="flex justify-center justify-around mt-2">
            <img src="/logo_devpleno.png" alt="" />
            <img src="/logo_semana.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
