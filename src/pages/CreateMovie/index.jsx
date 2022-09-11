import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi"
import { Link } from "react-router-dom"

export function CreateMovie() {
  return(
    <>
    <Header />
    <Container>
      <Link to="/">
        <FiArrowLeft />
        Voltar
      </Link>

      <h2>Novo Filme</h2>

      <form>

        <div className="inputs">
        <Input 
          type="text" 
          placeholder="Título" 
          />

        <Input 
          type="text" 
          placeholder="Sua nota (0 a 5)" 
          />
        </div>

        <textarea placeholder="Observações" />
      </form>

      <div className="marcadores">
        <p>Marcadores</p>

        <div className="tags">
          <span>
            ReactJS
            <button>
             <FiX size={20}/>
            </button>
          </span>
          <span>
            Novo Marcador
            <button>
              <FiPlus size={20}/>
            </button>
          </span>
        </div>
      </div>

      <footer>
        <h2>Excluir Filme</h2>
        <Button title="Salvar Alterações" />
      </footer>
    </Container>
    </>
  )
}