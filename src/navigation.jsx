import { Link } from "react-router-dom";

const LeftNav = ()=>{

    return(
        <ul className="list-group border-0 shadow-lg">
            <li className="list-group-item bg-secondary text-white p-3 text-center">  <i className="fa fa-link"></i> <b>Quick Links</b> </li>
            <li className="list-group-item p-3"> <Link to="/" className="text-decoration-none"> <i className="fa fa-home"></i> Dashboard </Link> </li>
            <li className="list-group-item p-3"> <Link to="/basic" className="text-decoration-none"> <i className="fa fa-user"></i> My Basic </Link> </li>
            <li className="list-group-item p-3"> <Link to="/contact" className="text-decoration-none"> <i className="fa fa-headset"></i> My Contact </Link> </li>
            <li className="list-group-item p-3"> <Link to="/education" className="text-decoration-none"> <i className="fa fa-book"></i> My Education </Link> </li>
            <li className="list-group-item p-3"> <Link to="/skill" className="text-decoration-none"> <i className="fa fa-desktop"></i> My Skill </Link> </li>
            <li className="list-group-item p-3"> <Link to="/project" className="text-decoration-none"> <i className="fa fa-suitcase"></i> My Project </Link> </li>
            <li className="list-group-item p-3"> <Link to="/exper" className="text-decoration-none"> <i className="fa fa-file"></i> My Experience </Link> </li>
        </ul>
    )
}

export default LeftNav