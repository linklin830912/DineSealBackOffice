import { useBackOfficSettigs } from '@/context/back-office-settings-context';
import { themeSwitch } from '@/utils/themeHelper';
import React from 'react';
import BackOfficeUIMainSection from './back-office-ui-main-section';
import BackOfficeUIEditor0Section from './back-office-ui-editor0-section';
import { BackOfficeEditStageEnum } from './back-office-content';
import BackOfficeUIEditor1Section from './back-office-ui-editor1-section';
import BackOfficeUIEditor2Section from './back-office-ui-editor2-section';
import BackOfficeUIEditor3Section from './back-office-ui-editor3-section';

type BackOfficeUISectionProps = {
    stage: BackOfficeEditStageEnum
}
export default function BackOfficeUISection(props: BackOfficeUISectionProps) { 
    const {restaurantThemeSettings} = useBackOfficSettigs();
    const colorThemeSettings = themeSwitch(restaurantThemeSettings.main.colorThemeEnum);

    return <div className='w-[180px] h-[390px] rounded-lg flex flex-col justify-between items-center'
        style={{
                background: `linear-gradient(to bottom, ${colorThemeSettings.backgroundColor0}, ${colorThemeSettings.backgroundColor1})`
            }}
    >
        {(props.stage === BackOfficeEditStageEnum.MAIN
            || props.stage === BackOfficeEditStageEnum.HISTORY
                ) && <BackOfficeUIMainSection stage={props.stage}/>}
        {props.stage === BackOfficeEditStageEnum.EDITOR_0 && <BackOfficeUIEditor0Section />}
        {props.stage === BackOfficeEditStageEnum.EDITOR_1 && <BackOfficeUIEditor1Section />}
        {props.stage === BackOfficeEditStageEnum.EDITOR_2 && <BackOfficeUIEditor2Section />}
        {props.stage === BackOfficeEditStageEnum.EDITOR_3 && <BackOfficeUIEditor3Section />}
    </div>;
}