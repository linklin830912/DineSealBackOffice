import React from 'react';

type TextInputProps = {
    placeholder: string
    value: string,
    setValue: (e : React.ChangeEvent<HTMLInputElement>)=>void,
    children?: React.ReactElement
}
export default function TextInput(props : TextInputProps) { 
    return (
        <div className="w-full flex flex-row justify-start items-center mb-1">
            {props.children && <div className='mr-5'>
                {props.children}
            </div>  }              
            <input className="w-full bg-mainButton1Color hover:bg-hoverMainButton1Color rounded-[50px] px-3 py-1"
                type="text" placeholder={props.placeholder} value={props.value} onChange={props.setValue} />
        </div>
    );
}