import React, { useState }  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



//importing components
import './App.css';
import TodoApp from "./components/TodoApp";
import WeatherApp from "./components/WeatherApp";
import Sidebar from "./components/Sidebar"
import './styles/Sidebar.css';



function App() {
  const [status, setStatus] = useState(false);
  return (
    <div className="App">
      <Sidebar show={status} setStatus={setStatus} />
    <Router>
      <Routes>
        <Route path='/todo' 
          element= {<TodoApp />} />
        <Route path='/weather' 
          element= {<WeatherApp />} />
      </Routes>
    </Router>
    </div>
  );
}
export default App 