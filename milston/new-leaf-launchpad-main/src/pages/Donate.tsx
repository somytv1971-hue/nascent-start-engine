
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DollarSign, Heart, Users, Target, Calendar, MapPin } from "lucide-react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

const Donate = () => {
  const [donationForm, setDonationForm] = useState({
    amount: "",
    cause: "",
    donorName: "",
    email: "",
    phone: "",
    message: "",
    anonymous: false
  });

  const campaigns = [
    {
      id: 1,
      title: "Flood Relief Emergency Fund",
      description: "Immediate relief for flood victims in Sylhet and surrounding areas",
      target: 500000,
      raised: 342000,
      donors: 156,
      daysLeft: 12,
      urgent: true,
      category: "Emergency Relief"
    },
    {
      id: 2,
      title: "Medical Emergency Support",
      description: "Fund for emergency medical treatments and ambulance services",
      target: 300000,
      raised: 198000,
      donors: 89,
      daysLeft: 30,
      urgent: false,
      category: "Healthcare"
    },
    {
      id: 3,
      title: "Educational Support for Orphans",
      description: "Provide education and school supplies for orphaned children",
      target: 200000,
      raised: 145000,
      donors: 234,
      daysLeft: 45,
      urgent: false,
      category: "Education"
    },
    {
      id: 4,
      title: "Disaster Preparedness Training",
      description: "Community training programs for disaster response and preparedness",
      target: 150000,
      raised: 67000,
      donors: 45,
      daysLeft: 60,
      urgent: false,
      category: "Prevention"
    }
  ];

  const recentDonations = [
    { name: "Anonymous", amount: 5000, cause: "Flood Relief", time: "2 minutes ago" },
    { name: "Ahmed Hassan", amount: 2000, cause: "Medical Emergency", time: "15 minutes ago" },
    { name: "Fatima Begum", amount: 10000, cause: "Education Support", time: "1 hour ago" },
    { name: "Anonymous", amount: 1500, cause: "Flood Relief", time: "2 hours ago" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your generous donation! Your contribution will save lives.");
    console.log("Donation submission:", donationForm);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setDonationForm(prev => ({ ...prev, [field]: value }));
  };

  const quickAmounts = [500, 1000, 2000, 5000, 10000];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Donation Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 mr-3 text-red-500" />
            <h1 className="text-4xl font-bold text-gray-900">Make a Difference</h1>
            <Heart className="h-8 w-8 ml-3 text-red-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your generosity helps us provide emergency relief, support victims, and build stronger communities across Bangladesh
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-green-600">৳2.5M+</div>
              <div className="text-sm text-gray-600">Total Raised</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">15,000+</div>
              <div className="text-sm text-gray-600">Lives Impacted</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-purple-600">524</div>
              <div className="text-sm text-gray-600">Active Donors</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-1">
            <Card className="border-green-200 bg-white/90 backdrop-blur-sm sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Make a Donation
                </CardTitle>
                <CardDescription>
                  Choose an amount and cause to support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cause">Select Cause</Label>
                    <Select value={donationForm.cause} onValueChange={(value) => handleInputChange('cause', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a cause" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="flood-relief">Flood Relief Emergency</SelectItem>
                        <SelectItem value="medical-emergency">Medical Emergency Support</SelectItem>
                        <SelectItem value="education">Educational Support</SelectItem>
                        <SelectItem value="disaster-prep">Disaster Preparedness</SelectItem>
                        <SelectItem value="general">General Fund</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Donation Amount (৳)</Label>
                    <Input
                      id="amount"
                      placeholder="Enter amount"
                      type="number"
                      value={donationForm.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      required
                    />
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {quickAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleInputChange('amount', amount.toString())}
                          className="text-xs"
                        >
                          ৳{amount}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="donorName">Full Name</Label>
                      <Input
                        id="donorName"
                        placeholder="Your name"
                        value={donationForm.donorName}
                        onChange={(e) => handleInputChange('donorName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        placeholder="Phone number"
                        type="tel"
                        value={donationForm.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      placeholder="your.email@example.com"
                      type="email"
                      value={donationForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Leave a message of hope..."
                      rows={3}
                      value={donationForm.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                    <Heart className="mr-2 h-5 w-5" />
                    Donate Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Active Campaigns & Recent Donations */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Campaigns */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Campaigns</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <Badge className={campaign.urgent ? "bg-red-500" : "bg-blue-500"}>
                          {campaign.category}
                        </Badge>
                        {campaign.urgent && (
                          <Badge variant="destructive" className="text-xs">URGENT</Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg leading-tight">{campaign.title}</CardTitle>
                      <CardDescription className="text-sm">{campaign.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>৳{campaign.raised.toLocaleString()} raised</span>
                          <span>৳{campaign.target.toLocaleString()} goal</span>
                        </div>
                        <Progress 
                          value={(campaign.raised / campaign.target) * 100} 
                          className="h-2"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {campaign.donors} donors
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {campaign.daysLeft} days left
                        </div>
                      </div>

                      <Button 
                        className="w-full" 
                        variant={campaign.urgent ? "default" : "outline"}
                        onClick={() => handleInputChange('cause', campaign.id.toString())}
                      >
                        Support This Cause
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Donations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  Recent Donations
                </CardTitle>
                <CardDescription>Latest contributions from our generous supporters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDonations.map((donation, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{donation.name}</div>
                        <div className="text-sm text-gray-600">for {donation.cause}</div>
                        <div className="text-xs text-gray-500">{donation.time}</div>
                      </div>
                      <div className="text-lg font-bold text-green-600">
                        ৳{donation.amount.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Donations
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Your Impact in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">15,247</div>
              <div className="text-sm text-green-100">People Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">৳2.5M</div>
              <div className="text-sm text-green-100">Total Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">524</div>
              <div className="text-sm text-green-100">Active Donors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm text-green-100">Active Campaigns</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
