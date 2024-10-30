// Hooks
import { useState, useEffect } from "react";

//Framer Motion
import { motion } from "framer-motion";

// CSS
import "../../../style/Header/Header.css";

// Components
import Button from "../../../components/PortButton/Button";

export default function Header({handleSoundClick}) {
  // states
  const [heroState, setHeroState] = useState("hero1"); // set an hero to shrink our stretch: 'hero1', 'hero2', 'hero2'

  //
  let isHero1 = heroState === "hero1";
  let isHero2 = heroState === "hero2";
  let isHero3 = heroState === "hero3";


  const handleHero1Click = () => {
    setHeroState("hero2");
  };

  const handleHero2Click = () => {
    setHeroState("hero3");
  };

  const handleHero3Click = () => {
    setHeroState("hero1");
  };

  // Event handler to change Hero state to "hero1" when mouse is over the element
  const handleHeroOneMouseOver = () => {
    setHeroState("hero1");
  };

  // Event handler to change Hero state to "hero2" when mouse is over the element
  const handleHeroTwoMouseOver = () => {
    setHeroState("hero2");
  };

  // Event handler to change Hero state to "hero3" when mouse is over the element
  const handleHeroThreeMouseOver = () => {
    setHeroState("hero3");
  };

  const nameColorArray = ['bg-gradient-to-r from-purple-600 via-pink-500 to-red-500', 'bg-gradient-to-r from-rose-600 via-violet-700 to-blue-500', 'bg-gradient-to-r from-sky-500 via-fuchsia-500 to-blue-700 ']

  return (
    <header className=  {`w-container flex flex-col-reverse md:flex-row md:justify-between items-center mx-auto mt-2 md:mt-10 relative`}>
      {/*  */}
      <div className=" md:h-60vh pt-4 md:pt-10 text-center md:text-start ">
        <p className="text-lg mb-2 font-medium montserrat">Olá, eu sou</p>
        <h1 className={`text-4xl font-bold mb-2 yeseva-one-regular text-secundary`} >
          {" "}
          Plamedi Pindi
        </h1>
        <p className="text-base font-medium mb-6 montserrat ">
          Desenvolvedor Front-end
        </p>

        <Button
          background={`bg-black`}
          color={`text-white`}
          width={`w-48`}
          margin={`mb-4 mx-auto md:mx-0 `}
          border={`border-2 border-black`}
          hover={`hover:scale-95 hover:bg-orange-300 hover:border-white duration-300 hover:text-black hover:font-bold`}
          font={`font-medium text-sm `}
        >
          Entre em contato
        </Button>

        <Button
          width={`w-48`}
          font={`font-medium text-sm`}
          margin={`mx-auto  md:mx-0  `}
          border={`border-2 border-black`}
          hover={`hover:bg-orange-300 hover:text-balck hover:border-white hover:scale-95 duration-300 hover:text-black  hover:font-bold`}
          onclick={handleSoundClick}
        >
          Download CV
        </Button>

        {/* WELCOME BOX  */}
        <div className=" hidden md:flex bg-white md:w-64 h-16 flex justify-between items-center drop-shadow mt-6 absolute  md:bottom-10 md:left-32  z-10 cursor-pointer">
          <div className="   ml-4 font-medium">
            <p className="text-sm">Seja bem-vindo no meu</p>
            <p className="text-sm"> cantinho da internet</p>
          </div>

          <div className="w-16 h-16 bg-green-400 flex items-center justify-center hover:bg-orange-300 duration-500">
            <span className="text-xl font-bold ">Go</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-auto md:pl-2 md:pr-2 h-40vh md:h-60vh flex md:space-x-6  overflow-hidden">
        {/* ================== MOBILE HERO START ================== */}

        {/* HERO IMG 1 */}
        <div
          className={`hero1-bg  bg-zinc-300  rounded-xl drop-shadow duration-700  bg-[url("https://i.imgur.com/qg4qrFt.png")] bg-center bg-no-repeat bg-bottom ${
            isHero1 ? "block min-w-full" : ` min-w-0 opacity-0`
          }  relative md:hidden `}
          onClick={handleHero1Click}
        >
          <div className="w-full h-full bg-gradient-to-t from-black/60 from-10% rounded-xl flex justify-between items-end pr-6 pl-6 pb-12 text-white">
            <div className="">
              <p className=" ">Writting</p>
              <p>Course</p>
            </div>

            <div>
              <p className="text-xl">100</p>
              <p className="text-xs text-center">tops</p>
            </div>
          </div>
        </div>

        {/* HERO IMG 2 */}
        <div
          className={`hero2-bg  block md:w-96 bg-pink-200 rounded-xl drop-shadow duration-700  bg-[url("https://i.imgur.com/ndkIpcE.png")] bg-center bg-no-repeat relative ${
            isHero2 ? "block min-w-full" : `min-w-0 opacity-0  `
          } md:hidden`}
          onClick={handleHero2Click}
        >
          <div className="w-full h-full bg-gradient-to-t from-black/60 from-10% rounded-xl flex justify-between items-end pr-6 pl-6 pb-12 text-white ">
            <div>
              <p className=" ">Writting</p>
              <p>Course</p>
            </div>

            <div>
              <p className="text-xl">100</p>
              <p className="text-xs text-center">tops</p>
            </div>
          </div>
        </div>

        {/* HERO IMG 3 */}
        <div
          className={` hero3-bg block md:w-96 bg-slate-200 rounded-xl drop-shadow duration-700  bg-[url("https://i.imgur.com/vTJJ6tu.png")] bg-center bg-no-repeat bg-bottom relative ${
            isHero3 ? "block min-w-full" : `min-w-0 opacity-0  `
          } md:hidden`}
          onClick={handleHero3Click}
        >
          <div className="w-full h-full bg-gradient-to-t from-black/60 from-10% rounded-xl flex justify-between items-end pr-6 pl-6 pb-12 text-white">
            <div>
              <p className=" ">Writting</p>
              <p>Course</p>
            </div>

            <div>
              <p className="text-xl">100</p>
              <p className="text-xs text-center">tops</p>
            </div>
          </div>
        </div>

        {/* ================== MOBILE HERO END ================== */}

        {/* HERO IMG 1 */}
        <div
          className={`hero1-bg ${
            heroState === "hero1"
              ? ` block w-full md:w-96  `
              : "  hidden md:block md:w-36"
          } bg-zinc-300  rounded-xl drop-shadow duration-500  bg-[url("https://i.imgur.com/qg4qrFt.png")] bg-center bg-no-repeat bg-bottom  relative hidden md:block`}
          onMouseOver={handleHeroOneMouseOver}
        >
          <div className="w-full h-full bg-gradient-to-t from-black/60 from-10% rounded-xl flex justify-between items-end pr-6 pl-6 pb-12 text-white">
            {heroState === "hero1" ? (
              <>
                <div className="ml-6">
                  <p className=" ">Writting</p>
                  <p>Course</p>
                </div>

                <div>
                  <p className="text-xl">100</p>
                  <p className="text-xs text-center">tops</p>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* HERO IMG 2 */}
        <div
          className={`hero2-bg ${
            heroState === "hero2"
              ? `block w-full md:w-96  `
              : "hidden md:block md:w-36"
          } bg-pink-200 rounded-xl drop-shadow duration-500  bg-[url("https://i.imgur.com/ndkIpcE.png")] bg-center bg-no-repeat relative hidden md:block`}
          onMouseOver={handleHeroTwoMouseOver}
        >
          <div className="w-full h-full bg-gradient-to-t from-black/60 from-10% rounded-xl flex justify-between items-end pr-6 pl-6 pb-12 text-white ">
            {heroState === "hero2" ? (
              <>
                <div>
                  <p className=" ">Writting</p>
                  <p>Course</p>
                </div>

                <div>
                  <p className="text-xl">100</p>
                  <p className="text-xs text-center">tops</p>
                </div>
              </>
            ) : (
              <div className="bg-purple-950 -ml-6 w-16 h-16 ">
                <p className=" -rotate-90 transform-gpu absolute -left-6 bottom-28 text-base font-light">
                  Writting Course
                </p>
              </div>
            )}
          </div>
        </div>

        {/* HERO IMG 3 */}
        <div
          className={` hero3-bg ${
            heroState === "hero3"
              ? `block w-full lg:w-96  `
              : " hidden md:block lg:w-36"
          } bg-slate-200 rounded-xl drop-shadow duration-500  bg-[url("https://i.imgur.com/vTJJ6tu.png")] bg-center bg-no-repeat bg-bottom relative hidden md:block`}
          onMouseOver={handleHeroThreeMouseOver}
        >
          <div className="w-full h-full bg-gradient-to-t from-black/60 from-10% rounded-xl flex justify-between items-end pr-6 pl-6 pb-12 text-white">
            {heroState === "hero3" ? (
              <>
                <div>
                  <p className=" ">Writting</p>
                  <p>Course</p>
                </div>

                <div>
                  <p className="text-xl">100</p>
                  <p className="text-xs text-center">tops</p>
                </div>
              </>
            ) : (
              <div className="bg-purple-950 -ml-6 w-16 h-16 ">
                <p className=" -rotate-90 transform-gpu absolute -left-6 bottom-28 text-base font-light">
                  Writting Course
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero object for mobile display ==================
const hero = [
  {
    id: 1,
    url: "https://i.imgur.com/qg4qrFt.png",
    description1: "",
    description2: "",
  },
  {
    id: 2,
    url: "https://i.imgur.com/ndkIpcE.png",
    description1: "",
    description2: "",
  },
  {
    id: 3,
    url: "https://i.imgur.com/vTJJ6tu.png",
    description1: "",
    description2: "",
  },
];
