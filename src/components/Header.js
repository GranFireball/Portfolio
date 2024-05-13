import "./Header.css";
import { FaFilePdf } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ButtonCurriculo from "./ButtonCurriculo";

export default function Header() {
  return (
    <header>
      <div className="curriculoPDF">
        <FaFilePdf size={34} color="red" />
        <ButtonCurriculo />
      </div>
      <div className="redesSociaisContainer">
        <a href="https://github.com/GranFireball" target="_blank" rel="noreferrer" className="link">
          <FaGithub size={26} title="Github" />
        </a>
        <a href="https://www.linkedin.com/in/leonardo-hideki-kawamoto-930659239" target="_blank" rel="noreferrer" className="link">
          <FaLinkedin size={26} title="Linkedin" />
        </a>
      </div>
    </header>
  )
}