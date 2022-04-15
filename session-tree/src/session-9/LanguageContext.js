import { createContext} from "react";
const defaultLanguage = {lang: 'en'}
const LanguageContext = createContext(defaultLanguage);
export default LanguageContext;