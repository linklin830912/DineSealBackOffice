import { Switch } from '@mui/material';
import React from 'react';
import SwitchToggle from '../button/switch-toggle';

type HaveInputProps = {
    children?: React.ReactElement,
    isChecked: boolean,
    onCheckedChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}
export default function HaveInput(props : HaveInputProps) { 
    return (
        <>
            <div className="flex flex-row justify-start items-center mb-[-5px]">
                {props.children && props.children}
                <SwitchToggle
                    isChecked={props.isChecked}
                    onCheckedChange={props.onCheckedChange}
                />
            </div>         
        </>
    );
}