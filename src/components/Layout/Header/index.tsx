import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import { logo } from "assets/images";
import { AppRoutes } from "utility/enums/app-routes";

const Header: React.FC = () => {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<nav>
				<ul className="nav-links">
					<li>
						<Link
							to={AppRoutes.SignIn}
							onClick={() => localStorage.removeItem("userEmail")}
						>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
