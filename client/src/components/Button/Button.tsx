import {ButtonStyle} from "./Button.style.ts";
import React from "react";

interface ButtonProps {
    color: string
    icon: string
    onClick: () => void
}
export const Button: React.FC<ButtonProps> = ({color, icon, onClick}) => {
    return (
        <ButtonStyle color={color} onClick={onClick}>
            <img src={icon} alt={''}/>
        </ButtonStyle>
    )
}