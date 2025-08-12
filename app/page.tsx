"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Leaf, BookOpen, Users } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Home() {
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
      <section className="relative bg-gradient-to-br from-verde-agronomo to-green-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Nutrición Bovina de
                <span className="text-amarillo-calido block">Excelencia</span>
              </h1>
              <p className="text-xl lg:text-2xl text-green-100 mb-8 leading-relaxed">
                Fortalecemos la salud de su ganado con suplementos minerales premium y asesoramiento técnico
                especializado
              </p>
              <Button
                size="lg"
                className="bg-naranja-terroso hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                onClick={() => handleNavigation("/contacto")}
              >
                Contactanos Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/argentina-cattle-grazing.png"
                alt="Ganado bovino en campo"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Breve Introducción */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-verde-agronomo mb-6">
            Más de 20 años cuidando su ganado
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            En Hidabo combinamos experiencia, tecnología y pasión por el campo para ofrecer soluciones integrales en
            nutrición bovina. Desde suplementos minerales de alta calidad hasta transporte especializado y asesoramiento
            técnico personalizado.
          </p>
        </div>
      </section>

      {/* Bloques de Servicios */}
      <section className="py-16 bg-gris-claro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Productos */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/bovine-mineral-supplements.png"
                  alt="Productos Hidabo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Leaf className="h-8 w-8 mb-2 text-amarillo-calido" />
                  <h3 className="font-serif text-xl font-bold">Nuestros Productos</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Descubrí nuestra línea completa de suplementos minerales diseñados específicamente para las
                  necesidades nutricionales del ganado bovino.
                </p>
                <Button
                  className="w-full bg-naranja-terroso hover:bg-orange-600 text-white font-semibold shadow-md"
                  onClick={() => handleNavigation("/productos")}
                >
                  Ver Productos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Academia */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/veterinarian-bovine-nutrition.png"
                  alt="Academia Hidabo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <BookOpen className="h-8 w-8 mb-2 text-amarillo-calido" />
                  <h3 className="font-serif text-xl font-bold">Academia Hidabo</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Accedé a guías técnicas, consejos especializados y las mejores prácticas en nutrición bovina de
                  nuestros expertos.
                </p>
                <Button
                  className="w-full bg-naranja-terroso hover:bg-orange-600 text-white font-semibold shadow-md"
                  onClick={() => handleNavigation("/academia")}
                >
                  Explorar Academia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Sobre Nosotros */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/hidabo-industrial-team.png"
                  alt="Sobre Hidabo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Users className="h-8 w-8 mb-2 text-amarillo-calido" />
                  <h3 className="font-serif text-xl font-bold">Sobre Nosotros</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Conocé nuestra historia, nuestro equipo y el compromiso que nos impulsa a ser líderes en nutrición
                  bovina.
                </p>
                <Button
                  className="w-full bg-naranja-terroso hover:bg-orange-600 text-white font-semibold shadow-md"
                  onClick={() => handleNavigation("/nosotros")}
                >
                  Nuestra Historia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-verde-agronomo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para mejorar la nutrición de su ganado?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Nuestro equipo de expertos está preparado para asesorarlo y encontrar la solución perfecta para sus
            necesidades.
          </p>
          <Button
            size="lg"
            className="bg-naranja-terroso hover:bg-orange-600 text-white px-12 py-4 text-lg font-semibold shadow-lg"
            onClick={() => handleNavigation("/contacto")}
          >
            Contactanos Hoy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
