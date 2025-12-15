"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = mounted && resolvedTheme === "dark" ? "/logo-light.png" : "/logo-dark.png"

  return (
    <footer className="container py-8 border-t border-border">
      <div className="flex flex-col items-center text-center">
        <Link href="/" className="flex items-center justify-center mb-4">
          {mounted ? (
            <Image
              src={logoSrc || "/placeholder.svg"}
              alt="AI Atende Logo"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          ) : (
            <div className="h-12 w-[200px]" />
          )}
        </Link>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
          Automação inteligente de atendimento. Chatbots com IA, WhatsApp Business e agendamento automático para
          empresas que não param.
        </p>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} AI Atende. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
