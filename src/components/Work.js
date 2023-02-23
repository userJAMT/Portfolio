import "./WorkCard/WorkCardStyles.css";
import React from "react";
import WorkCard from "./WorkCard/WorkCard";
import WorkCardData from "./WorkCardData";

function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Proyectos</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
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
