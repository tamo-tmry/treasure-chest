import { FormEvent } from "react";

type CheckItemFieldProps = {
    id: string;
    label?: string;
    value?: string;
    onInput?: (e: FormEvent) => void;
};

export default function CheckItemField({
    id,
    label,
    value,
    onInput,
}: CheckItemFieldProps) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="text"
                value={value}
                onInput={onInput ? (e) => onInput(e) : undefined}
            />
        </>
    );
}
