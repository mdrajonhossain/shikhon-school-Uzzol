import '../App.css';
import Navber from './Navber';
import Fooder from './Fooder';




const Quizcomponent = () => {






	return (
		<>
			<Navber />

			<div className="container-flud" style={{ background: '#354895' }}>
				<div className="container">
					<div className="row">

						<div className="col-md-6">
							sadfasdf
						</div>


						<div className="col-md-6">
							<img src={require("./quise.png")} alt="logo avater" />
						</div>
					</div>

				</div>
			</div>

			<Fooder />
		</>
	);
}

export default Quizcomponent;
