import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
            <Route index element={<Main />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
