import React from 'react';
import {Link} from 'react-router-dom';
 const Footer = () => {
	return (
		<footer className="footer">
					<div className="signoff">
						<div>
							The Best Photography for your event.
						</div>
						<div>
							<ul>
							<h1>SOCIALS</h1>
								<li><a>Facebook</a></li>
								<li><a>Instagram</a></li>
								<li><a>Pinterest</a></li>
								<li><a>Twitter</a></li>
							</ul>
							<ul>
							<h1>CONTACT US</h1>
								<li>13 Some Main Street, This County,</li>
								<li>New York</li>
								<li># 123-456-7689-88</li>
								<li><a href="mailto:#">infoname@gmail.com</a></li>
							</ul>
						</div>
					</div>
					<div className="copyright">
						<div>Copyrights © 2020 All Rights Reserved</div>
						<div><a>Terms Of Service</a>/<a>Privacy Policy</a></div>
					</div>
				</footer>
	);
}

export default Footer;