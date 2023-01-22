import React, { FC } from "react";
import { IHeaderProps } from "./Header.props";

import cn from "classnames";
import styles from "./Header.module.css";

import Logo from "./icons/Logo.svg";
import LogoText from "./icons/Circeya.svg";

export const Header: FC<IHeaderProps> = ({
	className,
	...props
}): JSX.Element => {
	return (
		<header className={cn(styles.header, className, {})} {...props}>
			<div className={styles.navbar}>
				<div className={styles.logo}>
					<img src={Logo} alt="Logo" />
					<img src={LogoText} alt="Logo" />
				</div>
				<div className={styles.number}>+7 (495) 495-49-54</div>
			</div>
		</header>
	);
};
