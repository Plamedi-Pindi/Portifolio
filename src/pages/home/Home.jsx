// Components
import Navbar from "../../layouts/components/Navbar";
import Header from "../../layouts/components/Header/Header";
import Subtitle from "../../components/Subtitle/Subtitle";
import SkillCard from "../../components/SkillCard/SkillCard";
import ProjectCard from "../../components/ProjectCards/ProjectCard";
import MediaCard from "../../components/MediaCard/MediaCard";

// Assets
import html from "../../assets/img/Skills/html.png";
import css from "../../assets/img/Skills/css.png";
import js from "../../assets/img/Skills/js.png";
import react from "../../assets/img/Skills/react2.png";
import node from "../../assets/img/Skills/node.png";
import redux from "../../assets/img/Skills/redux.png";
import tailwindcss from "../../assets/img/Skills/tailwindcss.png";
import sass from "../../assets/img/Skills/sass2.png";
import sequelize from "../../assets/img/Skills/sequelize2.png";
import figma from "../../assets/img/Skills/figma.png";
import bootstrap from "../../assets/img/Skills/bootstrap.png";
import ts from "../../assets/img/Skills/ts.png";
import git from "../../assets/img/Skills/git.png";
import sql from "../../assets/img/Skills/sql.png";

//Logo
import Logo from "../../components/Logo/Logo";

// Assets for svg
import github from "../../assets/svg/github.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import instagram from "../../assets/svg/instagram.svg";
import phone from "../../assets/svg/phone.svg";

// Assets for projects
import spotify from "../../assets/img/projects/spotify.jpg";
import standout from "../../assets/img/projects/standout.jpg";

// Icons
import { BsArrowRight } from "react-icons/bs";

// Components

// Ring
import a6 from "../../assets/sound/note/a6-102820.mp3";
import c6 from "../../assets/sound/note/c6-102822.mp3";
import e6 from "../../assets/sound/note/e6-82016.mp3";

export default function Home() {
  return (
    <>
      <Navbar background={`bg-white md:bg-default`} />
      <Header />

      {/* ABOUT SECTION */}
      <section className="mt-10 mb-10  md:mt-40  w-container mx-auto md:flex items-center md:h-28 ">
        <div className="md:bg-green-400 md:flex md:justify-center md:items-center md:w-32 md:h-full cursor-pointer mb-4">
          <h2 className="font-bold text-center text-xl md:text-3xl  md:mb-0">
            Sobre mim.
          </h2>
        </div>

        <div className=" md:w-2/3 md:ml-6">
          <p className="text-center  md:text-center">
            Engenheiro Frontend dinâmico e orientado a resultados, com ampla
            experiência na criação de aplicações web responsivas e fáceis de
            usar, utilizando React.js, Tailwindcss e Typescript . Hábil em
            traduzir conceitos de design em código funcional, otimizar o
            desempenho e garantir compatibilidade entre navegadores. Apaixonado
            por entregar código de alta qualidade e melhorar continuamente a
            experiência do usuário.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className=" w-container mx-auto mb-20 ">
        <Subtitle title="Minhas Habildades e Ferramentas " margin={`mb-10`} />

        <div className="flex flex-wrap w-full justify-center">
          <SkillCard img={html} width={`w-16`} name={`HTML`} sound={a6} />
          <SkillCard img={css} width={`w-20`} name={`CSS`} sound={c6} />
          <SkillCard img={js} width={`w-16`} name={`Javascript`} sound={e6} />
          <SkillCard img={react} width={`w-12`} name={`React js`} sound={a6} />
          <SkillCard img={redux} width={`w-16`} name={`Redux`} sound={c6} />
          <SkillCard img={node} width={`w-14`} name={`Node js`} sound={e6} />
          <SkillCard img={ts} width={`w-14`} name={`Typescript`} sound={a6} />
          <SkillCard
            img={tailwindcss}
            width={`w-16`}
            name={`Tailwindcss`}
            sound={c6}
          />
          <SkillCard
            img={bootstrap}
            width={`w-16`}
            name={`Bootstrap`}
            sound={e6}
          />
          <SkillCard img={sass} width={`w-14`} name={`SASS`} sound={a6} />
          <SkillCard img={figma} width={`w-16`} name={`Figma`} sound={c6} />
          <SkillCard
            img={sequelize}
            width={`w-12`}
            name={`Sequelize`}
            sound={e6}
          />
          <SkillCard img={git} width={`w-16`} name={`Git`} sound={a6} />
          <SkillCard img={sql} width={`w-14`} name={`MySQL`} sound={c6} />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-10 w-container mx-auto">
        <Subtitle title="Meus Projetos" margin={`mb-10`} />

        <div className="flex justify-between   mb-6">
          <div className="flex justify-center items-center bg-green-400 w-32 h-10  ">
            <span className="yeseva-one-regular ">Destaques</span>
          </div>

          <div className="flex items-center text-green-600 cursor-pointer hover:text-orange-300">
            <span className="text-sm yeseva-one-regular ">Ver mais</span>
            <BsArrowRight className="text-xl ml-3" />
          </div>
        </div>

        <div className="flex flex-col items-center  justify-between md:flex-row flex-wrap  ">
          <ProjectCard
            img={spotify}
            margin={`mb-5 md:mb-10`}
            title={`Spotify Clone`}
          />
          <ProjectCard
            img={standout}
            margin={`mb-5 md:mb-10`}
            title={`Dashboard`}
          />
          <ProjectCard
            img={spotify}
            margin={`mb-5 md:mb-10`}
            title={`Spotify Clone`}
          />
          <ProjectCard
            img={standout}
            margin={`mb-5 md:mb-10`}
            title={`Dashboard`}
          />
          <ProjectCard
            img={spotify}
            margin={`mb-5 md:mb-10`}
            title={`Spotify Clone`}
          />
          <ProjectCard
            img={standout}
            margin={`mb-5 md:mb-10`}
            title={`Dashboard`}
          />
        </div>
      </section>

      {/* Contacts */}
      <section className="mb-10">
        <Subtitle title="Medias " margin={`mb-10`} />

        <div className="md:flex md:w-container mx-auto md:items-center">
          {/* Media social */}
          <div className="w-container md:basis-1/3 mx-auto flex flex-wrap justify-around mb-6 md:mb-0">
            <MediaCard
              icon={linkedin}
              name={`Linkedin`}
              margin={`mb-6`}
              url={`https://www.linkedin.com/in/plamedi-pindi`}
            />
            <MediaCard
              icon={github}
              name={`Github`}
              margin={`mb-6`}
              url={`https://github.com/Plamedi-Pindi`}
            />
            <MediaCard icon={instagram} name={`Instagram`} margin={`mb-6`} />
            <MediaCard
              icon={phone}
              name={`Phone`}
              opcional={`(+244) 926477947`}
              margin={`mb-6`}
              url={`tel:+244926477947`}
            />
          </div>

          {/* Get in touch */}
          <div className="bg-test w-container md:basis-2/5 mx-auto h-26rm rounded-md p-3 text-sm ">
            <h2 className="text-center text-lg mb-6 mt-4 montserrat font-bold">
              Entre em contato
            </h2>

            <div>
              <div className="w-full md:w-11/12 md:mx-auto ">
                <label className="font-medium block font-medium">Nome</label>
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full p-1 pl-2 outline-none mb-6 border-b-2 border-black bg-transparent mt-1 "
                />
              </div>

              <div className="w-full md:w-11/12 md:mx-auto ">
                <label className="font-medium block font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Nome"
                  className="w-full p-1 pl-2 outline-none mb-6 border-b-2 border-black bg-transparent mt-1 "
                />
              </div>

              <textarea
                placeholder="Como posso ajudar?"
                className="w-full md:w-11/12 md:mx-auto block max-h-32 h-32 p-2 mt-4 mb-4 border-b-2 border-black bg-white/50 outline-none"
              ></textarea>

              <button className="bg-black text-white w-full md:w-11/12 md:mx-auto block p-2 mt-4 md:mt-9 rounded-full hover:scale-95 duration-500">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="h-16 w-full bg-white">
        <div className="w-container mx-auto flex items-center h-full">
          <Logo />
        </div>
      </footer>
    </>
  );
}
