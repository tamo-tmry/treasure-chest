import { useState, useEffect, FormEvent } from 'react';

type CheckBox = {
    id: string,
    label: string
}

export default async function TodoList({ todos }: any) {

  return (
    <>
      <ul>
        {todos.map((checkbox: CheckBox) => (
          <li key={checkbox.id}>
            <input type='checkbox' id={checkbox.id.toString()} />
            <label htmlFor={checkbox.id.toString()}>{checkbox.label}</label>
          </li>
        ))}
      </ul>
    </>
  );
}