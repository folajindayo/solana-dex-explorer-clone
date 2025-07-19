import { Card } from "@/components/ui/card";

interface PriceMetric {
  timeframe: string;
  percentage: string;
  isPositive: boolean;
}

interface PriceMetricsProps {
  metrics: PriceMetric[];
  transactions: string;
  volume: string;
  makers: string;
  buys: string;
  sells: string;
  buyVolume: string;
  sellVolume: string;
  buyers: string;
  sellers: string;
}

export const PriceMetrics = ({
  metrics,
  transactions,
  volume,
  makers,
  buys,
  sells,
  buyVolume,
  sellVolume,
  buyers,
  sellers,
}: PriceMetricsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Price Changes */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Price Changes</h3>
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-sm text-muted-foreground mb-1">{metric.timeframe}</p>
              <p className={`text-lg font-bold ${metric.isPositive ? 'text-gain' : 'text-loss'}`}>
                {metric.isPositive ? '+' : ''}{metric.percentage}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Trading Stats */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Trading Statistics</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Transactions</p>
              <p className="text-lg font-semibold">{transactions}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Volume</p>
              <p className="text-lg font-semibold">{volume}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Makers</p>
              <p className="text-lg font-semibold">{makers}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Buys</p>
              <p className="text-lg font-semibold text-gain">{buys}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Buy Volume</p>
              <p className="text-lg font-semibold text-gain">{buyVolume}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Buyers</p>
              <p className="text-lg font-semibold text-gain">{buyers}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Sells</p>
              <p className="text-lg font-semibold text-loss">{sells}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Sell Volume</p>
              <p className="text-lg font-semibold text-loss">{sellVolume}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Sellers</p>
              <p className="text-lg font-semibold text-loss">{sellers}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};