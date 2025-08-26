import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/layout/Header';
import HomePage from '@/components/pages/HomePage';
import CoursesPage from '@/components/pages/CoursesPage';
import CartPage from '@/components/pages/CartPage';
import AuthPage from '@/components/pages/AuthPage';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Cocina Italiana Auténtica",
      instructor: "Chef Marco Rossi",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.9,
      students: 2847,
      duration: "8 horas",
      level: "Intermedio",
      category: "italiana",
      image: "Delicious Italian pasta with fresh basil and tomatoes in a rustic setting",
      description: "Aprende los secretos de la cocina italiana tradicional con recetas auténticas de pasta, risotto y más, directamente desde el corazón de Italia.",
      lessons: 24,
      certificate: true
    },
    {
      id: 2,
      title: "Repostería Francesa Profesional",
      instructor: "Chef Marie Dubois",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      students: 1923,
      duration: "12 horas",
      level: "Avanzado",
      category: "reposteria",
      image: "Elegant French pastries and macarons on a wooden table",
      description: "Domina las técnicas de repostería francesa con croissants, macarons y postres elegantes, llevando tus habilidades al siguiente nivel.",
      lessons: 36,
      certificate: true
    },
    {
      id: 3,
      title: "Cocina Mexicana Tradicional",
      instructor: "Chef Ana García",
      price: 69.99,
      originalPrice: 99.99,
      rating: 4.9,
      students: 3421,
      duration: "6 horas",
      level: "Principiante",
      category: "mexicana",
      image: "Colorful Mexican tacos with fresh ingredients on a rustic plate",
      description: "Descubre los sabores auténticos de México con recetas tradicionales y técnicas ancestrales, perfectas para cualquier entusiasta culinario.",
      lessons: 18,
      certificate: true
    },
    {
      id: 4,
      title: "Cocina Asiática Fusión",
      instructor: "Chef Kenji Tanaka",
      price: 119.99,
      originalPrice: 159.99,
      rating: 4.7,
      students: 1654,
      duration: "10 horas",
      level: "Intermedio",
      category: "asiatica",
      image: "Beautiful Asian fusion dishes with artistic presentation and natural elements",
      description: "Explora la fusión de sabores asiáticos con técnicas modernas y presentación artística, ideal para quienes buscan innovar en la cocina.",
      lessons: 30,
      certificate: true
    },
    {
      id: 5,
      title: "Panadería Artesanal",
      instructor: "Chef Luis Mendoza",
      price: 79.99,
      originalPrice: 109.99,
      rating: 4.8,
      students: 2156,
      duration: "8 horas",
      level: "Principiante",
      category: "panaderia",
      image: "Fresh artisanal bread loaves with golden crust on a wooden board",
      description: "Aprende el arte de la panadería artesanal desde masa madre hasta panes especiales, con métodos que te garantizan resultados perfectos.",
      lessons: 22,
      certificate: true
    },
    {
      id: 6,
      title: "Cocina Vegana Gourmet",
      instructor: "Chef Sofia Verde",
      price: 94.99,
      originalPrice: 134.99,
      rating: 4.9,
      students: 1789,
      duration: "9 horas",
      level: "Intermedio",
      category: "vegana",
      image: "Colorful vegan gourmet dishes with fresh vegetables in a natural setting",
      description: "Crea platos veganos sofisticados que sorprenderán a todos con sabores increíbles y técnicas innovadoras para una cocina consciente.",
      lessons: 27,
      certificate: true
    }
  ];

  // Load data from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('molino32Cart');
    const savedUser = localStorage.getItem('molino32User');
    const savedFavorites = localStorage.getItem('molino32Favorites');
    
    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('molino32Cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('molino32Favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('molino32User', JSON.stringify(user));
    } else {
      localStorage.removeItem('molino32User');
    }
  }, [user]);

  const handleRegister = (userData) => {
    const newUser = { 
      name: userData.name,
      surnames: userData.surnames,
      email: userData.email, 
      phone: userData.phone 
    };
    setUser(newUser);
    toast({
      title: "¡Registro exitoso!",
      description: `Bienvenido a Molino32, ${userData.name}!`,
    });
    setCurrentView('home');
  };

  const handleLogin = (credentials) => {
    // This is a mock login. In a real app, you'd validate credentials.
    const loggedInUser = { email: credentials.email };
    setUser(loggedInUser);
    toast({
      title: "¡Inicio de sesión exitoso!",
      description: `Bienvenido de vuelta.`,
    });
    setCurrentView('home');
  };

  const handleLogout = () => {
    setUser(null);
    toast({
      title: "Has cerrado sesión.",
      description: "¡Esperamos verte pronto!",
    });
    setCurrentView('home');
  };

  const addToCart = (course) => {
    const existingItem = cartItems.find(item => item.id === course.id);
    if (existingItem) {
      toast({
        title: "¡Ya está en tu carrito!",
        description: `${course.title} ya está agregado a tu carrito.`,
      });
      return;
    }
    
    setCartItems([...cartItems, { ...course, quantity: 1 }]);
    toast({
      title: "¡Agregado al carrito!",
      description: `${course.title} se agregó exitosamente.`,
    });
  };

  const removeFromCart = (courseId) => {
    setCartItems(cartItems.filter(item => item.id !== courseId));
    toast({
      title: "Eliminado del carrito",
      description: "El curso se eliminó de tu carrito.",
    });
  };

  const toggleFavorite = (courseId) => {
    const isFavorite = favorites.includes(courseId);
    if (isFavorite) {
      setFavorites(favorites.filter(id => id !== courseId));
      toast({
        title: "Eliminado de favoritos",
        description: "El curso se eliminó de tus favoritos.",
      });
    } else {
      setFavorites([...favorites, courseId]);
      toast({
        title: "¡Agregado a favoritos!",
        description: "El curso se agregó a tus favoritos.",
      });
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const renderContent = () => {
    switch(currentView) {
      case 'home':
        return <HomePage key="home" setCurrentView={setCurrentView} courses={courses} toggleFavorite={toggleFavorite} favorites={favorites} addToCart={addToCart} />;
      case 'courses':
        return <CoursesPage key="courses" courses={courses} searchQuery={searchQuery} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} toggleFavorite={toggleFavorite} favorites={favorites} addToCart={addToCart} />;
      case 'cart':
        return <CartPage key="cart" cartItems={cartItems} removeFromCart={removeFromCart} setCurrentView={setCurrentView} getTotalPrice={getTotalPrice} />;
      case 'auth':
        return <AuthPage key="auth" handleLogin={handleLogin} handleRegister={handleRegister} />;
      default:
        return <HomePage key="home" setCurrentView={setCurrentView} courses={courses} toggleFavorite={toggleFavorite} favorites={favorites} addToCart={addToCart} />;
    }
  }

  return (
    <>
      <Helmet>
        <title>Molino32 - Cursos de Recetas de Alimentos | Aprende con Chefs Expertos</title>
        <meta name="description" content="Descubre los mejores cursos de recetas de alimentos online con chefs profesionales. Aprende cocina italiana, repostería francesa, cocina mexicana y más. Certificación incluida." />
        <meta property="og:title" content="Molino32 - Cursos de Recetas de Alimentos | Aprende con Chefs Expertos" />
        <meta property="og:description" content="Descubre los mejores cursos de recetas de alimentos online con chefs profesionales. Aprende cocina italiana, repostería francesa, cocina mexicana y más. Certificación incluida." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header 
          currentView={currentView}
          setCurrentView={setCurrentView}
          cartItems={cartItems}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          user={user}
          handleLogout={handleLogout}
        />
        
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>

        <Toaster />
      </div>
    </>
  );
}

export default App;