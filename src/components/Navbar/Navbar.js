import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(){

    function setLinkActive(evt){
        const navLinks = document.getElementsByClassName("nav-link");

        for(const link of navLinks){
            if(link.classList.contains('active')){
                link.classList.remove('active');
            }
        }

        evt.currentTarget.className += " active";
    }

    return (
        <div className="navbar">
            <Link to={'/'}>
                <h3>WASSERSTOFF</h3>
            </Link>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <i className="fas fa-magnifying-glass"/>
            </div>
            <div className="nav-links-container">
                <Link to={'#'} className="nav-link active" onClick={setLinkActive}>Overview</Link>
                <Link to={'#'} className="nav-link" onClick={setLinkActive}>Statistics</Link>
                <Link to={'#'} className="nav-link" onClick={setLinkActive}>Dashboard</Link>
                <Link to={'#'} className="nav-link" onClick={setLinkActive}>Analytics</Link>
            </div>
            <div className="nav-tools">
                <Link to={'#'}><i className="fas fa-user fa-lg"/></Link>
                <Link to={'#'}><i className="fas fa-sliders fa-lg"/></Link>
            </div>
        </div>
    );
}

export default Navbar;