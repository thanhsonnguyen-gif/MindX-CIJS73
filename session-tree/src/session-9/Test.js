import DataContext from "./DataContext";
import LanguageContext from "./LanguageContext";
import { useState, useContext } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Content";

const Test = () => {
  const [usename, setUsename] = useState("");
  const [language, SetLanguage] = useState("en");
  const [statusLogin, setStatusLogin] = useState(false);
  return (
    <DataContext.Provider
      value={{
        usename: usename,
        setUsename: setUsename,
        statusLog: statusLogin,
        setStatusLog: setStatusLogin,
      }}
    >
      <LanguageContext.Provider
        value={{ lang: language, setLang: SetLanguage }}
      >
        <div>
          <Header />
          <Content />;
          <Footer />
        </div>
      </LanguageContext.Provider>
    </DataContext.Provider>
  );
};

export default Test;
