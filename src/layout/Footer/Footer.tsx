import React, { FC } from "react";
import type { IFooterProps } from "./Footer.props";

import cn from "classnames";
import styles from "./Footer.module.css";

export const Footer: FC<IFooterProps> = ({
	className,
	...props
}): JSX.Element => {
	return (
		<footer className={cn(styles.footer, className, {})} {...props}>
			© TEST, 1022–2022
		</footer>
	);
};
