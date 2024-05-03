import CheckItemForm from "@/app/components/organisms/CheckItemForm";
import {Item, ItemAPIResponse} from "@/app/checklist/page";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export default async function ChecklistEdit() {
    const res = await fetch(`${baseUrl}/api/checklist`, {
        method: 'GET',
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    const result = data.contents as ItemAPIResponse[]

    const items: Item[] = result.map(item => ({
        id: item.id,
        label: item.label,
        isChecked: item.is_checked
    }))

    return (
        <>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.label}</li>
                ))}
            </ul>
            <CheckItemForm />
        </>
    )
}