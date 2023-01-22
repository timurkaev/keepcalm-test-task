import React, { FC } from "react";
import { Layout } from "./layout/Layout";
import { Title } from "./components/ui/Title/Title";
import { FirstSection } from "./components/screens/FirstSection/FirstSection";
import { Slider } from "./components/screens/Slider/Slider";

export const App: FC = (): JSX.Element => {
	return (
		<Layout>
			<Title type="upper">ut aliquip ex ea commodo consequat</Title>
			<FirstSection />
			<Title type="upper">Lorem ipsum dolor sit amet</Title>
			<Slider />
		</Layout>
	);
};
