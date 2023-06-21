import React from "react";

export default function SkillsWrapper(props) {
	//console.log(props);
	return (
		<>
			<div className="skillswrapper">{props.children}</div>
		</>
	);
}
