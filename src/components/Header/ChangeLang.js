import React, { useRef, useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import { FcGlobe } from "react-icons/fc";

const ChangeLang = () => {
  const {
    langs,
    activeLangStyle,
    lang,
    setLang,
    showLink,
  } = useGlobalContext();

  function setGlobalLang(language) {
    setLang(language);
    window.localStorage.setItem("language", language);
    setShowLangs(false);
  }
  const langContainerRef = useRef(null);
  const globeRef = useRef(null);
  const linksRef = useRef(null);
  const [showLangs, setShowLangs] = useState(false);
  useEffect(() => {
    let globeLeft = globeRef.current.getBoundingClientRect().left;
    let globeSize = globeRef.current.getBoundingClientRect().width;

    if (showLink) {
      linksRef.current.style.left = `${globeLeft + globeSize + 10}px`;
      langContainerRef.current.style.height = "auto";
    } else {
      langContainerRef.current.style.height = "0px";
    }
  }, [showLink, lang]);
  const handleShowLangs = () => {
    setShowLangs(true);
  };
  const handleHideLangs = () => {
    setShowLangs(false);
  };
  const toggleLangsShow = () => {
    setShowLangs(!showLangs);
  };
  return (
    <div
      className="change-lang"
      ref={langContainerRef}
      onMouseLeave={handleHideLangs}
    >
      <button
        className="globe"
        ref={globeRef}
        onMouseOver={handleShowLangs}
        onClick={toggleLangsShow}
      >
        {" "}
        <FcGlobe />
      </button>

      <ul
        ref={linksRef}
        className={showLangs ? "lang-container" : "lang-container hidden"}
      >
        {langs.map((lan) => {
          return (
            <li
              key={lan}
              onClick={() => setGlobalLang(lan)}
              style={lang === lan ? activeLangStyle : null}
            >
              <a href="#">{lan}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChangeLang;
