import React, { useRef, useState, useEffect } from "react";

const ChangeLang = ({ lang, setLang, showLink }) => {
  const langs = ["Kz", "Ru", "En", "Uz"];
  const activeLangStyle = { background: "#00b0c7" };

  const langContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    let linkHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linkHeight);
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
