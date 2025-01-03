import React from "react";
import { ColorThemeSettingsEnum, FontsSizeSettingsEnum, FontsTypeSettingsEnum, SVGTypesSettingsEnum } from '@/model/RestaurantThemeSettings';

export default function BackOfficeThemeSection() { 
    return (
        <div className='w-full flex flex-col'>
            <div className="w-full flex flex-row justify-between items-center mb-1">
                <div className='text-h6 py-1 mr-3'>Theme</div>
                <select className="bg-mainButton0Color rounded-[50px] text-fontMainColor px-3 py-1">
                    {Object.entries(ColorThemeSettingsEnum)
                        .filter(([key, value]) => typeof value === "number")
                        .map(([key, value]) => (
                            <option key={value} value={value}>
                                {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                            </option>
                    ))}</select>
            </div>

            <div className="w-full flex flex-row justify-between items-center mb-1">
                <div className='text-h6 py-1 mr-3'>Fonts</div>
                <select className="bg-mainButton0Color rounded-[50px] text-fontMainColor px-3 py-1">
                    {Object.entries(FontsTypeSettingsEnum)
                        .filter(([key, value]) => typeof value === "number")
                        .map(([key, value]) => (
                            <option key={value} value={value}>
                                {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                            </option>
                        ))}</select>
            </div>
            
            <div className="w-full flex flex-row justify-between items-center mb-1">
                <div className='text-h6 py-1 mr-3'>Font Size</div>
                <select className="bg-mainButton0Color rounded-[50px] text-fontMainColor px-3 py-1">
                    {Object.entries(FontsSizeSettingsEnum)
                        .filter(([key, value]) => typeof value === "number")
                        .map(([key, value]) => (
                            <option key={value} value={value}>
                                {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                            </option>
                        ))}</select>
            </div>

            <div className="w-full flex flex-row justify-between items-center mb-1">
                <div className='text-h6 py-1 mr-3'>SVG Icon L</div>
                <select className="bg-mainButton0Color rounded-[50px] text-fontMainColor px-3 py-1">
                    {Object.entries(SVGTypesSettingsEnum)
                        .filter(([key, value]) => typeof value === "number")
                        .map(([key, value]) => (
                            <option key={value} value={value}>
                                {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                            </option>
                        ))}</select>
            </div>
            
            <div className="w-full flex flex-row justify-between items-center mb-1">
                <div className='text-h6 py-1 mr-3'>SVG Icon S</div>
                <select className="bg-mainButton0Color rounded-[50px] text-fontMainColor px-3 py-1">
                    {Object.entries(SVGTypesSettingsEnum)
                        .filter(([key, value]) => typeof value === "number")
                        .map(([key, value]) => (
                            <option key={value} value={value}>
                                {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                            </option>
                        ))}</select>
            </div>   
        </div>
    );
}