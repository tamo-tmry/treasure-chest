import { Meta, StoryObj } from '@storybook/react';

import CheckItemForm from "@/app/components/organisms/CheckItemForm";
import {http, HttpResponse} from "msw";

const meta: Meta<typeof CheckItemForm> = {
    title: 'organisms/CheckItemForm',
    component: CheckItemForm,
};
export default meta;

type Story = StoryObj<typeof CheckItemForm>;

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!

export const Default: Story = {
    parameters: {
        msw: {
            handlers: [
                http.post(`${baseUrl}/api/checklist`, () => {
                    return HttpResponse.json({
                        id: 1,
                        label: 'label',
                        is_checked: true
                    })
                })
            ]
        }
    }
};