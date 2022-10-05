
import './App.css';
import Home from './component/Home';
import G_knolege from './component/G_knolege';
import Quizcomponent from './component/Quizcomponent';
import Course from './component/Course';
import { BrowserRouter as Router, Routes, Route, Redirect, Navigate, hashHistory } from "react-router-dom";



const App = () => {



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/general-knowlege" element={<G_knolege />} />
          <Route path="/quizcomponent" element={<Quizcomponent />} />
          <Route path="/Course-route" element={<Course />} />
        </Routes>
      </Router>
    </>
  )

}

export default App;
