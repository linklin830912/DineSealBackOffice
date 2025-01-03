import React from 'react';
type LineProcessbarProps = {
    totalSteps: number
    currentStep: number
}
export default function LineProcessbar(props: LineProcessbarProps) { 
    const width = 2900;
    return (
        <div className='w-full flex flex-col items-end'>
            <div className='w-full mb-1'>
                <svg className='fill-mainSvgPath1Color' width="100%" height="100%" viewBox={`0 0 ${width} 300`} xmlns="http://www.w3.org/2000/svg">
                    <rect className='fill-mainSvgPath1Color stroke-mainSvgPath0Color' x="0" y="200" width={ width} height="100" rx="30" />
                    <rect className='fill-mainSvgPath0Color' x="0" y="200" width={`${width*props.currentStep/props.totalSteps}`} height="100" rx="30"/>
                    <path transform={`translate(${Math.max(width*props.currentStep/props.totalSteps-60, 0) } 0)`} d="M85.5971 2.40372C90.8788 -1.6049 98.4644 2.18297 98.4335 8.81358L98.2817 41.3211C98.2694 43.9541 99.5535 46.4245 101.716 47.9274L128.408 66.4814C133.853 70.2659 132.595 78.6508 126.279 80.6703L95.3155 90.5713C92.8076 91.3732 90.8548 93.3579 90.0937 95.8785L80.6963 126.998C78.7794 133.346 70.4161 134.74 66.5438 129.358L47.5592 102.969C46.0215 100.832 43.5305 99.5882 40.898 99.6432L8.39729 100.322C1.76806 100.461 -2.14236 92.9377 1.78006 87.5916L21.0103 61.3817C22.5679 59.2588 22.9811 56.5054 22.1153 54.0187L11.4262 23.3186C9.24589 17.0566 15.1925 11.0128 21.489 13.0912L52.3585 23.2809C54.8589 24.1063 57.6052 23.6484 59.7026 22.0566L85.5971 2.40372Z" />
                </svg>
            </div>           
        </div>
        
    );
}