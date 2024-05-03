"use client";

import Button, { ButtonType } from "@/app/components/atoms/Button";
import CheckItemField from "@/app/components/atoms/CheckItemField";

const buttonType: ButtonType = "submit";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export default function CheckItemForm() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await postNewCheckList(event.target.label.value);
  };

  const postNewCheckList = async (value: string) => {
    const response = await fetch(`${baseUrl}/api/checklist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ label: value, is_checked: false }),
    });

    if (!response.ok) {
      console.error("POST request failed", response);
    } else {
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <CheckItemField id="label" label="" />
      <Button type={buttonType} text="追加" />
    </form>
  );
}
