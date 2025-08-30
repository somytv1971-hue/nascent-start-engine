import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Lifeline Bangladesh
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-yellow-400">
          জীবনের জন্য জয়
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Emergency Response, Memorial & Aid Coordination Platform - Where Hope, Action & Memory Unite
        </p>
        
        {/* Emergency Alert */}
        <div className="bg-red-600 rounded-lg p-6 mb-8 max-w-2xl mx-auto border-2 border-red-400">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 mr-2 text-yellow-400" />
            <h3 className="text-2xl font-bold">Emergency Hotline</h3>
          </div>
          <div className="flex items-center justify-center mb-4">
            <Phone className="h-6 w-6 mr-2" />
            <span className="text-3xl font-bold">999</span>
          </div>
          <p className="text-lg">Available 24/7 for all emergencies</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
            <Link to="/emergency">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Report Emergency
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
            <Link to="/donate">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4">
            <Link to="/memorial">
              Remember Victims
            </Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
            <p className="text-lg">Emergency Response</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-yellow-400">10,000+</h3>
            <p className="text-lg">Lives Supported</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-yellow-400">64</h3>
            <p className="text-lg">Districts Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;