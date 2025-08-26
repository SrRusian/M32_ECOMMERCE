import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CartPage = ({ cartItems, removeFromCart, setCurrentView, getTotalPrice }) => {
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Carrito vacío",
        description: "Agrega algunos cursos antes de proceder al pago.",
      });
      return;
    }
    toast({
      title: "🚧 Esta función aún no está implementada—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀"
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 text-stone-800 font-merriweather">Tu Carrito</h1>
          <p className="text-xl text-stone-600">
            {cartItems.length === 0 ? 'Tu carrito está vacío' : `${cartItems.length} curso${cartItems.length > 1 ? 's' : ''} en tu carrito`}
          </p>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <ShoppingCart className="w-16 h-16 text-stone-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-stone-600 mb-2">Tu carrito está vacío</h3>
            <p className="text-stone-500 mb-6">¡Explora nuestros cursos y comienza tu aventura culinaria!</p>
            <Button 
              onClick={() => setCurrentView('courses')}
              className="bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white px-8 py-3 rounded-full"
            >
              Explorar Cursos
            </Button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                  >
                    <div className="flex items-center space-x-4">
                      <img  
                        alt={item.image}
                        className="w-24 h-24 object-cover rounded-xl"
                       src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-stone-800 mb-1">{item.title}</h3>
                        <p className="text-stone-600 mb-2">Por {item.instructor}</p>
                        <div className="flex items-center space-x-4 text-sm text-stone-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {item.duration}
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {item.lessons} lecciones
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-stone-800 mb-2">${item.price}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-stone-800 mb-6 font-merriweather">Resumen del Pedido</h3>
                
                <div className="space-y-3 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-stone-600 truncate mr-2">{item.title}</span>
                      <span className="font-medium">${item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-stone-200 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-amber-800">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white py-3 rounded-full text-lg font-medium pulse-glow"
                >
                  Proceder al Pago
                </Button>

                <div className="mt-4 text-center">
                  <p className="text-sm text-stone-500">Pago seguro con encriptación SSL</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;