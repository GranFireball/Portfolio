import "./Habilidades.css";
import Habilidade from "./Habilidade";
import { FaBootstrap, FaGitAlt, FaJava } from "react-icons/fa";
import { IoLogoAngular, IoLogoCss3, IoLogoFigma, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoPython, IoLogoReact  } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb, DiScrum } from "react-icons/di";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiJest, SiJunit5, SiMui, SiPostman, SiTestinglibrary } from "react-icons/si";
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function Habilidades(){
  const tamanhoIcone = 26;
  const habilidades = [
    {nome: "HTML", icone: <IoLogoHtml5 size={tamanhoIcone}/>},
    {nome: "CSS", icone: <IoLogoCss3 size={tamanhoIcone}/>},
    {nome: "Bootstrap", icone: <FaBootstrap size={tamanhoIcone}/>},
    {nome: "Tailwind CSS", icone: <RiTailwindCssFill size={tamanhoIcone}/>},
    {nome: "Material UI", icone: <SiMui size={tamanhoIcone}/>},
    {nome: "JavaScript", icone: <IoLogoJavascript size={tamanhoIcone}/>},
    {nome: "TypeScript", icone: <BiLogoTypescript size={tamanhoIcone}/>},
    {nome: "Java", icone: <FaJava size={tamanhoIcone}/>},
    {nome: "Python", icone: <IoLogoPython size={tamanhoIcone}/>},
    {nome: "Angular", icone: <IoLogoAngular size={tamanhoIcone}/>},
    {nome: "React", icone: <IoLogoReact size={tamanhoIcone}/>},
    {nome: "Testing Library", icone: <SiTestinglibrary size={tamanhoIcone}/>},
    {nome: "Next.js", icone: <RiNextjsFill size={tamanhoIcone}/>},
    {nome: "Node.js", icone: <IoLogoNodejs size={tamanhoIcone}/>},
    {nome: "Express.js", icone: <SiExpress size={tamanhoIcone}/>},
    {nome: "MongoDB", icone: <DiMongodb size={tamanhoIcone}/>},
    {nome: "PostgreSQL", icone: <BiLogoPostgresql size={tamanhoIcone}/>},
    {nome: "Jest", icone: <SiJest size={tamanhoIcone}/>},
    {nome: "JUnit", icone: <SiJunit5 size={tamanhoIcone}/>},
    {nome: "Figma", icone: <IoLogoFigma size={tamanhoIcone}/>},
    {nome: "Postman", icone: <SiPostman size={tamanhoIcone}/>},
    {nome: "Git", icone: <FaGitAlt size={tamanhoIcone}/>},
    {nome: "Scrum", icone: <DiScrum size={tamanhoIcone}/>},
  ];

  return(
    <section className="habilidadesContainer">
      <div className="habilidadesTitulo">
      <h3>Habilidades Técnicas</h3>
      <FaArrowAltCircleDown size={22} />
      </div>
        
        <div className="listaHabilidades">
        {habilidades.map((habilidade) => {
          return(
            <Habilidade habilidade={habilidade}/>
          )
        })}
        </div>
      </section>
  )
}