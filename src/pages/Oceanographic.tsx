import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Thermometer, Waves, Compass, Globe } from "lucide-react";

const Oceanographic = () => {
  const navigate = useNavigate();

  const oceans = [
    {
      name: "Pacific Ocean",
      area: "165.2 million km²",
      avgDepth: "4,280 m",
      temperature: "19.4°C",
      features: ["Ring of Fire", "Mariana Trench", "Great Pacific Garbage Patch"],
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Atlantic Ocean", 
      area: "106.4 million km²",
      avgDepth: "3,646 m",
      temperature: "16.9°C",
      features: ["Mid-Atlantic Ridge", "Sargasso Sea", "Gulf Stream"],
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Indian Ocean",
      area: "70.6 million km²", 
      avgDepth: "3,741 m",
      temperature: "22.0°C",
      features: ["Monsoon System", "Madagascar Ridge", "Red Sea"],
      color: "from-teal-500 to-blue-600"
    },
    {
      name: "Arctic Ocean",
      area: "14.1 million km²",
      avgDepth: "1,038 m", 
      temperature: "-1.8°C",
      features: ["Polar Ice Cap", "Lomonosov Ridge", "Beaufort Gyre"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Southern Ocean",
      area: "20.3 million km²",
      avgDepth: "3,270 m",
      temperature: "1.4°C", 
      features: ["Antarctic Circumpolar Current", "Drake Passage", "Ross Sea"],
      color: "from-blue-400 to-blue-600"
    }
  ];

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
            <h1 className="text-3xl font-bold text-primary">Oceanographic Data</h1>
            <p className="text-muted-foreground">Explore global ocean systems and environmental conditions</p>
          </div>
        </div>

        {/* Ocean Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {oceans.map((ocean, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer transition-ocean hover:scale-105 shadow-card hover:shadow-ocean"
            >
              <CardHeader>
                <div className={`h-32 -mx-6 -mt-6 mb-4 rounded-t-lg bg-gradient-to-br ${ocean.color} flex items-center justify-center`}>
                  <Globe className="h-12 w-12 text-white animate-float" />
                </div>
                <CardTitle className="text-xl">{ocean.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Area</p>
                    <p className="font-medium">{ocean.area}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Avg Depth</p>
                    <p className="font-medium">{ocean.avgDepth}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                  <Thermometer className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Temperature: {ocean.temperature}</span>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Key Features:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {ocean.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full gradient-ocean hover:opacity-90 text-white">
                  View Detailed Analysis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Insights Panel */}
        <Card className="mt-8 max-w-4xl mx-auto shadow-ocean">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Waves className="h-5 w-5 text-primary" />
              AI-Powered Ocean Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Current Patterns</h4>
                <p className="text-sm text-muted-foreground">
                  Global thermohaline circulation is showing seasonal variations. The Gulf Stream maintains 
                  strong northward flow at 2.5 m/s, while Pacific currents show increased El Niño indicators.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Normal Range</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Monitor</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Temperature Anomalies</h4>
                <p className="text-sm text-muted-foreground">
                  Ocean surface temperatures are 0.8°C above historical average. Arctic regions show 
                  accelerated warming patterns, with ice coverage at 85% of normal levels.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Above Average</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Trend Watch</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Oceanographic;