import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Phone, MapPin, Clock, User, FileText } from "lucide-react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

const Emergency = () => {
  const [formData, setFormData] = useState({
    emergencyType: "",
    location: "",
    description: "",
    contactName: "",
    contactPhone: "",
    severity: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Emergency report submitted successfully! Help is on the way.");
    console.log("Emergency report:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Emergency Alert Banner */}
        <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 mr-3" />
            <h1 className="text-3xl font-bold">Emergency Response Center</h1>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Phone className="h-6 w-6 mr-2" />
              <span className="text-2xl font-bold">Emergency Hotline: 999</span>
            </div>
            <p className="text-lg">For immediate life-threatening emergencies, call 999 first</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Emergency Report Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FileText className="h-6 w-6 mr-2 text-red-600" />
                  Report an Emergency
                </CardTitle>
                <CardDescription>
                  Fill out this form to report a non-life-threatening emergency or request assistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyType">Emergency Type</Label>
                      <Select value={formData.emergencyType} onValueChange={(value) => handleInputChange('emergencyType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select emergency type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="medical">Medical Emergency</SelectItem>
                          <SelectItem value="fire">Fire Incident</SelectItem>
                          <SelectItem value="accident">Road Accident</SelectItem>
                          <SelectItem value="flood">Flood/Natural Disaster</SelectItem>
                          <SelectItem value="violence">Violence/Security</SelectItem>
                          <SelectItem value="missing">Missing Person</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="severity">Severity Level</Label>
                      <Select value={formData.severity} onValueChange={(value) => handleInputChange('severity', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="critical">Critical - Life Threatening</SelectItem>
                          <SelectItem value="high">High - Urgent Attention</SelectItem>
                          <SelectItem value="medium">Medium - Needs Response</SelectItem>
                          <SelectItem value="low">Low - General Assistance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location Details</Label>
                    <Input
                      id="location"
                      placeholder="Detailed address, landmarks, GPS coordinates if available"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Your Name</Label>
                      <Input
                        id="contactName"
                        placeholder="Full name"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Contact Phone</Label>
                      <Input
                        id="contactPhone"
                        placeholder="Your phone number"
                        type="tel"
                        value={formData.contactPhone}
                        onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Emergency Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide detailed information about the emergency situation..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-lg py-6">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Submit Emergency Report
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Contacts & Information */}
          <div className="space-y-6">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency Hotlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-red-600 text-white rounded-lg">
                  <div className="text-3xl font-bold">999</div>
                  <div className="text-sm">National Emergency</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 border rounded">
                    <div className="text-xl font-bold text-red-600">100</div>
                    <div className="text-xs">Police</div>
                  </div>
                  <div className="text-center p-3 border rounded">
                    <div className="text-xl font-bold text-red-600">16163</div>
                    <div className="text-xs">Fire Service</div>
                  </div>
                  <div className="text-center p-3 border rounded">
                    <div className="text-xl font-bold text-red-600">199</div>
                    <div className="text-xs">Medical</div>
                  </div>
                  <div className="text-center p-3 border rounded">
                    <div className="text-xl font-bold text-red-600">1090</div>
                    <div className="text-xs">Disaster</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Critical Emergencies</span>
                  <span className="font-semibold">5-10 min</span>
                </div>
                <div className="flex justify-between">
                  <span>High Priority</span>
                  <span className="font-semibold">15-30 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Medium Priority</span>
                  <span className="font-semibold">30-60 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Low Priority</span>
                  <span className="font-semibold">1-4 hours</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Coverage Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  We provide emergency response services across all 64 districts of Bangladesh, with specialized teams in major cities.
                </p>
                <Button variant="outline" className="w-full">
                  View Coverage Map
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;