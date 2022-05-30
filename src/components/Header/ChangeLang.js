import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../../context";

const ChangeLang = () => {
  const {
    langs,
    activeLangStyle,
    lang,
    setLang,
    showLink,
  } = useGlobalContext();
  // const langs = ["Kz", "Ru", "En", "Uz"];
  // const activeLangStyle = { background: "#00b0c7" };

  const langContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    // let linkHeight = linksRef.current.getBoundingClientRect().height;

    if (showLink) {
      langContainerRef.current.style.height = "auto";
    } else {
      langContainerRef.current.style.height = "0px";
    }
  }, [showLink]);
  return (
    <div className="change-lang" ref={langContainerRef}>
      <ul ref={linksRef}>
        {langs.map((lan) => {
          return (
            <li
              key={lan}
              onClick={() => setLang(lan)}
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
