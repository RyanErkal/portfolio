import React from "react";

export default function SvgWrapper(props) {
    return (
        <>
        <div className="svgwrapper">
        {props.children}
        </div>
        </>
        
    );
}