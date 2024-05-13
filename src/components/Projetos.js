import "./Projetos.css";
import CardProjeto from "./CardProjeto"
import capaProjetoAtendimento from "../imgs/projetoAtendimento.PNG";
import capaProjetoReceitas from "../imgs/projetoReceitas.PNG";
import capaProjetoMapaAstral from "../imgs/projetoMapaAstral.PNG";

export default function Projetos(){
  const projetos = [
    {nome: "Projeto de Receitas", capa: capaProjetoReceitas, link: "https://projeto-receitas-unidas.vercel.app/"},
    {nome: "Projeto de Mapa Astral", capa: capaProjetoMapaAstral, link: "https://projeto-mapa-astral.vercel.app/"},
    {nome: "Projeto de Atendimento", capa: capaProjetoAtendimento, link: "https://projeto-atendimento.vercel.app/", detalhes: "(Senha Admin: 123)"},
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