import React from "react";

export default function Project(props) {
	return (
		<>
			<div className="project">
				<h1 class="text-2xl">{props.title}</h1>
				<p class="my-5">{props.description}</p>
				{props.tech.map((tech) => (
					<span className="tech">{tech}</span>
				))}
				<br />
				{props.links.map((link) => (
					<span>
						<a className="links" href="#">
							{link}
						</a>
					</span>
				))}
			</div>
		</>
	);
}
