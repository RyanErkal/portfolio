import React , { useParams} from "react";
import Project from "./Project";

export default function Portfolio() {

    return(
    <>
        <h1 class="font-bold">Portfolio</h1>
        <div class="grid grid-cols-1 gap-0">
            <Project
            title="project1"
            description="description1"
            />
            <Project
            title="project2"
            description="description2"
            />
        </div>
    </>
    );
}