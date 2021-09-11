import React from "react";
import Navbar from "./Navbar";
import Users from "./Users";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar icon={"fab fa-github"} title={"Github Finder"} />
			<Users />
		</div>
	);
};

export default Home;
