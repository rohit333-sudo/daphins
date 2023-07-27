import './App.css';
import Counter from './Counter';
import store from './redux/store';
import Page2 from './Page2'
import Piec from './Piec'

import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
<>
    <Router>
    <Provider store={store} >
   <ChakraProvider>
         {/* <Counter/> */}
      <Routes>
        <Route path='*' element={<Counter></Counter>}> </Route>
        <Route path='/pie' element={<Piec></Piec>}> </Route>
        <Route path='/page2' element={<Page2></Page2>}> </Route>
      </Routes>
    </ChakraProvider>
    </Provider>
  
    </Router>
    </>

  );
}

export default App;
