"use client"
import { POST_RESTAURANT_THEME_SETTINGS } from "@/api/restaurant-theme-settings/postRestaurantThemeSettings";
import { UPDATE_RESTAURANT_THEME_SETTINGS_BY_RESTAURANT_ID } from "@/api/restaurant-theme-settings/updateRestaurantThemeSettingsByRestaurantId";
import { useBackOfficSettigs } from "@/context/back-office-settings-context";
import { useMutation } from "@apollo/client";
import React, { useEffect } from "react";

export default function BackOfficeHeader() { 
    const { restaurantThemeSettings, selectedRestaurantId } = useBackOfficSettigs();
    const [ updateRestaurantThemeSettings, {data, loading, error} ] = useMutation(UPDATE_RESTAURANT_THEME_SETTINGS_BY_RESTAURANT_ID);
    const handleSave = async () => {
        console.log("!!!save: ",restaurantThemeSettings);
        try {
            await updateRestaurantThemeSettings({
                variables: {
                    restaurantId: selectedRestaurantId,
                    value: restaurantThemeSettings
                }
            })
        } catch (e) { 
            console.error(e);
        }        
    };

    useEffect(() => { console.log(data)}, [data])

    return <div className="w-full flex flex-row justify-between bg-[#56D4E1] px-3 py-2 text-h5">
        <button className="px-2 rounded-[50px] border-2 border-current">Cancel</button>
        <button className="px-2 rounded-[50px] border-2 border-current"
            onClick={handleSave}>Save</button>
    </div>
}

