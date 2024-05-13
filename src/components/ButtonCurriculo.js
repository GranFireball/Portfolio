import "./ButtonCurriculo.css";
import Curriculo from "../files/CurriculoLeonardoKawamoto.pdf";

export default function ButtonCurriculo() {
  return (
    <div className="btnContainer">
      <a href={Curriculo} download="CurriculoLeonardoKawamoto" className="linkCurriculo">
        <span>CURRÍCULO</span>
      </a>
      <div className="trianguloContainer">
        <div className="triangulo2"></div>
        <div className="triangulo"></div>
      </div>
    </div>
  )
}