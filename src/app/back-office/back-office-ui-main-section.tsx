import LineProcessbar from '@/components/process-bar/line-process-bar';
import BackOfficePath from '@/components/svg/back-office-path';
import BadgeIcon from '@/components/svg/badge-icon';
import PrevPageArrowButton from '@/components/svg/prev-page-arrow';
import { useBackOfficSettigs } from '@/context/back-office-settings-context';
import { switchToFontSize } from '@/model/enum/FontsSizeSettingsEnum';
import { switchToFontFamily } from '@/model/enum/FontsTypeSettingsEnum';
import { themeSwitch } from '@/utils/themeHelper';
import React from 'react';
import { BackOfficeEditStageEnum } from './back-office-content';
import BackofficeHistoryArray from './back-office-history-array';

type BackOfficeUIMainSectionProps = {
    stage: BackOfficeEditStageEnum
}
export default function BackOfficeUIMainSection(props: BackOfficeUIMainSectionProps) { 
    const {restaurantThemeSettings} = useBackOfficSettigs();
    const colorThemeSettings = themeSwitch(restaurantThemeSettings.main.colorThemeEnum);
    return <div className='relative w-full h-full flex flex-col'>
        <div className='w-full px-3 pt-3 pb-2 flex flex-row justify-between items-center'
            style={{
                color: colorThemeSettings.fontColor0,
                fontSize: restaurantThemeSettings.main.fontSize,
            }}>
            <div className='w-[19px]'><PrevPageArrowButton /></div>
            <div className='w-full text-center'
                style={{
                    color: colorThemeSettings.fontColor0,
                    fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize0,
                    fontFamily: switchToFontFamily(restaurantThemeSettings.main.fontType)
                }}
            >MEMORY LANE</div>
        </div>
        <div className='p-3'><LineProcessbar totalSteps={10} currentStep={1} /></div>

        {props.stage === BackOfficeEditStageEnum.MAIN &&  <BackOfficePath />}
        {props.stage === BackOfficeEditStageEnum.HISTORY && <BackofficeHistoryArray/>}

        <div className='absolute top-[85%] w-full px-3 pt-3 pb-2 flex flex-row justify-center items-center mb-2'>
            <div className='rounded-[50px] px-2 py-1 mr-1'
                style={{
                    background: colorThemeSettings.buttonColor0,
                    color: colorThemeSettings.fontColor0,
                    fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize0,
                    fontFamily: switchToFontFamily(restaurantThemeSettings.main.fontType)
                }}>MEMORIES: 1
            </div>
            <div className='rounded-[50px] px-2 py-1 flex flex-row'
                style={{
                    background: colorThemeSettings.buttonColor1,
                    color: colorThemeSettings.fontColor0,
                    fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize1,
                    fontWeight: 'bold',
                    fontFamily: switchToFontFamily(restaurantThemeSettings.main.fontType)
                }}>
                <div className='w-[13px] mr-1'><BadgeIcon /></div>
                1
            </div>
        </div>
    </div>;
}