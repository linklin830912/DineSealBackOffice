import React, { ReactElement } from "react";

type BackOfficeSectionCardProps = {
    onSectionFocus: ()=>void;
    children: ReactElement;
}
export default function BackOfficeSectionCard(props: BackOfficeSectionCardProps) { 
    return <div className="flex flex-col justify-start shadow-[0px_2px_0px_0] shadow-mainButton0Color mb-5"
        onClick={() => props.onSectionFocus()}>{props.children}</div>
}