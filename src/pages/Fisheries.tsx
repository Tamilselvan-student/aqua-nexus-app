import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Fish, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

const Fisheries = () => {
  const navigate = useNavigate();

  const fishingZones = [
    {
      name: "Coastal Waters",
      depth: "0-200m",
      sustainability: "Good",
      stockLevel: 78,
      primarySpecies: ["Cod", "Haddock", "Flounder"],
      trend: "stable",
      revenue: "$2.1M/month",
      color: "bg-green-500"
    },
    {
      name: "Deep Sea",
      depth: "200m+", 
      sustainability: "Moderate",
      stockLevel: 65,
      primarySpecies: ["Tuna", "Swordfish", "Mahi-mahi"],
      trend: "declining",
      revenue: "$3.8M/month",
      color: "bg-yellow-500"
    },
    {
      name: "Estuarine",
      depth: "0-50m",
      sustainability: "Excellent", 
      stockLevel: 89,
      primarySpecies: ["Shrimp", "Crab", "Oysters"],
      trend: "increasing",
      revenue: "$1.6M/month",
      color: "bg-green-600"
    },
    {
      name: "Inland Waters",
      depth: "Varies",
      sustainability: "Caution",
      stockLevel: 42,
      primarySpecies: ["Salmon", "Trout", "Bass"],
      trend: "declining", 
      revenue: "$950K/month",
      color: "bg-red-500"
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch(trend) {
      case 'increasing': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'declining': return <TrendingDown className="h-4 w-4 text-red-600" />;
      default: return <div className="h-4 w-4 bg-gray-400 rounded-full" />;
    }
  };

  const getSustainabilityColor = (level: string) => {
    switch(level) {
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Good': return 'bg-blue-100 text-blue-800'; 
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Caution': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen gradient-depth">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/researcher')}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-primary">Fisheries Management</h1>
            <p className="text-muted-foreground">Sustainable fishing data and stock assessments</p>
          </div>
        </div>

        {/* Fishing Zones */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
          {fishingZones.map((zone, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer transition-ocean hover:scale-105 shadow-card hover:shadow-ocean"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${zone.color}`}></div>
                    {zone.name}
                  </CardTitle>
                  {getTrendIcon(zone.trend)}
                </div>
                <p className="text-muted-foreground">Depth: {zone.depth}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Stock Level</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${zone.color} transition-all`}
                        style={{ width: `${zone.stockLevel}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{zone.stockLevel}%</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge className={getSustainabilityColor(zone.sustainability)}>
                    {zone.sustainability}
                  </Badge>
                  {zone.sustainability === 'Caution' && (
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                  )}
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Primary Species:</p>
                  <div className="flex flex-wrap gap-1">
                    {zone.primarySpecies.map((species, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {species}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Monthly Revenue</span>
                    <span className="font-semibold text-primary">{zone.revenue}</span>
                  </div>
                </div>

                <Button className="w-full gradient-ocean hover:opacity-90 text-white">
                  Detailed Analysis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Sustainability Insights */}
        <Card className="max-w-4xl mx-auto shadow-ocean">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Fish className="h-5 w-5 text-primary" />
              AI Sustainability Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 gradient-ocean-light rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    Positive Indicators
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• Estuarine zones showing 12% stock recovery</li>
                    <li>• Coastal fishing quotas meeting sustainability targets</li>
                    <li>• New marine protected areas increasing biodiversity</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium mb-2">Recommended Actions</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Maintain current quotas in coastal waters</li>
                    <li>• Implement seasonal restrictions in deep sea zones</li>
                    <li>• Expand aquaculture programs for inland waters</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    Areas of Concern
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• Inland water stocks below sustainable levels</li>
                    <li>• Deep sea tuna populations declining 8% annually</li>
                    <li>• Climate change affecting migration patterns</li>
                  </ul>
                </div>

                <div className="p-4 gradient-coral rounded-lg">
                  <h4 className="font-medium mb-2">Market Opportunities</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Sustainable seafood premium: +25% price</li>
                    <li>• Growing demand for certified fisheries</li>
                    <li>• Export opportunities in eco-conscious markets</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Fisheries;