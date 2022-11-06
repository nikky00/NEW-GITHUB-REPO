import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home  from './components/Home';
import Allrepo from './components/Allrepo';
import Singlerepo from './components/Singlerepo';



function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/repo' element={<Allrepo/>}/>
      <Route path='/repo/:name' element={<Singlerepo/>}/>
      <Route path='*' element={<h1>404....Page Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    

   </>
  );
}

export default App;
