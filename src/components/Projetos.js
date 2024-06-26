import "./Projetos.css";
import CardProjeto from "./CardProjeto"
import capaProjetoReceitas from "../imgs/projetoReceitas.PNG";
import capaProjetoMapaAstral from "../imgs/projetoMapaAstral.PNG";
import capaProjetoNumberGame from "../imgs/projetoNumberGame.PNG";
import capaProjetoLobbyGamer from "../imgs/projetoLobbyGamer.png";

export default function Projetos(){
  const projetos = [
    {nome: "Projeto de Receitas", capa: capaProjetoReceitas, link: "https://projeto-receitas-unidas.vercel.app/", detalhes: "(Encontre novas receitas)"},
    {nome: "Projeto de Chat", capa: capaProjetoLobbyGamer, link: "https://lobby-gamer.vercel.app/", detalhes: "(Chat em tempo real)"},
    {nome: "Projeto de Jogo", capa: capaProjetoNumberGame, link: "https://number-game-project.vercel.app/", detalhes: "(Adivinhe o número)"},
  ]
  return(
    <section className="projetosContainer">
      <h3>Projetos</h3>
      <div className="listaProjetos">
      {projetos.map((projeto) => {
        return(
          <CardProjeto projeto={projeto}/>
        )
      })}
      </div>

    </section>
  )
}