import { useContext } from "react";
import DataContext from "./DataContext";
import LanguageContext from "./LanguageContext";

const Content = () => {
  const dataCtx = useContext(DataContext);
  const langCtx = useContext(LanguageContext);

  const handleInputChange = (e) => {
    dataCtx.setUsename(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dataCtx.usename === ""
      ? dataCtx.setStatusLog(false)
      : dataCtx.setStatusLog(true);
  };

  return (
    <div>
      {dataCtx.login === "false" ? (
        <form
          onSubmit={handleSubmit}
          placeholder={
            langCtx.lang === "vi" ? "nhap ten dang nhap" : "type usename here"
          }
          value={dataCtx.usename}
          onChange={handleInputChange}
        >
          {langCtx.lang === "vi" ? (
            <button type="submit">Xac nhan</button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </form>
      ) : (
        <p>
          {langCtx.lang === "vi" ? (
            <span>Chuc mung {dataCtx.usename} da dang nhap thanh cong</span>
          ) : (
            <span>Welcome {dataCtx.usename}</span>
          )}
        </p>
      )}
    </div>
  );
};
export default Content;
