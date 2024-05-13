import "./Perfil.css";
import perfilImg from "../imgs/perfilImg.jpeg";

export default function Perfil() {
  return (
    <div className="perfilContainer">
      <img src={perfilImg} alt="Img" className="imgPerfil"/>
      <div className="perfilDadosContainer">
        <h3>Leonardo Kawamoto</h3>
        <div className="perfilTitulo">
          <div className="bolinhaStatus"></div>
          <p>Desenvolvedor Full Stack</p>
        </div>
      </div>
    </div>
  )
}