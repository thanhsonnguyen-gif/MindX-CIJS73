import { createContext} from "react";
const defaultData = {usename: '', login: 'false'}
const DataContext = createContext(defaultData);
export default DataContext;