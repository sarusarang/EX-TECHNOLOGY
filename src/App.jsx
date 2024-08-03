import { Route, Routes } from "react-router-dom"
import Landing from "./Pages/Landing"
import Footer from "./Pages/Footer"
import Header from "./Components/Header"
import Web from './Components/Web'


function App() {


  return (


    <>


      <Header />

      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/web" element={<Web />} />

      </Routes>

      <Footer />


    </>


  )
}

export default App
