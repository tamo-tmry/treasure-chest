import { useState, useEffect, FormEvent } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

type CheckBox = {
    id: string,
    label: string
}

export default async function NewTodo() {
  const data = await fetch(`${process.env.API_URL}/checklist`);
  const items = await data.json();

  return (
    <>
      <TodoForm />
      <TodoList todos={items} />
    </>
  );
}