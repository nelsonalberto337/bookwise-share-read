
import React from 'react';
import { Star, User } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const RecentReviews = () => {
  const recentReviews = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        initials: "SJ"
      },
      book: "The Seven Husbands of Evelyn Hugo",
      rating: 5,
      review: "Absolutely stunning! This book had me hooked from the very first page. The storytelling is masterful and the characters feel so real.",
      date: "2 days ago"
    },
    {
      id: 2,
      user: {
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        initials: "MC"
      },
      book: "Atomic Habits",
      rating: 4,
      review: "Great practical advice for building better habits. Some concepts could be explained more concisely, but overall very helpful.",
      date: "3 days ago"
    },
    {
      id: 3,
      user: {
        name: "Emma Wilson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        initials: "EW"
      },
      book: "The Silent Patient",
      rating: 5,
      review: "Mind-blowing thriller! I didn't see the twist coming at all. Alex Michaelides is a master of psychological suspense.",
      date: "1 week ago"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent Reviews</h2>
          <p className="text-xl text-gray-600">See what fellow readers are saying</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {recentReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={review.user.avatar} alt={review.user.name} />
                    <AvatarFallback>{review.user.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{review.user.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <h4 className="font-bold text-amber-600 mb-2">{review.book}</h4>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentReviews;
