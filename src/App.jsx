import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Home from  './Page/Home'
import Product from  './Page/Product'
import AddItem from  './Page/AddItem'
import Header from './components/Header'
import Footer  from './components/Footer'
import History from './Page/History'
import Cards from './Page/Cards'


function App() {
  

  return (
    <>
    <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    {/* <Route path='/cart' element={<Cart/>}/> */}
    <Route path='/Product' element={<Product/>}/>
    <Route path='/additem' element={<AddItem/>}/>
    <Route path='/history' element={<History/>}/>
    <Route path='/cards' element={<Cards/>}/>

   </Routes>
   <Footer/>
    </>
  )
}

export default App
