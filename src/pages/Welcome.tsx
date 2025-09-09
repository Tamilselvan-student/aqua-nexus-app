import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, Anchor } from "lucide-react";
import heroOcean from "@/assets/hero-ocean.jpg";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroOcean})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg animate-float">
            MarineScope
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Explore the depths of marine research and connect fishing communities with AI-powered ocean insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Researcher Card */}
          <Card 
            className="group cursor-pointer transition-ocean hover:scale-105 shadow-ocean bg-card/95 backdrop-blur-sm border-border/50"
            onClick={() => navigate('/researcher')}
          >
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full gradient-ocean">
                  <Microscope className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">Researcher</h2>
              <p className="text-muted-foreground mb-6">
                Access comprehensive marine data, oceanographic insights, and biodiversity research tools
              </p>
              <Button className="w-full gradient-ocean hover:opacity-90 text-white border-0">
                Enter Research Portal
              </Button>
            </CardContent>
          </Card>

          {/* Fisherman Card */}
          <Card 
            className="group cursor-pointer transition-ocean hover:scale-105 shadow-ocean bg-card/95 backdrop-blur-sm border-border/50"
            onClick={() => navigate('/fisherman')}
          >
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full gradient-coral">
                  <Anchor className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">Fisherman</h2>
              <p className="text-muted-foreground mb-6">
                Connect with the community, access risk maps, and discover revenue opportunities
              </p>
              <Button className="w-full gradient-coral hover:opacity-90 text-white border-0">
                Join Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Welcome;