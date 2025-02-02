import { useBackOfficSettigs } from '@/context/back-office-settings-context';
import { switchDisplayArrayType } from '@/model/enum/DisplayArrayTypeEnum';
import { switchToFontSize } from '@/model/enum/FontsSizeSettingsEnum';
import { switchToFontFamily } from '@/model/enum/FontsTypeSettingsEnum';
import { themeSwitch } from '@/utils/themeHelper';
import { sourceMapsEnabled } from 'process';
import React, { useEffect } from 'react';
import { HiPhotograph } from 'react-icons/hi';
export default function BackofficeHistoryArray() { 
    const { restaurantSettings } = useBackOfficSettigs();
    
    return (
        <div className='w-full flex flex-row flex-wrap overflow-auto px-2'>
            {Array(5).fill(0).map((x, index) => <div className="p-1"
                style={{
                    width: switchDisplayArrayType(restaurantSettings.history.displayArrayType),
                }}
            >
                <div className='w-full rounded-lg overflow-hidden flex flex-col justify-center items-center'
                    style={{
                        backgroundColor: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.backgroundColor2,                        
                        border: `5px solid ${themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.backgroundColor2}`,
                    }}>
                    <div className='w-full aspect-square flex justify-center items-center rounded-md'
                        style={{
                            backgroundColor: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.buttonColor0
                        }}>
                        <HiPhotograph size={"60"} />
                    </div>
                    <div className='w-full pt-1' style={{
                            color: themeSwitch(restaurantSettings.main.colorThemeEnum).pages.main.fontColor1,
                            fontSize: switchToFontSize(restaurantSettings.main.fontSize).fontSize0,
                            fontFamily: switchToFontFamily(restaurantSettings.main.fontType)
                    }}>
                        { restaurantSettings.history.haveTitle && <div style={{
                                fontSize: switchToFontSize(restaurantSettings.main.fontSize).fontSize1
                            }}>Title</div>
                        }
                        { restaurantSettings.history.haveCaption && <div>The food is nice and the service is always very satisfying</div> }
                        { restaurantSettings.history.haveDate && <div>mm-dd-yyyy</div>}
                    </div>
                    
                </div>
            </div>)
            }
        </div>
    );
}