import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, User, Search, Menu, X, ChefHat, LogOut, Heart } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu.jsx";
const Header = ({
  currentView,
  setCurrentView,
  cartItems,
  searchQuery,
  setSearchQuery,
  mobileMenuOpen,
  setMobileMenuOpen,
  user,
  handleLogout
}) => {
  const handleLoginClick = () => {
    setCurrentView('auth');
  };
  const handleAccountAction = action => {
    toast({
      title: `🚧 ${action} aún no está implementada.`,
      description: "¡Pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀"
    });
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className="sticky top-0 z-50 glass-effect shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentView('home')} whileHover={{
          scale: 1.05
        }}>
            <div className="w-12 h-12 molino32-gradient rounded-full flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-950 bg-clip-text text-transparent font-merriweather">
                Molino32
              </h1>
              <p className="text-xs text-stone-600">Aprende a Hornear y Cocinar</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => setCurrentView('home')} className={`font-medium transition-colors ${currentView === 'home' ? 'text-amber-800' : 'text-stone-700 hover:text-amber-800'}`}>
              Inicio
            </button>
            <button onClick={() => setCurrentView('courses')} className={`font-medium transition-colors ${currentView === 'courses' ? 'text-amber-800' : 'text-stone-700 hover:text-amber-800'}`}>
              Cursos
            </button>
            <button onClick={() => toast({
            title: "🚧 Esta función aún no está implementada—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀"
          })} className="font-medium text-stone-700 hover:text-amber-800 transition-colors">
              Instructores
            </button>
            <button onClick={() => toast({
            title: "🚧 Esta función aún no está implementada—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀"
          })} className="font-medium text-stone-700 hover:text-amber-800 transition-colors">
              Sobre Nosotros
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
              <input type="text" placeholder="Buscar cursos..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 border border-stone-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white/80" />
            </div>
            
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => setCurrentView('cart')} className="relative p-2 text-stone-700 hover:text-amber-800 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>}
            </motion.button>

            {user ? <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                     <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 font-bold">
                        {user.email.charAt(0).toUpperCase()}
                     </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Mi Cuenta</p>
                      <p className="text-xs leading-none text-stone-500 truncate">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleAccountAction('Mis Cursos')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Mis Cursos</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleAccountAction('Favoritos')}>
                    <Heart className="mr-2 h-4 w-4" />
                    <span>Favoritos</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> : <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={handleLoginClick} className="p-2 text-stone-700 hover:text-amber-800 transition-colors">
                <User className="w-6 h-6" />
              </motion.button>}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden mt-4 pb-4 border-t border-stone-200">
              <div className="flex flex-col space-y-4 mt-4">
                <input type="text" placeholder="Buscar cursos..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="px-4 py-2 border border-stone-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-700" />
                <button onClick={() => {
              setCurrentView('home');
              setMobileMenuOpen(false);
            }} className="text-left py-2 text-stone-700">Inicio</button>
                <button onClick={() => {
              setCurrentView('courses');
              setMobileMenuOpen(false);
            }} className="text-left py-2 text-stone-700">Cursos</button>
                <button onClick={() => {
              setCurrentView('cart');
              setMobileMenuOpen(false);
            }} className="text-left py-2 text-stone-700 flex items-center">
                  Carrito {cartItems.length > 0 && <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartItems.length}</span>}
                </button>
                {user ? <>
                    <button onClick={() => {
                handleAccountAction('Mis Cursos');
                setMobileMenuOpen(false);
              }} className="text-left py-2 text-stone-700">Mis Cursos</button>
                    <button onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }} className="text-left py-2 text-stone-700">Cerrar Sesión</button>
                  </> : <button onClick={() => {
              handleLoginClick();
              setMobileMenuOpen(false);
            }} className="text-left py-2 text-stone-700">Iniciar Sesión</button>}
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </motion.header>;
};
export default Header;