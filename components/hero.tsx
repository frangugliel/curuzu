"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="bg-gradient-to-br from-midnight-blue to-blue-800 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-serif text-4xl lg:text-6xl font-bold leading-tight">
              Fortaleciendo la salud de su ganado
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Suplementos minerales de calidad premium, asesoramiento técnico especializado y transporte seguro para su
              ganado bovino.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-warm-taupe hover:bg-opacity-90 text-white px-8 py-3"
                onClick={() => scrollToSection("productos")}
              >
                Ver Productos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-midnight-blue px-8 py-3 bg-transparent"
                onClick={() => scrollToSection("contacto")}
              >
                Contactar
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src="/healthy-cattle-grazing.png" alt="Ganado bovino saludable" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
