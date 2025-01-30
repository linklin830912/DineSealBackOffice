import { IoClose } from "react-icons/io5";
type PopupSectionProps = {
    title:string,
    children?: React.ReactNode,
    handleClose: ()=>void
}
export default function PopupSection(props: PopupSectionProps) { 
    
    return (
        <div className="absolute top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-subBackgroundColor z-50">
            <div className="bg-mainBackground0Color flex flex-col relative rounded-xl px-2 py-1">
                <div className="w-full flex justify-end">
                    <button className="w-fit" onClick={props.handleClose}><IoClose /></button>
                </div>
                <div className="w-full text-center text-h6 mb-1">-{props.title}-</div>
                <div>{props.children}</div>                
            </div>
        </div>
    );
}