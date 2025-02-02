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
    const { restaurantSettings, setRestaurantSettings } = useBackOfficSettigs();
    return (
        <div className="flex flex-col justify-center">
            <BackOfficeSectionCard onSectionFocus={()=>props.onSectionFocus(BackOfficeEditStageEnum.EDITOR_0)}>
                <>
                    <TextInput placeholder="LOCATION" value={restaurantSettings.editor.locationText} setValue={(e) => {
                        setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, locationText: e.target.value } });
                    }} ><FaLocationDot size={20} /></TextInput>
                    
                    <TextInput placeholder="DESCRIPTION" value={restaurantSettings.editor.takePictureDescription} setValue={(e) => {
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, takePictureDescription: e.target.value } });
                        }} ><MdOutlineSubtitles size={20} />
                    </TextInput>
                </>
            </BackOfficeSectionCard>
            <BackOfficeSectionCard onSectionFocus={() => props.onSectionFocus(BackOfficeEditStageEnum.EDITOR_1)}>
                <>
                    <HaveTextInput placeholder={"TITLE"} value={restaurantSettings.editor.titleText}
                        setValue={(e) => {
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, titleText: e.target.value } });
                        } }
                        isChecked={restaurantSettings.editor.haveTitle}
                        onCheckedChange={(e) => { 
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, haveTitle: e.currentTarget.checked } });   
                        } }>
                        <MdOutlineTitle size={20} />
                    </HaveTextInput>
                    <HaveTextInput placeholder={"CAPTION"} value={restaurantSettings.editor.captionsText}
                        setValue={(e) => {
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, captionsText: e.target.value } });
                        } }
                        isChecked={restaurantSettings.editor.haveCaptions}
                        onCheckedChange={(e) => { 
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, haveCaptions: e.currentTarget.checked } });   
                        } }>
                        <MdOutlineSubtitles size={20} />
                    </HaveTextInput>
                </>
            </BackOfficeSectionCard>

            <BackOfficeSectionCard onSectionFocus={() => props.onSectionFocus(BackOfficeEditStageEnum.EDITOR_2)}>
                <>
                    <TextInput placeholder="FEEDBACK" value={restaurantSettings.editor.feedbackLabel} setValue={(e) => {
                        setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, feedbackLabel: e.target.value } });
                    }} ><MdOutlineTitle size={20} />
                    </TextInput>
                    <HaveInput 
                        isChecked={restaurantSettings.editor.haveRating}
                        onCheckedChange={(e) => { 
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, haveRating: e.currentTarget.checked } });   
                        } }>
                        <TiStarHalfOutline size={20} />
                    </HaveInput>
                    <HaveAddTextInput placeholder={"TAG"} values={restaurantSettings.editor.tags}
                        setValues={(tags) => {
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, tags: [...tags] } });
                        }}
                        isChecked={restaurantSettings.editor.haveTags}
                        onCheckedChange={(e) => {
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, haveTags: e.currentTarget.checked } });
                        }}
                        inputPlaceholder={restaurantSettings.editor.tagsText}
                        setInputPlaceholder={(e) => { 
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, tagsText: e.target.value } });
                        }}>
                        <FaTag size={20} />
                    </HaveAddTextInput>
                    <HaveTextInput placeholder={"APPRECIATIONS"} value={restaurantSettings.editor.appreciationsText}
                        setValue={(e) => {
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, appreciationsText: e.target.value } });
                        } }
                        isChecked={restaurantSettings.editor.haveAppreciations}
                        onCheckedChange={(e) => { 
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, haveAppreciations: e.currentTarget.checked } });   
                        } }>
                        <MdOutlineSubtitles size={20} />
                    </HaveTextInput>
                </>
            </BackOfficeSectionCard>
            
            <BackOfficeSectionCard onSectionFocus={() => props.onSectionFocus(BackOfficeEditStageEnum.EDITOR_3)}>
                <>
                    <HaveTextInput placeholder={"NOTIFICATION"} value={restaurantSettings.editor.noticeLabel}
                        setValue={(e) => {
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, noticeLabel: e.target.value } });
                        } }
                        isChecked={restaurantSettings.editor.haveNotice}
                        onCheckedChange={(e) => { 
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, haveNotice: e.currentTarget.checked } });   
                        } }>
                        <IoAlertCircle  size={20} />
                    </HaveTextInput>
                    <TextInput placeholder={""} value={restaurantSettings.editor.consentQuestionLabel}
                        setValue={(e) => {
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, consentQuestionLabel: e.target.value } });
                        } } >
                        <MdOutlineSubtitles size={20} />
                    </TextInput>
                    <TextInput placeholder={""} value={restaurantSettings.editor.consentQuestionAgreeLabel}
                        setValue={(e) => {
                            setRestaurantSettings({ ...restaurantSettings, editor: { ...restaurantSettings.editor, consentQuestionAgreeLabel: e.target.value } });
                        } } >
                        <FaCheckSquare size={20} />
                    </TextInput>
                </>
            </BackOfficeSectionCard>
        </div>
    );
}

