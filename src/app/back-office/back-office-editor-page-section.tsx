import TextInput from "@/components/input/text-input";
import { useBackOfficSettigs } from "@/context/back-office-settings-context";
import React from "react";
import HaveTextInput from "@/components/input/have-text-input";
import HaveInput from "@/components/input/have-input";
import BackOfficeSectionCard from "@/components/card/back-office-section-card";
import HaveAddTextInput from "@/components/input/have-add-text-input";
import { BackOfficeEditStageEnum } from "./back-office-content";
import { IoAlertCircle } from "react-icons/io5";
import { FaCheckSquare } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaTag } from "react-icons/fa6";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineTitle } from "react-icons/md";

type BackOfficeEditorPageSectionProps = {
    onSectionFocus: (stage: BackOfficeEditStageEnum) => void;
}
export default function BackOfficeEditorPageSection(props: BackOfficeEditorPageSectionProps) { 
    const { restaurantThemeSettings, setRestaurantThemeSettings } = useBackOfficSettigs();
    return (
        <div className="flex flex-col justify-center">
            <BackOfficeSectionCard onSectionFocus={()=>props.onSectionFocus(BackOfficeEditStageEnum.EDITOR_0)}>
                <>
                    <TextInput placeholder="LOCATION" value={restaurantThemeSettings.editor.locationText} setValue={(e) => {
                        setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, locationText: e.target.value } });
                    }} ><FaLocationDot size={20} /></TextInput>
                    
                    <TextInput placeholder="DESCRIPTION" value={restaurantThemeSettings.editor.takePictureDescription} setValue={(e) => {
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, takePictureDescription: e.target.value } });
                        }} ><MdOutlineSubtitles size={20} />
                    </TextInput>
                </>
            </BackOfficeSectionCard>
            <BackOfficeSectionCard onSectionFocus={() => props.onSectionFocus(BackOfficeEditStageEnum.EDITOR_1)}>
                <>
                    <HaveTextInput placeholder={"TITLE"} value={restaurantThemeSettings.editor.titleText}
                        setValue={(e) => {
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, titleText: e.target.value } });
                        } }
                        isChecked={restaurantThemeSettings.editor.haveTitle}
                        onCheckedChange={(e) => { 
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, haveTitle: e.currentTarget.checked } });   
                        } }>
                        <MdOutlineTitle size={20} />
                    </HaveTextInput>
                    <HaveTextInput placeholder={"CAPTION"} value={restaurantThemeSettings.editor.captionsText}
                        setValue={(e) => {
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, captionsText: e.target.value } });
                        } }
                        isChecked={restaurantThemeSettings.editor.haveCaptions}
                        onCheckedChange={(e) => { 
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, haveCaptions: e.currentTarget.checked } });   
                        } }>
                        <MdOutlineSubtitles size={20} />
                    </HaveTextInput>
                </>
            </BackOfficeSectionCard>

            <BackOfficeSectionCard onSectionFocus={() => props.onSectionFocus(BackOfficeEditStageEnum.EDITOR_2)}>
                <>
                    <HaveInput 
                        isChecked={restaurantThemeSettings.editor.haveRating}
                        onCheckedChange={(e) => { 
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, haveRating: e.currentTarget.checked } });   
                        } }>
                        <TiStarHalfOutline size={20} />
                    </HaveInput>
                    <HaveAddTextInput placeholder={"TAG"} values={restaurantThemeSettings.editor.tags}
                        setValues={(tags) => {
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, tags: [...tags] } });
                        }}
                        isChecked={restaurantThemeSettings.editor.haveTags}
                        onCheckedChange={(e) => {
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, haveTags: e.currentTarget.checked } });
                        }}
                        inputPlaceholder={restaurantThemeSettings.editor.tagsText}
                        setInputPlaceholder={(e) => { 
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, tagsText: e.target.value } });
                        }}>
                        <FaTag size={20} />
                    </HaveAddTextInput>
                    <HaveTextInput placeholder={"APPRECIATIONS"} value={restaurantThemeSettings.editor.appreciationsText}
                        setValue={(e) => {
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, appreciationsText: e.target.value } });
                        } }
                        isChecked={restaurantThemeSettings.editor.haveAppreciations}
                        onCheckedChange={(e) => { 
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, haveAppreciations: e.currentTarget.checked } });   
                        } }>
                        <MdOutlineSubtitles size={20} />
                    </HaveTextInput>
                </>
            </BackOfficeSectionCard>
            
            <BackOfficeSectionCard onSectionFocus={() => props.onSectionFocus(BackOfficeEditStageEnum.EDITOR_3)}>
                <>
                    <HaveTextInput placeholder={"NOTIFICATION"} value={restaurantThemeSettings.editor.noticeLabel}
                        setValue={(e) => {
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, noticeLabel: e.target.value } });
                        } }
                        isChecked={restaurantThemeSettings.editor.haveNotice}
                        onCheckedChange={(e) => { 
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, haveNotice: e.currentTarget.checked } });   
                        } }>
                        <IoAlertCircle  size={20} />
                    </HaveTextInput>
                    <TextInput placeholder={""} value={restaurantThemeSettings.editor.consentQuestionLabel}
                        setValue={(e) => {
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, consentQuestionLabel: e.target.value } });
                        } } >
                        <MdOutlineSubtitles size={20} />
                    </TextInput>
                    <TextInput placeholder={""} value={restaurantThemeSettings.editor.consentQuestionAgreeLabel}
                        setValue={(e) => {
                            setRestaurantThemeSettings({ ...restaurantThemeSettings, editor: { ...restaurantThemeSettings.editor, consentQuestionAgreeLabel: e.target.value } });
                        } } >
                        <FaCheckSquare size={20} />
                    </TextInput>
                </>
            </BackOfficeSectionCard>
        </div>
    );
}

