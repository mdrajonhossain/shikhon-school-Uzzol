
import '../App.css';
import Navber from './Navber';
import Fooder from './Fooder';
import Cat_book_list from './Cat_book_list';


const G_knolege = () => {








	return (
		<>
			<Navber />

			<div className="container-fluid back_image">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="main_advice">
								<div className="text-header">
									প্রশ্নের উত্তর দিয়ে জিতে নাও লক্ষ টাকার উপহার।
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<img src={require("./general_know.png")} alt="logo avater" />
						</div>
					</div>
				</div>
			</div>

			<div className="container text-center">
				<div className="cata_header_test">MCQ অনুশীলন</div>
			</div>

			<Cat_book_list />



			<Fooder />
		</>
	);
}

export default G_knolege;
