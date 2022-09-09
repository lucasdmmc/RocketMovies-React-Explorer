import { Container } from "./styles"
import { Header } from '../../components/Header'
import { FiArrowLeft, FiStar, FiClock } from "react-icons/fi"

export function MoviePreview() {
  return (
    <>
    <Header />
    <Container>
      <a href="#">
        <FiArrowLeft />
        Voltar
      </a>

      <div className="movieAndStars">
        <h2>Interestellar</h2>
        <FiStar size={20}/>
        <FiStar size={20}/>
        <FiStar size={20}/>
        <FiStar size={20}/>
        <FiStar size={20}/>
      </div>

      <div className="img-name-clock">
        <div className="img-name">
          <img src="https://github.com/lucasdmmc.png" alt="" />
          <span>Por Lucas Carvalho</span>
        </div>
        
        <div className="clock">
          <FiClock />
          <span>09/09/22 às 14:40</span>
        </div>
      </div>
    </Container>
    
    </>
  )
}