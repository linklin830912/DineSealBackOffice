import React from 'react';
import BackOfficeContainer from './back-office-container';
import BackOfficeHeader from './back-office-header';
import BackOfficeContent from './back-office-content';
export default function BackOfficePage() {
    return (
        <div className='bg-gray-500 w-[100vw] h-[100vh] flex justify-center items-center'>
            <BackOfficeContainer
                contentComponent={<BackOfficeContent />}
                headerComponent={<BackOfficeHeader/>}
            />
        </div>
    );
 }