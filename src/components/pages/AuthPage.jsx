import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChefHat } from 'lucide-react';

const AuthPage = ({ handleLogin, handleRegister }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerSurnames, setRegisterSurnames] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const onLoginSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email: loginEmail, password: loginPassword });
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    handleRegister({ 
      name: registerName, 
      surnames: registerSurnames,
      phone: registerPhone,
      email: registerEmail, 
      password: registerPassword 
    });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
            <TabsTrigger value="register">Crear Cuenta</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader className="items-center">
                 <div className="w-16 h-16 molino32-gradient rounded-full flex items-center justify-center mb-4">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Bienvenido de vuelta</CardTitle>
                <CardDescription>
                  Ingresa tus credenciales para acceder a tus cursos.
                </CardDescription>
              </CardHeader>
              <form onSubmit={onLoginSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Correo Electrónico</Label>
                    <Input id="login-email" type="email" placeholder="tu@email.com" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Contraseña</Label>
                    <Input id="login-password" type="password" placeholder="••••••••••" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white">Iniciar Sesión</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader className="items-center">
                 <div className="w-16 h-16 molino32-gradient rounded-full flex items-center justify-center mb-4">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Crea tu cuenta</CardTitle>
                <CardDescription>
                  Únete a Molino32 y comienza tu aventura culinaria.
                </CardDescription>
              </CardHeader>
               <form onSubmit={onRegisterSubmit}>
                <CardContent className="space-y-4">
                   <div className="space-y-2">
                    <Label htmlFor="register-name">Nombre(s)</Label>
                    <Input id="register-name" placeholder="Tu nombre" value={registerName} onChange={(e) => setRegisterName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-surnames">Apellidos</Label>
                    <Input id="register-surnames" placeholder="Tus apellidos" value={registerSurnames} onChange={(e) => setRegisterSurnames(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-phone">Teléfono (Opcional)</Label>
                    <Input id="register-phone" type="tel" placeholder="Tu número de teléfono" value={registerPhone} onChange={(e) => setRegisterPhone(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Correo Electrónico</Label>
                    <Input id="register-email" type="email" placeholder="tu@email.com" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Contraseña</Label>
                    <Input id="register-password" type="password" placeholder="Crea una contraseña segura" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white">Crear Cuenta</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default AuthPage;