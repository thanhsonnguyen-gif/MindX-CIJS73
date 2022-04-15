import LanguageContext from "./LanguageContext";
import DataContext from "./DataContext";
import { useContext } from "react";

const Header = () => {
  const langCtx = useContext(LanguageContext);
  const DataCtx = useContext(DataContext);

  return;
  <div>
    {DataCtx.usename === "" ? (
      langCtx.lang === "vi" ? (
        <div>Dang nhap</div>
      ) : (
        <div>Login</div>
      )
    ) : langCtx.lang === "vi" ? (
      <div>Chao mung {DataCtx.usename}</div>
    ) : (
      <div>Welcome {DataCtx.usename}</div>
    )}
  </div>;
};
export default Header;
