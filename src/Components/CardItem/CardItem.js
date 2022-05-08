import React from "react";
import styles from "./CardItem.module.css";

const CardItem = (props) => {
	return (
		<div className={styles.CardItem}>
			<h1>{props.item}</h1>
		</div>
	);
};

export default CardItem;
