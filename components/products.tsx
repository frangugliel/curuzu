import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Products() {
  const products = [
    {
      name: "Suplemento Mineral Premium",
      description:
        "Fórmula completa con macro y microelementos esenciales para el desarrollo óptimo del ganado bovino.",
      features: [
        "Rico en fósforo y calcio",
        "Vitaminas A, D y E",
        "Oligoelementos balanceados",
        "Envío directo al campo",
      ],
      image: "/placeholder-osex2.png",
    },
    {
      name: "Suplemento Mineral Estándar",
      description: "Solución equilibrada y económica que cubre las necesidades nutricionales básicas de su ganado.",
      features: [
        "Minerales esenciales",
        "Fácil administración",
        "Excelente relación calidad-precio",
        "Disponibilidad inmediata",
      ],
      image: "/cattle-mineral-supplement.png",
    },
    {
      name: "Suplemento Mineral Especializado",
      description: "Fórmula específica diseñada para condiciones particulares y necesidades especiales del ganado.",
      features: [
        "Formulación personalizada",
        "Para condiciones específicas",
        "Asesoramiento incluido",
        "Seguimiento técnico",
      ],
      image: "/placeholder-133xs.png",
    },
  ]

  return (
    <section id="productos" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-midnight-blue mb-6">Nuestros Productos</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una línea completa de suplementos minerales diseñados específicamente para satisfacer las
            necesidades nutricionales de su ganado bovino.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl text-midnight-blue">{product.name}</CardTitle>
                <CardDescription className="text-gray-600">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-warm-taupe rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-midnight-blue hover:bg-blue-800 text-white">Más Información</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
