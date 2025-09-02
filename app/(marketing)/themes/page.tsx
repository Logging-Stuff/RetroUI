"use client";

import { useState } from "react";
import {
    Button,
    Input,
    Textarea,
    Card,
    Select,
} from "@/components/retroui";
import AccordionStyleDefault from "@/preview/components/accordion-style-default";
import AlertStyleDefaultIcon from "@/preview/components/alert-style-with-icon";
import AvatarStyleCircle from "@/preview/components/avatar-style-circle-sizes";
import BadgeStyleVariants from "@/preview/components/badge-style-variants";

const themes = [
    {
        value: "default",
        label: "Default",
    },
    {
        value: "purple",
        label: "Purple",
    },
    {
        value: "lime",
        label: "Lime",
    },
];

const variants = [
    {
        value: "box",
        label: "Box",
    },
    {
        value: "with-radius",
        label: "Rounded",
    },
];

export default function Themes() {
    const [theme, setTheme] = useState(themes[0].value);
    const [variant, setVariant] = useState(variants[0].value);

    console.log(theme, variant);
    return (
        <main>
            <section className={`theme-${theme} ${variant} container max-w-6xl mx-auto px-4 lg:px-0 lg:my-36`}>
                <div className="flex gap-6 items-center mb-12">
                    <Select onValueChange={(value) => setTheme(value)}>
                        <Select.Trigger>
                            <Select.Value placeholder="Select Color" />
                        </Select.Trigger>
                        <Select.Content>
                            <Select.Group>
                                {
                                    themes.map((theme) => (
                                        <Select.Item key={theme.value} value={theme.value}>
                                            {theme.label}
                                        </Select.Item>
                                    ))
                                }
                            </Select.Group>
                        </Select.Content>
                    </Select>

                    <Select onValueChange={(value) => setVariant(value)}>
                        <Select.Trigger>
                            <Select.Value placeholder="Select Variant" />
                        </Select.Trigger>
                        <Select.Content>
                            <Select.Group>
                                {
                                    variants.map((variant) => (
                                        <Select.Item key={variant.value} value={variant.value}>
                                            {variant.label}
                                        </Select.Item>
                                    ))
                                }
                            </Select.Group>
                        </Select.Content>
                    </Select>
                </div>


                <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-8">
                    <Card className="w-full bg-background shadow-none">
                        <Card.Header>
                            <Card.Title>Button</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <div className="flex flex-wrap gap-4">
                                <Button>Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                            </div>
                        </Card.Content>
                    </Card>
                    <Card className="w-full bg-background shadow-none">
                        <Card.Header>
                            <Card.Title>Badge</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <BadgeStyleVariants />
                        </Card.Content>
                    </Card>
                    <Card className="w-full bg-background shadow-none">
                        <Card.Header>
                            <Card.Title>Avatar</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <AvatarStyleCircle />
                        </Card.Content>
                    </Card>
                    <Card className="w-full bg-background shadow-none">
                        <Card.Header>
                            <Card.Title>Accordion</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <AccordionStyleDefault />
                        </Card.Content>
                    </Card>
                    <Card className="w-full bg-background shadow-none">
                        <Card.Header>
                            <Card.Title>Input & Textarea</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <Input />
                            <div className="h-4"></div>
                            <Textarea className="border-foreground" />
                        </Card.Content>
                    </Card>

                    <Card className="w-full bg-background shadow-none">
                        <Card.Header>
                            <Card.Title>Alert</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <AlertStyleDefaultIcon />
                        </Card.Content>
                    </Card>
                </div>
            </section>
        </main>
    );
}
