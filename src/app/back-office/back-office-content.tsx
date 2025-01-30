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
import BackOfficeHistoryPageSection from "./back-office-history-page-section";

enum BackOfficeEditStageEnum { 
    MAIN,
    EDITOR,
    HISTORY
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
        
        <div className='grid grid-flow-col grid-cols-2 p-5 gap-8 text-h5 text-fontMainColor'>         
            <div className="shadow-[4px_0_0px_0] shadow-mainButton0Color">
                <div className="w-full flex flex-row text-h5 mb-3 text-fontMainColor justify-between bg-mainBackground0Color rounded-t-[20px]">
                    <button className="w-full px-2 py-1 text-center shadow-[0_3px_0_0] shadow-mainButton0Color hover:shadow-hoverMainButton0Color"
                        onClick={()=>setStage(BackOfficeEditStageEnum.MAIN)}>
                        Main
                    </button>
                    <button className="w-full px-2 py-1 text-center shadow-[0_3px_0_0] shadow-mainButton0Color hover:shadow-hoverMainButton0Color"
                        onClick={()=>setStage(BackOfficeEditStageEnum.EDITOR)}>
                        Editor
                    </button>
                    <button className="w-full px-2 py-1 text-center shadow-[0_3px_0_0] shadow-mainButton0Color hover:shadow-hoverMainButton0Color"
                        onClick={() => setStage(BackOfficeEditStageEnum.HISTORY)}>
                        History
                    </button>
                </div>  
                {stage === BackOfficeEditStageEnum.MAIN && <BackOfficeMainPageSection />}
                {stage === BackOfficeEditStageEnum.EDITOR && <BackOfficeEditorPageSection />}
                {stage === BackOfficeEditStageEnum.HISTORY && <BackOfficeHistoryPageSection />}
            </div>        
            <div >
                <BackOfficeUISection/>
                {/* <iframe
                src="https://dine-seal-kappa.vercel.app/memory-lane"
                width="100%"
                height="500px"
                ></iframe> */}
            </div>
        </div>
        
    </div>
}