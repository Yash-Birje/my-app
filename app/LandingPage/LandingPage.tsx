"use client"
import React from "react";

// Shadcn-style landing page (single-file TSX)
// Financial advisor focused: "Use your information to make better financial decisions"
// Assumes you have shadcn/ui components available at `@/components/ui/*`
// and Tailwind CSS configured.

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { SignInButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/theme/ModeToggle";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-md bg-emerald-700 text-white font-bold px-3 py-1">MoneyGuide</div>
          <span className="text-sm text-slate-600">Smarter advice based on your data</span>
        </div>
        <nav className="flex items-center gap-4">
          <a className="text-sm text-slate-700 hover:underline" href="#how">How it works</a>
          <a className="text-sm text-slate-700 hover:underline" href="#services">Services</a>
          <Button size="sm">Get Started</Button>
          <SignInButton />
          <ModeToggle />
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4">Trusted Financial Advice</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Make better financial decisions — powered by your information
            </h1>
            <p className="mt-4 text-lg text-slate-600">We combine expert financial planning with your real data to create simple, actionable plans — retirement, investments, debt, and cashflow all in one place.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Get your free plan</Button>
              <Button variant="ghost">How it works</Button>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• Personalized budgeting and saving targets</li>
              <li>• Portfolio recommendations tuned to your goals</li>
              <li>• Tax-aware strategies and retirement roadmaps</li>
            </ul>

            <div className="mt-8 flex gap-4 items-center">
              <Avatar>
                <AvatarImage src="/advisor.jpg" alt="Advisor" />
                <AvatarFallback>AG</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">Alex Grant — CFP®</div>
                <div className="text-xs text-slate-500">Certified financial planner with 12+ years experience</div>
              </div>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <Card className="shadow-lg">
              <CardContent>
                <div className="h-64 flex flex-col items-center justify-center bg-gradient-to-br from-white to-slate-100 rounded p-4">
                  <div className="text-center">
                    <div className="text-sm text-slate-500">Snapshot</div>
                    <div className="mt-2 font-semibold text-2xl">Net worth: $128,450</div>
                    <div className="mt-1 text-sm text-slate-600">Projected retirement at age 67: on track</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="text-xs text-slate-500">Automated budgeting</div>
                  <div className="text-xs text-slate-500">Tax optimized</div>
                  <div className="text-xs text-slate-500">Goal planning</div>
                  <div className="text-xs text-slate-500">Portfolio insights</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-10" />

        {/* How it works */}
        <section id="how" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HowCard
            step="1"
            title="Connect your data"
            desc="Securely connect bank accounts and investment accounts — we only read what’s needed to make recommendations."
          />
          <HowCard
            step="2"
            title="Tell us your goals"
            desc="Retire early, buy a house, save for college — pick what matters and we’ll prioritize it."
          />
          <HowCard
            step="3"
            title="Get a plan"
            desc="Receive a clear plan with step-by-step actions and ongoing monitoring."
          />
        </section>

        <Separator className="my-10" />

        {/* Services */}
        <section id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard title="Financial Planning" desc="Holistic plans for retirement, taxes, and major life goals." />
          <ServiceCard title="Investment Management" desc="Portfolio construction and rebalancing with low fees." />
        </section>

        <Separator className="my-10" />

        {/* CTA / Newsletter */}
        <section className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Get a tailored plan — free</h3>
              <p className="text-sm text-slate-600">Enter your email and one of our advisors will prepare a complimentary financial snapshot.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Your email" aria-label="Email" />
              <Button type="submit">Send me my plan</Button>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-sm text-slate-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} MoneyGuide</div>
          <div className="flex gap-4">
            <a className="hover:underline">Privacy</a>
            <a className="hover:underline">Terms</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function HowCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-emerald-100 text-emerald-700 w-8 h-8 flex items-center justify-center font-semibold">{step}</div>
          <div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-slate-600 mt-1">{desc}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Card>
      <CardContent>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-slate-600 mt-2">{desc}</p>
      </CardContent>
    </Card>
  );
}