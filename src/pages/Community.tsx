
import React from 'react';
import Header from '@/components/Header';
import RecentReviews from '@/components/RecentReviews';

const Community = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Community</h1>
          <p className="text-xl text-gray-600">Connect with fellow book lovers</p>
        </div>

        <RecentReviews />
      </div>
    </div>
  );
};

export default Community;
