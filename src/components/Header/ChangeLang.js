import React, { useRef, useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import { FcGlobe } from "react-icons/fc";
import useDeviceDetect from "../../hooks/useDeviceDetect";

const ChangeLang = () => {
  const {
    langs,
    activeLangStyle,
    lang,
    setLang,
    showLink,
    setShowLinks,
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
  const [langLinksPosition, setLangLinksPosition] = useState();
  const isMobile = useDeviceDetect();

  useEffect(() => {
    let leftGlobe = globeRef.current.getBoundingClientRect().left + 50;
    setLangLinksPosition({ top: "0px", left: `${leftGlobe}px` });
  }, []);

  useEffect(() => {
    let leftGlobe = globeRef.current.getBoundingClientRect().left + 50;
    function setLangsPositionOnScreen() {
      setLangLinksPosition({ top: "0px", left: `${leftGlobe}px`, margin: 0 });
    }
    window.addEventListener("resize", setLangsPositionOnScreen);
    return () => {
      window.removeEventListener("resize", setLangsPositionOnScreen);
    };
  });

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
      style={!showLink && isMobile ? { height: "0px" } : { height: "auto" }}
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
        style={langLinksPosition}
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
