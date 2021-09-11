import React, { useState, useEffect } from "react";
import UsersItem from "./UsersItem";

const Users = () => {
	const [gitUsers, setGitUsers] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		fetch("https://api.github.com/users")
			.then(res => res.json())
			.then(
				result => {
					setIsLoaded(true);
					setGitUsers(result);
				},
				error => {
					setIsLoaded(true);
				}
			);
	}, []);

	return (
		<div className="row">
			{isLoaded ? (
				gitUsers.map(gitU => {
					return <UsersItem gitU={gitU} key={gitU.id} />;
				})
			) : (
				<div className="d-flex justify-content-center align-items-center w-100 vh-100">
					<div className="spinner-border text-primary" role="status">
						<span className="visually-hidden"></span>
					</div>
				</div>
			)}
			{}
		</div>
	);
};

export default Users;
