import React from 'react';
import { motion } from 'framer-motion';
import { Filter, ChefHat, BookOpen, Award } from 'lucide-react';
import CourseCard from '@/components/ui/CourseCard';

const CoursesPage = ({ courses, searchQuery, selectedCategory, setSelectedCategory, toggleFavorite, favorites, addToCart }) => {
  const categories = [
    { id: 'all', name: 'Todos los Cursos', icon: BookOpen },
    { id: 'italiana', name: 'Cocina Italiana', icon: ChefHat },
    { id: 'reposteria', name: 'Repostería', icon: Award },
    { id: 'mexicana', name: 'Cocina Mexicana', icon: ChefHat },
    { id: 'asiatica', name: 'Cocina Asiática', icon: ChefHat },
    { id: 'panaderia', name: 'Panadería', icon: Award },
    { id: 'vegana', name: 'Cocina Vegana', icon: ChefHat }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 text-stone-800 font-merriweather">Todos los Cursos</h1>
          <p className="text-xl text-stone-600">Descubre nuestra colección completa de cursos culinarios</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 mr-2 text-stone-600" />
            <span className="font-medium text-stone-700">Filtrar por categoría:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-amber-700 text-white'
                    : 'bg-white text-stone-700 hover:bg-amber-50 border border-stone-200'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
              addToCart={addToCart}
              animateInView={false} // Animation handled by parent for this page
            />
          ))}
        </motion.div>

        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <ChefHat className="w-16 h-16 text-stone-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-stone-600 mb-2">No se encontraron cursos</h3>
            <p className="text-stone-500">Intenta con otros términos de búsqueda o categorías</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;