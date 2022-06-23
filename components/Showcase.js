import Link from "next/link";
import Image from "next/image";
import Card from "./Card";

const reactCalculatorDescription =
	"Coded in React and vanilla CSS, this seemingly intuitive calculator was an exercise in learning state management between components.";
const discordBotDescription =
	"Discord bot coded in Node.js and TypeScript which can track users' engagement and users can create custom events.";
const ttzDescription =
	"With a frontend coded in Next.js and a backend coded in Node.js, this gaming website is fully responsive and deployed on the cloud.";
export default function Showcase(props) {
	return (
		<div>
			<div className="w-full justify-center flex  md:flex-wrap flex-col items-center md:flex-row gap-10 md:gap-20 pt-6 pb-12">
				<Card
					src="./Calculator.png"
					title="React Calculator"
					description={reactCalculatorDescription}
					link="https://nacairns1.github.io/calculator-react/"
				></Card>

				<Card
					src="./prediction_start.png"
					title="Discord Prediction Bot"
					description={discordBotDescription}
					link="https://github.com/nacairns1/discord-engage-bot"
				></Card>

				<Card
					src="./ttz-screenshot.png"
					title="Tic-Tac-Zachy"
					description={ttzDescription}
					link="https://tic-tac-zachy.vercel.app/"
				></Card>
			</div>
		</div>
	);
}
