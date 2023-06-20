import React from "react";

export default function SkillsWrapper(props) {
    return (
        <>
        <div class="container mx-auto" className="skillswrapper">
        {props.children}
        </div>
        </>
    );
}