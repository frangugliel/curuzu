import { Award, Users, Truck } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Calidad Premium",
      description:
        "Suplementos minerales formulados con los más altos estándares de calidad para optimizar la salud de su ganado.",
    },
    {
      icon: Users,
      title: "Asesoramiento Técnico",
      description:
        "Equipo de profesionales especializados en nutrición bovina para brindar el mejor asesoramiento técnico.",
    },
    {
      icon: Truck,
      title: "Transporte Especializado",
      description: "Servicio de camiones jaula para el transporte seguro y confiable de su ganado.",
    },
  ]

  return (
    <section id="empresa" className="py-20 bg-soft-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-midnight-blue mb-6">Sobre Hidabo</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Con años de experiencia en el sector agropecuario, Hidabo se ha consolidado como una empresa líder en la
            fabricación y comercialización de suplementos minerales para bovinos, ofreciendo soluciones integrales que
            incluyen asesoramiento técnico especializado y servicios de transporte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-warm-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-midnight-blue rounded-lg mb-6 mx-auto">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-midnight-blue mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-700 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
