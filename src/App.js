import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Post from './Pages/Post';
import DataContext from './Context/DataContext';
import Postid from './Pages/Postid';
import Editpost from './Pages/Editpost';
function App() {
  return (
    <div className="App">
       <DataContext>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/post" element={<Post/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/post/:id" element={<Postid/>}></Route>
          <Route path="/editpost/:id" element={<Editpost/>}></Route>
        </Routes>
        </BrowserRouter>
        </DataContext>
        
    </div>
  );
}

export default App;
