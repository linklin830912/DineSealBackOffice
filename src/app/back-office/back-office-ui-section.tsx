import LineProcessbar from '@/components/process-bar/line-process-bar';
import BackOfficePath from '@/components/svg/back-office-path';
import BadgeIcon from '@/components/svg/badge-icon';
import PrevPageArrowButton from '@/components/svg/prev-page-arrow';
import { useBackOfficSettigs } from '@/context/back-office-settings-context';
import { themeSwitch } from '@/utils/themeHelper';
import React from 'react';
export default function BackOfficeUISection() { 
    const {restaurantSettings} = useBackOfficSettigs();
    const { pages: { main, editor, history} } = themeSwitch(restaurantSettings.theme.colorThemeEnum);
    const backgroundColor0 = main.backgroundColor0;
    const backgroundColor1 = main.backgroundColor1;
    const buttonColor0 = main.buttonColor0;
    const buttonColor1 = main.buttonColor1;
    const fontColor0 = main.fontColor0;
    const fontSize0 = main.fontSize0;
    const fontSize1 = main.fontSize1;
    return <div className='w-[180px] h-[390px] rounded-lg flex flex-col justify-between items-center'
        style={{
                background: `linear-gradient(to bottom, ${backgroundColor0}, ${backgroundColor1})`
            }}
        >
        <div className='w-full px-3 pt-3 pb-2 flex flex-row justify-between items-center'
            style={{
                color: fontColor0,
                fontSize: fontSize0,
            }}> 
            <div className='w-[19px]'><PrevPageArrowButton/></div>
            <div className='w-full text-center'>MEMORY LANE</div>
        </div>
        <div className='p-3'><LineProcessbar totalSteps={10} currentStep={1}/></div>
        <div className='w-full h-[200px] scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent overflow-x-hidden hover:overflow-x-auto'>
            <BackOfficePath />
        </div>
        <div className='w-full px-3 pt-3 pb-2 flex flex-row justify-center items-center  mb-2'>
            <div className='rounded-[50px] px-2 py-1 mr-1'
                style={{
                    background: buttonColor0, 
                    color: fontColor0,
                    fontSize: fontSize0
                }}>MEMORIES: 1
            </div>
            <div className='rounded-[50px] px-2 py-1 flex flex-row'
                style={{
                    background: buttonColor1, 
                    color: fontColor0,
                    fontSize: fontSize1,
                    fontWeight: 'bold'
                }}>
                <div className='w-[13px]'><BadgeIcon/></div>                
                1
            </div>
        </div>
    </div>;
}