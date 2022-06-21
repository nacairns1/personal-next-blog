import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import Resume from "../components/ResumeModal";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="w-full h-full">
			<Hero />
			<Showcase />
			<Resume />
		</div>
	);
}
