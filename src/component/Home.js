
import '../App.css';
import Navber from './Navber';
import Carousel from './Carousel';


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
		</>
	);
}

export default Home;
