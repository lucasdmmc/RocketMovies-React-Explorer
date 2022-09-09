import { Container, Profile } from "./styles"
import { Input } from "../Input"
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
             <span>sair</span>

            </a>
          </div>
          <div>
            <img src="https://github.com/lucasdmmc.png" alt="" />
          </div>
        </Profile>
    </Container>
  )
}