import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";

export default function Card(props) {
	return (
		<div className="card w-80 h-80 bg-base-100 rounded-md btn-ghost">
			<img src={props.src} alt={props.alt} layout="fill" />
			<a href={props.link} target="_blank" className="card-body z-10 bg-base-200 h-1/3  opacity-0 hover:opacity-90 transition-opacity">

					<h2 className="card-title">{props.title}</h2>
					<p>{props.description}</p>
	
			</a>
		</div>
	);
}
