import { HashRouter, Routes, Route, Link } from "react-router-dom"

import FinalPreview from "./preview"
import Basic from "./components/basic"
import Contact from "./components/contact"
import Education from "./components/education"
import Exper from "./components/experience"
import Project from "./components/project"
import Skill from "./components/skill"


function App(){
  return(
    <HashRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand"> <i className="fa fa-users fa-lg"> Profile Management </i> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/"> <i className="fa fa-home"> Home </i> </Link>
              </li>

              <li className="nav-item me-3">
                <Link className="nav-link active" to="/basic"> <i className="fa fa-user"> Basic </i> </Link>
              </li>

              <li className="nav-item me-3">
                <Link className="nav-link active" to="/contact"> <i className="fa fa-headphone"> Contact </i> </Link>
              </li>

              <li className="nav-item me-3">
                <Link className="nav-link active" to="/education"> <i className="fa fa-book"> Education </i> </Link>
              </li>

              <li className="nav-item me-3">
                <Link className="nav-link active" to="/exper"> <i className="fa fa-file"> Experience </i> </Link>
              </li>

              <li className="nav-item me-3">
                <Link className="nav-link active" to="/project"> <i className="fa fa-suitcase"> Project </i> </Link>
              </li>

              <li className="nav-item me-3">
                <Link className="nav-link active" to="/skill"> <i className="fa fa-desktop"> Skills </i> </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route exact path="/basic" element={<Basic/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/education" element={<Education/>} />
        <Route exact path="/exper" element={<Exper/>} />
        <Route exact path="/project" element={<Project/>} />
        <Route exact path="/skill" element={<Skill/>} />
        <Route exact path="/" element={<FinalPreview/>} />
      </Routes>
    </HashRouter>
  )
}
export default App