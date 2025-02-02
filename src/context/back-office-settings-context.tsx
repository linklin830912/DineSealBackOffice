"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { RestaurantSettings } from '@/model/theme/RestaurantSettings';
import { SVGTypesSettingsEnum } from '@/model/enum/SVGTypesSettingsEnum';
import { ColorThemeSettingsEnum } from '@/model/enum/ColorThemeSettingsEnum';
import { FontsTypeSettingsEnum } from '@/model/enum/FontsTypeSettingsEnum';
import { FontsSizeSettingsEnum } from '@/model/enum/FontsSizeSettingsEnum';
import { DisplayArrayTypeEnum } from '@/model/enum/DisplayArrayTypeEnum';

interface BackOfficSettigs {
  restaurantSettings: RestaurantSettings,
  setRestaurantSettings: (x: RestaurantSettings) =>void
}

// Create the context with an initial empty state
const BackOfficSettigsContext = createContext<BackOfficSettigs | undefined>(undefined);

// Create a provider component
export const BackOfficSettigsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  

  const [restaurantSettings, setRestaurantSettings] = useState<RestaurantSettings>({
    main: {
            colorThemeEnum: ColorThemeSettingsEnum.LIGHT,
            fontType: FontsTypeSettingsEnum.ARIAL,
            fontSize: FontsSizeSettingsEnum.SMALL,
            svgL: SVGTypesSettingsEnum.STAR,
            svgS: SVGTypesSettingsEnum.STAR,
            startText: 'START!'
    },
    editor: {
      locationText: "MY RESTAURANT",
      takePictureDescription: "Take a picture of your meal!",
      haveTitle: true,
      titleText: "TITLE",
      haveCaptions: true,
      captionsText: "Caption your memory?",
      feedbackLabel: "FEEDBACK",
      ratingLabel: "RATING",
      haveRating: true,
      tagsLabel: "TAGS",
      tagsText: "Tag what you eat?",
      haveTags: true,
      tags: [""] as string[],
      haveAppreciations: true,
      appreciationsText: "What do you want to say to us?",
      noticeLabel: "WE MIGHT USE THIS INTO FOR OUR SOCIAL MEDIA",
      haveNotice:true,
      consentQuestionLabel: "You may be featured on the restaurant's IG account\n Do you consent sharing your username, photo, and feedback?",
      consentQuestionAgreeLabel: "AGREE",
      haveConsentQuestion:true
    },
    history: {
      displayArrayType: DisplayArrayTypeEnum.ONE,
      haveTitle: true,
      haveCaption: true,
      haveDate:true
    }
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
