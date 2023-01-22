import React, { FC } from "react";
import styles from "./Layout.module.css";
import type { ILayoutProps } from "./Layout.props";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout: FC<ILayoutProps> = ({ children }): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	);
};
