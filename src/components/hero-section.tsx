"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Users,
  GraduationCap,
  CalendarCheck,
  ReceiptText,
  Calendar,
  TrendingUp,
  Play,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5FBF7] via-[#F0FAF4] to-[#EAF7EE] pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-28">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[400px] sm:h-[500px] w-[90%] max-w-[800px] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[300px] sm:h-[400px] w-[300px] sm:w-[450px] rounded-full bg-green-200/35 blur-3xl" />

      {/* Main Container */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          
          {/* =========================================================================
              LEFT COLUMN: Header, 2-Line Stylized Title, Paragraph, Buttons, Rating
              ========================================================================= */}
          <div className="relative z-20 flex flex-col justify-center lg:col-span-6 xl:col-span-6">
            
            {/* 1. Clean Top Micro-Badge (Simple & Punchy) */}
            <div className="flex items-center gap-2 text-slate-900 leading-tight">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0F5132]">#1</span>
              <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider leading-[1.08] text-slate-600">
                Next-Gen<br />School EMIS
              </span>
            </div>

            {/* 2. Main Stylized 2-Line Headline (Exact typographic rhythm from reference screenshot) */}
            <h1 className="mt-3.5 sm:mt-5 text-[32px] xs:text-[38px] sm:text-5xl lg:text-[56px] xl:text-[62px] font-normal tracking-tight leading-[1.06] text-slate-900">
              <span className="font-light">Smart</span><span className="font-black">EMIS</span><span className="font-light">School</span>
              <span className="block font-black text-slate-900 mt-1 sm:mt-1.5">
                Management<span className="font-light text-slate-800">System</span>
              </span>
            </h1>

            {/* 3. Description (Clean, readable, balanced line wrapping) */}
            <p className="mt-4 sm:mt-5 max-w-[340px] xs:max-w-[360px] sm:max-w-lg lg:max-w-xl text-[14.5px] sm:text-base lg:text-[17px] leading-relaxed text-slate-600 font-normal [text-wrap:pretty]">
              You can now manage your school, college, or any educational institution
              seamlessly with Hamro Pathshala — completely smart, secure, and unified in one powerful platform.
            </p>

            {/* 4. Action Buttons (Primary 'Explore Smart EMIS' CTA + Play Button with subtle corner radius) */}
            <div className="mt-6 sm:mt-8 flex items-center gap-3.5 sm:gap-4">
              {/* Primary CTA */}
              <Link
                href="/explore"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F5132] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-md shadow-emerald-950/20 transition-all duration-200 hover:bg-[#159447] hover:shadow-emerald-700/30 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Explore Smart EMIS</span>
                <svg
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              {/* Play Button with matching subtle radius */}
              <button
                type="button"
                aria-label="Watch Platform Overview"
                className="group flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-lg bg-emerald-100/90 text-[#0F5132] border border-emerald-200/80 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-[#159447] hover:text-white hover:scale-105 active:scale-95"
              >
                <Play className="size-5 sm:size-6 fill-current translate-x-0.5" />
              </button>
            </div>

            {/* Desktop-Only Bottom 4-Feature Highlights Row */}
            <div className="hidden sm:grid sm:grid-cols-4 sm:gap-6 mt-12 pt-8 border-t border-emerald-200/70">
              {/* Item 1 */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100/90 text-[#159447]">
                  <Users className="size-4 sm:size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Students</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Management</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100/90 text-[#159447]">
                  <GraduationCap className="size-4 sm:size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Teachers</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Management</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100/90 text-[#159447]">
                  <CalendarCheck className="size-4 sm:size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Attendance</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Tracking</span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100/90 text-[#159447]">
                  <ReceiptText className="size-4 sm:size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Fees & Reports</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Automation</span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Layered Visual Composition (Proportionate Mobile Layout)
              ========================================================================= */}
          <div className="relative flex items-center justify-center lg:col-span-6 xl:col-span-6 mt-4 sm:mt-6 lg:mt-0">
            <div className="relative h-[460px] w-full max-w-[360px] sm:h-[580px] sm:max-w-[540px] lg:h-[660px] lg:max-w-[620px] mx-auto">
              
              {/* Layer 1: Green Background Gradient Circle */}
              <div className="absolute right-0 top-4 sm:top-6 -z-0 h-[310px] w-[310px] sm:h-[460px] sm:w-[460px] lg:h-[540px] lg:w-[540px] pointer-events-none select-none opacity-95">
                <Image
                  src="/heroassests/green-circle.svg"
                  alt="Green Circle Background"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Layer 2: Decorative Dot Matrix Pattern */}
              <div className="animate-float-dots absolute top-2 left-6 sm:left-28 lg:left-36 z-10 w-16 sm:w-24 opacity-75 pointer-events-none select-none">
                <Image
                  src="/heroassests/dots.svg"
                  alt="Dots Pattern"
                  width={110}
                  height={110}
                  className="object-contain"
                />
              </div>

              {/* Layer 3: Paper Airplane & Flight Trail */}
              <div className="animate-float-plane absolute -top-3 right-0 lg:-right-4 z-10 w-20 sm:w-32 pointer-events-none select-none">
                <div className="relative">
                  <Image
                    src="/heroassests/curve.svg"
                    alt="Flight Trail"
                    width={140}
                    height={180}
                    className="object-contain opacity-80"
                  />
                  {/* Origami Paper Plane SVG */}
                  <div className="absolute -top-2 right-0 rotate-12 text-[#159447]">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-8 sm:h-8"
                    >
                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Layer 4: Dashboard Mockup (Behind the Student - z-10) */}
              <div className="animate-float-dash absolute -left-2 top-12 sm:left-0 sm:top-18 lg:-left-6 lg:top-20 z-10 w-[200px] sm:w-[320px] lg:w-[420px] pointer-events-none select-none drop-shadow-2xl">
                <Image
                  src="/heroassests/dashboard.png"
                  alt="SchoolPro Dashboard Preview"
                  width={880}
                  height={580}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>

              {/* Layer 5: Main Student Transparent PNG (z-20) */}
              <div className="animate-float-student absolute right-0 top-4 sm:right-2 sm:top-4 lg:right-4 lg:top-2 z-20 h-[390px] sm:h-[500px] lg:h-[620px] w-auto select-none pointer-events-none">
                <Image
                  src="/heroassests/student.png"
                  alt="Student with SchoolPro"
                  width={600}
                  height={750}
                  className="h-full w-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Layer 6: Floating Student Statistics Card (z-30) */}
              <div className="animate-float-card-1 absolute right-0 top-6 sm:right-2 sm:top-12 lg:right-4 lg:top-16 z-30 flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-emerald-100/90 bg-white/95 px-2.5 py-2 sm:px-4 sm:py-3.5 shadow-xl backdrop-blur-md scale-90 sm:scale-100 origin-top-right">
                <div className="flex size-7 sm:size-10 items-center justify-center rounded-lg sm:rounded-xl bg-emerald-50 text-[#159447]">
                  <Users className="size-3.5 sm:size-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-sm sm:text-xl font-extrabold text-slate-900">1,248</span>
                    {/* Trend Sparkline */}
                    <div className="flex items-center text-[9px] sm:text-[11px] font-bold text-[#159447]">
                      <svg width="18" height="10" viewBox="0 0 24 12" fill="none" className="mr-0.5 sm:w-6 sm:h-3">
                        <path
                          d="M1 10L7 5L13 8L23 2"
                          stroke="#159447"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>+12%</span>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-500">Total Students</span>
                </div>
              </div>

              {/* Layer 7: Floating Attendance Card (z-30) */}
              <div className="animate-float-card-2 absolute -right-1 top-[210px] sm:right-0 sm:top-[280px] lg:right-2 lg:top-[330px] z-30 flex items-center gap-2 sm:gap-2.5 rounded-xl sm:rounded-2xl border border-emerald-100/90 bg-white/95 px-2.5 py-2 sm:px-4 sm:py-3 shadow-xl backdrop-blur-md scale-90 sm:scale-100 origin-top-right">
                <div className="flex size-7 sm:size-9 items-center justify-center rounded-lg sm:rounded-xl bg-emerald-50 text-[#159447]">
                  <Calendar className="size-3 sm:size-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-sm sm:text-xl font-extrabold text-slate-900">92%</span>
                    <span className="text-[9px] sm:text-[11px] font-bold text-[#159447] flex items-center">
                      <TrendingUp className="size-2.5 sm:size-3 mr-0.5" /> +5%
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-500">Attendance Rate</span>
                </div>
              </div>

              {/* Layer 8: Floating Polaroid School Photo Card (z-30) */}
              <div className="animate-float-card-3 absolute bottom-2 right-1 sm:bottom-8 sm:right-6 lg:bottom-12 lg:right-8 z-30 scale-85 sm:scale-100 origin-bottom-right">
                <div className="group relative rotate-3 rounded-xl sm:rounded-2xl border-3 sm:border-4 border-white bg-white p-1 sm:p-1.5 shadow-2xl transition-transform duration-300 hover:rotate-0">
                  <div className="relative h-16 w-28 sm:h-26 sm:w-44 lg:h-30 lg:w-52 overflow-hidden rounded-lg sm:rounded-xl bg-slate-100">
                    <Image
                      src="/heroassests/schoolbuilding.png"
                      alt="Modern School Campus"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Hand-drawn Arrow & Note */}
                <div className="absolute -bottom-5 right-0 flex items-center gap-1 text-[#0F5132]">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 30 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="rotate-12 sm:w-6 sm:h-5"
                  >
                    <path d="M25 4C18 6 10 12 6 20M6 20L5 14M6 20L12 21" />
                  </svg>
                  <span className="font-serif italic text-[9px] sm:text-xs font-bold text-slate-700 whitespace-nowrap">
                    Better Education, Brighter Future
                  </span>
                </div>
              </div>

              {/* Layer 9: Decorative Botanical Leaves */}
              {/* Leaf 1 - Bottom Left */}
              <div className="animate-float-leaf-1 absolute bottom-6 left-1 sm:left-6 lg:left-8 z-20 w-10 sm:w-18 lg:w-22 pointer-events-none select-none drop-shadow-md">
                <Image
                  src="/heroassests/leaf-1.svg"
                  alt="Decorative Leaf Accent"
                  width={90}
                  height={120}
                  className="object-contain"
                />
              </div>

              {/* Leaf 2 - Mid/Bottom Right behind student */}
              <div className="animate-float-leaf-2 absolute bottom-20 right-0 sm:right-2 lg:right-4 z-10 w-9 sm:w-16 lg:w-18 pointer-events-none select-none drop-shadow-md opacity-90">
                <Image
                  src="/heroassests/leaf-2.svg"
                  alt="Decorative Leaf Accent"
                  width={90}
                  height={120}
                  className="object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Organic Wave Border */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 sm:h-12 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-full w-full fill-white"
        >
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
