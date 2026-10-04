"use client";

export function StatsSection() {
  const stats = [
    { value: "500+", label: "Schools Onboarded" },
    { value: "250K+", label: "Active Students" },
    { value: "99.9%", label: "Cloud Uptime" },
    { value: "24/7", label: "Dedicated Support" },
  ];

  return (
    <section className="relative z-20 border-y border-emerald-100/80 bg-white/70 py-5 sm:py-6 backdrop-blur-sm">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-y-4 gap-x-6 sm:flex sm:items-center sm:justify-around sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 sm:gap-3 justify-center"
            >
              <span className="text-xl sm:text-2xl font-black text-[#0F5132] tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
