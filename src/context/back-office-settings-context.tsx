"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { RestaurantSettings } from '@/model/theme/RestaurantSettings';
import { SVGTypesSettingsEnum } from '@/model/enum/SVGTypesSettingsEnum';
import { ColorThemeSettingsEnum } from '@/model/enum/ColorThemeSettingsEnum';
import { FontsTypeSettingsEnum } from '@/model/enum/FontsTypeSettingsEnum';
import { FontsSizeSettingsEnum } from '@/model/enum/FontsSizeSettingsEnum';

interface BackOfficSettigs {
  restaurantSettings: RestaurantSettings,
  setRestaurantSettings: (x: RestaurantSettings) =>void
}

// Create the context with an initial empty state
const BackOfficSettigsContext = createContext<BackOfficSettigs | undefined>(undefined);

// Create a provider component
export const BackOfficSettigsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  

  const [restaurantSettings, setRestaurantSettings] = useState<RestaurantSettings>({
    profile: {},
        theme: {
            colorThemeEnum: ColorThemeSettingsEnum.LIGHT,
            fontType: FontsTypeSettingsEnum.ARIAL,
            fontSize: FontsSizeSettingsEnum.SMALL,
            svgL: SVGTypesSettingsEnum.STAR,
            svgS: SVGTypesSettingsEnum.STAR,
            startText: 'Start !'
        },
        seoSettings: {}
  });
  
  return (
    <BackOfficSettigsContext.Provider value={{
      restaurantSettings: restaurantSettings,
      setRestaurantSettings: setRestaurantSettings,
    }}>
      {children}
    </BackOfficSettigsContext.Provider>
  );
};

export const useBackOfficSettigs = (): BackOfficSettigs => {
  const context = useContext(BackOfficSettigsContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};
