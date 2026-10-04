"use client";

import Image from "next/image";

export function SecondSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background Soft Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 -z-10 h-[500px] w-[800px] -translate-y-1/2 rounded-full bg-emerald-50/80 blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* =========================================================================
            2-COLUMN LAYOUT:
            LEFT: Student pointing up & right towards the header & dashboard
            RIGHT: Header + Dashboard Showcase + Bottom Trust Badges
            ========================================================================= */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          
          {/* =======================================================================
              LEFT SIDE: Student & Layered Vector Artwork (Order 2 on Mobile, 1 on Desktop)
              ======================================================================= */}
          <div className="order-2 lg:order-1 relative flex items-center justify-center lg:col-span-5 lg:justify-start mt-4 sm:mt-8 lg:mt-0">
            <div className="relative h-[440px] w-full max-w-[360px] xs:max-w-[400px] sm:h-[560px] sm:max-w-[500px] lg:h-[640px] lg:max-w-[540px]">
              
              {/* Layer 1: Geometric Grid Pattern */}
              <div className="absolute -left-6 top-6 -z-10 h-[360px] w-[360px] sm:h-[440px] sm:w-[440px] lg:h-[480px] lg:w-[480px] opacity-75 pointer-events-none select-none">
                <Image
                  src="/second%20section/grid.svg"
                  alt="Grid Pattern"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Layer 2: Soft Translucent Green Bubble (Bottom) */}
              <div className="absolute -left-4 bottom-2 -z-10 h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] opacity-90 pointer-events-none select-none">
                <Image
                  src="/second%20section/bubble-large.svg"
                  alt="Green Bubble"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Layer 3: Broken Circular Green Ring */}
              <div className="absolute -left-2 top-8 z-0 h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] lg:h-[500px] lg:w-[500px] pointer-events-none select-none drop-shadow-sm">
                <Image
                  src="/second%20section/green-ring.svg"
                  alt="Green Ring"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Layer 4: 5x5 Green Dot Matrix (Far Left Edge) */}
              <div className="animate-float-dots absolute -left-3 top-1/2 -translate-y-12 z-10 w-16 sm:w-20 opacity-85 pointer-events-none select-none">
                <Image
                  src="/second%20section/dots.svg"
                  alt="Dots Matrix"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>

              {/* Layer 5: Target Reticle Icon (Top Left) */}
              <div className="absolute top-8 left-6 z-10 flex size-6 sm:size-7 items-center justify-center rounded-full border border-slate-400/60 bg-white/70 p-1 pointer-events-none shadow-2xs backdrop-blur-xs">
                <span className="size-1.5 sm:size-2 rounded-full bg-slate-700" />
              </div>

              {/* Layer 6: Vibrant Orange Accent Dot (Bottom Left) */}
              <div className="absolute bottom-16 left-3 z-10 w-8 sm:w-10 pointer-events-none select-none drop-shadow-sm">
                <Image
                  src="/second%20section/orange-dot.svg"
                  alt="Orange Dot"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Layer 7: Main Student Pointing Transparent PNG */}
              <div className="animate-float-student absolute -left-1 bottom-0 z-20 h-[440px] sm:h-[520px] lg:h-[600px] w-auto select-none pointer-events-none">
                <Image
                  src="/second%20section/student-pointing.png"
                  alt="Student Pointing to Hamro Pathshala Platform"
                  width={600}
                  height={760}
                  className="h-full w-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Layer 8: Flight Trail & Origami Paper Airplane Pointing Towards Heading/Dashboard */}
              <div className="animate-float-plane absolute -top-4 right-0 sm:-top-6 sm:right-2 lg:-top-6 lg:right-2 z-20 w-36 sm:w-44 lg:w-48 pointer-events-none select-none">
                <div className="relative">
                  <Image
                    src="/second%20section/flight-path.svg"
                    alt="Flight Path Trail"
                    width={230}
                    height={160}
                    className="object-contain opacity-95"
                  />
                  {/* Origami Paper Plane */}
                  <div className="absolute -top-3 right-0 rotate-6 w-12 sm:w-14 lg:w-16">
                    <Image
                      src="/second%20section/paper-plane.svg"
                      alt="Paper Airplane"
                      width={70}
                      height={60}
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* =======================================================================
              RIGHT SIDE: Statement + Dashboard (Order 1 on Mobile, 2 on Desktop)
              ======================================================================= */}
          <div className="order-1 lg:order-2 flex flex-col items-center text-center lg:col-span-7">
            
            {/* 1. Single Unified Statement (Middle on Mobile 'order-2', Top on Desktop 'lg:order-1') */}
            <div className="order-2 lg:order-1 mt-5 sm:mt-8 lg:mt-0 flex flex-col items-center w-full max-w-[340px] xs:max-w-[400px] sm:max-w-xl lg:max-w-2xl px-2 sm:px-4 mx-auto text-center">
              <h2 className="text-[18px] xs:text-[20px] sm:text-2xl lg:text-[32px] xl:text-[36px] font-normal tracking-tight text-slate-900 leading-[1.35] [text-wrap:balance]">
                <strong className="font-extrabold text-slate-900">Hamro Pathshala</strong> is the most powerful, easiest, and customizable school management <strong className="font-extrabold text-slate-900">software.</strong>
              </h2>
            </div>

            {/* 2. Main Dashboard & Mobile App Showcase (First on Mobile 'order-1', Below Statement on Desktop 'lg:order-2') */}
            <div className="order-1 lg:order-2 mt-0 lg:mt-8 w-full flex items-center justify-center">
              <div className="animate-float-dash relative w-full max-w-[760px] select-none drop-shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
                <Image
                  src="/second%20section/Dashboard.png"
                  alt="Hamro Pathshala Complete School ERP Dashboard & Mobile App"
                  width={1440}
                  height={940}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
