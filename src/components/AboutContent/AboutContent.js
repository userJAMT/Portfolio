import "./AboutContentStyles.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context";

function AboutContent() {
  const theme = useContext(ThemeContext);
  const { language } = theme.state;

  return (
    <div className="about">
      <div className="left">
        <h1>{language === "EN" ? "Who am I?" : "¿Quién soy?"}</h1>
        {language === "EN" ? (
          <p>
            I am a Full Stack Developer graduated from soyHenry and electronic
            engineering student. At the middle of my career I was opting for the
            computational branch of it. Now I decided to enter in the world of
            programming to learn and generate new experiences that will help me
            in the future to combine my new and my old passion.
          </p>
        ) : (
          <p>
            Soy un Programador Web Full Stack graduado de SoyHenry, apasionado
            por la ciencia y la tecnología desde pequeño he estado aprendiendo
            durante muchos años, ganando muy buenas cualidades para resolver
            problemas de forma óptima y eficaz. Ahora adentrandome en el mundo
            de la programación como Full Stack estoy listo para afrontar los
            nuevos retos con ganas de aprender y darlo todo.
          </p>
        )}

        <Link to="/contact">
          <button className="btn">
            {language === "EN" ? "Contact" : "Contacto"}
          </button>
        </Link>
      </div>

      <div className="right">
        <h2> {language === "EN" ? "Technologies" : "Tecnologías"}</h2>
        <div className="img-container">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain-wordmark.svg"
            alt="tech"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
            alt="tech"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
