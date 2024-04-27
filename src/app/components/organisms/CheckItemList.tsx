import { Item } from "@/app/todo/page";
import { CheckboxItem } from '@/app/components/atoms/CheckboxItem';

type CheckItemListProps = {
    checkItems: Item[];
    onItemChange: (id: string) => void;
}

export const CheckItemList = ({checkItems, onItemChange}: CheckItemListProps) => {
    return (
        <ul>
            {checkItems.map((checkItem) => (
                <li key={checkItem.id}>
                    <CheckboxItem
                        itemId={checkItem.id.toString()}
                        label={checkItem.label}
                        isChecked={checkItem.isChecked}
                        onChangeFn={onItemChange}
                    />
                </li>
            ))}
        </ul>
    );
}