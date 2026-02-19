import './App.css';
import {Route, Routes} from 'react-router-dom';
import PotfolioForm from './main/js/potfolio_form';

function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/portfolio' element={<PotfolioForm></PotfolioForm>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
