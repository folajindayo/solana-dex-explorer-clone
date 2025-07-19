import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Bell, 
  BarChart3, 
  Target, 
  TrendingUp, 
  Wallet, 
  Settings,
  Search
} from "lucide-react";

const chainData = [
  { name: "Solana", icon: "◉", color: "bg-purple-500" },
  { name: "Ethereum", icon: "⟠", color: "bg-blue-500" },
  { name: "Base", icon: "🔵", color: "bg-blue-400" },
  { name: "BSC", icon: "⚪", color: "bg-yellow-500" },
  { name: "Polygon", icon: "⬟", color: "bg-purple-400" },
];

const trendingTokens = [
  { symbol: "PNUT", change: "+2847%", chain: "SOL" },
  { symbol: "FRED", change: "+1234%", chain: "SOL" },
  { symbol: "ACT", change: "+891%", chain: "SOL" },
  { symbol: "GOAT", change: "+567%", chain: "SOL" },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-card border-r space-y-4 p-4 h-screen overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold">D</span>
        </div>
        <span className="font-bold text-lg">DEXSCREENER</span>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input 
          placeholder="Search" 
          className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Navigation */}
      <div className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Star className="w-4 h-4 mr-3" />
          Watchlist
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Bell className="w-4 h-4 mr-3" />
          Alerts
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <BarChart3 className="w-4 h-4 mr-3" />
          Multicharts
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Target className="w-4 h-4 mr-3" />
          New Pairs
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <TrendingUp className="w-4 h-4 mr-3" />
          Gainers & Losers
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Wallet className="w-4 h-4 mr-3" />
          Portfolio
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="w-4 h-4 mr-3" />
          Advertise
        </Button>
      </div>

      {/* Chains */}
      <Card className="p-4">
        <h3 className="font-semibold mb-3">Chains</h3>
        <div className="space-y-2">
          {chainData.map((chain) => (
            <Button key={chain.name} variant="ghost" className="w-full justify-start p-2">
              <div className={`w-3 h-3 rounded-full ${chain.color} mr-3`}></div>
              {chain.name}
            </Button>
          ))}
        </div>
      </Card>

      {/* Trending */}
      <Card className="p-4">
        <h3 className="font-semibold mb-3">🔥 Trending</h3>
        <div className="space-y-3">
          {trendingTokens.map((token, index) => (
            <div key={token.symbol} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">#{index + 1}</Badge>
                <span className="font-medium text-sm">{token.symbol}</span>
                <Badge variant="secondary" className="text-xs">{token.chain}</Badge>
              </div>
              <span className="text-xs text-gain font-medium">{token.change}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};