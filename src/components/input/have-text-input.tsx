import { Switch } from '@mui/material';
import React from 'react';
import TextInput from './text-input';
import SwitchToggle from '../button/switch-toggle';

type HaveTextInputProps = {
    placeholder: string,
    value: string,
    setValue: (e : React.ChangeEvent<HTMLInputElement>)=>void,
    children?: React.ReactElement,
    isChecked: boolean,
    onCheckedChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}
export default function HaveTextInput(props : HaveTextInputProps) { 
    return (
        <>
            <div className="flex flex-row justify-start items-center mb-[-5px]">
                {props.children && props.children}
                <SwitchToggle
                    isChecked={props.isChecked}
                    onCheckedChange={props.onCheckedChange}/>
            </div>
            { props.isChecked && <TextInput placeholder={props.placeholder} value={props.value} setValue={props.setValue} ></TextInput>}            
        </>
    );
}