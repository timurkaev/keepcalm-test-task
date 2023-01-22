import React, { Children, FC } from "react";
import type { ITitleProps } from "./Title.props";

import styles from "./Title.module.css";
import cn from "classnames";

export const Title: FC<ITitleProps> = ({
	type = "default",
	children,
}): JSX.Element => {
	return (
		<h1
			className={cn(styles.title, {
				[styles.upper]: type === "upper",
			})}
		>
			{children}
		</h1>
	);
};
