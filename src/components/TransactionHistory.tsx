import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Transaction {
  id: string;
  type: "Buy" | "Sell";
  timeAgo: string;
  usdAmount: string;
  altAmount: string;
  solAmount: string;
  price: string;
  maker: string;
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "Sell",
    timeAgo: "11s ago",
    usdAmount: "81.09",
    altAmount: "9,377.31",
    solAmount: "0.4514",
    price: "$0.008666",
    maker: "qm611r"
  },
  {
    id: "2",
    type: "Buy", 
    timeAgo: "11s ago",
    usdAmount: "99.11",
    altAmount: "11,404",
    solAmount: "0.5639",
    price: "$0.008671",
    maker: "zERVW"
  },
  {
    id: "3",
    type: "Buy",
    timeAgo: "11s ago", 
    usdAmount: "6.91",
    altAmount: "796.46",
    solAmount: "0.03936",
    price: "$0.008665",
    maker: "iBABLK"
  },
  {
    id: "4",
    type: "Buy",
    timeAgo: "12s ago",
    usdAmount: "3.61", 
    altAmount: "416.28",
    solAmount: "0.02057",
    price: "$0.008664",
    maker: "mD3f4j"
  },
  {
    id: "5",
    type: "Sell",
    timeAgo: "13s ago",
    usdAmount: "199.48",
    altAmount: "23,061",
    solAmount: "1.13",
    price: "$0.008664",
    maker: "hkQ3PD"
  },
];

export const TransactionHistory = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Transactions</Button>
          <Button variant="ghost" size="sm">Top Traders</Button>
          <Button variant="ghost" size="sm">KOLs</Button>
          <Button variant="ghost" size="sm">Snipers</Button>
        </div>
      </div>

      <div className="space-y-2">
        {/* Header */}
        <div className="grid grid-cols-7 gap-4 text-sm text-muted-foreground font-medium pb-2 border-b">
          <span>DATE</span>
          <span>TYPE</span>
          <span>USD</span>
          <span>ALT</span>
          <span>SOL</span>
          <span>PRICE</span>
          <span>MAKER</span>
        </div>

        {/* Transactions */}
        {mockTransactions.map((tx) => (
          <div key={tx.id} className="grid grid-cols-7 gap-4 text-sm py-2 hover:bg-accent/50 rounded-lg px-2 transition-colors">
            <span className="text-muted-foreground">{tx.timeAgo}</span>
            <Badge variant={tx.type === "Buy" ? "default" : "destructive"} className="w-fit">
              {tx.type}
            </Badge>
            <span className="font-medium">{tx.usdAmount}</span>
            <span className="font-medium">{tx.altAmount}</span>
            <span className="font-medium">{tx.solAmount}</span>
            <span className={`font-medium ${tx.type === "Buy" ? "text-gain" : "text-loss"}`}>
              {tx.price}
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs">{tx.maker}</span>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <ExternalLink className="w-3 h-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <Button variant="outline" size="sm">Load More</Button>
      </div>
    </Card>
  );
};