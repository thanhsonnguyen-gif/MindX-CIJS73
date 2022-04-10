import { createContext} from "react";
const defaultData = {usename: 'thanhson'}
const DataContext = createContext(defaultData);
export default DataContext;