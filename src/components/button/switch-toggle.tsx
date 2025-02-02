import { Switch } from '@mui/material';
import React from 'react';
type SwitchToggleProps = {
    isChecked: boolean,
    onCheckedChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}
export default function SwitchToggle(props: SwitchToggleProps) { 
    return <Switch
                        checked={props.isChecked}
                        onChange={props.onCheckedChange}
                         sx={{
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                backgroundColor: 'black',
                                opacity: 1
                             },
                             '& .MuiSwitch-track': {
                                width:24
                             },
                             '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-thumb': {
                                left: -6
                             },
                            '& .MuiSwitch-thumb': {
                                width: 11, 
                                height: 11, 
                                position: 'relative',
                                color: 'white',
                                top: 4.7,
                                left: 5
                             }, 
                            '& .MuiSwitch-switchBase': {
                                //padding: 9, // Adjust padding to align thumb
                                '&.Mui-checked': {
                                transform: 'translateX(10px)', // Adjust movement when checked
                                },
                            },    
                        }}
                    />
}