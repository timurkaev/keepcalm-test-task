import React, { FC, useEffect, useRef } from "react";
import styles from "./Slider.module.css";
import {
	Image1,
	Image2,
	Image3,
	Image4,
	Image5,
	Image6,
	Image7,
	Image8,
	Image9,
	Image10,
	Image11,
	Image12,
} from "./images/index";
import { Image } from "../../ui/Image/Image";

const sliderImages = [
	{ id: 1, src: Image1 },
	{ id: 2, src: Image2 },
	{ id: 3, src: Image3 },
	{ id: 4, src: Image4 },
	{ id: 5, src: Image5 },
	{ id: 6, src: Image6 },
	{ id: 7, src: Image7 },
	{ id: 8, src: Image8 },
	{ id: 9, src: Image9 },
	{ id: 10, src: Image10 },
	{ id: 11, src: Image11 },
	{ id: 12, src: Image12 },
];

export const Slider: FC = () => {
	const sliderEl = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = sliderEl.current;
		if (el) {
			const onWheel = (e: any) => {
				e.preventDefault();
				el.scrollTo({
					left: el.scrollLeft + e.deltaY * 4,
					behavior: "smooth",
				});
				el.addEventListener("scroll", onWheel);
				return () => el.removeEventListener("wheel", onWheel);
			};
		}
	}, []);

	return (
		<section className={styles.sliderSection}>
			<div ref={sliderEl} className={styles.slider}>
				{sliderImages.map((image) => (
					<Image
						key={image.id}
						size="small"
						src={image.src}
						alt={String(image.id)}
					/>
				))}
			</div>
		</section>
	);
};
