import React from 'react';
import { motion } from 'framer-motion';
import { Users, ChefHat, BookOpen, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import CourseCard from '@/components/ui/CourseCard';

const HomePage = ({ setCurrentView, courses, toggleFavorite, favorites, addToCart }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 molino32-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-merriweather">
                <span className="bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-800 bg-clip-text text-transparent">
                  Molino32
                </span>
                <br />
                <span className="text-stone-800">Cursos de Recetas</span>
              </h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Transforma tu pasión culinaria en arte con nuestros cursos de recetas, guiado por chefs expertos y sabores auténticos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setCurrentView('courses')}
                  className="bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white px-8 py-4 text-lg rounded-full chef-shadow"
                >
                  Explorar Cursos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => toast({ title: "🚧 Esta función aún no está implementada—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀" })}
                  className="border-2 border-amber-700 text-amber-800 hover:bg-amber-50 px-8 py-4 text-lg rounded-full"
                >
                  Ver Demo Gratis
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="floating-animation">
                <img 
                  alt="Chef profesional cocinando en una cocina rústica con ingredientes frescos"
                  className="w-full h-96 object-cover rounded-3xl chef-shadow" src="https://images.unsplash.com/photo-1698827623494-c4e1196ba0ca" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-lime-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-800">12,000+</p>
                    <p className="text-sm text-stone-600">Estudiantes Activos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-stone-800 font-merriweather">¿Por qué elegir Molino32?</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Ofrecemos la experiencia de aprendizaje culinario más completa con instructores de clase mundial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: "Chefs Profesionales",
                description: "Aprende de chefs con experiencia en restaurantes de prestigio y cocinas internacionales"
              },
              {
                icon: BookOpen,
                title: "Contenido Interactivo",
                description: "Videos HD, recetas descargables y ejercicios prácticos para dominar cada técnica"
              },
              {
                icon: Award,
                title: "Certificación Oficial",
                description: "Obtén certificados reconocidos que validen tus habilidades culinarias"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 molino32-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-stone-800 font-merriweather">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-stone-800 font-merriweather">Cursos Destacados</h2>
            <p className="text-xl text-stone-600">Los cursos más populares de nuestra plataforma</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course, index) => (
              <CourseCard 
                key={course.id}
                course={course}
                index={index}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
                addToCart={addToCart}
                animateInView={true}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => setCurrentView('courses')}
              variant="outline"
              className="border-2 border-amber-700 text-amber-800 hover:bg-amber-50 px-8 py-3 text-lg rounded-full"
            >
              Ver Todos los Cursos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;