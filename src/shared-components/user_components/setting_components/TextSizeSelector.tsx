import React from "react";
import '../../utils/editorStyles.css';
import { FontsSizeSettingsEnum } from "@/model/enum/FontsSizeSettingsEnum";

interface TextSizeSelectorProps {
  fontSize: FontsSizeSettingsEnum;
  setFontSize: (font:FontsSizeSettingsEnum)=>void;
}

const TextSizeSelector = (props:TextSizeSelectorProps) => {

  return (
    <>   
      <label className="flex flex-row text-h6 justify-center items-center mr-2">
        <input className="mr-1"
          type="radio"
          name="size"
          checked={props.fontSize === FontsSizeSettingsEnum.SMALL}
          onChange={() => props.setFontSize(FontsSizeSettingsEnum.SMALL)}
        />
        <span>Small</span>
      </label>
      
      <label className="flex flex-row text-h6 justify-center items-center mr-2">
        <input className="mr-1"
          type="radio"
          name="size"
          checked={props.fontSize === FontsSizeSettingsEnum.MEDIUM}
          onChange={() => props.setFontSize(FontsSizeSettingsEnum.MEDIUM)}
        />
        <span >Medium</span>
      </label>
      <label className="flex flex-row text-h6 justify-center items-center mr-2">
        <input className="mr-1"
          type="radio"
          name="size"
          checked={props.fontSize === FontsSizeSettingsEnum.LARGE}
          onChange={() => props.setFontSize(FontsSizeSettingsEnum.LARGE)}
        />
        <span >Large</span>
      </label>
      <label className="flex flex-row text-h6 justify-center items-center mr-2">
        <input className="mr-1"
          type="radio"
          name="size"
          checked={props.fontSize  === FontsSizeSettingsEnum.EXTRA_LARGE}
          onChange={() => props.setFontSize(FontsSizeSettingsEnum.EXTRA_LARGE)}
        />
        <span >Extra Large</span>
      </label>
    </>
  );
};

export default TextSizeSelector;
