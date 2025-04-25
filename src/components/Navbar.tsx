
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, Coffee } from "lucide-react";

interface NavbarProps {
  isLoggedIn?: boolean;
}

const Navbar = ({ isLoggedIn = false }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <h1 className="text-xl font-bold text-teal-500">Seothpics</h1>
            </a>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex md:flex-1 md:justify-center md:px-8">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input 
                type="search" 
                placeholder="Search images..." 
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-teal-500 hover:text-teal-600 flex items-center gap-2"
            >
              <Coffee size={16} />
              <span>Buy Me a Coffee</span>
            </Button>
            
            {isLoggedIn ? (
              <Button 
                variant="default" 
                className="bg-teal-500 hover:bg-teal-600 text-white"
              >
                Submit Image
              </Button>
            ) : (
              <Button 
                variant="outline" 
                className="border-teal-500 text-teal-500 hover:bg-teal-50"
              >
                Join
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-gray-500 hover:text-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-grey-100" id="mobile-menu">
          <div className="px-4 py-3 space-y-3">
            {/* Mobile Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input 
                type="search" 
                placeholder="Search images..." 
                className="pl-10 w-full"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start text-teal-500 hover:text-teal-600 flex items-center gap-2"
              >
                <Coffee size={16} />
                <span>Buy Me a Coffee</span>
              </Button>
              
              {isLoggedIn ? (
                <Button 
                  variant="default" 
                  className="bg-teal-500 hover:bg-teal-600 text-white"
                >
                  Submit Image
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  className="border-teal-500 text-teal-500 hover:bg-teal-50"
                >
                  Join
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
