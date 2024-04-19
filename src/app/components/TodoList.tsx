"use client";

import {CheckItem} from "@/app/todo/page";
import {useEffect, useState} from "react";
import { useRouter, useSearchParams } from 'next/navigation'

export default function TodoList({ checkItemsProp }: { checkItemsProp: CheckItem[] }) {
   const [checkItems, setCheckItems] = useState<CheckItem[]>(checkItemsProp);
   const router = useRouter();
   const searchParams = useSearchParams();

   useEffect(() => {
       const queryCheckItems = searchParams.get('checkItems');
       if (queryCheckItems) {
          const checkIds = (queryCheckItems as string).split(',').map(item => Number(item));
          const tmpCheckItems = checkItems.map(item => checkIds.includes(item.id) ? { ...item, isChecked: true } : item)
          setCheckItems(tmpCheckItems);
       }
   }, [searchParams, checkItems]);

   const handleCheckChange = (id: number) => {
       setCheckItems(prevCheckItems => {
           const tmpCheckItems = prevCheckItems.map(item => item.id === id ? { ...item, isChecked: !item.isChecked } : item);
           const checkedIds = tmpCheckItems.filter(item => item.isChecked).map(item => item.id).join(',');
           router.push(`?checkItems=${checkedIds}`);
           return tmpCheckItems
       });
   };

  return (
    <>
      <ul>
        {checkItems.map((checkItem) => (
          <li key={checkItem.id}>
            <input type='checkbox' id={checkItem.id.toString()} onChange={() => handleCheckChange(checkItem.id)} checked={checkItem.isChecked} />
            <label htmlFor={checkItem.id.toString()}>{checkItem.label}</label>
          </li>
        ))}
      </ul>
    </>
  );
}