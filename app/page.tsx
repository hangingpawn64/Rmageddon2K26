export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-balance text-5xl font-bold tracking-tight">Welcome to Page 1</h1>
        <p className="text-pretty text-lg text-muted-foreground max-w-2xl">
          This is the home page. Navigate using the navbar above to see the loading transitions between pages.
        </p>
        <img
          src="/Page Transitions.png"
          alt="Page 1 illustration"
          className="w-full max-w-3xl rounded-lg border border-border shadow-lg"
        />
      </div>
    </main>
  )
}
