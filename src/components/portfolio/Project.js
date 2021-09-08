import React, { useState } from "react";

const Project = ({ item }) => {

  const [showInfo, setShowInfo] = useState(false);
  ;

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };

  let { name, languagesIcons, source, info, picture } = item;

  return (
    <div className="project">
      <div className="icons">
        {languagesIcons && languagesIcons.map((icon) => (
          <i className={icon} key={icon}></i>
        ))}
      </div>
      <h3>{name}</h3>
      <img src={picture} alt={name} onClick={handleInfo} />
      <span className="infos" onClick={handleInfo}>
        <i className="fas fa-plus-circle"></i>
      </span>

      {showInfo && (
        <div className="showInfos">
          <div className="infosContent">
            <div className="head">
              <h2>{name}</h2>
              <div className="sourceCode">
                <a
                  href={source}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code source
                  </a>
              </div>
            </div>
            <p className="text">{info}</p>

            <div className="button return" onClick={handleInfo}>
              Retourner sur le site
              </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default Project;
