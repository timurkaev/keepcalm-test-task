import React, { FC } from "react";
import type { IPProps } from "./P.props";

import styles from "./P.module.css";
import cn from "classnames";

export const P: FC<IPProps> = ({ children }): JSX.Element => {
	return <p className={cn(styles.p)}>{children}</p>;
};
