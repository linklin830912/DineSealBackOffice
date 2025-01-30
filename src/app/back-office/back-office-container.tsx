"use client"
import { client } from "@/apollo/client";
import { BackOfficSettigsProvider } from "@/context/back-office-settings-context";
import { ApolloProvider } from "@apollo/client";

import React from "react";
type BackOfficeContainerProps = {
    headerComponent: React.ReactElement;
    contentComponent: React.ReactElement;
}
export default function BackOfficeContainer(props: BackOfficeContainerProps) { 
    return <BackOfficSettigsProvider>        
        <ApolloProvider client={client}>
            <div className="flex flex-col bg-white rounded-[15px] overflow-hidden">
                <div>{props.headerComponent}</div>
                <div>{props.contentComponent}</div>
            </div>
        </ApolloProvider>
    </BackOfficSettigsProvider>;
}