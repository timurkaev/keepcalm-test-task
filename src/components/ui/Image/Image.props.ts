import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export interface IImageProps
	extends DetailedHTMLProps<
		ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	> {
	size: "small" | "medium" | "large";
}
