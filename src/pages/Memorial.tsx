import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Calendar, MapPin, Flame, User, Search } from "lucide-react";
import Navigation from "@/components/Navigation";

const Memorial = () => {
  const memorials = [
    {
      name: "Abdul Rahman",
      date: "1985 - 2024",
      cause: "Flood Relief Volunteer",
      location: "Sylhet",
      description: "A dedicated volunteer who lost his life while helping flood victims. His courage and selflessness will never be forgotten.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fatima Khatun",
      date: "1992 - 2024", 
      cause: "Medical Emergency Responder",
      location: "Dhaka",
      description: "A paramedic who dedicated her life to saving others. She made the ultimate sacrifice during a critical emergency response.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mohammad Ali",
      date: "1980 - 2023",
      cause: "Disaster Response Coordinator",
      location: "Chittagong",
      description: "Led countless rescue operations during natural disasters. His leadership and bravery saved hundreds of lives.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 mr-3 text-red-600" />
            <h1 className="text-4xl font-bold text-gray-900">Memorial Wall</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Honoring the brave souls who made the ultimate sacrifice in service to humanity. 
            Their memory lives on through our continued commitment to helping others.
          </p>
        </div>

        {/* Search and Add Memorial */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  Search Memorials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Input placeholder="Search by name, location, or cause..." className="flex-1" />
                  <Button>Search</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Flame className="h-5 w-5 mr-2 text-orange-600" />
                Add Memorial
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Create Memorial
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Memorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {memorials.map((memorial, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={memorial.image} 
                  alt={memorial.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                  <Flame className="h-4 w-4 text-orange-600" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{memorial.name}</h3>
                  <div className="flex items-center justify-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{memorial.date}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{memorial.location}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {memorial.cause}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {memorial.description}
                </p>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Heart className="h-4 w-4 mr-1" />
                    Honor
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Share Memory
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">Memorial Statistics</CardTitle>
            <CardDescription className="text-center">
              Remembering those who gave their lives in service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">127</div>
                <div className="text-sm text-gray-600">Total Memorials</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">89</div>
                <div className="text-sm text-gray-600">Emergency Responders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">23</div>
                <div className="text-sm text-gray-600">Disaster Relief Workers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                <div className="text-sm text-gray-600">Medical Personnel</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Create Memorial Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Submit a Memorial
            </CardTitle>
            <CardDescription>
              Help us honor someone who made the ultimate sacrifice in service to others
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Full Name" />
                <Input placeholder="Location" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Birth Year" type="number" />
                <Input placeholder="Year of Sacrifice" type="number" />
              </div>
              <Input placeholder="Cause/Role (e.g., Flood Relief Volunteer)" />
              <Textarea 
                placeholder="Share their story and how they helped others..." 
                rows={4}
              />
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Submit Memorial
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Memorial;