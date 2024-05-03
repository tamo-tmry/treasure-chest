import { ButtonHTMLAttributes } from "react";

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>["type"];

type ButtonProps = {
    text: string;
    type?: ButtonType;
};

export default function Button({ text, type = "button" }: ButtonProps) {
    return <button type={type}>{text}</button>;
}
