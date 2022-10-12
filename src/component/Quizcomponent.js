import '../App.css';
import Navber from './Navber';
import Fooder from './Fooder';
import React, { useState } from 'react';




const Quizcomponent = () => {
	const [yourname, setYourname] = useState('');
	const [yourmobile, setYourmobile] = useState('');
	const [youremail, setYouremail] = useState('');







	return (
		<>
			<Navber />

			<div className="container-flud" style={{ background: '#354895' }}>
				<div className="container">
					<div className="row">

						<div className="col-md-6">
							<div className="quese_main">
								<div className="form_header">ফ্রি পরামর্শ পেতে অ্যাপয়েন্টমেন্ট বুক করো</div>

								<div className="quese_forms">

									<div class="form-group">
										<label for="exampleInputEmail1" className='form_lavel'>নাম <lavel className='star_red'>*</lavel></label>
										<input type="email" class="form-control" value={yourname}	id="exampleInputEmail1" onChange={(e) => setYourname(e.target.e)} aria-describedby="emailHelp" placeholder="নাম" />										
										{yourname != "" ? <span className='close_btn' onClick={() => setYourname("")}> &times;</span> : ''}
									</div><br/>

									<div class="form-group">
										<label for="exampleInputEmail1" className='form_lavel'>মোবাইল <lavel className='star_red'>*</lavel></label>
										<input type="email" class="form-control" value={yourmobile} id="exampleInputEmail1" onChange={(e) => setYourmobile(e.target.e)} aria-describedby="emailHelp" placeholder="মোবাইল" />										
										{yourmobile != "" ? <span className='close_btn' onClick={() => setYourmobile("")}>&times;</span> : ''}
									</div><br/>

									<div class="form-group">
										<label for="exampleInputEmail1" className='form_lavel'>ই-মেইল  <lavel className='star_red'>*</lavel></label>
										<input type="email" class="form-control" value={youremail} id="exampleInputEmail1" onChange={(e) => setYouremail(e.target.e)} aria-describedby="emailHelp" placeholder="ই-মেইল" />																				
										{youremail != "" ? <span className='close_btn' onClick={() => setYouremail("")}>&times;</span> : ''}
									</div><br/>
										
										<div className='submit_btn'>
											<button type="submit" className="btn_submit">এগিয়ে যাও</button>
										</div>

								</div>
							</div>
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
