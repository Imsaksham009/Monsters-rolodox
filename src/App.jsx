import "./App.css";
import { Component } from "react";
import axios from "axios";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
			searchValue: "",
		};
	}

	async componentDidMount() {
		const res = await axios.get("https://jsonplaceholder.typicode.com/users");
		this.setState(() => {
			return {
				monsters: res.data,
			};
		});
	}

	onSearchChange = (e) => {
		{
			this.setState(() => {
				return {
					searchValue: e.target.value,
				};
			});
		}
	};

	render() {
		const found = this.state.monsters.filter((word) => {
			const s = this.state.searchValue.length;
			const searchWord = this.state.searchValue.toLowerCase();
			if (word.name.toLowerCase().slice(0, s) === searchWord) {
				return word;
			}
		});

		return (
			<div className="App">
				<header className="App-header">
					<h1>
						<i>Monsters Rolodox</i>
					</h1>

					<SearchBox
						placeholder="search-monsters"
						onChangeHandler={this.onSearchChange}
						className="monster-search-box"
					/>

					<CardList monsters={found} />
				</header>
			</div>
		);
	}
}

export default App;
