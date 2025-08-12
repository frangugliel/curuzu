"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/productos", label: "Productos" },
    { href: "/academia", label: "Academia" },
    { href: "/contacto", label: "Contacto" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="bg-verde-agronomo shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" onClick={scrollToTop}>
              <img src="/logo-hidabo.png" alt="Hidabo Logo" className="h-12 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={scrollToTop}
                className={`transition-colors font-semibold text-lg ${
                  pathname === item.href
                    ? "text-amarillo-calido border-b-2 border-amarillo-calido pb-1"
                    : "text-white hover:text-amarillo-calido"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-amarillo-calido"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setIsMenuOpen(false)
                    scrollToTop()
                  }}
                  className={`transition-colors font-semibold py-2 text-left ${
                    pathname === item.href ? "text-amarillo-calido" : "text-white hover:text-amarillo-calido"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
