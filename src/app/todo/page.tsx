import TodoList from '../components/TodoList';

export type CheckItem = {
    id: number,
    label: string,
    isChecked: boolean
}

const checkItems: CheckItem[] = [
    {
        id: 1,
        label: '時計',
        isChecked: false
    },
    {
        id: 2,
        label: 'AirPods',
        isChecked: false
    },
]

export default async function NewTodo() {

  return (
    <>
      <TodoList checkItemsProp={checkItems} />
    </>
  );
}