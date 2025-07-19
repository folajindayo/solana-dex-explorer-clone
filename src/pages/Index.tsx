import { Sidebar } from "@/components/Sidebar";
import { TokenHeader } from "@/components/TokenHeader";
import { PriceMetrics } from "@/components/PriceMetrics";
import { TradingChart } from "@/components/TradingChart";
import { TransactionHistory } from "@/components/TransactionHistory";

const Index = () => {
  const priceMetrics = [
    { timeframe: "5M", percentage: "12.27%", isPositive: true },
    { timeframe: "1H", percentage: "45.81%", isPositive: true },
    { timeframe: "6H", percentage: "79.92%", isPositive: true },
    { timeframe: "24H", percentage: "647%", isPositive: true },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 p-6 space-y-6">
        <TokenHeader
          tokenName="Altcoin"
          tokenSymbol="ALT"
          price="$0.008810"
          priceSOL="0.00004920 SOL"
          liquidity="$514K"
          fdv="$8.6M"
          marketCap="$7.9M"
          pairAddress="BJGbPyDARmcgJ7CRwm623nrjF2gpLkpsSwWNsjxubTpG"
          tokenAddress="Cdq1WR1d4i2hMrqKUWgZeUbRpkhamGHSvm1f6ATpuray"
        />

        <PriceMetrics
          metrics={priceMetrics}
          transactions="54,849"
          volume="$12.7M"
          makers="12,864"
          buys="32,086"
          sells="22,763"
          buyVolume="$6.4M"
          sellVolume="$6.2M"
          buyers="12,149"
          sellers="7,090"
        />

        <TradingChart />

        <TransactionHistory />
      </div>
    </div>
  );
};

export default Index;
