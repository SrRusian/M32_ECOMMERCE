import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CourseCard = ({ course, index, toggleFavorite, favorites, addToCart, animateInView }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial={animateInView ? "hidden" : "visible"}
      whileInView={animateInView ? "visible" : ""}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden course-card-hover"
    >
      <div className="relative">
        <img  
          alt={course.image}
          className="w-full h-48 object-cover"
         src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
        <button
          onClick={() => toggleFavorite(course.id)}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
        >
          <Heart className={`w-5 h-5 ${favorites.includes(course.id) ? 'text-red-500 fill-current' : 'text-stone-600'}`} />
        </button>
        <div className="absolute top-4 left-4 bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium">
          {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-amber-700 font-medium">{course.level}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-stone-600 ml-1">{course.rating}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-stone-800 font-merriweather">{course.title}</h3>
        <p className="text-stone-600 mb-3">Por {course.instructor}</p>
        <p className="text-sm text-stone-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between mb-4 text-sm text-stone-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            {course.lessons} lecciones
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {course.students.toLocaleString()}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-stone-800">${course.price}</span>
            <span className="text-sm text-stone-500 line-through ml-2">${course.originalPrice}</span>
          </div>
          <Button 
            onClick={() => addToCart(course)}
            className="bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white rounded-full"
          >
            Agregar al Carrito
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;