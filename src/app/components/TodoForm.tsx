'use client';

import { useState, FormEvent } from 'react';

export default function TodoForm() {
  const [text, setText] = useState('');

  const registTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      label: text
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checklist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
        window.location.reload();
    } else {
      console.error('TODOの登録に失敗しました。');
    }
  };

  return (
    <>
        <form onSubmit={registTodo}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">登録</button>
        </form>
    </>
  );
}