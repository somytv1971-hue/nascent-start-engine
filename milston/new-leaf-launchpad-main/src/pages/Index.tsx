
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, AlertTriangle, DollarSign, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />
      <Hero />
      <Features />
      <Stats />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Join the Lifeline Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every second counts in an emergency. Be part of Bangladesh's most comprehensive emergency response network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/register">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Link to="/emergency">Report Emergency</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Lifeline Bangladesh</h3>
              <p className="text-gray-400">জীবনের জন্য জয় - Where Hope, Action & Memory Unite</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/emergency" className="hover:text-white">Emergency</Link></li>
                <li><Link to="/memorial" className="hover:text-white">Memorial</Link></li>
                <li><Link to="/donate" className="hover:text-white">Donate</Link></li>
                <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Emergency Hotline: 999</li>
                <li>Email: help@lifelinebd.org</li>
                <li>Address: Dhaka, Bangladesh</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Emergency Numbers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Fire Service: 16163</li>
                <li>Police: 100</li>
                <li>Medical Emergency: 199</li>
                <li>Disaster Management: 1090</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lifeline Bangladesh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
