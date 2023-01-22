import React, { FC } from "react";
import styles from "./FirstSection.module.css";

import { Image } from "../../ui/Image/Image";
import { Title } from "../../ui/Title/Title";
import { P } from "../../ui/P/P";

import MediumImage from "../../../assets/taisiia.png";
import LargeImage from "../../../assets/julia.png";

export const FirstSection: FC = (): JSX.Element => {
	return (
		<section className={styles.section}>
			<div className={styles.block1}>
				<Image src={LargeImage} alt="img" size="large" />
			</div>
			<div className={styles.block2}>
				<Title type="default">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit
				</Title>
				<P>
					Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur.
					<P>
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum
					</P>
				</P>
			</div>
			<div className={styles.block3}>
				<Title type="default">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit
				</Title>
				<P>
					Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur.
					<P>
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum
					</P>
				</P>
			</div>
			<div className={styles.block4}>
				<Image src={MediumImage} alt="img" size="medium" />
			</div>
		</section>
	);
};
