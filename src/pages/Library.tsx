import React, { useState } from "react";
import { Plus, Search, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import AddBookModal from "@/components/AddBookModal";
import { useEffect } from "react";

const Library = () => {
  const [isAddBookOpen, setIsAddBookOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [books, setBooks] = useState([]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Reading":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "To-Read":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Failed to fetch books:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              My Library
            </h1>
            <p className="text-gray-600">
              Manage your personal book collection
            </p>
          </div>
          <Button
            onClick={() => setIsAddBookOpen(true)}
            className="mt-4 md:mt-0 bg-amber-600 hover:bg-amber-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Book
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search your books..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Books Tabs */}
<Tabs defaultValue="all" className="space-y-6">
  <TabsList className="grid w-full max-w-md grid-cols-4">
    <TabsTrigger value="all">All Books</TabsTrigger>
    <TabsTrigger value="reading">Reading</TabsTrigger>
    <TabsTrigger value="completed">Completed</TabsTrigger>
    <TabsTrigger value="to-read">To-Read</TabsTrigger>
  </TabsList>

  {/* All Books */}
  <TabsContent value="all" className="space-y-6">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredBooks.map((book) => (
        <Card key={book._id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardContent className="p-4">
            <Badge className={`mb-2 text-xs ${getStatusColor(book.status)}`}>
              {book.status}
            </Badge>
            <h3 className="font-bold text-lg mb-1 line-clamp-2">{book.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{book.author}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </TabsContent>

  {/* Reading */}
  <TabsContent value="reading">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredBooks
        .filter((book) => book.status === "Reading")
        .map((book) => (
          <Card key={book._id} className="hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <Badge className={`mb-2 text-xs ${getStatusColor(book.status)}`}>
                {book.status}
              </Badge>
              <h3 className="font-bold text-lg mb-1 line-clamp-2">{book.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{book.author}</p>
            </CardContent>
          </Card>
        ))}
    </div>
  </TabsContent>

  {/* Completed */}
  <TabsContent value="completed">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredBooks
        .filter((book) => book.status === "Completed")
        .map((book) => (
          <Card key={book._id} className="hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <Badge className={`mb-2 text-xs ${getStatusColor(book.status)}`}>
                {book.status}
              </Badge>
              <h3 className="font-bold text-lg mb-1 line-clamp-2">{book.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{book.author}</p>
            </CardContent>
          </Card>
        ))}
    </div>
  </TabsContent>

  {/* To-Read */}
  <TabsContent value="to-read">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredBooks
        .filter((book) => book.status === "To-Read")
        .map((book) => (
          <Card key={book._id} className="hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <Badge className={`mb-2 text-xs ${getStatusColor(book.status)}`}>
                {book.status}
              </Badge>
              <h3 className="font-bold text-lg mb-1 line-clamp-2">{book.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{book.author}</p>
            </CardContent>
          </Card>
        ))}
    </div>
  </TabsContent>
</Tabs>

      </div>

      <AddBookModal
        isOpen={isAddBookOpen}
        onClose={() => setIsAddBookOpen(false)}
      />
    </div>
  );
};

export default Library;
