"use client"
import React, {  useEffect, useState } from "react";
import BackOfficeThemeSection from "./back-office-main-page-section";
import { useLazyQuery } from "@apollo/client";
import { useRestaurantsByEmailAndPassword } from "@/api/restaurant/getRestaurantsByOwnerId";
import { GET_RESTAURANT_THEME_SETTINGS_BY_ID } from "@/api/restaurant-theme-settings/getRestaurantTemeSettings";
import { useBackOfficSettigs } from "@/context/back-office-settings-context";
import { mapToRestaurantThemeSettings } from "@/mapper/mapToRestaurantThemeSettings";
import BackOfficeUISection from "./back-office-ui-section";
import BackOfficeMainPageSection from "./back-office-main-page-section";
import BackOfficeEditorPageSection from "./back-office-editor-page-section";

export enum BackOfficeEditStageEnum { 
    MAIN,
    HISTORY,
    EDITOR_0,
    EDITOR_1,
    EDITOR_2,
    EDITOR_3,
}
export default function BackOfficeContent() { 
   
    const [stage, setStage] = useState<BackOfficeEditStageEnum>(BackOfficeEditStageEnum.MAIN);
    const { setRestaurantSettings} = useBackOfficSettigs();
    const restaurants = useRestaurantsByEmailAndPassword("test.owner@email.com", "123456");
    const [fetchTheme, { data: themeData }] = useLazyQuery(GET_RESTAURANT_THEME_SETTINGS_BY_ID);
    const handleSelectRestaurant = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.value;
        if (id) { 
            fetchTheme({
                variables:{id: id}
            })
        }
    };
    useEffect(() => {
        if (themeData) { 
            const settings = mapToRestaurantThemeSettings(themeData);
            setRestaurantSettings(settings);
        }
    },[themeData])
    return <div className="w-full flex flex-col bg-mainBackground1Color">
        <div className="w-full fixed">
            <select onChange={handleSelectRestaurant}>
                {restaurants.map((restaurant, index) => <option key={index} value={restaurant.restaurantThemeSettingsId}>
                    { restaurant.restaurantName }</option>)}
            </select>
        </div>
        
        <div className='grid grid-flow-col grid-cols-[fit fit] p-5 gap-5 text-h5 text-fontMainColor'>         
            <div className="shadow-[4px_0_0px_0] shadow-mainButton0Color pr-5">
                <div className="w-full flex flex-row text-h5 text-fontMainColor justify-between bg-mainBackground0Color rounded-t-[15px]">
                    <button className="w-full px-3 pt-1 text-center text-h6 shadow-[0_3px_0_0] shadow-mainButton0Color hover:shadow-hoverMainButton0Color"
                        onClick={()=>setStage(BackOfficeEditStageEnum.MAIN)}>
                        Main
                    </button>
                    <button className="w-full px-3 pt-1 text-center text-h6 shadow-[0_3px_0_0] shadow-mainButton0Color hover:shadow-hoverMainButton0Color"
                        onClick={()=>setStage(BackOfficeEditStageEnum.EDITOR_0)}>
                        Editor
                    </button>
                </div>  
                <div className="max-h-[50vh] p-5 overflow-auto">
                    {(stage === BackOfficeEditStageEnum.MAIN
                        ||stage === BackOfficeEditStageEnum.HISTORY)
                        && <BackOfficeMainPageSection onSectionFocus={setStage}/>}
                    {(stage === BackOfficeEditStageEnum.EDITOR_0
                        || stage === BackOfficeEditStageEnum.EDITOR_1
                        || stage === BackOfficeEditStageEnum.EDITOR_2
                        || stage === BackOfficeEditStageEnum.EDITOR_3)
                                && <BackOfficeEditorPageSection onSectionFocus={setStage}/>}
                </div>
                
            </div>        
            <div className="flex justify-center items-center px-5">
                <BackOfficeUISection stage={stage}/>
            </div>
        </div>
        
    </div>
}