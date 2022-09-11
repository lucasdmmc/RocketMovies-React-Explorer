import { Container, Profile } from "./styles"
import { Input } from "../Input"
import { Link } from "react-router-dom"
export function Header() {
  return (
    <Container>
        <h2>RocketMovies</h2>

        <Input 
          type="text"
          placeholder="Pesquisar pelo titulo"
        />

        <Profile>
          <div>
            <strong>Lucas Carvalho</strong>
            <a href="#">
             <span>Sair</span>
            </a>
          </div>
          <div>
            <Link to="/profile/1">
              <img src="https://github.com/lucasdmmc.png" alt="" />
            </Link>
          </div>
        </Profile>
    </Container>
  )
}