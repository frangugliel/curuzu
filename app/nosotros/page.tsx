"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Truck, Factory } from "lucide-react"

export default function Nosotros() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-verde-agronomo to-green-800 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Nuestra Historia</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Más de dos décadas comprometidos con la excelencia en nutrición bovina y el desarrollo del sector
            agropecuario argentino
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-verde-agronomo mb-6">
                Desde 2003, cuidando su ganado
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Hidabo nació en 2003 con una visión clara: brindar soluciones integrales de nutrición bovina que
                  mejoren la productividad y salud del ganado argentino. Fundada por un equipo de veterinarios y
                  especialistas en nutrición animal, la empresa comenzó como un pequeño laboratorio dedicado a la
                  formulación de suplementos minerales.
                </p>
                <p>
                  A lo largo de los años, hemos expandido nuestros servicios para incluir asesoramiento técnico
                  personalizado y transporte especializado de ganado, convirtiéndonos en un socio estratégico para
                  productores de todo el país.
                </p>
                <p>
                  Hoy, con más de 20 años de experiencia, seguimos innovando y adaptándonos a las necesidades del
                  sector, manteniendo siempre nuestro compromiso con la calidad y la excelencia en el servicio.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/hidabo-founders-history.png"
                alt="Historia de Hidabo"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gris-claro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-verde-agronomo mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contamos con instalaciones modernas y una flota especializada para garantizar la máxima calidad en todos
              nuestros productos y servicios de transporte
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Planta de Producción */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src="/hidabo-production-plant.png"
                  alt="Planta de producción Hidabo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Factory className="h-8 w-8 text-amarillo-calido" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-verde-agronomo mb-2">Planta de Producción</h3>
                <p className="text-gray-600">
                  Instalaciones modernas con tecnología de punta para la fabricación de suplementos minerales de alta
                  calidad, garantizando los más altos estándares de producción.
                </p>
              </CardContent>
            </Card>

            {/* Flota de Transporte */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src="/hidabo-transport-fleet.png"
                  alt="Flota de transporte Hidabo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Truck className="h-8 w-8 text-amarillo-calido" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-verde-agronomo mb-2">Flota de Transporte</h3>
                <p className="text-gray-600">
                  Camiones jaula especializados para el transporte seguro y eficiente de ganado bovino en todo el país,
                  con conductores capacitados y vehículos en óptimas condiciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-verde-agronomo mb-6">
            ¿Querés conocer más sobre nuestros productos?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Descubrí nuestra línea completa de suplementos minerales diseñados para optimizar la nutrición de tu ganado
          </p>
          <Link
            href="/productos"
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }, 100)
            }}
          >
            <Button
              size="lg"
              className="bg-naranja-terroso hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
            >
              Ver Nuestros Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
