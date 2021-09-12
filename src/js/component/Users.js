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
					//gitU={gitU} esta enviando cada objeto del estado gitUsers a UserItems a través de un prop!!!!
					//Luego en UsersItem se recibe como argumento, esta se debe definir su prop.type
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
