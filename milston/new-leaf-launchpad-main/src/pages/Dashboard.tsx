
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Heart, DollarSign, Users, Bell, Clock, MapPin, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const recentEmergencies = [
    {
      id: 1,
      type: "Medical Emergency",
      location: "Dhanmondi, Dhaka",
      status: "Responding",
      time: "5 minutes ago",
      priority: "High"
    },
    {
      id: 2,
      type: "Fire Incident",
      location: "Chittagong",
      status: "Resolved",
      time: "2 hours ago",
      priority: "Critical"
    },
    {
      id: 3,
      type: "Flood Relief",
      location: "Sylhet",
      status: "Ongoing",
      time: "1 day ago",
      priority: "Medium"
    }
  ];

  const donations = [
    { cause: "Flood Relief Fund", amount: "৳25,000", date: "Today" },
    { cause: "Medical Emergency", amount: "৳15,000", date: "Yesterday" },
    { cause: "Educational Support", amount: "৳30,000", date: "2 days ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Emergency Response Dashboard</h1>
          <p className="text-gray-600">Real-time overview of emergency situations and humanitarian activities</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-red-700">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Active Emergencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">23</div>
              <p className="text-sm text-red-600">+5 in last hour</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-blue-700">
                <Users className="h-5 w-5 mr-2" />
                Volunteers Active
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">142</div>
              <p className="text-sm text-blue-600">Across 12 districts</p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-green-700">
                <DollarSign className="h-5 w-5 mr-2" />
                Funds Raised Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">৳85K</div>
              <p className="text-sm text-green-600">Goal: ৳200K</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-purple-700">
                <Heart className="h-5 w-5 mr-2" />
                Lives Supported
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">1,247</div>
              <p className="text-sm text-purple-600">This month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Emergencies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-red-600" />
                Recent Emergencies
              </CardTitle>
              <CardDescription>Latest emergency situations requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentEmergencies.map((emergency) => (
                  <div key={emergency.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-semibold text-gray-900">{emergency.type}</h4>
                        <Badge 
                          className={`ml-2 ${
                            emergency.priority === 'Critical' ? 'bg-red-500' :
                            emergency.priority === 'High' ? 'bg-orange-500' : 'bg-yellow-500'
                          }`}
                        >
                          {emergency.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {emergency.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {emergency.time}
                      </div>
                    </div>
                    <Badge variant={emergency.status === 'Resolved' ? 'default' : 'secondary'}>
                      {emergency.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Emergencies
              </Button>
            </CardContent>
          </Card>

          {/* Recent Donations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                Recent Donations
              </CardTitle>
              <CardDescription>Latest contributions to various causes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {donations.map((donation, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{donation.cause}</h4>
                      <p className="text-sm text-gray-600">{donation.date}</p>
                    </div>
                    <div className="text-lg font-bold text-green-600">{donation.amount}</div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Donations
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact Section */}
        <Card className="mt-8 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center text-red-700">
              <Phone className="h-5 w-5 mr-2" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">999</div>
                <div className="text-sm text-gray-600">General Emergency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">100</div>
                <div className="text-sm text-gray-600">Police</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">16163</div>
                <div className="text-sm text-gray-600">Fire Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">199</div>
                <div className="text-sm text-gray-600">Medical Emergency</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
