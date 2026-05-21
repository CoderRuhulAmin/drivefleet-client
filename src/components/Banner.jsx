import { Separator } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070')] bg-cover bg-center opacity-20"></div>

      <div className="relative container mx-auto px-6 py-12 lg:py-24">
        <div className="max-w-3/4 space-y-8">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide">
              Premium Car Rental Platform
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Drive Your <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                 Dream Car
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Discover luxury, sports, SUV, and economy cars at the best prices.
              Fast booking, secure payment, and premium driving experience —
              all in one platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href={`/cars`}>
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 text-sm font-semibold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30">
              Explore Cars
            </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div>
              <h3 className="text-3xl font-bold text-blue-400">500+</h3>
              <p className="text-gray-400 text-sm">Cars Available</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">10k+</h3>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">24/7</h3>
              <p className="text-gray-400 text-sm">Customer Support</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-400">100%</h3>
              <p className="text-gray-400 text-sm">Secure Booking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;