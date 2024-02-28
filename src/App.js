import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Main from './Main';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/resume" element={<Main/>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
