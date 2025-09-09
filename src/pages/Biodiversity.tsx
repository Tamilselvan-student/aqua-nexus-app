import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Leaf, AlertTriangle, Shield, Eye } from "lucide-react";

const Biodiversity = () => {
  const navigate = useNavigate();

  const ecosystems = [
    {
      name: "Coral Reefs",
      threat: "Critical",
      species: 847,
      coverage: "28% decline since 2010",
      keySpecies: ["Staghorn Coral", "Parrotfish", "Clownfish"],
      threats: ["Ocean Acidification", "Bleaching", "Pollution"],
      conservation: "Marine Protected Areas",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "Marine Mammals", 
      threat: "Moderate",
      species: 156,
      coverage: "Stable populations",
      keySpecies: ["Blue Whale", "Dolphin", "Manatee"],
      threats: ["Ship Strikes", "Noise Pollution", "Fishing Nets"],
      conservation: "Migration Corridors",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Sea Turtles",
      threat: "High",
      species: 7,
      coverage: "6 of 7 species threatened",
      keySpecies: ["Loggerhead", "Green Turtle", "Leatherback"],
      threats: ["Plastic Pollution", "Nesting Disruption", "Climate Change"],
      conservation: "Nesting Beach Protection",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Deep-Sea Species",
      threat: "Unknown",
      species: 2400,
      coverage: "Largely unexplored",
      keySpecies: ["Giant Squid", "Anglerfish", "Tube Worms"],
      threats: ["Deep-Sea Mining", "Climate Change", "Pollution"],
      conservation: "Research & Monitoring",
      color: "from-purple-400 to-indigo-600"
    },
    {
      name: "Plankton",
      threat: "Moderate",
      species: 12000,
      coverage: "Foundation of food web", 
      keySpecies: ["Diatoms", "Copepods", "Krill"],
      threats: ["Ocean Warming", "Acidification", "Microplastics"],
      conservation: "Water Quality Management",
      color: "from-teal-400 to-cyan-600"
    }
  ];

  const getThreatColor = (threat: string) => {
    switch(threat) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Unknown': return 'bg-gray-100 text-gray-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  const getThreatIcon = (threat: string) => {
    switch(threat) {
      case 'Critical': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'High': return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      case 'Moderate': return <Eye className="h-4 w-4 text-yellow-600" />;
      default: return <Shield className="h-4 w-4 text-gray-600" />;
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
            <h1 className="text-3xl font-bold text-primary">Marine Biodiversity</h1>
            <p className="text-muted-foreground">Species conservation and ecosystem health monitoring</p>
          </div>
        </div>

        {/* Ecosystem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
          {ecosystems.map((ecosystem, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer transition-ocean hover:scale-105 shadow-card hover:shadow-ocean"
            >
              <CardHeader>
                <div className={`h-24 -mx-6 -mt-6 mb-4 rounded-t-lg bg-gradient-to-br ${ecosystem.color} flex items-center justify-center`}>
                  <Leaf className="h-8 w-8 text-white animate-float" />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{ecosystem.name}</CardTitle>
                  {getThreatIcon(ecosystem.threat)}
                </div>
                <Badge className={getThreatColor(ecosystem.threat)}>
                  {ecosystem.threat} Risk
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Species Count</p>
                    <p className="font-semibold">{ecosystem.species.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Status</p>
                    <p className="font-medium text-xs">{ecosystem.coverage}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Key Species:</p>
                  <div className="flex flex-wrap gap-1">
                    {ecosystem.keySpecies.map((species, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {species}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Main Threats:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {ecosystem.threats.map((threat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        {threat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t">
                  <p className="text-sm">
                    <span className="text-muted-foreground">Conservation: </span>
                    <span className="font-medium">{ecosystem.conservation}</span>
                  </p>
                </div>

                <Button className="w-full gradient-ocean hover:opacity-90 text-white">
                  Species Gallery
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Conservation Status Overview */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Conservation Success Stories
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium mb-2">Humpback Whale Recovery</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Population increased by 68% over the last 20 years through international protection efforts.
                </p>
                <Badge className="bg-green-100 text-green-800">Success</Badge>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium mb-2">Marine Protected Area Expansion</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  15% of global oceans now protected, supporting biodiversity recovery in key regions.
                </p>
                <Badge className="bg-blue-100 text-blue-800">Ongoing</Badge>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium mb-2">Coral Restoration Programs</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Innovative techniques showing 40% success rate in reef restoration projects.
                </p>
                <Badge className="bg-purple-100 text-purple-800">Promising</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                Urgent Conservation Needs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-medium mb-2">Vaquita Porpoise</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Less than 30 individuals remain. Immediate action needed to prevent extinction.
                </p>
                <Badge className="bg-red-100 text-red-800">Critical</Badge>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-medium mb-2">North Atlantic Right Whale</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Ship strikes and fishing gear entanglement threaten remaining 340 individuals.
                </p>
                <Badge className="bg-orange-100 text-orange-800">Endangered</Badge>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium mb-2">Deep-Sea Ecosystems</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Mining activities threaten undiscovered species in abyssal plains and hydrothermal vents.
                </p>
                <Badge className="bg-yellow-100 text-yellow-800">At Risk</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Biodiversity;