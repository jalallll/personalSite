import React from "react";
import CardItem from "../CardItem/CardItem";
import styles from "./Card.module.css";
const Card = (props) => {
	return (
		<div className={styles.Container}>
			{props.items.map((item) => (
				<CardItem item={item} />
			))}
		</div>
	);
};

export default Card;
