
import '../App.css';
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";





const Navber = () => {
  const { pathname } = useLocation();







  return (
    <div className="main-Navber_div">
      <Link to="/">
        <img src={require("./logo.png")} alt="logo avater" />
      </Link>
      <div className="Navber_div">        
        <Link className={(pathname === '/Course-route') ? 'active' : 'nav_menu'} to="/Course-route">কোর্স</Link>
        <div className="nav_menu">লার্নিং</div>
        <div className="nav_menu">বুক স্টোর</div>
        <div className="nav_menu">ব্লক</div>
        <Link className={(pathname === '/quizcomponent') ? 'active' : 'nav_menu'} to="/quizcomponent">কুইজ</Link>

        <div className="profile_btn"><span style={{ fontSize: '22px', position: 'relative' }}><CgProfile /></span> প্রফাইল</div>
      </div>
    </div>
  );
}

export default Navber;
