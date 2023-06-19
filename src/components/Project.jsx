import React from "react";
import ReactDOM from "react-dom/client";
import { useParams } from "react-router-dom";

const project = useParams(
    title: "Project Title",
    description: "Project Description",
    image: "https://via.placeholder.com/150",
    tech: ["HTML", "CSS", "JavaScript"]
);

export default function Project() {
    return (
    <>
    <h1>Project</h1>
    </>
    ); 
}