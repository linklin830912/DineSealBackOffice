import { useBackOfficSettigs } from '@/context/back-office-settings-context';
import { SVGTypesSettingsEnum } from '@/model/enum/SVGTypesSettingsEnum';
import { themeSwitch } from '@/utils/themeHelper';
import React from 'react';
type LineProcessbarProps = {
    totalSteps: number
    currentStep: number
}
export default function LineProcessbar(props: LineProcessbarProps) { 
    const {restaurantThemeSettings} = useBackOfficSettigs();
    const colorThemeSettings = themeSwitch(restaurantThemeSettings.main.colorThemeEnum);
    const fillColor0 = colorThemeSettings.buttonColor0;
    const fillColor1 = colorThemeSettings.fontColor0;
    const fillColor2 = colorThemeSettings.svgFillColor0;
    
    const width = 2900;
    return (
        <div className='w-full flex flex-col items-end'>
            <div className='w-full mb-1'>
                <svg width="100%" height="100%" viewBox={`0 0 ${width} 300`} xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="200" width={width} height="100" rx="30" 
                        style={{
                            fill: fillColor0
                        }} />
                    <rect  x="0" y="200" width={`${width*props.currentStep/props.totalSteps}`} height="100" rx="30"
                        style={{
                            fill: fillColor1
                        }} />
                    
                    { restaurantThemeSettings.main.svgS == SVGTypesSettingsEnum.STAR && <path d="M85.5971 2.40372C90.8788 -1.6049 98.4644 2.18297 98.4335 8.81358L98.2817 41.3211C98.2694 43.9541 99.5535 46.4245 101.716 47.9274L128.408 66.4814C133.853 70.2659 132.595 78.6508 126.279 80.6703L95.3155 90.5713C92.8076 91.3732 90.8548 93.3579 90.0937 95.8785L80.6963 126.998C78.7794 133.346 70.4161 134.74 66.5438 129.358L47.5592 102.969C46.0215 100.832 43.5305 99.5882 40.898 99.6432L8.39729 100.322C1.76806 100.461 -2.14236 92.9377 1.78006 87.5916L21.0103 61.3817C22.5679 59.2588 22.9811 56.5054 22.1153 54.0187L11.4262 23.3186C9.24589 17.0566 15.1925 11.0128 21.489 13.0912L52.3585 23.2809C54.8589 24.1063 57.6052 23.6484 59.7026 22.0566L85.5971 2.40372Z"
                        transform={`translate(${Math.max(width * props.currentStep / props.totalSteps - 60, 0)} 0)`}
                        style={{
                            fill: fillColor2
                    }} />}                    
                    
                    { restaurantThemeSettings.main.svgS == SVGTypesSettingsEnum.STAR_8 && <path d="M112.02 15.9365C116.239 12.0239 122.761 12.0239 126.98 15.9365L148.381 35.7833C150.31 37.5725 152.817 38.6109 155.446 38.71L184.613 39.8089C190.363 40.0256 194.974 44.637 195.191 50.387L196.29 79.5535C196.389 82.183 197.427 84.6898 199.217 86.6191L219.063 108.02C222.976 112.239 222.976 118.761 219.063 122.98L199.217 144.381C197.427 146.31 196.389 148.817 196.29 151.446L195.191 180.613C194.974 186.363 190.363 190.974 184.613 191.191L155.446 192.29C152.817 192.389 150.31 193.427 148.381 195.216L126.98 215.063C122.761 218.976 116.239 218.976 112.02 215.063L90.6193 195.216C88.6899 193.427 86.1831 192.389 83.5536 192.29L54.3871 191.191C48.6371 190.974 44.0257 186.363 43.809 180.613L42.7101 151.446C42.611 148.817 41.5727 146.31 39.7834 144.381L19.9366 122.98C16.024 118.761 16.024 112.239 19.9366 108.02L39.7834 86.6191C41.5727 84.6898 42.611 82.183 42.7101 79.5535L43.809 50.3869C44.0257 44.637 48.6371 40.0256 54.3871 39.8089L83.5536 38.71C86.1831 38.6109 88.6899 37.5725 90.6193 35.7833L112.02 15.9365Z"
                        transform={`translate(${Math.max(width * props.currentStep / props.totalSteps - 60, 0) - 5} -25) scale(0.8)`}
                        style={{
                            fill: fillColor2
                    }} />}
                    
                    { restaurantThemeSettings.main.svgS == SVGTypesSettingsEnum.CIRCLE && <circle strokeOpacity={0} fillOpacity={1} cx="70" cy="70" r="70"
                        transform={`translate(${Math.max(width * props.currentStep / props.totalSteps - 60, 0)} 0)`}
                        style={{
                            fill: fillColor2
                    }}/>}
                    
                </svg>
            </div>           
        </div>        
    );
}