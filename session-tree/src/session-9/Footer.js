import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const Footer = () => {
  const langCtx = useContext(LanguageContext);
  const handleChangeLanguage = (e) => {
    langCtx.setLang(e.target.value);
  };

  return (
    <div>
      <secletor value={langCtx.lang} onChange={handleChangeLanguage}>
        <option value="vi">Vi</option>
        <option value="en">En</option>
      </secletor>
    </div>
  );
};
export default Footer;
