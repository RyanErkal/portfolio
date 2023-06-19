import React from "react";
import ReactDOM from "react-dom/client";
import Project from "./Project";

export default function Portfolio() {
    return(
    <>
        <h1>Portfolio</h1>
        <Project
        name="project1",
        description="description1",
        image="placeholder",
        tech={["HTML", "CSS", "JavaScript"]}
        />
    </>
    );
}