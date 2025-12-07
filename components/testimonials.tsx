const testimonials = [
  {
    name: "Priya S.",
    role: "Product Designer",
    text: "Acme reduced our prototype cycle time by 4x — the design system made collaboration painless.",
  },
  { name: "Ravi K.", role: "Engineering Manager", text: "Integration was seamless and documentation was excellent." },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold">What customers say</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-700">"{t.text}"</p>
              <footer className="mt-4 text-sm text-gray-500">
                — {t.name}, {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
