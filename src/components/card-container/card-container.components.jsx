import { Component } from "react";
import "./card-container.styles.css";

// class CardContainer extends Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		const { monster } = this.props;
// 		return (
// 			<div className="card-container" key={monster.id}>
// 				<img
// 					src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
// 					alt={`moster ${monster.name}`}
// 				/>
// 				<h2>{monster.name}</h2>
// 				<p>{monster.email}</p>
// 			</div>
// 		);
// 	}
// }

const CardContainer = (props) => {
	const { monster } = props;
	return (
		<div className="card-container">
			<img
				src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
				alt={`moster ${monster.name}`}
			/>
			<h2>{monster.name}</h2>
			<p>{monster.email}</p>
		</div>
	);
};

export default CardContainer;
