import Content from './Content'
import DataContext from './DataContext';
import { useState } from 'react';

const Test = () => {
  const [usename, setUsename] = useState ('');
  //console.log(usename)
  return (
  <DataContext.Provider value={{usename: usename, setUsename: setUsename}}>
    <div>
    <Content />;
    </div>
  </DataContext.Provider>
  );
};

export default Test;
