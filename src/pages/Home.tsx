import {
  FaFolder,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaSuitcaseRolling,
  FaUser,
} from "react-icons/fa";
import { PublicLayout } from "../layout/PublicLayout";
import { IoIosCodeWorking } from "react-icons/io";

const Home = () => {
  return (
    <PublicLayout>
      <div className="relative flex flex-col items-center justify-center flex-1 w-[80%] mx-auto text-white">
        <section
          id="about"
          className="relative z-10 w-full p-8 mb-8 rounded-lg shadow-lg bg-with-glow"
        >
          <div className="flex flex-col items-center justify-center w-full mb-12 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <div className="flex-shrink-0 md:mr-6">
              <img
                src="https://media.licdn.com/dms/image/D4E03AQHlj1RPixrkLg/profile-displayphoto-shrink_800_800/0/1721528725361?e=1727308800&v=beta&t=E5DDTsztDa4-vWRIMlTCHZeUpcY8MyASSztzMLIvx1Q"
                alt="Avatar"
                className="w-[13rem] h-[13rem] rounded-full border-4 border-gray-700 animate-glow"
              />
            </div>
            <div className="flex flex-col items-center mt-4 space-y-4 text-center md:mt-0 md:items-start md:text-left md:space-y-6">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold text-title md:text-4xl">
                  Sebastián Chaquila Muñoz
                </h1>
                <div className="typewriter">
                  <h2 className="text-xl text-gray-400 md:text-2xl">
                    Desarrollador Web
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-center w-full space-y-2 md:space-y-0 md:flex-row md:space-x-4">
                <a href="/ruta-al-cv.pdf" download className="w-full md:w-auto">
                  <button className="w-full px-6 py-3 font-semibold text-gray-200 transition duration-300 ease-in-out transform bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50">
                    Descargar CV
                  </button>
                </a>
                <a
                  href="mailto:sebascha.sistemas2003@gmail.com"
                  className="w-full md:w-auto"
                >
                  <button className="w-full px-6 py-3 font-semibold text-gray-700 transition duration-300 ease-in-out transform bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50">
                    Contáctame
                  </button>
                </a>
              </div>
              <div className="flex justify-center mt-4 space-x-6 md:justify-start">
                <a
                  title="GitHub"
                  href="https://github.com/SebaschaM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-3xl text-gray-200 transition duration-300 ease-in-out transform hover:text-white hover:scale-105" />
                </a>
                <a
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/sebastianchaquilamunozj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-3xl text-gray-200 transition duration-300 ease-in-out transform hover:text-blue-400 hover:scale-105" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FaUser className="mr-2 text-xl" />
            <h2 className="font-bold text-subtitle1">Sobre mí</h2>
          </div>
          <div className="flex flex-wrap items-start justify-start mt-4 text-gray-300 md:space-x-4 text-normal">
            <p className="leading-relaxed">
              Soy un desarrollador web con aproximadamente 1 año de experiencia
              en el sector, apasionado por la tecnología y la innovación. Me
              especializo en la creación de aplicaciones web eficientes y
              escalables, siempre buscando aprender y mejorar mis habilidades.
              Mi objetivo es utilizar la tecnología para resolver problemas y
              mejorar la vida de las personas.
            </p>
          </div>
        </section>

        <div className="relative z-10 w-full p-6 mb-8 text-center text-gray-300 font-merriweather text-subtitle3">
          "Aprendizaje constante, crecimiento duradero"
        </div>

        <section
          id="experience"
          className="relative z-10 w-full p-8 mb-8 rounded-lg shadow-lg bg-with-glow"
        >
          <div className="flex items-center mb-5">
            <FaSuitcaseRolling className="mr-2 text-xl" />
            <h2 className="font-bold text-subtitle1">Experiencia</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ol className="relative pl-6 border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <IoIosCodeWorking />
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Figma v1.3.0
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on December 7th, 2021
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </li>
            </ol>
            <ol className="relative pl-6 border-l border-gray-200 dark:border-gray-700">
              <li>
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <IoIosCodeWorking />
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Library v1.2.2
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on December 2nd, 2021
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section
          id="projects"
          className="relative z-10 w-full p-8 mb-8 rounded-lg shadow-lg bg-with-glow"
        >
          <div className="flex items-center mb-4">
            <FaFolder className="mr-2 text-xl" />
            <h2 className="font-bold text-subtitle1">Proyectos</h2>
          </div>
          <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside text-normal">
            <li>Proyecto 1: Descripción breve del proyecto 1.</li>
            <li>Proyecto 2: Descripción breve del proyecto 2.</li>
            <li>Proyecto 3: Descripción breve del proyecto 3.</li>
          </ul>
        </section>

        <section
          id="technologies"
          className="relative z-10 w-full p-8 mb-8 rounded-lg shadow-lg bg-with-glow"
        >
          <div className="flex items-center mb-4">
            <FaGlobe className="mr-2 text-xl" />
            <h2 className="font-bold text-subtitle1">Tecnologías</h2>
          </div>{" "}
          <div className="flex flex-wrap items-start justify-start mt-4 space-y-4 text-gray-300 md:space-y-0 md:space-x-4 text-normal">
            <div className="p-4">
              <h3 className="font-semibold text-subtitle3">Frontend</h3>
              <p>JavaScript, React, Tailwind CSS</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-subtitle3">Backend</h3>
              <p>Node.js, Express</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-subtitle3">Database</h3>
              <p>MongoDB</p>
            </div>
          </div>
        </section>

        <footer
          id="footer"
          className="relative z-10 w-full p-8 mb-4 rounded-lg shadow-lg bg-with-glow"
        >
          <p className="text-center text-gray-300">
            &copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos
            reservados.
          </p>
        </footer>
      </div>
    </PublicLayout>
  );
};

export default Home;
