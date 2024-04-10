import Carrusel from "../components/Home/Carrusel"
import Etiqueta from "../components/Home/Etiqueta"
import Marcas from "../components/Home/Marcas"
const Home = () => {
  return (
    <div>
      <div className="row">
        <Etiqueta />
      </div>
      <div className="container">
        <Carrusel />
        <Marcas />
      </div>
    </div>
  )
}

export default Home