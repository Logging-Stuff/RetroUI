import { BarChart } from "@/components/retroui/charts/BarChart";

const data = [
  { quarter: 'Q1', revenue: 400, profit: 100 },
  { quarter: 'Q2', revenue: 300, profit: 80 },
  { quarter: 'Q3', revenue: 500, profit: 150 },
  { quarter: 'Q4', revenue: 450, profit: 120 }
];

export default function BarChartStyleGrouped() {
    return (
        <BarChart
            data={data}
            index="quarter"
            categories={["revenue", "profit"]}
            fillColors={["var(--primary)", "var(--secondary)"]}
            strokeColors={["var(--primary)", "var(--secondary)"]}
            valueFormatter={(value) => `$${value}k`}
        />
    )
}