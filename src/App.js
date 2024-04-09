import './App.css';
import Main from './Main/Main';

import { useEffect } from 'react';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
 

  return (
    <div className="App">
      
      <Main/>
       
    </div>
  );
}

export default App;
