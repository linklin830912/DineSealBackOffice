"use client"
import React, { useState } from "react";
import BackOfficeProfileSection from "./back-office-profile-section";
import BackOfficeThemeSection from "./back-office-theme-section";

enum BackOfficeEditStageEnum { 
    PROFILE,
    THEME,
    SEO_SETTINGS
}
export default function BackOfficeContent() { 
    const [stage, setStage] = useState<BackOfficeEditStageEnum>(BackOfficeEditStageEnum.PROFILE);
    
    return <div className="w-full flex flex-col">
        <div className="w-full flex flex-row text-h5 text-fontMainColor justify-between">
            <button className="w-full px-2 py-1 text-center shadow-[0_3px_0_0] shadow-mainButton0Color hover:shadow-fontMainHoverColor"
                onClick={()=>setStage(BackOfficeEditStageEnum.PROFILE)}>
                Profile
            </button>
            <button className="w-full px-2 py-1 text-center shadow-[0_3px_0_0] shadow-mainButton0Color hover:shadow-fontMainHoverColor"
                onClick={()=>setStage(BackOfficeEditStageEnum.THEME)}>
                Theme
            </button>
            <button className="w-full px-2 py-1 text-center shadow-[0_3px_0_0] shadow-mainButton0Color hover:shadow-fontMainHoverColor"
                onClick={() => setStage(BackOfficeEditStageEnum.SEO_SETTINGS)}>
                SEO Settings
            </button>
        </div>
        <div className='grid grid-flow-col grid-cols-2 px-2 gap-8 text-h5 text-fontMainColor'>            
            <div className="shadow-[4px_0_0px_0] shadow-mainButton0Color p-5 mt-1">
                {stage === BackOfficeEditStageEnum.PROFILE && <BackOfficeThemeSection />}
                {stage === BackOfficeEditStageEnum.THEME && <BackOfficeThemeSection />}
                {stage === BackOfficeEditStageEnum.SEO_SETTINGS && <BackOfficeThemeSection />}
            </div>
        
            <div className="p-5">result</div>
        </div>
        
    </div>
}