
import '../App.css';
import Navber from './Navber';
import Carousel from './Carousel';
import Course_slid from './Course_slid';
import Fooder from './Fooder';


const Home = () => {




	return (
		<>
			<Navber />
			<Carousel />


			<br /><br />

			<div className="container-fluid">
				<div className="row">

					<div className="col-md-6">
						<center>
							<iframe className="vedio_tag" src="https://www.youtube.com/embed/IB6Y2qDsewk"
								title="কলরবের শিল্পীদের কান্ড দেখুন আপনারা অবাক হয়ে যাবেন।Tahsinul Islam" frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen></iframe>
						</center>
					</div>

					<div className="col-md-6 mentor">
						<div className="mentor_one">তোমাকে জেতাতে পাশে আছে উজ্জ্বল স্যার ও পলাশ স্যার সহ শতশত মেন্টর</div>
						<div className="mentor_two">সবার জন্য মানসম্মত পড়াশোনা নিশ্চিতের মাধ্যমে শিক্ষা জীবনের প্রতিটি ধাপ জেতার জন্য রেডি করে তোলাই আমাদের লক্ষ্য</div>
						<button type="button">আমাদের সম্পর্কে জেনে নাও</button>
					</div>
				</div>

			</div>

			<br /><br />
			<div className="container">
				<div className="all_course_slide">আমাদের সকল কোর্স</div>
				<Course_slid />
			</div>

			<br /><br />
			<div className="container">
				<div className="all_course_slide">তোমার শেখার এবং জেতার জন্য দুটি স্মার্ট সল্যুশন</div>

				<div className="row">


					<div className="col-md-6">
						<div className="online_chouching">
							<div className="online_chouching_header">অনলাইন কোচিং</div>
							<img src={require("./online_chourse.png")} alt="logo avater" />

							<div className="row" style={{ marginLeft: '30px', width: '90%', textAlign: 'left' }}>
								<div className="col-md-6">
									<li>লাইভ ক্লাস</li>
									<li>এনালাইসিস</li>
								</div>
								<div className="col-md-6">
									<li>ওয়েব পোর্টাল</li>
									<li>লাইভ পোলিং</li>
								</div>
							</div>

						</div>
					</div>



					<div className="col-md-6">
						<div className="online_chouching">
							<div className="online_chouching_header">অ্যানিমেটেড লেসনস</div>
							<img src={require("./animated.png")} alt="logo avater" />

							<div className="row" style={{ marginLeft: '30px', width: '90%', textAlign: 'left' }}>
								<div className="col-md-6">
									<li>অ্যানিমেটেড ভিডিও</li>
									<li>প্রবলেম সলভিং লেসন</li>
								</div>
								<div className="col-md-6">
									<li>স্মার্ট নোট</li>
									<li>অ্যানালাইসিস</li>
								</div>
							</div>

						</div>
					</div>





				</div>
			</div>

			<br /><br /><br /><br />


		<Fooder />
		</>
	);
}

export default Home;
