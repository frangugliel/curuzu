"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Heart, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Productos() {
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
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Nuestros Productos</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Línea completa de suplementos minerales diseñados para cubrir todas las necesidades nutricionales de su
            ganado bovino
          </p>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <img
                    src="/hidabo-suplementos-minerales.png"
                    alt="Suplementos Minerales"
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-verde-agronomo rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-verde-agronomo mb-4">
                  Suplementos Minerales
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Línea completa de suplementos minerales formulados específicamente para cubrir las necesidades
                  nutricionales del ganado bovino en diferentes etapas productivas.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-verde-agronomo mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Fórmulas balanceadas con macro y microelementos</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-verde-agronomo mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Absorción optimizada con quelatos orgánicos</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-verde-agronomo mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Mejora la fertilidad y producción</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-verde-agronomo mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Adaptados al campo argentino</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              <div className="lg:col-start-2">
                <div className="relative">
                  <img
                    src="/veterinarian-bovine-nutrition.png"
                    alt="Asesoría Técnica"
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-amarillo-calido rounded-full flex items-center justify-center shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="lg:col-start-1 lg:row-start-1">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-verde-agronomo mb-4">Asesoría Técnica</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Servicio integral de asesoramiento técnico especializado en nutrición bovina, brindado por
                  profesionales veterinarios y zootecnistas con amplia experiencia de campo.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-verde-agronomo mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Diagnóstico nutricional personalizado</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-verde-agronomo mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Planes de suplementación específicos</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-verde-agronomo mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Seguimiento y monitoreo continuo</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-verde-agronomo mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Capacitación del personal</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <img
                    src="/hidabo-gestion-logistica.png"
                    alt="Gestión Logística"
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-marron-tierra rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-verde-agronomo mb-4">
                  Gestión Logística
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Servicio integral de transporte especializado en ganado bovino y entrega de productos al campo,
                  garantizando el bienestar animal y la puntualidad en las entregas.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-verde-agronomo mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Flota propia de camiones jaula</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-verde-agronomo mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Entrega directa al establecimiento</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-verde-agronomo mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Cumplimiento de normativas de bienestar animal</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-verde-agronomo mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Cobertura en toda la región pampeana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Generales */}
      <section className="py-16 bg-gris-claro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-verde-agronomo mb-4">
              ¿Por qué elegir Hidabo?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Todos nuestros productos están formulados con los más altos estándares de calidad y respaldados por años
              de investigación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-verde-agronomo rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-verde-agronomo mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600 text-sm">
                Rigurosos controles de calidad en cada etapa del proceso productivo
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-amarillo-calido rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-verde-agronomo mb-2">Resultados Comprobados</h3>
              <p className="text-gray-600 text-sm">
                Más de 20 años de experiencia respaldando la efectividad de nuestros productos
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-marron-tierra rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-verde-agronomo mb-2">Asesoramiento Técnico</h3>
              <p className="text-gray-600 text-sm">
                Equipo de profesionales para brindar el mejor asesoramiento personalizado
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-naranja-terroso rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-verde-agronomo mb-2">Entrega al Campo</h3>
              <p className="text-gray-600 text-sm">Servicio de entrega directa a su establecimiento en todo el país</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-verde-agronomo mb-6">
            ¿Necesitás asesoramiento para elegir el producto ideal?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Nuestro equipo técnico está listo para ayudarte a encontrar la solución perfecta para las necesidades
            específicas de tu ganado
          </p>
          <Button
            size="lg"
            className="bg-naranja-terroso hover:bg-orange-600 text-white px-8 py-4 text-lg"
            onClick={() => handleNavigation("/contacto")}
          >
            Solicitar Asesoramiento
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
