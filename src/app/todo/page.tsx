'use client';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation'
import { CheckItemList } from "@/app/components/organisms/CheckItemList";

export type Item = {
    id: string,
    label: string,
    isChecked: boolean
}

const items: Item[] = [
    {
        id: '1',
        label: '時計',
        isChecked: false
    },
    {
        id: '2',
        label: 'AirPods',
        isChecked: false
    },
]

export default function TodoList() {
    const [checkItems, setCheckItems] = useState<Item[]>(items);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const queryCheckItems = searchParams.get('checkItems');
        if (queryCheckItems) {
            const checkIds = (queryCheckItems as string).split(',');
            const tmpCheckItems = checkItems.map(item => checkIds.includes(item.id) ? {...item, isChecked: true} : item)
            setCheckItems(tmpCheckItems);
        }
    }, [])

    const handleCheckChange = (id: string) => {
        const tmpCheckItems = checkItems.map(item =>
            item.id === id
                ? { ...item, isChecked: !item.isChecked }
                : item);
        const checkedIds = tmpCheckItems.filter(item => item.isChecked).map(item => item.id).join(',');
        router.push(`?checkItems=${checkedIds}`);
        setCheckItems(tmpCheckItems);
    };



    return (
        <CheckItemList
            checkItems={checkItems}
            onItemChange={handleCheckChange}
        />
    );
}