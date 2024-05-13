import "./CardProjeto.css";

export default function CardProjeto({projeto}){
  return(
    <article className="cardContainer">
      <div className="linkProjeto">
      <a href={projeto.link} target="_blank" rel="noreferrer" >
      <img src={projeto.capa} alt="Img" className="imgProjeto"/>
      </a>
      </div>

      <h4>{projeto.nome}</h4>
      {
        projeto.detalhes &&
        <h5>{projeto.detalhes}</h5>
      }
    </article>
  )
}