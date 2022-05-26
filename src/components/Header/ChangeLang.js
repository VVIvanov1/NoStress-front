import React from "react";


const ChangeLang = ({ lang, setLang }) => {
    const langs = ["Kz", "Ru", "En", "Uz"]

   const activeLangStyle = {background: "#00b0c7"}

  return (
    <div className="change-lang">
      <ul>
          {
              langs.map(lan=>{
                  return <li key={lan} onClick={() => setLang(lan)} style={lang===lan?activeLangStyle:null}>
                      <a href="#" >{lan}</a>
                  </li>
              })
          }
        
      </ul>
    </div>
  );
};

export default ChangeLang;
