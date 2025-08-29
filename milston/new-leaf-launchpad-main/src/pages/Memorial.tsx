
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Heart, Flower, Flame, Calendar, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

const Memorial = () => {
  const [memorialForm, setMemorialForm] = useState({
    name: "",
    dateOfBirth: "",
    dateOfPassing: "",
    message: "",
    relationship: ""
  });

  const memorialEntries = [
    {
      id: 1,
      name: "রহিম উদ্দিন",
      dateOfPassing: "July 15, 2024",
      message: "A loving father and dedicated community leader who helped countless families during the floods. His kindness will never be forgotten.",
      submittedBy: "Family",
      tributes: 47,
      candles: 156
    },
    {
      id: 2,
      name: "ফাতেমা খাতুন",
      dateOfPassing: "June 8, 2024",
      message: "A brave teacher who saved her students during the school fire. Her courage and dedication to education inspire us all.",
      submittedBy: "Students & Colleagues",
      tributes: 89,
      candles: 234
    },
    {
      id: 3,
      name: "আবদুল কারিম",
      dateOfPassing: "August 3, 2024",
      message: "A volunteer firefighter who gave his life protecting others. His sacrifice will always be remembered.",
      submittedBy: "Fire Department",
      tributes: 156,
      candles: 445
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Memorial tribute submitted successfully. Thank you for honoring their memory.");
    console.log("Memorial submission:", memorialForm);
    setMemorialForm({
      name: "",
      dateOfBirth: "",
      dateOfPassing: "",
      message: "",
      relationship: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setMemorialForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Memorial Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 mr-3 text-red-500" />
            <h1 className="text-4xl font-bold text-gray-900">Memorial Garden</h1>
            <Heart className="h-8 w-8 ml-3 text-red-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Honoring the memory of those we've lost and celebrating their lasting impact on our communities
          </p>
          <div className="flex items-center justify-center mt-6 space-x-6">
            <div className="flex items-center text-gray-600">
              <Flame className="h-5 w-5 mr-2 text-yellow-500" />
              <span>835 Candles Lit</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
              <span>292 Tributes</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Memorial Submission Form */}
          <div className="lg:col-span-1">
            <Card className="border-purple-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <Flower className="h-5 w-5 mr-2" />
                  Submit a Memorial
                </CardTitle>
                <CardDescription>
                  Honor someone special who has passed away
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Name of the deceased"
                      value={memorialForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={memorialForm.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfPassing">Date of Passing</Label>
                      <Input
                        id="dateOfPassing"
                        type="date"
                        value={memorialForm.dateOfPassing}
                        onChange={(e) => handleInputChange('dateOfPassing', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="relationship">Your Relationship</Label>
                    <Input
                      id="relationship"
                      placeholder="e.g., Family, Friend, Colleague"
                      value={memorialForm.relationship}
                      onChange={(e) => handleInputChange('relationship', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Memorial Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Share your memories and tribute..."
                      rows={4}
                      value={memorialForm.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    <Heart className="mr-2 h-4 w-4" />
                    Submit Memorial
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Memorial Entries */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Memorials</h2>
            
            {memorialEntries.map((memorial) => (
              <Card key={memorial.id} className="border-pink-200 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{memorial.name}</CardTitle>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{memorial.dateOfPassing}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {memorial.submittedBy}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">{memorial.message}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-blue-600 hover:text-blue-700">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span className="text-sm">{memorial.tributes} tributes</span>
                      </button>
                      <button className="flex items-center text-yellow-600 hover:text-yellow-700">
                        <Flame className="h-4 w-4 mr-1" />
                        <span className="text-sm">{memorial.candles} candles</span>
                      </button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                      Light a Candle
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="text-center pt-6">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                Load More Memorials
              </Button>
            </div>
          </div>
        </div>

        {/* Memorial Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center border-yellow-200 bg-yellow-50">
            <CardContent className="pt-6">
              <Flame className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-2xl font-bold text-yellow-700">835</div>
              <div className="text-sm text-yellow-600">Candles Lit</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-blue-200 bg-blue-50">
            <CardContent className="pt-6">
              <MessageSquare className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-blue-700">292</div>
              <div className="text-sm text-blue-600">Tributes Written</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <Heart className="h-8 w-8 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold text-red-700">156</div>
              <div className="text-sm text-red-600">Lives Remembered</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-purple-200 bg-purple-50">
            <CardContent className="pt-6">
              <User className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-purple-700">1,247</div>
              <div className="text-sm text-purple-600">People Visited</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Memorial;
