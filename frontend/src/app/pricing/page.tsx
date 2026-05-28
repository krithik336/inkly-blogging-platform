export default function PricingPage() {

  return (

    <div className="min-h-screen text-white p-10">

      <h1 className="text-5xl font-bold text-center mb-12">
        Inkly Pricing
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <div className="bg-[#1E293B] p-8 rounded-3xl">

          <h2 className="text-3xl font-bold mb-4">
            Free Plan
          </h2>

          <p className="text-gray-400 mb-6">
            Perfect for beginners and casual writers.
          </p>

          <ul className="space-y-3 mb-8">
            <li>✅ 5 AI blogs/day</li>
            <li>✅ Basic AI generation</li>
            <li>✅ Markdown editor</li>
          </ul>

          <button className="w-full bg-gray-700 py-3 rounded-xl">
            Current Plan
          </button>

        </div>

        <div className="bg-primary-500 p-8 rounded-3xl">

          <h2 className="text-3xl font-bold mb-4">
            Pro Plan
          </h2>

          <p className="text-white/80 mb-6">
            Built for creators and professionals.
          </p>

          <ul className="space-y-3 mb-8">
            <li>🚀 Unlimited AI blogs</li>
            <li>🚀 SEO optimization</li>
            <li>🚀 Smart analytics</li>
            <li>🚀 Priority AI responses</li>
          </ul>

          <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
            Upgrade to Pro
          </button>

        </div>

      </div>

    </div>

  );

}