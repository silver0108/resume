import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Main from './pages/Introduce';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/resume" element={<Main />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
