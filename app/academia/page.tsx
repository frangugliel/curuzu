"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Clock, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function Academia() {
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => (prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]))
  }

  const articulos = [
    {
      id: 1,
      titulo: "Deficiencias Minerales en Bovinos: Cómo Identificarlas y Prevenirlas",
      descripcion:
        "Guía completa para reconocer los síntomas de deficiencias minerales en el ganado y las estrategias más efectivas para prevenirlas mediante suplementación adecuada.",
      descripcionCompleta:
        "Esta guía completa te ayudará a identificar los signos tempranos de deficiencias minerales en tu ganado bovino. Aprenderás sobre los minerales esenciales como calcio, fósforo, magnesio, zinc y cobre, sus funciones específicas en el organismo animal, y cómo una deficiencia puede afectar la productividad, reproducción y salud general del rodeo. Incluye protocolos de diagnóstico, análisis de sangre recomendados, y estrategias de suplementación preventiva adaptadas a diferentes sistemas productivos y regiones geográficas de Argentina.",
      imagen: "/mineral-deficiency-cattle.png",
      categoria: "Nutrición",
      tiempoLectura: "8 min",
      fecha: "15 Dic 2024",
    },
    {
      id: 2,
      titulo: "Optimización de la Suplementación Mineral en Pastoreo",
      descripcion:
        "Estrategias prácticas para maximizar la eficiencia de los suplementos minerales en sistemas de pastoreo extensivo, considerando factores climáticos y de manejo.",
      descripcionCompleta:
        "Descubre las mejores prácticas para implementar programas de suplementación mineral en sistemas de pastoreo extensivo. Esta guía aborda factores críticos como la palatabilidad de los suplementos, ubicación estratégica de comederos, frecuencia de suministro, y adaptación a diferentes estaciones del año. Incluye casos de estudio de establecimientos argentinos que han optimizado sus programas de suplementación, resultando en mejoras significativas en ganancia de peso, índices reproductivos y salud general del rodeo.",
      imagen: "/cattle-grazing-supplementation.png",
      categoria: "Manejo",
      tiempoLectura: "12 min",
      fecha: "8 Dic 2024",
    },
    {
      id: 3,
      titulo: "Nutrición Bovina en Épocas de Sequía: Soluciones Prácticas",
      descripcion:
        "Consejos técnicos para mantener la salud y productividad del ganado durante períodos de escasez de forraje y condiciones climáticas adversas.",
      descripcionCompleta:
        "Las sequías representan uno de los mayores desafíos para la ganadería argentina. Esta guía proporciona estrategias integrales para mantener la condición corporal y productividad del ganado durante períodos de estrés hídrico. Aprenderás sobre suplementación de emergencia, manejo de pasturas degradadas, uso eficiente del agua disponible, y protocolos de alimentación alternativa. Incluye recomendaciones específicas para diferentes categorías de animales y sistemas productivos, así como indicadores para la toma de decisiones críticas durante crisis climáticas.",
      imagen: "/drought-cattle-nutrition.png",
      categoria: "Clima",
      tiempoLectura: "10 min",
      fecha: "1 Dic 2024",
    },
    {
      id: 4,
      titulo: "Mejorando la Fertilidad Bovina a través de la Nutrición",
      descripcion:
        "Análisis detallado de cómo una nutrición mineral balanceada impacta directamente en los índices reproductivos del ganado bovino.",
      descripcionCompleta:
        "La nutrición juega un papel fundamental en la eficiencia reproductiva del ganado bovino. Esta guía examina la relación entre el estado nutricional y parámetros reproductivos como tasa de preñez, intervalo entre partos, y desarrollo folicular. Aprenderás sobre los requerimientos nutricionales específicos durante diferentes etapas del ciclo reproductivo, desde la preparación para el servicio hasta la lactancia. Incluye protocolos de suplementación pre y post-parto, manejo nutricional de vaquillonas, y estrategias para optimizar la condición corporal al momento del servicio.",
      imagen: "/bovine-fertility-nutrition.png",
      categoria: "Reproducción",
      tiempoLectura: "15 min",
      fecha: "24 Nov 2024",
    },
    {
      id: 5,
      titulo: "Transporte de Ganado: Mejores Prácticas para Reducir el Estrés",
      descripcion:
        "Protocolo completo para el transporte seguro de bovinos, minimizando el estrés y garantizando el bienestar animal durante el traslado.",
      descripcionCompleta:
        "El transporte de ganado requiere planificación cuidadosa y técnicas específicas para minimizar el estrés y garantizar el bienestar animal. Esta guía cubre todos los aspectos del transporte bovino, desde la preparación pre-embarque hasta la descarga en destino. Aprenderás sobre diseño y mantenimiento de camiones jaula, densidades de carga apropiadas, manejo de animales durante el embarque, y protocolos de hidratación y alimentación durante viajes largos. Incluye normativas vigentes, documentación requerida, y técnicas de manejo que reducen significativamente las pérdidas por estrés y lesiones durante el transporte.",
      imagen: "/cattle-transport-best-practices.png",
      categoria: "Transporte",
      tiempoLectura: "6 min",
      fecha: "17 Nov 2024",
    },
    {
      id: 6,
      titulo: "Análisis de Suelos y su Impacto en la Nutrición del Ganado",
      descripcion:
        "Cómo interpretar análisis de suelos para determinar las necesidades de suplementación mineral específicas de cada establecimiento.",
      descripcionCompleta:
        "Los análisis de suelo son herramientas fundamentales para diseñar programas de suplementación mineral específicos para cada establecimiento. Esta guía te enseña a interpretar correctamente los resultados de análisis de suelo, identificar deficiencias y excesos minerales, y traducir esta información en recomendaciones prácticas de suplementación. Aprenderás sobre la relación entre la composición mineral del suelo, la calidad de las pasturas, y los requerimientos nutricionales del ganado. Incluye metodologías de muestreo, interpretación de parámetros clave como pH, materia orgánica y disponibilidad de minerales, y cómo ajustar los programas de suplementación según las características específicas de cada potrero o región.",
      imagen: "/soil-analysis-cattle-nutrition.png",
      categoria: "Suelos",
      tiempoLectura: "11 min",
      fecha: "10 Nov 2024",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-verde-agronomo to-green-800 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="h-16 w-16 text-amarillo-calido" />
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Academia Hidabo</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Conocimiento técnico especializado para optimizar la nutrición y manejo de su ganado bovino
          </p>
        </div>
      </section>

      {/* Artículos */}
      <section className="py-16 bg-gris-claro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articulos.map((articulo) => (
              <Card
                key={articulo.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={articulo.imagen || "/placeholder.svg"}
                    alt={articulo.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-verde-agronomo text-white">{articulo.categoria}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {articulo.fecha}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {articulo.tiempoLectura}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-verde-agronomo mb-3 line-clamp-2">
                    {articulo.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {expandedCards.includes(articulo.id) ? articulo.descripcionCompleta : articulo.descripcion}
                  </p>
                  <Button
                    onClick={() => toggleCard(articulo.id)}
                    className="w-full bg-verde-agronomo hover:bg-green-700 hover:shadow-lg transition-all duration-300 group"
                  >
                    {expandedCards.includes(articulo.id) ? "Ver Menos" : "Ver Más"}
                    {expandedCards.includes(articulo.id) ? (
                      <ChevronUp className="ml-2 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
                    ) : (
                      <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-verde-agronomo mb-6">
            ¿Necesitás asesoramiento personalizado?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Nuestro equipo técnico está disponible para brindarte consultoría especializada adaptada a las necesidades
            específicas de tu establecimiento
          </p>
          <Link
            href="/contacto"
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }, 100)
            }}
          >
            <Button size="lg" className="bg-naranja-terroso hover:bg-orange-600 text-white px-8 py-4 text-lg">
              Solicitar Consultoría
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
