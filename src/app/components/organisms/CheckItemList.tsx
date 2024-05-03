'use client';

import { Item } from "@/app/checklist/page";
import { CheckboxItem } from '@/app/components/atoms/CheckboxItem';
import {  useState } from "react"

type CheckItemListProps = {
    items: Item[];
}

export const CheckItemList = ({ items }: CheckItemListProps) => {
    const [checkItems, setCheckItems] = useState<Item[]>(items);

    const handleCheckChange = (id: string) => {
        const tmpCheckItems = checkItems.map(item =>
            item.id === id
                ? { ...item, isChecked: !item.isChecked }
                : item);
        setCheckItems(tmpCheckItems);
        const isAllChecked = tmpCheckItems.every(checkItem => checkItem.isChecked)
        if (isAllChecked) {
            // 履歴にプッシュ
        }
    };

    return (
        <ul>
            {checkItems.map((checkItem) => (
                <li key={checkItem.id}>
                    <CheckboxItem
                        itemId={checkItem.id.toString()}
                        label={checkItem.label}
                        isChecked={checkItem.isChecked}
                        onChangeFn={handleCheckChange}
                    />
                </li>
            ))}
        </ul>
    );
}