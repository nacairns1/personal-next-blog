import Link from "next/link";
import Image from "next/image";
import Card from "./Card";

const reactCalculatorDescription = 'Coded in React and basic CSS, this seemingly intuitive calculator was an exercise in learning state management between components. \n'
const discordBotDescription = 'Coded in Node.js and TypeScript, this discord bot can track users\' engagement and users can create custom events'

export default function Showcase(props) {
	return (
		<div className="w-full justify-center flex flex-col items-center md:flex-row gap-10 md:gap-20 pt-12 md:pt-36 pb-12">
			<Card src="/Calculator.png" title="React Calculator" description={reactCalculatorDescription}></Card>
            <Card src="/Prediction_Entry.png" title="Discord Prediction Bot" description={discordBotDescription}></Card>
		</div>
	);
}
