
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-red-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Lifeline Bangladesh</h1>
              <p className="text-xs text-gray-600">জীবনের জন্য জয়</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/emergency" className="text-gray-700 hover:text-red-600 font-medium">
              Emergency
            </Link>
            <Link to="/memorial" className="text-gray-700 hover:text-red-600 font-medium">
              Memorial
            </Link>
            <Link to="/donate" className="text-gray-700 hover:text-red-600 font-medium">
              Donate
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-red-600 font-medium">
              Dashboard
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link to="/register">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/emergency" className="text-gray-700 hover:text-red-600 font-medium">
                Emergency
              </Link>
              <Link to="/memorial" className="text-gray-700 hover:text-red-600 font-medium">
                Memorial
              </Link>
              <Link to="/donate" className="text-gray-700 hover:text-red-600 font-medium">
                Donate
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-red-600 font-medium">
                Dashboard
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button asChild variant="outline">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link to="/register">Join Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
