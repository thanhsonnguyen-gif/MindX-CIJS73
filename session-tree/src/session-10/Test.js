import {Route, Routes} from "react-router-dom"
import Home from "./components/home";
import Welcome from "./components/Welcome";
import Product from "./components/Product";
import { BrowserRouter } from "react-router-dom";
const Test = () => {
  return (<div>
      <h1>hello</h1>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/" element={<Product/>}/>
      </Routes>
      </div>);
};

export default Test;
