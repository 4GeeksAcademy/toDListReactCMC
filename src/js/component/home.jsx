import React, { useState, useRef, useEffect } from "react";
import ToDo from "./toDoList";

//create your first component
const Home = () => {

	return (
		<div className="home">
			<h1>Your To-Do List</h1>
			<ToDo />
		</div>

	);
};

export default Home;
