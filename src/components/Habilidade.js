import "./Habilidade.css";

export default function Habilidade({habilidade}){
  return(
    <article className="habilidadeContainer">
      {habilidade.icone}
      <h4>{habilidade.nome}</h4>
    </article>
  )
}