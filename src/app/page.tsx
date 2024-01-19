export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {
          checkboxes.map((checkbox) => (
            <li key={checkbox.id}>
              <input type='checkbox' id={checkbox.id.toString()} />
              <label htmlFor={checkbox.id.toString()}>{checkbox.label}</label>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

const checkboxes = [
  {
    id: 1,
    label: 'やること①'
  },
  {
    id: 2,
    label: 'やること②'
  },
  {
    id: 3,
    label: 'やること③'
  }
]