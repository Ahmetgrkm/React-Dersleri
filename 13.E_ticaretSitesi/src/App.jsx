import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'

import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import { useSelector } from 'react-redux'


function App() {

  const { products } = useSelector((store) => store.basket);



  return (
    <div>
      <PageContainer>

        <Header />
        <RouterConfig />
        <Loading />

      </PageContainer>
    </div>
  )
}

export default App
