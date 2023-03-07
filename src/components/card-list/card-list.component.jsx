import { Component } from "react";
import CardContainer from "../card-container/card-container.components";
import "./card-list.styles.css";

// class CardList extends Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return (
// 			<div className="card-list">
// 				{this.props.monsters.map((monster) => {
// 					return <CardContainer monster={monster} />;
// 				})}
// 			</div>
// 		);
// 	}
// }

const CardList = (props) => {
	return (
		<div className="card-list">
			{props.monsters.map((monster) => {
				return (
					<div key={monster.id}>
						<CardContainer monster={monster} />
					</div>
				);
			})}
		</div>
	);
};

export default CardList;
