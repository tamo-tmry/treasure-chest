import { CheckItemList } from "@/app/components/organisms/CheckItemList";

export const dynamic = "force-dynamic";

export type ItemAPIResponse = {
    id: string;
    label: string;
    is_checked: boolean;
};

export type Item = {
    id: string;
    label: string;
    isChecked: boolean;
};

const items: Item[] = [
    {
        id: "1",
        label: "時計",
        isChecked: false,
    },
    {
        id: "2",
        label: "AirPods",
        isChecked: false,
    },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!

export default async function Checklist() {
    console.log("START REQUEST")
    const res = await fetch(
        `${baseUrl}/api/checklist`,
        {
            method: "GET",
        },
    );
    console.log("DEBUG : ", res.ok, res.status, res.statusText)

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    const result = data.contents as ItemAPIResponse[];

    const items: Item[] = result.map((item) => ({
        id: item.id,
        label: item.label,
        isChecked: item.is_checked,
    }));

    return (
        <>
            <CheckItemList items={items} />
        </>
    );
}
