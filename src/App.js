import "./App.css";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
function App() {

  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
     );
}

export default App;
