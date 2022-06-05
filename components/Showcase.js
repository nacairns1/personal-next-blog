import Link from "next/link";
import Image from "next/image";
import Card from "./Card";

export default function Showcase(props) {
	return (
		<div className="w-full justify-center flex flex-row gap-20">
			<Card src="/Prediction_Start.png"></Card>
            <Card src="/Calculator.png"></Card>
            <Card></Card>
		</div>
	);
}
