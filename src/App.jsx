import "./App.css";
import { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [found, findMoster] = useState(monsters);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
			setMonsters(res.data);
		});
	}, []);

	useEffect(() => {
		const newFound = monsters.filter((word) => {
			const s = searchValue.length;
			const searchWord = searchValue.toLowerCase();
			if (word.name.toLowerCase().slice(0, s) === searchWord) {
				return word;
			}
		});
		findMoster(newFound);
	}, [searchValue, monsters]);

	const onSearchChange = (e) => {
		setSearchValue(() => {
			return e.target.value;
		});
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Monsters Rolodox</h1>

				<SearchBox
					placeholder="search-monsters"
					onChangeHandler={onSearchChange}
					className="monster-search-box"
				/>

				<CardList monsters={found} />
			</header>
		</div>
	);
};

export default App;
