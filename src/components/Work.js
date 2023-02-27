import "./WorkCard/WorkCardStyles.css";
import React, { useContext } from "react";
import WorkCard from "./WorkCard/WorkCard";
import WorkCardData from "./WorkCardData";
import { ThemeContext } from "../context";

function Work() {
  const theme = useContext(ThemeContext);
  const { language } = theme.state;
  
  return (
    <div className="work-container">
      <h1 className="project-heading">{language === "EN" ? "Projects" : "Proyectos"}</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              textEn={val.textEn}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Work;
