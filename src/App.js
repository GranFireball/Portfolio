import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Sobre from './components/Sobre';
import bgImg from './imgs/background.jpg';
import Projetos from './components/Projetos';
import { useScreenWidth } from './hooks/ScreenWidth';
import Perfil from './components/Perfil';
import Habilidades from './components/Habilidades';

function App() {
  const screenWidth = useScreenWidth();

  if (screenWidth > 1150) {
    return (
      <div className='App'>
        <div className='Main'>
          <img src={bgImg} alt="Imagem" className='bgImg' />
          <Header />
          <main>
            <Sobre />
            <Projetos />
          </main>
        </div>
        <Aside />
      </div>
    );
  }
  else {
    return (
      <div className='AppMobile'>
        <Perfil />
        <Header />
        <Sobre />
        <Habilidades />
        <Projetos />
      </div>
    )
  }

}

export default App;
