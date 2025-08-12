import { MapPin, Clock, Mail, Phone } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Av. Principal 1234", "Ciudad, Provincia", "Código Postal 12345"],
    },
    {
      icon: Clock,
      title: "Horarios de Atención",
      details: ["Lunes a Viernes: 8:00 - 18:00", "Sábados: 8:00 - 13:00", "Domingos: Cerrado"],
    },
    {
      icon: Mail,
      title: "Correos Electrónicos",
      details: ["info@hidabo.com", "ventas@hidabo.com", "tecnico@hidabo.com"],
    },
    {
      icon: Phone,
      title: "Teléfonos",
      details: ["+54 11 1234-5678", "+54 11 8765-4321", "WhatsApp: +54 9 11 1234-5678"],
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-midnight-blue mb-6">Contacto</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarle. Contáctenos para consultas sobre nuestros productos, asesoramiento técnico o
            servicios de transporte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-soft-silver rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-midnight-blue rounded-lg mb-6 mx-auto">
                <info.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-midnight-blue mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-700 text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
