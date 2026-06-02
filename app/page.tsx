"use client";

import { useState } from "react";
import {
  Star,
  Sparkles,
  ShieldCheck,
  Zap,
  Plug,
  Palette,
  Send,
  Bot,
  Layers,
  MapPin,
  Check,
  ChevronDown,
  Menu,
  X,
  Lock,
  PlayCircle,
  ArrowRight,
  Quote,
  Heart,
  MessageCircle,
  Bookmark,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Small shared pieces                                                */
/* ------------------------------------------------------------------ */

function StarRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function GoogleGlyph({ className = "" }: { className?: string }) {
  // Compact multi-color Google "G" so the CTA reads as Google-branding-compliant.
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8a12 12 0 1 1 7.9-21l5.7-5.7A20 20 0 1 0 24 44a20 20 0 0 0 19.6-23.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8A12 12 0 0 1 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7A20 20 0 0 0 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.5-5.2l-6.2-5.3A12 12 0 0 1 12.7 28l-6.6 5.1A20 20 0 0 0 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4 5.5l6.2 5.3C37.1 40 44 35 44 24c0-1.2-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

function InstagramGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function Wordmark() {
  return (
    <span className="flex items-center gap-2">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30 ring-1 ring-white/10">
        <Star className="h-5 w-5 fill-amber-300 text-amber-300" />
      </span>
      <span className="text-lg font-bold tracking-tight text-white">
        Star<span className="text-indigo-400">Sync</span>
      </span>
    </span>
  );
}

function GoogleConnectButton({
  className = "",
  children = "Connect with Google",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={`group inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-lg shadow-black/20 ring-1 ring-black/5 transition hover:shadow-xl hover:shadow-black/30 ${className}`}
    >
      <GoogleGlyph className="h-5 w-5" />
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#top">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <GoogleConnectButton />
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-slate-950/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2">
              <GoogleConnectButton className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero + transformation mockup                                       */
/* ------------------------------------------------------------------ */

function ReviewCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-xl">
      <div className="mb-3 flex items-center gap-1.5 text-xs font-medium text-slate-400">
        <GoogleGlyph className="h-4 w-4" />
        Google Review · raw
      </div>
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-sm font-bold text-white">
          DM
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-200">Diana M.</p>
          <StarRow className="mt-1" />
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        Honestly I was nervous about trying a new place but the team here went
        completely above and beyond. Booking was easy, the space was spotless,
        and they remembered my name on the second visit. The results lasted way
        longer than anywhere else I&apos;ve been. I&apos;ve already told three
        friends. Cannot recommend enough!!
      </p>
    </div>
  );
}

function SocialPostCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl shadow-indigo-500/10 ring-1 ring-indigo-400/10">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-amber-400 to-amber-600">
            <Star className="h-3.5 w-3.5 fill-slate-950 text-slate-950" />
          </span>
          <span className="text-xs font-semibold text-white">
            glowstudio.co
          </span>
        </div>
        <InstagramGlyph className="h-4 w-4 text-slate-400" />
      </div>

      <div className="relative p-6">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10" />
        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-semibold text-amber-300 ring-1 ring-amber-400/30">
            <Sparkles className="h-3.5 w-3.5" />
            5-Star Review
          </div>
          <Quote className="h-7 w-7 text-indigo-400/60" />
          <p className="mt-2 text-lg font-semibold leading-snug text-white">
            &ldquo;They went completely above and beyond — results that lasted
            longer than anywhere else.&rdquo;
          </p>
          <div className="mt-5 flex items-center justify-between">
            <div>
              <StarRow />
              <p className="mt-1.5 text-sm font-medium text-slate-300">
                Diana M.
              </p>
            </div>
            <span className="rounded-lg bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 ring-1 ring-white/10">
              Verified
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 border-t border-white/5 px-4 py-2.5 text-slate-400">
        <Heart className="h-4 w-4" />
        <MessageCircle className="h-4 w-4" />
        <Send className="h-4 w-4" />
        <Bookmark className="ml-auto h-4 w-4" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-24">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            Set-and-forget social proof, on autopilot
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Put Your 5-Star Google Reviews on{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-400 to-indigo-500 bg-clip-text text-transparent">
              Social Media Autopilot
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            StarSync automatically turns your customer love into gorgeous,
            on-brand social posts and schedules them to Instagram &amp;
            Facebook. Save hours on Canva and let your social proof sell for
            you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-xl hover:shadow-indigo-500/40">
              Get Started Free
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              <PlayCircle className="h-4 w-4" />
              Watch Demo
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Secure OAuth 2.0
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-indigo-400" />
              No credit card required
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Plug className="h-4 w-4 text-indigo-400" />
              Official Google API
            </span>
          </div>
        </div>

        {/* transformation mockup */}
        <div className="mt-14 lg:mt-0">
          <div className="relative grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
            <ReviewCard />
            <div className="mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <SocialPostCard />
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            Raw review in &rarr; scroll-stopping post out. Automatically.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How it works                                                       */
/* ------------------------------------------------------------------ */

const steps = [
  {
    icon: Plug,
    title: "Connect your Google Business Profile",
    desc: "Sign in once with secure OAuth 2.0. We connect directly to the official Google API — no passwords, no fragile scrapers.",
  },
  {
    icon: Palette,
    title: "Pick your style & brand",
    desc: "Choose an industry-tuned template, set your colors, and upload your logo. Every post comes out perfectly on-brand.",
  },
  {
    icon: Send,
    title: "Turn on Autopilot",
    desc: "When a new 5-star review drops, StarSync instantly builds the graphic, drafts a caption, and posts it to Instagram & Facebook.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Live in under five minutes"
          subtitle="Three steps to a self-running social proof engine. Then never touch it again."
        />

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* connecting line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent md:block" />
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-indigo-400/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-4">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="text-5xl font-black text-white/5">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Features grid                                                      */
/* ------------------------------------------------------------------ */

const features = [
  {
    icon: Plug,
    title: "Direct API connection",
    desc: "We connect through Google's official API — no fragile browser scrapers that break, get blocked, or violate terms.",
  },
  {
    icon: Bot,
    title: "AI Summarizer",
    desc: "Our AI condenses rambling 200-word reviews into a single scroll-stopping sentence that actually fits a social card.",
  },
  {
    icon: Layers,
    title: "Niche-specific layouts",
    desc: "Beautiful templates tuned for salons, restaurants, clinics, trades and more — so posts never look generic.",
  },
  {
    icon: MapPin,
    title: "Multi-location support",
    desc: "Manage every storefront from one dashboard with per-location branding, schedules, and review feeds.",
  },
  {
    icon: Zap,
    title: "Instant autopilot",
    desc: "New 5-star review? The graphic, caption, and post are live before you'd even finish opening Canva.",
  },
  {
    icon: ShieldCheck,
    title: "Review-before-publish",
    desc: "Prefer a human touch? Flip to approval mode and rubber-stamp each post from your phone in one tap.",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need, nothing you don't"
          subtitle="StarSync does one job extremely well: turning real reviews into real reach."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.05]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300 ring-1 ring-indigo-400/20 transition group-hover:bg-indigo-400/20">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Compliance / Google data transparency                             */
/* ------------------------------------------------------------------ */

const trustPoints = [
  {
    icon: Lock,
    title: "Explicit OAuth 2.0 consent",
    desc: "We only access your Google Business Profile after you grant secure, revocable consent. You can disconnect anytime.",
  },
  {
    icon: Star,
    title: "Public reviews only",
    desc: "We programmatically fetch your public location reviews — solely to generate your social graphics. Nothing else.",
  },
  {
    icon: ShieldCheck,
    title: "Your password is never shared",
    desc: "Authentication happens entirely on Google's servers. StarSync never sees, stores, or transmits your password.",
  },
];

function Compliance() {
  return (
    <section id="compliance" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
              <ShieldCheck className="h-3.5 w-3.5" />
              Data &amp; Privacy
            </div>
            <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
              How StarSync uses your Google data
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              We only access your Google Business Profile with your explicit,
              secure OAuth 2.0 consent. We programmatically fetch your public
              location reviews to generate social graphics. Your password is
              never shared, and your review data is processed locally and
              securely. StarSync&apos;s use and transfer of information received
              from Google APIs adheres to the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-300 underline decoration-emerald-400/40 underline-offset-2 hover:text-emerald-200"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {trustPoints.map((t) => (
                <div
                  key={t.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
                    <t.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-white">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Pricing                                                            */
/* ------------------------------------------------------------------ */

const tiers = [
  {
    name: "Free Trial",
    price: "$0",
    cadence: "/forever",
    blurb: "Kick the tires and post your first reviews on us.",
    cta: "Get Started Free",
    highlighted: false,
    features: [
      "1 Google Business location",
      "5 auto-generated posts / month",
      "3 starter templates",
      "Review-before-publish mode",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    cadence: "/month",
    blurb: "Full autopilot for a growing local business.",
    cta: "Start Pro Trial",
    highlighted: true,
    features: [
      "Up to 3 locations",
      "Unlimited auto-generated posts",
      "All niche-specific templates",
      "AI Summarizer + custom captions",
      "Instagram & Facebook auto-posting",
      "Priority email support",
    ],
  },
  {
    name: "Pro Plus",
    price: "$29",
    cadence: "/month",
    blurb: "Scales automatically across every storefront.",
    cta: "Start Pro Plus",
    highlighted: false,
    features: [
      "Unlimited locations",
      "Everything in Pro",
      "Custom-branded logo templates",
      "Scheduling & best-time posting",
      "Dedicated onboarding",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, low-commitment pricing"
          subtitle="Start free. Upgrade only when StarSync is already saving you hours."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                t.highlighted
                  ? "border-indigo-400/40 bg-gradient-to-b from-indigo-400/[0.08] to-white/[0.02] shadow-2xl shadow-indigo-500/10"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-indigo-500/30">
                  Most Popular
                </span>
              )}
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400">
                {t.name}
              </h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">
                  {t.price}
                </span>
                <span className="mb-1 text-sm text-slate-400">{t.cadence}</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">{t.blurb}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                  t.highlighted
                    ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "How does the automation work?",
    a: "Once you connect your Google Business Profile, StarSync watches for new 5-star reviews through Google's official API. The moment one lands, our AI summarizes it, drops it into your chosen template, drafts a caption, and publishes to Instagram & Facebook — all without you lifting a finger.",
  },
  {
    q: "Do I need design skills?",
    a: "None at all. Pick a niche-specific template, set your colors, and upload your logo once. Every post comes out polished and on-brand automatically — no Canva, no Photoshop, no designer required.",
  },
  {
    q: "Can I review posts before they publish?",
    a: "Absolutely. StarSync runs on full autopilot by default, but you can switch to approval mode and rubber-stamp each post from your phone before it goes live. You're always in control.",
  },
  {
    q: "Is the connection secure?",
    a: "Yes. We connect using secure OAuth 2.0 — authentication happens entirely on Google's servers, so we never see or store your password. We only access the public reviews needed to create your graphics, and you can revoke access anytime.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-white sm:text-base">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-indigo-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <section id="faq" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Everything you might want to know before connecting your account."
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Final CTA + Footer                                                 */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 via-slate-900 to-slate-950 px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />
        <div className="relative">
          <StarRow className="justify-center" />
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Your best reviews deserve an audience
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-300">
            Connect in minutes and let StarSync turn every 5-star review into a
            post that sells. No credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-xl hover:shadow-indigo-500/40">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </button>
            <GoogleConnectButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <a href="#top">
              <Wordmark />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              StarSync turns your 5-star Google reviews into beautiful social
              posts and publishes them on autopilot. Set it once, let your
              social proof sell for you.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:text-white"
              >
                <InstagramGlyph className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:text-white"
              >
                <FacebookGlyph className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterCol
              title="Product"
              links={[
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ]}
            />
            <FooterCol
              title="Legal"
              links={[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Google API Disclosure", href: "#compliance" },
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                { label: "About", href: "#" },
                { label: "Contact", href: "mailto:support@starsync.app" },
                { label: "Status", href: "#" },
              ]}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} StarSync. All rights reserved.</p>
          <a
            href="mailto:support@starsync.app"
            className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-white"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            support@starsync.app
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared section heading                                            */
/* ------------------------------------------------------------------ */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-400/30">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Compliance />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
