import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award } from "lucide-react"

export default function Academy() {
  const academyFeatures = [
    {
      icon: BookOpen,
      title: "Guías Técnicas",
      description:
        "Acceso a guías especializadas sobre nutrición bovina, manejo de suplementos y mejores prácticas en el campo.",
    },
    {
      icon: Users,
      title: "Asesoramiento Personalizado",
      description: "Consultas directas con nuestros especialistas en nutrición bovina para resolver dudas específicas.",
    },
    {
      icon: Award,
      title: "Soluciones Técnicas",
      description: "Casos de estudio y soluciones probadas para optimizar la salud y productividad de su ganado.",
    },
  ]

  const resources = [
    {
      title: "Nutrición Bovina Básica",
      description: "Fundamentos esenciales para una alimentación balanceada del ganado bovino.",
      category: "Guía Técnica",
    },
    {
      title: "Manejo de Suplementos Minerales",
      description: "Mejores prácticas para la administración efectiva de suplementos minerales.",
      category: "Manual Práctico",
    },
    {
      title: "Optimización de Pasturas",
      description: "Estrategias para maximizar el valor nutricional de las pasturas naturales.",
      category: "Caso de Estudio",
    },
  ]

  return (
    <section id="academia" className="py-20 bg-soft-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-midnight-blue mb-6">Academia Hidabo</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Compartimos nuestro conocimiento y experiencia a través de recursos educativos, consejos técnicos y
            soluciones especializadas para el sector agropecuario.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {academyFeatures.map((feature, index) => (
            <div key={index} className="bg-warm-white rounded-lg p-8 shadow-lg text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-warm-taupe rounded-lg mb-6 mx-auto">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-midnight-blue mb-4">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-warm-white rounded-lg p-8 shadow-lg">
          <h3 className="font-serif text-2xl font-bold text-midnight-blue mb-8 text-center">Recursos Destacados</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="text-sm text-warm-taupe font-medium mb-2">{resource.category}</div>
                  <CardTitle className="font-serif text-lg text-midnight-blue">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="text-midnight-blue hover:text-warm-taupe font-medium transition-colors">
                    Leer más →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
