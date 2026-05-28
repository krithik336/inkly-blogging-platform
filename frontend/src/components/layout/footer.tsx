import { getCurrentYear } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {

  return (

    <footer className="relative overflow-hidden bg-gray-900">

      <span className="absolute top-0 -translate-x-1/2 left-1/2">

        <svg
          width="1260"
          height="457"
          viewBox="0 0 1260 457"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          <g filter="url(#filter0_f_11105_867)">
            <circle cx="630" cy="-173.299" r="230" fill="#3B2EFF" />
          </g>

          <defs>

            <filter
              id="filter0_f_11105_867"
              x="0"
              y="-803.299"
              width="1260"
              height="1260"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >

              <feFlood floodOpacity="0" result="BackgroundImageFix" />

              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />

              <feGaussianBlur
                stdDeviation="200"
                result="effect1_foregroundBlur_11105_867"
              />

            </filter>

          </defs>

        </svg>

      </span>

      <div className="relative z-10 py-16 xl:py-24">

        <div className="container px-5 mx-auto sm:px-7">

          <div className="grid gap-y-8 gap-x-6 lg:grid-cols-12">

            {/* BRAND */}

            <div className="lg:col-span-3 xl:col-span-4">

              <div>

                <Link
                  href="/"
                  className="block mb-6 text-4xl font-bold text-primary-500"
                >
                  Inkly
                </Link>

                <p className="block text-sm text-gray-400 mb-9 leading-7">

                  Inkly is an AI-powered blogging platform that helps creators
                  generate SEO-optimized blogs, streamline content creation,
                  and publish faster using intelligent writing tools.

                </p>

              </div>

            </div>

            {/* LINKS */}

            <div className="lg:col-span-6 xl:col-span-5">

              <div className="grid sm:grid-cols-3 gap-7">

                {/* SERVICES */}

                <div>

                  <span className="block mb-6 text-sm text-gray-400">
                    Services
                  </span>

                  <nav className="flex flex-col space-y-3">

                    <Link
                      href="/text-generator"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      AI Blog Writer
                    </Link>

                    <Link
                      href="/pricing"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      SEO Optimization
                    </Link>

                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Markdown Editor
                    </Link>

                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Smart Analytics
                    </Link>

                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Content Management
                    </Link>

                  </nav>

                </div>

                {/* FEATURES */}

                <div>

                  <span className="block mb-6 text-sm text-gray-400">
                    Features
                  </span>

                  <nav className="flex flex-col space-y-3">

                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      AI Content Generation
                    </Link>

                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      AI Suggestions
                    </Link>

                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      SEO Insights
                    </Link>

                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Blog Draft Saving
                    </Link>

                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Productivity Tools
                    </Link>

                  </nav>

                </div>

                {/* ACCOUNT */}

                <div>

                  <span className="block mb-6 text-sm text-gray-400">
                    Account
                  </span>

                  <nav className="flex flex-col space-y-3">

                    <Link
                      href="/signin"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Login
                    </Link>

                    <Link
                      href="/signup"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Sign Up
                    </Link>

                    <Link
                      href="/reset-password"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Reset Password
                    </Link>

                    <Link
                      href="/pricing"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Pricing
                    </Link>

                  </nav>

                </div>

              </div>

            </div>

            {/* NEWSLETTER */}

            <div className="lg:col-span-3">

              <div>

                <span className="block mb-6 text-sm text-gray-400">
                  Stay In Touch
                </span>

                <p className="block mb-5 text-sm text-gray-400 leading-6">

                  Subscribe to Inkly for AI blogging tips, SEO updates,
                  and content productivity insights.

                </p>

                <form>

                  <div className="flex flex-col items-center gap-2 w-full sm:max-w-64">

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-12 p-4 text-sm text-white border border-gray-700 rounded-full placeholder:text-center placeholder:text-gray-400 placeholder:text-sm text-center placeholder:font-normal bg-transparent focus:outline-0"
                      required
                    />

                    <button className="w-full px-6 py-3 text-sm font-medium text-white transition rounded-full cursor-pointer bg-primary-500 hover:bg-primary-600">

                      Subscribe Now

                    </button>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="border-t border-gray-800">

        <div className="container relative z-10 px-5 mx-auto sm:px-7">

          <div className="py-5 text-center">

            <p className="text-sm text-gray-500">

              &copy; {getCurrentYear()} Inkly — AI-powered blogging platform for SEO-optimized content creation.

            </p>

          </div>

        </div>

      </div>

    </footer>

  );

}