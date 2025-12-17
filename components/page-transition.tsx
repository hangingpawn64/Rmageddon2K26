"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const pageConfig: Record<string, { title: string; color: string }> = {
  "/": { title: "HOME", color: "text-cyan-400" },
  "/page-2": { title: "EVENTS", color: "text-red-600" },
  "/page-3": { title: "ACCOMMODATION", color: "text-green-600" },
  "/page-4": { title: "CONTACT US", color: "text-yellow-600" },
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)
  const [currentPage, setCurrentPage] = useState(pageConfig[pathname] || pageConfig["/"])

  useEffect(() => {
    const newPage = pageConfig[pathname] || pageConfig["/"]
    setCurrentPage(newPage)

    setIsTransitioning(true)

    const fadeOutTimer = setTimeout(() => {
      setIsLoading(true)
    }, 200)

    const contentTimer = setTimeout(() => {
      setDisplayChildren(children)
    }, 1000)

    const fadeInTimer = setTimeout(() => {
      setIsLoading(false)
      setIsTransitioning(false)
    }, 1400)

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(contentTimer)
      clearTimeout(fadeInTimer)
    }
  }, [pathname, children])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-900 animate-in fade-in duration-500 ease-in-out">
          <div className="relative flex w-full items-center justify-center overflow-hidden" style={{ height: "250px" }}>
            <div
              className="absolute inset-0 bg-black transition-all duration-700 ease-in-out"
              style={{
                clipPath: "polygon(0 35%, 100% 25%, 100% 75%, 0 65%)",
              }}
            />
            <h1
              className={`relative z-10 text-6xl font-black tracking-wider ${currentPage.color} animate-in fade-in zoom-in-95 duration-700 ease-out`}
            >
              {currentPage.title}
            </h1>
          </div>
          {/* Loading spinner below */}
          <div className="mt-12 animate-in fade-in zoom-in-90 duration-1000 ease-out delay-200">
            <div className="h-8 w-8 animate-spin rounded-full border-[5px] border-white border-t-transparent" />
          </div>
        </div>
      )}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isTransitioning || isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {displayChildren}
      </div>
    </>
  )
}
