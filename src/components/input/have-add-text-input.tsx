import { Switch } from '@mui/material';
import React, { useState } from 'react';
import TextInput from './text-input';
import { FaTrashAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import SwitchToggle from '../button/switch-toggle';

type HaveAddTextInputProps = {
    inputPlaceholder: string,
    setInputPlaceholder: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    values: string[],
    setValues: (values: string[])=>void,
    children?: React.ReactElement,
    isChecked: boolean,
    onCheckedChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}
export default function HaveAddTextInput(props: HaveAddTextInputProps) {
    // const [tags, setTags] = useState<string[]>([""])
    return (
        <>
            <div className="flex flex-row justify-start items-center mb-[-5px]">
                {props.children && props.children}
                <SwitchToggle
                    isChecked={props.isChecked}
                    onCheckedChange={props.onCheckedChange}
                />
            </div>
            {props.isChecked && <div className='flex flex-col justify-center items-center'>
                <TextInput placeholder={props.inputPlaceholder} value={props.inputPlaceholder} setValue={props.setInputPlaceholder}></TextInput>
                    {props.values.map((tag, index) => <div className='flex flex-row items-center' key={index}>
                        <div className='mr-3'>
                            <TextInput value={tag} 
                                placeholder={props.placeholder}
                                setValue={(e) => {
                                    let newTags = [...props.values];
                                    newTags[index] = e.currentTarget.value;
                                    props.setValues(newTags);
                                }}
                            ></TextInput>
                        </div>
                        <FaTrashAlt size={15} onClick={() => props.setValues(props.values.filter((_, i) => i!== index))} />
                    </div>)}
                <div className='p-1'>
                    <FaPlusCircle size={15} onClick={()=> props.setValues([...props.values, ""])}/>
                </div>            
            </div>}            
        </>
    );
}