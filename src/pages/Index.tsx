
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Star, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import FeaturedBooks from '@/components/FeaturedBooks';
import RecentReviews from '@/components/RecentReviews';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <BookOpen className="mx-auto mb-6 h-16 w-16 text-amber-600" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
              BookWise
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your personal library, book sharing community, and reading companion all in one place
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/library">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
                  Explore Your Library
                </Button>
              </Link>
              <Link to="/discover">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-amber-600 text-amber-600 hover:bg-amber-50">
                  Discover Books
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-amber-600" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Everything you need for your reading journey
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-amber-500">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle className="text-xl">Personal Library</CardTitle>
                <CardDescription>
                  Organize your books, track reading progress, and maintain your personal collection
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-xl">Book Sharing</CardTitle>
                <CardDescription>
                  Lend and borrow books with fellow readers in your community
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-yellow-500">
              <CardHeader>
                <Star className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle className="text-xl">Reviews & Ratings</CardTitle>
                <CardDescription>
                  Share your thoughts and discover what others are reading and loving
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <FeaturedBooks />

      {/* Recent Reviews */}
      <RecentReviews />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to start your reading adventure?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join thousands of book lovers who are already sharing their passion for reading
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
