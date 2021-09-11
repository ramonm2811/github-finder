import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
			<h1>
				<i className={icon}></i> {title}
			</h1>
		</nav>
	);
};

Navbar.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string
};
export default Navbar;
