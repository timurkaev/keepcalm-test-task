import React, { FC } from "react";
import type { IImageProps } from "./Image.props";

import styles from "./Image.module.css";
import cn from "classnames";

export const Image: FC<IImageProps> = ({
	size,
	src,
	alt,
	...props
}): JSX.Element => {
	return (
		<img
			src={src}
			alt={alt}
			className={cn(styles.image, {
				[styles.small]: size === "small",
				[styles.medium]: size === "medium",
				[styles.large]: size === "large",
			})}
			{...props}
		/>
	);
};
