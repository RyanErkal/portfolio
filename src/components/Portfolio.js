import React from "react";
import Project from "./Project";

export default function Portfolio() {
	return (
		<>
			<h1 class="text-2xl font-bold">Portfolio</h1>
			<div class="grid grid-cols-3">
				<Project
					title="Study Tracker & Todo"
					description="Study timer and todo list app with integrated pomodoro timer."
					tech={["HTML", "CSS", "JS", "React"]}
					links={["GitHub", "Live"]}
				/>
				<Project
					title="Take Home Pay Calculator"
					description="UK take home pay calculator, with integrated tax, PAYE, PRSI calculator."
					tech={["React", "Node", "APIs"]}
					links={["GitHub", "Live"]}
				/>
				<Project
					title="E-Commerce Store"
					description="Fully functional e-commerce store with Stripe integration."
					tech={["React", "Node", "Stripe", "Firebase"]}
					links={["GitHub", "Live"]}
				/>
			</div>
		</>
	);
}
