
import '../App.css';
import { CgProfile } from "react-icons/cg";



const Navber = () => {


  return (
    <div className="main-Navber_div">
      <div className="Navber_div">
        <div className="nav_menu">কোর্স</div>
        <div className="nav_menu">লার্নিং</div>
        <div className="nav_menu">বুক স্টোর</div>
        <div className="nav_menu">ব্লক</div>
        <div className="nav_menu">কুইজ</div>
        <div className="profile_btn"><span style={{ fontSize: '22px', position: 'relative' }}><CgProfile /></span> প্রফাইল</div>
      </div>
    </div>
  );
}

export default Navber;
