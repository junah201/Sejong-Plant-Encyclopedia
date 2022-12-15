import React from "react";
import logo from "./logo.png";
import "./Header.css";

const Header = () => {
	return (
		<header>
			<img src={logo} alt="logo" className="Header-logo" />
			<h1>세종고 식물 도감</h1>
		</header>
	);
};

export default Header;
