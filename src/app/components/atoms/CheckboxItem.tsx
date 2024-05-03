type CheckboxItemProps = {
    itemId: string;
    label: string;
    isChecked: boolean;
    onChangeFn: (id: string) => void;
};

export const CheckboxItem = ({
    itemId,
    label,
    isChecked,
    onChangeFn,
}: CheckboxItemProps) => {
    return (
        <>
            <input
                type="checkbox"
                id={itemId}
                checked={isChecked}
                onChange={() => onChangeFn(itemId)}
            />
            <label htmlFor={itemId}>{label}</label>
        </>
    );
};
