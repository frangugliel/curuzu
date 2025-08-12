"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Mail, Phone, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Contacto() {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-verde-agronomo to-green-800 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Contacto</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Contactanos por cualquiera de nuestros canales de comunicación
          </p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16 bg-gris-claro">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dirección Física */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-verde-agronomo rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-verde-agronomo mb-4">Dirección</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="font-medium">Av. San Martín 1234</p>
                  <p>Villa María, Córdoba</p>
                  <p>Argentina (5900)</p>
                  <a
                    href="https://maps.google.com/?q=Villa+María+Córdoba+Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-naranja-terroso hover:text-orange-600 font-medium transition-colors"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Horarios de Atención */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amarillo-calido rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-verde-agronomo mb-4">Horarios</h3>
                <div className="space-y-2 text-gray-600">
                  <div>
                    <p className="font-medium">Lunes a Viernes</p>
                    <p>8:00 - 18:00 hs</p>
                  </div>
                  <div className="pt-2">
                    <p className="font-medium">Sábados</p>
                    <p>8:00 - 13:00 hs</p>
                  </div>
                  <div className="pt-2">
                    <p className="font-medium text-gray-500">Domingos</p>
                    <p className="text-gray-500">Cerrado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Correos Electrónicos */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-marron-tierra rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-verde-agronomo mb-4">Correos</h3>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Información General</p>
                    <a
                      href="mailto:info@hidabo.com"
                      className="text-naranja-terroso hover:text-orange-600 transition-colors"
                    >
                      info@hidabo.com
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Asesoramiento Técnico</p>
                    <a
                      href="mailto:tecnico@hidabo.com"
                      className="text-naranja-terroso hover:text-orange-600 transition-colors"
                    >
                      tecnico@hidabo.com
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Ventas</p>
                    <a
                      href="mailto:ventas@hidabo.com"
                      className="text-naranja-terroso hover:text-orange-600 transition-colors"
                    >
                      ventas@hidabo.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Números de Teléfono */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-naranja-terroso rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-verde-agronomo mb-4">Teléfonos</h3>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Oficina Principal</p>
                    <a
                      href="tel:+543534567890"
                      className="text-naranja-terroso hover:text-orange-600 transition-colors font-medium"
                    >
                      (0353) 456-7890
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Asesoramiento Técnico</p>
                    <a
                      href="tel:+543534567891"
                      className="text-naranja-terroso hover:text-orange-600 transition-colors font-medium"
                    >
                      (0353) 456-7891
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Emergencias</p>
                    <a
                      href="tel:+5491123456789"
                      className="text-naranja-terroso hover:text-orange-600 transition-colors font-medium"
                    >
                      (011) 2345-6789
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-verde-agronomo mb-6">
            ¿Conocés nuestros productos?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Descubrí nuestra línea completa de suplementos minerales, asesoría técnica y servicios logísticos
            especializados para el sector bovino
          </p>
          <Button
            size="lg"
            className="bg-naranja-terroso hover:bg-orange-600 text-white px-8 py-4 text-lg"
            onClick={() => handleNavigation("/productos")}
          >
            Ver Productos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
