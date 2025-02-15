import { useBackOfficSettigs } from '@/context/back-office-settings-context';
import { switchDisplayArrayType } from '@/model/enum/DisplayArrayTypeEnum';
import { switchToFontSize } from '@/model/enum/FontsSizeSettingsEnum';
import { switchToFontFamily } from '@/model/enum/FontsTypeSettingsEnum';
import { themeSwitch } from '@/utils/themeHelper';
import React from 'react';
import { HiPhotograph } from 'react-icons/hi';
export default function BackofficeHistoryArray() { 
    const { restaurantThemeSettings } = useBackOfficSettigs();
    
    return (
        <div className='w-full flex flex-row flex-wrap overflow-auto px-2'>
            {Array(5).fill(0).map((x, index) => <div className="p-1" key={ index}
                style={{
                    width: switchDisplayArrayType(restaurantThemeSettings.history.displayArrayType),
                }}
            >
                <div className='w-full rounded-lg overflow-hidden flex flex-col justify-center items-center'
                    style={{
                        backgroundColor: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).backgroundColor2,                        
                        border: `5px solid ${themeSwitch(restaurantThemeSettings.main.colorThemeEnum).backgroundColor2}`,
                    }}>
                    <div className='w-full aspect-square flex justify-center items-center rounded-md'
                        style={{
                            backgroundColor: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).buttonColor0
                        }}>
                        <HiPhotograph size={"60"} />
                    </div>
                    <div className='w-full pt-1' style={{
                            color: themeSwitch(restaurantThemeSettings.main.colorThemeEnum).fontColor1,
                            fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize0,
                            fontFamily: switchToFontFamily(restaurantThemeSettings.main.fontType)
                    }}>
                        { restaurantThemeSettings.history.haveTitle && <div style={{
                                fontSize: switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize1
                            }}>Title</div>
                        }
                        { restaurantThemeSettings.history.haveCaption && <div>The food is nice and the service is always very satisfying</div> }
                        { restaurantThemeSettings.history.haveDate && <div>mm-dd-yyyy</div>}
                    </div>
                    
                </div>
            </div>)
            }
        </div>
    );
}