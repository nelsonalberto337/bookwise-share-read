
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <BookOpen className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-800">BookWise</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search books, authors, reviews..." 
                className="pl-10 bg-gray-50 border-gray-200 focus:border-amber-500"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link to="/library" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
              My Library
            </Link>
            <Link to="/discover" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
              Discover
            </Link>
            <Link to="/community" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
              Community
            </Link>
            
            {/* User Menu */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-amber-600">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          </nav>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search books, authors, reviews..." 
              className="pl-10 bg-gray-50 border-gray-200 focus:border-amber-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
