import React from "react";
type BackOfficeContainerProps = {
    headerComponent: React.ReactElement;
    contentComponent: React.ReactElement;
}
export default function BackOfficeContainer(props: BackOfficeContainerProps) { 
    return <div className="flex flex-col bg-white rounded-[15px] overflow-hidden">
        <div>{props.headerComponent}</div>
        <div>{ props.contentComponent}</div>
    </div>
}