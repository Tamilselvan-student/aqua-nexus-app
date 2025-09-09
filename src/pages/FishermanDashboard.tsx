import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Map, Users, DollarSign, MapPin, AlertTriangle, TrendingUp } from "lucide-react";

const FishermanDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('map');

  const MapTab = () => (
    <div className="space-y-6">
      <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Interactive Risk Map</h3>
          <p className="text-muted-foreground">Real-time ocean conditions and safety zones</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-medium">Safe Zones</p>
                <p className="text-sm text-muted-foreground">12 areas available</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div>
                <p className="font-medium">Caution Areas</p>
                <p className="text-sm text-muted-foreground">5 moderate risk zones</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div>
                <p className="font-medium">High Risk</p>
                <p className="text-sm text-muted-foreground">3 danger zones</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const CommunityTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Community Feed</h3>
        <Button className="gradient-coral text-white">+ New Post</Button>
      </div>
      
      {[1, 2, 3].map((post) => (
        <Card key={post} className="shadow-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-medium">JD</span>
              </div>
              <div>
                <p className="font-medium">Captain John</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Great catch today in sector B-7! Weather conditions were perfect. Sharing coordinates with the community.</p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <button className="hover:text-primary">👍 12 likes</button>
              <button className="hover:text-primary">💬 5 comments</button>
              <button className="hover:text-primary">📤 Share</button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const RevenueTab = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Today's Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span>High-value Tuna Zone</span>
                <span className="font-semibold text-green-600">$450/day</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span>Coastal Shrimp Areas</span>
                <span className="font-semibold text-blue-600">$280/day</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <span>Deep Sea Fishing</span>
                <span className="font-semibold text-orange-600">$380/day</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Market Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Tuna Price</span>
                <span className="text-green-600 font-medium">↗ $8.50/lb</span>
              </div>
              <div className="flex justify-between">
                <span>Shrimp Price</span>
                <span className="text-blue-600 font-medium">→ $12.30/lb</span>
              </div>
              <div className="flex justify-between">
                <span>Salmon Price</span>
                <span className="text-red-600 font-medium">↘ $6.80/lb</span>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm text-muted-foreground">Best selling day: Friday</p>
                <p className="text-sm text-muted-foreground">Peak season starts in 2 weeks</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>AI Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 gradient-ocean-light rounded-lg">
              <h4 className="font-medium mb-2">🎯 Optimal Fishing Window</h4>
              <p className="text-sm">Based on weather patterns and tidal data, tomorrow 6-10 AM offers the best conditions in zone C-4.</p>
            </div>
            <div className="p-4 gradient-coral rounded-lg">
              <h4 className="font-medium mb-2">💰 Revenue Optimization</h4>
              <p className="text-sm">Focus on tuna fishing this week - prices are 15% above average and demand is high.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen gradient-depth pb-20">
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
            <h1 className="text-3xl font-bold text-primary">Fisherman Dashboard</h1>
            <p className="text-muted-foreground">Community insights, maps, and revenue opportunities</p>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'map' && <MapTab />}
          {activeTab === 'community' && <CommunityTab />}
          {activeTab === 'revenue' && <RevenueTab />}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border/50 shadow-ocean">
        <div className="flex justify-around items-center py-4 px-6 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('map')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-ocean ${
              activeTab === 'map' ? 'gradient-ocean text-white' : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <Map className="h-6 w-6" />
            <span className="text-sm font-medium">Map</span>
          </button>
          
          <button
            onClick={() => setActiveTab('community')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-ocean ${
              activeTab === 'community' ? 'gradient-ocean text-white' : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <Users className="h-6 w-6" />
            <span className="text-sm font-medium">Community</span>
          </button>
          
          <button
            onClick={() => setActiveTab('revenue')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-ocean ${
              activeTab === 'revenue' ? 'gradient-ocean text-white' : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <DollarSign className="h-6 w-6" />
            <span className="text-sm font-medium">Revenue</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FishermanDashboard;