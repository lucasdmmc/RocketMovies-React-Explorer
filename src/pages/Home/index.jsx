import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"
import { FiPlus, FiStar } from "react-icons/fi"

export function Home() {
  return(
   <>
    <Header />
    <Container>
      <header>
        <h2>Meus Filmes</h2>

        <div className="button">
          <Button title="Adicionar Filme">
            {FiPlus}
          </Button>
        </div>
      </header>
      <main>
        <h2>Interestellar</h2>

        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />

        <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está....
        </p>

        <Tag title="Ficção Cientifica"/>
        <Tag title="Drama"/>
        <Tag title="Família" />
        
      </main>
    </Container>
   </> 
  )
}