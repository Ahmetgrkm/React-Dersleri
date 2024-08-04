import { useState } from 'react'

import './App.css'

import Conteiner from './Conteiner';
import Product from './Product'

function App() {

  const productName = "buzdolabı";


  return (
    <div>
      {/* <Product productName="Ayakkabı" price={3200} />
      <hr />
      <Product productName="pantolon" price={950} />
      <hr />
      <Product productName={productName} price={15000} /> */}

      <Conteiner>
        <Product />
      </Conteiner>



    </div>
  )
}

export default App
