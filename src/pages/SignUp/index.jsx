import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiMail, FiLock, FiArrowLeft} from "react-icons/fi"
import { AiOutlineUser } from "react-icons/ai"
import { Link } from "react-router-dom"
export function SignUp() {
  return(
    <Container>
      <Background />
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>


        <h2>Crie sua conta</h2>
        <Input 
          type="text"
          placeholder="Nome"
          icon={AiOutlineUser}  
        />

        <Input 
          type="text"
          placeholder="E-mail"
          icon={FiMail}  
        />

        <Input 
          type="password"
          placeholder="Senha"
          icon={FiLock}  
        />

        <Button title="Entrar" />

        <Link to="/">
          <FiArrowLeft />
          Volte para o login
        
        </Link>
        
      </Form>
    </Container>
  )
}