
import React from 'react';
import { Star, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturedBooks = () => {
  const featuredBooks = [
    {
      id: 1,
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      rating: 4.8,
      genre: "Fiction",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      description: "A captivating novel about a reclusive Hollywood icon finally ready to tell her story."
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      rating: 4.7,
      genre: "Self-Help",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop",
      description: "Transform your life with tiny changes that deliver remarkable results."
    },
    {
      id: 3,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      rating: 4.6,
      genre: "Thriller",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      description: "A gripping psychological thriller about a woman's act of violence and her refusal to speak."
    },
    {
      id: 4,
      title: "Educated",
      author: "Tara Westover",
      rating: 4.9,
      genre: "Memoir",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      description: "A powerful memoir about education, family, and the capacity for self-invention."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Books</h2>
          <p className="text-xl text-gray-600">Discover what the BookWise community is reading</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2 text-xs">
                  {book.genre}
                </Badge>
                <h3 className="font-bold text-lg mb-1 line-clamp-2 group-hover:text-amber-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                <div className="flex items-center mb-3">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{book.rating}</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{book.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
