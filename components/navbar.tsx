"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/page-2", label: "Events" },
    { href: "/page-3", label: "Accommodation" },
    { href: "/page-4", label: "Contact Us" },
  ]

  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-base font-semibold transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
