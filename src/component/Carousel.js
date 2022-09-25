
import '../App.css';


const Carousel = () => {




	return (
		<div className="courasal_div">

			<div className="coura_div">
				<div className="courasal_left">
					<img src={require("./header_img.png")} alt="logo avater" />
				</div>

				<div className="courasal_right">
					<div className="sobai_jitba">এবার সবাই শিখবো, <br /> সবাই জিতবো!</div>
					<div className="sobai_jitba_b">পড়াশোনায় জিতে যাওয়ার সবকিছু এখন তোমার হাতের মুঠোয়</div>
					<button type="button">কোর্স ঘুরে দেখ</button>
					<button type="button">শিখতে শুরু কর</button>
				</div>
			</div>


		</div>
	);
}

export default Carousel;
