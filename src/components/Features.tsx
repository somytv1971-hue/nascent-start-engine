import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Heart, AlertTriangle, DollarSign, MapPin } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Emergency Response",
      description: "Rapid response system for natural disasters, accidents, and medical emergencies across Bangladesh.",
      color: "text-red-600"
    },
    {
      icon: Heart,
      title: "Memorial Services",
      description: "Honor and remember victims with our digital memorial platform and commemoration services.",
      color: "text-pink-600"
    },
    {
      icon: DollarSign,
      title: "Aid Coordination",
      description: "Transparent donation system and relief distribution to ensure help reaches those who need it most.",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Crisis Management",
      description: "Professional crisis management and disaster preparedness training for communities.",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with volunteers, first responders, and community leaders for coordinated assistance.",
      color: "text-purple-600"
    },
    {
      icon: MapPin,
      title: "Location Tracking",
      description: "Real-time location services to dispatch help quickly to exact coordinates during emergencies.",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive emergency response and humanitarian aid services designed to save lives and support communities across Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;