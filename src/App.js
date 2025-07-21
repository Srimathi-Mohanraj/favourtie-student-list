
import React from 'react'
import ArrContextProvider from './ArrContextProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Add'
import List from './List'


const App = () => {
  return (

    <div>
      <ArrContextProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<List/>} />
          <Route path='/Add' element={<Add/>} />
        </Routes>
        </BrowserRouter>
      </ArrContextProvider>
    </div>
  )
}

export default App