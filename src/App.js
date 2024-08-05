import './App.css';
import {Route, Routes} from 'react-router-dom';
import Potfolio_form from './main/js/potfolio_form';

function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/portfolio' element={<Potfolio_form></Potfolio_form>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
