import { useEffect, useState, useRef } from "react"
import { useLocation } from "react-router-dom"

// Map paths to titles and colors
const pageConfig = {
  "/": { title: "HOME", color: "text-cyan-400" },
  "/events": { title: "EVENTS", color: "text-red-600" },
  "/accommodation": { title: "ACCOMMODATION", color: "text-green-600" },
  "/contact": { title: "CONTACT", color: "text-yellow-600" },
}

export function PageTransition({ children }) {
  const location = useLocation()
  const pathname = location.pathname

  const [isLoading, setIsLoading] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)
  const [currentPage, setCurrentPage] = useState(pageConfig[pathname] || { title: "PAGE", color: "text-white" })

  const isFirstRender = useRef(true)

  useEffect(() => {
    // Skip animation on first render
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    // Update title based on new path
    const newPage = pageConfig[pathname] || { title: "PAGE", color: "text-white" }
    setCurrentPage(newPage)
    setIsTransitioning(true)

    // Sequence of animations
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
          {/* Animated Background Shape */}
          <div className="relative flex w-full items-center justify-center overflow-hidden" style={{ height: "250px" }}>
            <div
              className="absolute inset-0 bg-black transition-all duration-700 ease-in-out"
              style={{
                clipPath: "polygon(0 35%, 100% 25%, 100% 75%, 0 65%)",
              }}
            />
            {/* Title Text */}
            <h1
              className={`relative z-10 text-3xl md:text-6xl font-black tracking-wider ${currentPage.color} animate-in fade-in duration-700 ease-out`}
            >
              {currentPage.title}
            </h1>
          </div>

          {/* Loading Spinner */}
          <div className="mt-12 animate-in fade-in duration-1000 ease-out delay-200">
            <div className="h-8 w-8 animate-spin rounded-full border-[5px] border-white border-t-transparent" />
          </div>
        </div>
      )}

      {/* Main Content Fade Logic */}
      <div
        className={`transition-all duration-500 ease-in-out ${isTransitioning || isLoading ? "opacity-0" : "opacity-100"
          }`}
      >
        {displayChildren}
      </div>
    </>
  )
}
