import React from "react";
import PropTypes from "prop-types";

//gitU: { login, avatar_url, url, repos_url } está recibiendo el cada objeto del estado gitUsers y lo destructura para luego ser usado en el componente
const UsersItem = ({ gitU: { login, avatar_url, url, repos_url } }) => {
	return (
		<div className="card col-2 ">
			<img
				src={avatar_url}
				className="card-img-top w-50 mx-auto"
				alt="..."
				style={{ borderRadius: "100%" }}
			/>
			<div className="card-body">
				<h5 className="card-title">{login}</h5>
				<a href={url} className="btn btn-primary">
					Perfil
				</a>
				<a href={repos_url} className="btn btn-primary">
					Repositorios
				</a>
			</div>
		</div>
	);
};

UsersItem.propTypes = {
	gitU: PropTypes.object
};

export default UsersItem;
