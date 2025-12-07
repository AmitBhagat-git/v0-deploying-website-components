const features = [
  {
    title: "Fast prototyping",
    desc: "Create interactive prototypes in minutes and validate ideas with users quickly.",
  },
  { title: "Design system ready", desc: "Component-first approach that scales across teams and products." },
  { title: "Built for performance", desc: "Lightweight CSS and optimized images to deliver fast load times." },
]

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold">Features</h3>
        <p className="mt-2 text-gray-600 max-w-2xl">Everything teams need to design, build, and ship.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg">{f.title}</h4>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
