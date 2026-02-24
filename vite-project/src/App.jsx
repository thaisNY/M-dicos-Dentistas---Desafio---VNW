import "./globalStyle.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SejaVoluntario from "./pages/SejaVoluntario"
import Header from "./components/layout/header/Header"
import Footer from "./components/layout/footer/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voluntario" element={<SejaVoluntario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
