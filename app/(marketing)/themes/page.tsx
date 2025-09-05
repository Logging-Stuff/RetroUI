"use client";

import { useState } from "react";
import {
    Card,
    Select,
    Text,
} from "@/components/retroui";
import ChartStyleMultiple from "@/preview/charts/area-chart-style-multiple";
import CourseCard from "@/preview/blocks/course-card";
import SignInBlock from "@/preview/blocks/sign-in";
import BarChartStyleMultiple from "@/preview/charts/bar-chart-style-multiple";
import TeamMembersBlock from "@/preview/blocks/team-members";
import CopyTheme from "@/components/CopyTheme";
import { Theme } from "@/config/theme";

const themes: {value: Theme, label: string}[] = [
    {
        value: Theme.Default,
        label: "Default",
    },
    {
        value: Theme.Purple,
        label: "Purple",
    },
    {
        value: Theme.Lime,
        label: "Lime",
    },
    {
        value: Theme.Red,
        label: "Red",
    },
    {
        value: Theme.Lavender,
        label: "Lavender",
    },
    {
        value: Theme.Orange,
        label: "Orange",
    },
    {
        value: Theme.Green,
        label: "Green",
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
    const [theme, setTheme] = useState<Theme>(themes[0].value);
    const [variant, setVariant] = useState(variants[0].value);

    return (
            <section className={`theme-${theme} ${variant} container max-w-8xl mx-auto py-12`}>
                <Text as="h1" className="font-normal mb-12">Don't like <span className="text-primary">{theme === Theme.Default ? "Yellow" : theme.slice(0, 1).toUpperCase() + theme.slice(1)}?</span><br />Well, we have more! 🫡</Text>

                <div className="flex gap-6 items-center justify-between mb-6">
                    <div className="flex gap-6">
                        <Select onValueChange={(value: Theme) => setTheme(value)}>
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

                    <CopyTheme theme={theme} hasRadius={variant === "with-radius"} />
                </div>

                <div className="grid grid-cols-3 w-full gap-6">
                    <div className="flex flex-col gap-6">
                        <Card className="w-full border-muted bg-background shadow-none">
                            <Card.Content>
                                <CourseCard />
                            </Card.Content>
                        </Card>

                        <Card className="w-full border-muted bg-background shadow-none">
                            <Card.Content>
                                <TeamMembersBlock />
                            </Card.Content>
                        </Card>
                    </div>


                    <div className="flex flex-col gap-6">
                        <Card className="w-full border-muted bg-background shadow-none">
                            <Card.Content>
                                <ChartStyleMultiple />
                            </Card.Content>
                        </Card>
                        <Card className="w-full border-muted bg-background shadow-none">
                            <Card.Content>
                                <BarChartStyleMultiple />
                            </Card.Content>
                        </Card>
                    </div>


                    <Card className="w-full border-muted bg-background shadow-none">
                        <Card.Content>
                            <SignInBlock />
                        </Card.Content>
                    </Card>
                </div>
            </section>
    );
}
