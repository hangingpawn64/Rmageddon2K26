export default function Page4() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-balance text-5xl font-bold tracking-tight">Welcome to Page 4</h1>
        <p className="text-pretty text-lg text-muted-foreground max-w-2xl">
          You've reached the fourth and final page. The transitions keep everything smooth!
        </p>
        <img
          src="/Page Transitions-3.png"
          alt="Page 4 illustration"
          className="w-full max-w-3xl rounded-lg border border-border shadow-lg"
        />
      </div>
    </main>
  )
}
