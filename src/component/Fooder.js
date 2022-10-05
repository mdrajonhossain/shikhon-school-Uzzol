
import '../App.css';




const Fooder = () => {






	return (

		<div className="container-fluid main_fooder">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<img className="logo" src={require("./logo.png")} alt="logo avater" />
						<div className="phone"> <b>আমাদের মোবাইল অ্যাপ ডাউনলোড করুন</b> </div>
						<img className="playstore" src={require("./playstore.png")} alt="logo avater" />
					</div>

					<div className="col-md-4">
						<div className="phone"><b>আমাদের সেবাসমূহ:</b></div>
						<div className="phone">কোর্স</div>
						<div className="phone">লানিং</div>
						<div className="phone">বুক স্টোর</div>
						<div className="phone">ব্লক</div>
						<div className="phone">কুইজ</div>
					</div>


					<div className="col-md-4">
						<div className="phone"><b>আমাদের সাথে যোগাযোগ করুন:</b></div>
						<div className="phone">Call: 01837460931 (8AM - 11PM)</div>
						<div className="phone">Email: support@shikonschool.com</div>
						<div className="phone">Website: www.shikonschool.com</div>
					</div>

				</div>
			</div>

		</div >
	);
}

export default Fooder;
