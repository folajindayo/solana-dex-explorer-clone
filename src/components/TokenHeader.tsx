import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Bell, ExternalLink, Copy } from "lucide-react";

interface TokenHeaderProps {
  tokenName: string;
  tokenSymbol: string;
  price: string;
  priceSOL: string;
  liquidity: string;
  fdv: string;
  marketCap: string;
  pairAddress: string;
  tokenAddress: string;
}

export const TokenHeader = ({
  tokenName,
  tokenSymbol,
  price,
  priceSOL,
  liquidity,
  fdv,
  marketCap,
  pairAddress,
  tokenAddress,
}: TokenHeaderProps) => {
  return (
    <Card className="p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Token Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-foreground">
              {tokenSymbol.slice(0, 2)}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold">{tokenName}</h1>
              <Badge variant="outline">{tokenSymbol}</Badge>
              <Badge variant="secondary">Solana</Badge>
              <Badge variant="secondary">Raydium - CPMM</Badge>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Pair: {pairAddress.slice(0, 5)}...{pairAddress.slice(-4)}</span>
              <Button variant="ghost" size="sm" className="h-6 px-2">
                <Copy className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="sm" className="h-6 px-2">
                <ExternalLink className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Star className="w-4 h-4 mr-2" />
            Watchlist
          </Button>
          <Button variant="outline" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Alerts
          </Button>
          <Button variant="default" size="sm" className="bg-trading-green hover:bg-trading-green/90">
            Buy
          </Button>
          <Button variant="destructive" size="sm">
            Sell
          </Button>
        </div>
      </div>

      {/* Price Data */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mt-6 pt-6 border-t">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Price USD</p>
          <p className="text-xl font-bold text-gain">{price}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">Price SOL</p>
          <p className="text-lg font-semibold">{priceSOL}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">Liquidity</p>
          <p className="text-lg font-semibold">{liquidity}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">FDV</p>
          <p className="text-lg font-semibold">{fdv}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">Market Cap</p>
          <p className="text-lg font-semibold">{marketCap}</p>
        </div>
      </div>
    </Card>
  );
};