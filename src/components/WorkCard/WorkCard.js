import "./WorkCardStyles.css";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context";

function WorkCard(props) {
  const theme = useContext(ThemeContext);
  const { language } = theme.state;

  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Project1" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{language === "EN" ? props.textEn : props.text}</p>
        <div className="project-btns">
          <NavLink to={props.view} className="btn">
            {language === "EN" ? "Watch" : "Ver"}
          </NavLink>
          <NavLink to={props.source} className="btn">
            {language === "EN" ? "Source" : "Repositorio"}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
