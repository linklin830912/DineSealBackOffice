"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { RestaurantThemeSettings } from '@/model/theme/RestaurantThemeSettings';
import { DEFAULT_RESTAURANT_THEME_SETTINGS } from '@/constant/default-back-office-settings';

interface BackOfficSettigs {
  restaurantThemeSettings: RestaurantThemeSettings,
  setRestaurantThemeSettings: (x: RestaurantThemeSettings) => void
  selectedRestaurantId: number
  setSelectedRestaurantId: (x: number) => void
}

// Create the context with an initial empty state
const BackOfficSettigsContext = createContext<BackOfficSettigs | undefined>(undefined);

// Create a provider component
export const BackOfficSettigsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<number>(-1);
  const [restaurantThemeSettings, setRestaurantThemeSettings] = useState<RestaurantThemeSettings>(DEFAULT_RESTAURANT_THEME_SETTINGS);
  
  return (
    <BackOfficSettigsContext.Provider value={{
      restaurantThemeSettings: restaurantThemeSettings,
      setRestaurantThemeSettings: setRestaurantThemeSettings,
      selectedRestaurantId: selectedRestaurantId,
      setSelectedRestaurantId: setSelectedRestaurantId
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
