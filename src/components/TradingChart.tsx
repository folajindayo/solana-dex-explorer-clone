import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

// Mock chart data
const chartData = [
  { time: "00:00", price: 0.004, volume: 1200000 },
  { time: "04:00", price: 0.0042, volume: 1500000 },
  { time: "08:00", price: 0.0045, volume: 1800000 },
  { time: "12:00", price: 0.0068, volume: 3200000 },
  { time: "16:00", price: 0.0078, volume: 4500000 },
  { time: "20:00", price: 0.0088, volume: 6200000 },
];

const timeframes = ["5y", "1y", "6m", "3m", "1m", "5d", "1d", "4h", "1h", "15m"];

export const TradingChart = () => {
  return (
    <Card className="p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gain rounded-full"></div>
            <span className="text-sm font-medium">ALT/SOL</span>
            <Badge variant="outline" className="text-xs">Live</Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            Raydium • 15m • dexscreener.com
          </div>
        </div>
        
        <div className="flex gap-1">
          {timeframes.map((tf) => (
            <Button
              key={tf}
              variant={tf === "15m" ? "secondary" : "ghost"}
              size="sm"
              className="h-8 px-3 text-xs"
            >
              {tf}
            </Button>
          ))}
        </div>
      </div>

      <div className="h-96 w-full bg-chart-bg rounded-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              domain={['dataMin', 'dataMax']}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              tickFormatter={(value) => `$${value.toFixed(4)}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--card-foreground))'
              }}
              formatter={(value: any) => [`$${value.toFixed(6)}`, 'Price']}
            />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="hsl(var(--gain))" 
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: 'hsl(var(--gain))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground">Volume: 177.64%</span>
          <div className="flex items-center gap-2">
            <span className="text-gain">H: $0.008866</span>
            <span className="text-loss">L: $0.007306</span>
          </div>
        </div>
        <div className="text-muted-foreground">
          18:37:41 (UTC-4)
        </div>
      </div>
    </Card>
  );
};