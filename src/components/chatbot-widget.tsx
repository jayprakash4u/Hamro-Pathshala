"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, MessageCircle, ChevronRight } from "lucide-react";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! 👋 Welcome to SchoolPro. How can I assist you with your school management needs today?",
      time: "Just now",
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    // Show polite greeting tooltip after 2.5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal.trim();
    const newMsg = {
      id: Date.now(),
      sender: "user",
      text: userText,
      time: "Just now",
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputVal("");

    // Simulate smart bot response
    setTimeout(() => {
      let reply = "Thank you for reaching out! Our team is available 24/7. Would you like to schedule a personalized demo or speak to our product specialist?";
      if (userText.toLowerCase().includes("price") || userText.toLowerCase().includes("cost")) {
        reply = "Our pricing is flexible based on your student enrollment! Check our Pricing section or request a custom quote for your institution.";
      } else if (userText.toLowerCase().includes("demo")) {
        reply = "We'd love to show you a live demo! Click 'Get Started Free' or provide your email and school name here to get instant access.";
      } else if (userText.toLowerCase().includes("feature") || userText.toLowerCase().includes("attendance")) {
        reply = "SchoolPro includes automated attendance tracking, fee management, student & teacher portals, exam report cards, and SMS alerts.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: reply,
          time: "Just now",
        },
      ]);
    }, 800);
  };

  const quickPrompts = [
    "✨ Book a Free Demo",
    "💳 Pricing & Plans",
    "📊 Attendance Tracking",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* =========================================================================
          1. CHAT WINDOW (POPOVER)
          ========================================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-4 flex h-[480px] w-[340px] sm:w-[380px] flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-2xl ring-1 ring-black/5"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#0F5132] to-[#159447] px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="relative flex size-10 items-center justify-center rounded-2xl bg-white/20 p-0.5 ring-2 ring-white/30 backdrop-blur-md">
                  <Image
                    src="/Chatbot.png"
                    alt="SchoolPro AI"
                    width={38}
                    height={38}
                    className="object-contain"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-[#0F5132] bg-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">SchoolPro Assistant</h3>
                  <p className="flex items-center gap-1 text-[11px] text-emerald-100/90 font-medium">
                    <span className="size-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Online & Ready to Help
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Close Chat"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto bg-slate-50/60 p-4 space-y-3.5">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="mr-2 flex size-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 p-0.5">
                      <Image
                        src="/Chatbot.png"
                        alt="Bot"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                      msg.sender === "user"
                        ? "bg-[#0F5132] text-white rounded-br-none"
                        : "bg-white text-slate-800 border border-slate-200/70 rounded-bl-none"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`block text-[10px] mt-1 text-right ${
                        msg.sender === "user" ? "text-emerald-200/80" : "text-slate-400"
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Suggestions */}
            <div className="bg-slate-50 border-t border-slate-100 px-3 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => {
                    setInputVal(prompt.replace(/^[^\w]+/, ""));
                  }}
                  className="shrink-0 rounded-full border border-emerald-200 bg-white px-3 py-1 text-[11px] font-medium text-emerald-800 shadow-2xs hover:bg-emerald-50 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 border-t border-slate-100 bg-white p-3"
            >
              <input
                type="text"
                placeholder="Ask about features, pricing, demo..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 rounded-full border border-slate-200 bg-slate-50/80 px-4 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#159447] focus:bg-white focus:outline-none"
              />
              <button
                type="submit"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0F5132] text-white transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
                disabled={!inputVal.trim()}
                aria-label="Send message"
              >
                <Send className="size-4 -translate-x-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          2. FLOATING TRIGGER BUTTON & TOOLTIP (Always Bottom Right)
          ========================================================================= */}
      <div className="relative flex items-center">
        {/* Floating Greeting Pill Tooltip */}
        <AnimatePresence>
          {!isOpen && showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mr-3 hidden sm:flex items-center gap-2 rounded-full border border-emerald-200/90 bg-white px-4 py-2 shadow-xl backdrop-blur-md"
            >
              <div className="flex size-2 rounded-full bg-[#159447] animate-ping" />
              <span className="text-xs font-semibold text-slate-800">
                Need Help? Chat with Us!
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="text-slate-400 hover:text-slate-600 ml-1"
                aria-label="Dismiss tooltip"
              >
                <X className="size-3" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Circular / Squircle Floating Chatbot Button with Up-Down Float Animation */}
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className={`group relative flex size-14 sm:size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#10B981] via-[#159447] to-[#0F5132] p-1 shadow-2xl shadow-emerald-900/40 ring-4 ring-white/90 transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-emerald-700/60 ${
            isOpen ? "" : "animate-float-bot"
          }`}
          aria-label="Open Chatbot Assistant"
        >
          {/* Subtle Outer Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-pulse pointer-events-none" />

          {/* Chatbot Image or Close Icon */}
          {isOpen ? (
            <X className="size-7 sm:size-8 text-white stroke-[2.5]" />
          ) : (
            <div className="relative size-full flex items-center justify-center">
              <Image
                src="/Chatbot.png"
                alt="SchoolPro AI Bot"
                fill
                className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110 scale-[1.22]"
                priority
              />
            </div>
          )}

          {/* Green Status Dot Badge */}
          {!isOpen && (
            <span className="absolute top-0 right-0 flex size-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-4 rounded-full border-2 border-white bg-emerald-500" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
