export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">Ship beautiful products faster</h2>
          <p className="mt-6 text-lg text-gray-600">
            Acme helps teams design, build and ship modern apps with delightful UX and developer happiness.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:opacity-95"
            >
              Get started
            </a>
            <a href="#features" className="px-6 py-3 rounded-lg border border-gray-200 text-gray-700">
              Learn more
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-500">Trusted by teams at startups and enterprises.</div>
        </div>

        <div className="order-first md:order-last">
          <img src="/images/product-20review.jpg" alt="product preview" className="w-full rounded-lg shadow" />
        </div>
      </div>
    </section>
  )
}
