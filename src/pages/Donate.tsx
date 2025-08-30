import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DollarSign, Heart, Users, Target, Zap, Shield, Droplets, Building } from "lucide-react";
import Navigation from "@/components/Navigation";

const Donate = () => {
  const campaigns = [
    {
      id: 1,
      title: "Emergency Flood Relief - Sylhet",
      description: "Urgent assistance needed for flood victims in Sylhet region. Funds will provide food, shelter, and medical aid.",
      raised: 850000,
      target: 1200000,
      donors: 1547,
      category: "Emergency",
      icon: Droplets,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Medical Equipment for Rural Hospitals",
      description: "Essential medical equipment for remote hospitals to improve emergency response capabilities.",
      raised: 320000,
      target: 500000,
      donors: 423,
      category: "Healthcare",
      icon: Shield,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Emergency Response Training Centers",
      description: "Establishing training centers across Bangladesh to build local emergency response capabilities.",
      raised: 180000,
      target: 800000,
      donors: 289,
      category: "Infrastructure",
      icon: Building,
      color: "bg-purple-500"
    }
  ];

  const donationAmounts = [500, 1000, 2500, 5000, 10000];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 mr-3 text-red-600" />
            <h1 className="text-4xl font-bold text-gray-900">Donate for Lives</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your contribution directly saves lives and supports communities in crisis. 
            Every taka makes a difference in our emergency response efforts.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <DollarSign className="h-8 w-8 mx-auto text-green-600 mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">৳2.5M+</div>
              <div className="text-sm text-gray-600">Total Raised</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 mx-auto text-blue-600 mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">15,000+</div>
              <div className="text-sm text-gray-600">Lives Supported</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Target className="h-8 w-8 mx-auto text-purple-600 mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">89%</div>
              <div className="text-sm text-gray-600">Goal Achievement</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Zap className="h-8 w-8 mx-auto text-orange-600 mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Emergency Response</div>
            </CardContent>
          </Card>
        </div>

        {/* Active Campaigns */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Active Campaigns</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${campaign.color} bg-opacity-10 mb-3`}>
                      <campaign.icon className={`h-6 w-6 ${campaign.color.replace('bg-', 'text-')}`} />
                    </div>
                    <Badge variant="secondary">{campaign.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{campaign.title}</CardTitle>
                  <CardDescription>{campaign.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>৳{(campaign.raised / 1000).toFixed(0)}K raised</span>
                        <span>৳{(campaign.target / 1000).toFixed(0)}K goal</span>
                      </div>
                      <Progress value={(campaign.raised / campaign.target) * 100} className="h-2" />
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{campaign.donors} donors</span>
                      </div>
                      <div className="text-green-600 font-semibold">
                        {Math.round((campaign.raised / campaign.target) * 100)}% funded
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Donate Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Donation */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Make a Quick Donation</CardTitle>
            <CardDescription>
              Support our general emergency response fund to help us respond rapidly to any crisis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Amount (BDT)
              </label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {donationAmounts.map((amount) => (
                  <Button key={amount} variant="outline" className="h-12">
                    ৳{amount}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Custom Amount
              </label>
              <Input placeholder="Enter amount" type="number" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Phone Number" type="tel" />
            </div>
            
            <Input placeholder="Email Address" type="email" />

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Your Impact:</h4>
              <div className="text-sm text-green-700 space-y-1">
                <p>• ৳500 provides emergency food for 1 family for 3 days</p>
                <p>• ৳1000 supplies medical aid to 5 people</p>
                <p>• ৳2500 covers rescue equipment for 1 emergency team</p>
                <p>• ৳5000 funds complete emergency response for 1 incident</p>
              </div>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>

            <div className="text-center text-xs text-gray-500">
              <p>Secure payment processing • Tax receipts provided • 100% of donations go to aid</p>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Donate With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">100% Transparent</h4>
              <p className="text-gray-600">Every taka is tracked and reported. See exactly how your donation is used.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Rapid Response</h4>
              <p className="text-gray-600">Your donations enable us to respond to emergencies within minutes.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Proven Impact</h4>
              <p className="text-gray-600">15,000+ lives supported with 99.8% successful emergency responses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;