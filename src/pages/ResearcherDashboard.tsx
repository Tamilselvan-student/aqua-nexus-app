import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Waves, Fish, TreePine } from "lucide-react";
import oceanographicImg from "@/assets/oceanographic.jpg";
import fisheriesImg from "@/assets/fisheries.jpg";
import biodiversityImg from "@/assets/biodiversity.jpg";

const ResearcherDashboard = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Oceanographic",
      description: "Study ocean currents, temperature patterns, salinity levels, and deep-sea environments",
      icon: Waves,
      image: oceanographicImg,
      path: "/oceanographic",
      gradient: "gradient-ocean"
    },
    {
      title: "Fisheries",
      description: "Analyze fish stock data, sustainability metrics, and fishing zone insights",
      icon: Fish,
      image: fisheriesImg,
      path: "/fisheries",
      gradient: "gradient-ocean-light"
    },
    {
      title: "Biodiversity",
      description: "Explore marine species, coral reef systems, and conservation data",
      icon: TreePine,
      image: biodiversityImg,
      path: "/biodiversity",
      gradient: "gradient-coral"
    }
  ];

  return (
    <div className="min-h-screen gradient-depth">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/')}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-primary">Researcher Dashboard</h1>
            <p className="text-muted-foreground">Access comprehensive marine research data and insights</p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="group cursor-pointer transition-ocean hover:scale-105 shadow-card hover:shadow-ocean bg-card border-border/50 overflow-hidden"
                onClick={() => navigate(category.path)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-ocean group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className={`absolute top-4 right-4 p-2 rounded-full ${category.gradient}`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">{category.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button className="w-full gradient-ocean hover:opacity-90 text-white border-0">
                    Explore Data
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResearcherDashboard;