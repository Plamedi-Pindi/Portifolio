// Hooks
import { useState } from "react";

// Assets
import react from "../../assets/svg/react-2.svg";
import redux from "../../assets/svg/redux.svg";
import tailwindcss from "../../assets/svg/tailwindcss.svg";
import Modal from "../Modal/Modal";

// Component
import ProjectButton from "../PortButton/ProjectButton";

// icons
import { BsGithub } from "react-icons/bs";

// Main function
function ProjectCard({ img, title, margin }) {
  const [isMouseOver, setMouseOver] = useState(false);
  const [modal, setModal] = useState(false);

  const handleModalOpenClick = () => {
    setModal(true);
  };

  const handleModalCloseClick = () => {
    setModal(false);
  };

  return (
    <div
      className={`flex justify-between w-72  h-48 bg-neutral-300 border-b-4 rounded-lg overflow-hidden relative ${margin} border-secundary hover:border-black` }
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <img
        src={img}
        className={`${isMouseOver && "scale-110"} duration-500 w-full select-none`}
      />

      <div
        className={`w-full h-full  absolute flex justify-center items-center select-none ${
          !isMouseOver && "bg-black/60"
        }`}
      >
        {isMouseOver ? (
          <div className="bg-white/50 backdrop-blur-md absolute bottom-0 flex items-center justify-end h-8 w-full z-20 duration-500 p-1 text-white  ">
            <ProjectButton
              title="Detalhes"
              onMouseDown={`bg-orange-600 `}
              background={`bg-black`}
              hover={`hover:bg-orange-400 hover:text-black `}
              onClick={handleModalOpenClick}
            />
            <ProjectButton
              title="Visualizar"
              onMouseDown={`bg-green-600`}
              background={`bg-green-300 font-bold text-black`}
              hover={`hover:bg-green-400`}
              margin={`ml-3`}
            ></ProjectButton>
          </div>
        ) : (
          <>
            <img src={react} className="w-8 mr-2 ml-2 " />
            <img src={redux} className="w-8 mr-2 ml-2 " />
            <img src={tailwindcss} className="w-8 mr-2 ml-2 " />

            <p className="absolute text-white bottom-12 yeseva-one-regular text-sm">
              {title}
            </p>
          </>
        )}
      </div>

      {/* < Projects Modal /> */}
      <Modal isOpen={modal} isClosed={handleModalCloseClick}>
        <div className=" w-full p-2 md:p-4">

          {/* Flexed container for desktop start*/}
          <div className=" md:flex md:justify-between  ">

            {/* Image box */}
            <div className="md:w-1/2">
              {/* Project image */}
              <img
                src={img}
                alt="Project imgae"
                className="w-full h-52 sm:h-60  rounded-md select-none "
              />
              

              {/* Project name */}
              <h2 className="text-lg font-bold mt-3 mb-5 select-none"> {title} </h2>

              {/* Call button form live demo */}
              <div className="flex items-center justify-between mt-3 select-none">
                <button className="h-8 w-32 rounded-md bg-black text-white text-sm p-1.5 animateShadow focus:text-zinc-400">
                  Live Demo
                </button>
                <button className="h-8 w-32 rounded-md bg-black text-white text-sm p-1.5 flex justify-center items-center animateShadow focus:text-zinc-400">
                  <BsGithub className="mr-2 text-base" />
                  Ropository
                </button>
              </div>
            </div>

            {/* Detail container */}
            <div className="md:w-80 select-none">
              {/* Languages and Frameworks Section */}
              <Section title={"Languages and Frameworks"}>
                <ul className="text-sm text-zinc-700">
                  <li className="flex items-center mb-1.5">
                    <img src={react} className="w-4 mr-2 ml-2 " />
                    <p>React.js</p>
                  </li>
                  <li className="flex items-center mb-1.5">
                    <img src={redux} className="w-4 mr-2 ml-2 " />
                    <p>Redux</p>
                  </li>
                  <li className="flex items-center mb-1.5">
                    <img src={tailwindcss} className="w-4 mr-2 ml-2 " />
                    <p>Tailwindcss</p>
                  </li>
                </ul>
              </Section>

              {/* Libraries and APIs Section */}
              <Section title={"Libraries and APIs"}>
                <ul className="text-sm text-zinc-700">
                  <li className="flex items-center mb-1.5">
                    <img src={react} className="w-4 mr-2 ml-2 " />
                    <p>React.js</p>
                  </li>
                  <li className="flex items-center mb-1.5">
                    <img src={redux} className="w-4 mr-2 ml-2 " />
                    <p>Redux</p>
                  </li>
                  <li className="flex items-center mb-1.5">
                    <img src={tailwindcss} className="w-4 mr-2 ml-2 " />
                    <p>Tailwindcss</p>
                  </li>
                </ul>
              </Section>
            </div>
          </div>
          {/* Flexed container for desktop end*/}

          {/* Description */}
          <Section title={"Description"} container={'md:mt-8 md:border-t md:pt-4'} >
            <p className="mb-2.5 text-sm text-zinc-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates non magnam fuga officia praesentium reprehenderit at
              voluptatem, quidem placeat asperiores. Facilis fugit quaerat
              laudantium odio hic voluptates debitis cupiditate delectus!
            </p>

            <p className="mb-2.5 text-sm text-zinc-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              numquam magni eveniet nulla qui odit quos, accusantium a saepe
              pariatur at possimus, quibusdam reprehenderit vitae quia, debitis
              explicabo dolorum! Assumenda?
            </p>
          </Section>
        </div>
      </Modal>
    </div>
  );
}

const Section = ({ title, children, container }) => {
  return (
    <section className= {`mt-6 border-t-2 md:border-0 pt-4 md:pt-0 md:mt-0 ${container}`} >
      <h3 className="text-lg font-medium mb-4"> {title} </h3>

      {children}
    </section>
  );
};

// const List = ({imgUrl, title})=> {
//   return (
//     <ul>
//       <li>
//         <img src="" alt="" />
//         <p>  </p>
//       </li>
//     </ul>
//   )
// }

export default ProjectCard;
