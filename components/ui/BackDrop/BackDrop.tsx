import React, {useState} from 'react';
import styles from "./styles.module.less"
import ReactDOM from "react-dom";

interface backDropProps {
    children:any,
    isOpen:any
}
const BackDrop:React.FC<backDropProps> = ({children,isOpen}) => {
    const [open,setOpen] = useState<boolean>(false)
    const isOpenDrop = () =>{
        isOpen(false)
    }
    return ReactDOM.createPortal(
        <div className={styles.backDrop} onClick={isOpenDrop}>
            {children}
        </div>
    , document.getElementById('backDrop') as HTMLElement);
};

export default BackDrop;