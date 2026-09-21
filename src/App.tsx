import './App.css'

const samples = [
  {
    id: 'a',
    title: 'A - Spatino two-col',
    path: '/assets-src/homepage-samples/live/a-spatino-two-col.html',
  },
  {
    id: 'b',
    title: 'B - Sticky info rail',
    path: '/assets-src/homepage-samples/live/b-sticky-info-rail.html',
  },
  {
    id: 'c',
    title: 'C - Portrait-first',
    path: '/assets-src/homepage-samples/live/c-portrait-first.html',
  },
  {
    id: 'd',
    title: 'D - Contact-forward',
    path: '/assets-src/homepage-samples/live/d-contact-forward.html',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-white text-[#111111] px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <header className="flex flex-col gap-4 max-w-[540px]">
          <p className="text-md font-medium leading-none">Alexander Perez</p>
          <h1 className="text-2xl leading-none tracking-[-2.5px]">
            Portfolio scaffold
          </h1>
          <p className="text-md leading-relaxed text-gray-400">
            Person-first homepage options live in the design showcase. No product
            grid yet - biography and contact only.
          </p>
        </header>

        <section className="border-t border-gray-100 pt-10 flex flex-col gap-4">
          <p className="text-lg leading-[36.4px] tracking-[-0.64px] text-black">
            Review
          </p>
          <p className="text-md leading-relaxed text-gray-500 max-w-[540px]">
            Serve the showcase from{' '}
            <code className="text-[#111111]">assets-src/</code> with{' '}
            <code className="text-[#111111]">python3 -m http.server 8000</code>,
            then open{' '}
            <code className="text-[#111111]">homepage-samples.html</code>.
          </p>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            {samples.map((s) => (
              <li key={s.id}>
                <span className="text-[#111111] font-medium">{s.title}</span>
                <span className="mx-2">·</span>
                <span>{s.path.split('/').pop()}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="border-t border-gray-100 pt-10">
          <a
            className="text-2xl font-light text-[#b2b2b2] hover:text-[#111111] transition-colors"
            href="mailto:hello@iknowai.co"
          >
            hello@iknowai.co
          </a>
        </footer>
      </div>
    </main>
  )
}

export default App
