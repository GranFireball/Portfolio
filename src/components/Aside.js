import "./Aside.css";
import Habilidades from "./Habilidades";
import Perfil from "./Perfil";

export default function Aside(){
  return(
    <aside>
      <Perfil/>
      <Habilidades/>
    </aside>
  )
}