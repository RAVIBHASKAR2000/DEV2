import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

//QUERIES
const GET_REGISTERED_USERS = gql`
	query {
		allUsers {
			id
			name
			email
			language
			country
			timezone
		}
	}
`;

//MUTATIONS
const CREATE_REGISTERED_USER = gql`
	mutation CreateUser(
		$name: String!
		$email: String!
		$password: String!
		$language: String!
		$country: String!
		$timezone: String!
	) {
		createUser(
			data: {
				name: $name
				email: $email
				password: $password
				language: $language
				country: $country
				timezone: $timezone
			}
		) {
			id
		}
	}
`;

function GetAllUsers() {
	const { data, loading, error } = useQuery(GET_REGISTERED_USERS);
	console.log(data);
	if (loading) {
		return <h2> Loading... </h2>;
	}

	if (error) {
		console.error(error);
		return null;
	}

	const allUsers = data.allUsers;
	console.log(allUsers);
	return (
		<div>
			{" "}
			{allUsers.map((user) => (
				<div key={user.id}>
					<h3> {user.Name} </h3>{" "}
					<p>
						{user.Email}
						{user.Language}
						{user.country}
						{user.timezone}
					</p>{" "}
				</div>
			))}{" "}
		</div>
	);
}

function CreateRegisteredUser() {
	let name, email, password, language, country, timezone;
	const [createRegisteredUser, { data, loading, error }] = useMutation(
		CREATE_REGISTERED_USER,
	);

	if (loading) return "Submitting...";
	if (error) return `Submission error! ${error.message}`;

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					createRegisteredUser({
						variables: {
							name: name.value,
							email: email.value,
							password: password.value,
							language: language.value,
							country: country.value,
							timezone: timezone.value,
						},
					});
					name.value = "";
					email.value = "";
					password.value = "";
					language.value = "";
					country.value = "";
					timezone.value = "";
				}}>
				<input
					ref={(node) => {
						name = node;
					}}
				/>
				<input
					ref={(node) => {
						email = node;
					}}
				/>
				<input
					ref={(node) => {
						password = node;
					}}
				/>
				<input
					ref={(node) => {
						language = node;
					}}
				/>
				<input
					ref={(node) => {
						country = node;
					}}
				/>
				<input
					ref={(node) => {
						timezone = node;
					}}
				/>

				<button type="submit">Create User</button>
			</form>
		</div>
	);
}

function test() {
	return (
		<div>
			<CreateRegisteredUser />
			<GetAllUsers />
		</div>
	);
}

export default test;
