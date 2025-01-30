"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { barCharData, chartConfig } from "@/data/index"

export function StorageBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Storage used</CardTitle>
        <CardDescription>
          155.57 MB
        </CardDescription>
      </CardHeader>
      <CardContent className="py-4">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={barCharData}>
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={true}
              axisLine={false}
              tickMargin={3}
              tickCount={10}
            />
            {['image', 'video', 'audio', 'document'].map((key) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="a"
                fill={`var(--color-${key})`}
                radius={[6, 6, 0, 0]}
              />
            ))}
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-[180px]"
                  formatter={(value, name,) => (
                    <>
                      <div
                        className="h-2.5 w-1 shrink-0 rounded-[2px] bg-[--color-bg]"
                        style={
                          {
                            "--color-bg": `var(--color-${name})`,
                          } as React.CSSProperties
                        }
                      />
                      {chartConfig[name as keyof typeof chartConfig]?.label || name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {value}
                        <span className="font-normal text-muted-foreground">
                          MB
                        </span>
                      </div>
                    </>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
