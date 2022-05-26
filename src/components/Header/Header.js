import React, { useState } from "react";
import Account from "./Account";
import LoginBtn from "./LoginBtn";
import LogOutBtn from "./LogOutBtn";
import ChangeLang from "./ChangeLang";

const Header = () => {
  let currentUser = { email: "meruyert@baigroupkz.com" };

  const [user, setUser] = useState(null);
  const [lang, setLang] = useState('Ru')

  return (
    <header>
      <div className="left-header">
        <div className="logo-navbar">
          <a href="/" className="logo">
            <svg
              width="62"
              height="29"
              viewBox="0 0 62 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.8545 0C30.8545 0 31.2586 1.25806 31.6106 2.02318C32.1786 3.25763 32.9174 3.71835 33.4252 4.98013C33.9572 6.30173 34.1813 8.5596 34.1813 8.5596C34.1813 8.5596 36.038 5.84845 37.8106 4.98013C38.8582 4.46693 39.5239 4.23433 40.6838 4.20199C42.646 4.14727 45.3716 6.06954 45.3716 6.06954C45.3716 6.06954 47.7276 8.76376 49.7569 9.49338C51.9312 10.2751 53.4125 10.0366 55.6545 9.49338C58.2788 8.85748 61.7033 6.06954 61.7033 6.06954C61.7033 6.06954 61.8947 11.0794 60.0399 13.2285C59.2553 14.1372 58.7645 14.7939 57.6203 15.096C56.8766 15.2924 55.6545 15.096 55.6545 15.096C55.6545 15.096 54.6531 19.1463 52.7813 20.6987L52.7792 20.7004L52.779 20.7006C51.4819 21.7762 50.5072 22.5845 48.8496 22.4106C47.9006 22.311 46.5813 21.4768 46.5813 21.4768C46.5813 21.4768 45.217 23.2094 44.1618 24.1225L44.1186 24.16L44.1183 24.1602C43.2671 24.8968 42.7602 25.3354 41.7423 25.8344C40.3196 26.5317 37.8106 26.7682 37.8106 26.7682C37.8106 26.7682 39.3657 25.3525 39.7764 24.1225C40.1986 22.8581 40.2253 21.9535 39.7764 20.6987C39.3561 19.5228 38.9459 18.6609 37.8106 18.2086C36.9846 17.8795 36.3752 17.8979 35.5423 18.2086C34.3619 18.649 33.4252 20.6987 33.4252 20.6987C33.4252 20.6987 33.8223 22.8021 34.1813 24.1225C34.6193 25.7328 35.5423 28.1689 35.5423 28.1689C35.5423 28.1689 34.84 27.141 34.1813 26.7682C33.0429 26.1238 30.8545 26.7682 30.8545 26.7682C30.8545 26.7682 28.666 26.1238 27.5276 26.7682C26.869 27.141 26.1666 28.1689 26.1666 28.1689C26.1666 28.1689 27.0896 25.7328 27.5276 24.1225C27.8867 22.8021 28.2837 20.6987 28.2837 20.6987C28.2837 20.6987 27.3469 18.649 26.1666 18.2086C25.3338 17.8979 24.7244 17.8795 23.8983 18.2086C22.763 18.6609 22.353 19.5228 21.9325 20.6987C21.4837 21.9535 21.5101 22.8581 21.9325 24.1225C22.3433 25.3525 23.8983 26.7682 23.8983 26.7682C23.8983 26.7682 21.3893 26.5317 19.9666 25.8344C18.9485 25.3354 18.4416 24.8967 17.5903 24.16L17.5471 24.1225C16.4919 23.2094 15.1276 21.4768 15.1276 21.4768C15.1276 21.4768 13.8084 22.311 12.8593 22.4106C11.2016 22.5846 10.2268 21.7761 8.92966 20.7004L8.92758 20.6987C7.05575 19.1463 6.05441 15.096 6.05441 15.096C6.05441 15.096 4.83216 15.2924 4.08855 15.096C2.9445 14.7939 2.45344 14.1372 1.66903 13.2285C-0.185973 11.0794 0.00561537 6.06954 0.00561537 6.06954C0.00561537 6.06954 3.43026 8.85748 6.05441 9.49338C8.29624 10.0366 9.77767 10.2751 11.952 9.49338C13.9813 8.76376 16.3373 6.06954 16.3373 6.06954C16.3373 6.06954 19.0628 4.14727 21.0251 4.20199C22.185 4.23433 22.8507 4.46693 23.8983 4.98013C25.6708 5.84845 27.5276 8.5596 27.5276 8.5596C27.5276 8.5596 27.7517 6.30173 28.2837 4.98013C28.7916 3.71835 29.5304 3.25763 30.0983 2.02318C30.4502 1.25806 30.8545 0 30.8545 0Z"
                fill="#00B0C7"
              />
            </svg>
          </a>
          <span>STRESS-LESS CRM</span>
        </div>
      </div>
      <ChangeLang lang={lang} setLang={setLang}/>
      {user ? <Account user={currentUser} /> : ""}
      {!user ? <LoginBtn setUser={setUser} lang={lang} /> : <LogOutBtn setUser={setUser} lang={lang}/>}
    </header>
  );
};

export default Header;
