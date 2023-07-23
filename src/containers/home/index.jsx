import { NavBar } from "../../components/navBar";
import { useNavigate } from 'react-router-dom';
import {Animate} from 'react-simple-animate';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "../../utils.js/particles";
import './styles.scss';

export function Home() {

  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate('/Contact')
  };

  const handleInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <div>
        <Particles id="particles" options={particles} init={handleInit} />
        <NavBar />
      </div>
      <section id="home" className="home">
        <div className="home_text-wrapper">
          <h1>
            Hello, I'm Anderson
            <br />
            Front end developer
          </h1>
        </div>
        <Animate
          play
          duration={1.5}
          deplay={1}
          start={{
            transform : 'translateY(550px)'
          }}
          end={{
            transform : 'translatex(0px)'
          }}
        >
          <div className="home_contact-me">
            <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          </div>
        </Animate>
      </section>
    </>
  )
}
