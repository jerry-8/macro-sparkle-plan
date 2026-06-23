import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowRight,
  Calculator,
  Target,
  Flame,
  TrendingUp,
  Droplets,
  UtensilsCrossed,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Macros — Simple Daily Macro Calculator" },
      { name: "description", content: "Get your personalized daily calories, protein, carbs, and fat based on your goals and activity." },
      { property: "og:title", content: "My Macros — Simple Daily Macro Calculator" },
      { property: "og:description", content: "Get your personalized daily calories, protein, carbs, and fat based on your goals and activity." },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5">
        <span className="text-xl font-bold tracking-tight text-foreground">
          My Macros
        </span>
        <div className="flex items-center gap-2">
          <Link
            to="/calculator"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Calculator
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-90"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center text-primary-foreground sm:py-28">
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl">
            Know exactly what to eat
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed opacity-95 sm:text-xl">
            Stop guessing. Get your personalized daily calories, protein, carbs, and fat
            tailored to your body and your goals in 30 seconds.
          </p>
          <div className="mt-10">
            <Link to="/calculator">
              <Button
                size="lg"
                className="group h-14 px-8 text-lg font-semibold shadow-lg transition-transform hover:-translate-y-0.5"
                style={{
                  background: "var(--primary-foreground)",
                  color: "var(--primary)",
                }}
              >
                Calculate My Macros
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm opacity-80">Free. No signup required.</p>
        </div>
      </header>

      {/* Feature cards */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="p-6" style={{ boxShadow: "var(--shadow-soft)" }}>
            <div
              className="flex size-12 items-center justify-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              <Calculator className="size-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Personalized to you</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We factor in your age, gender, height, weight, and activity level so your numbers
              actually match your body.
            </p>
          </Card>

          <Card className="p-6" style={{ boxShadow: "var(--shadow-soft)" }}>
            <div
              className="flex size-12 items-center justify-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              <Target className="size-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Goal-based targets</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Whether you want to lose weight, maintain, or build muscle — your calories and
              macros adjust automatically.
            </p>
          </Card>

          <Card className="p-6" style={{ boxShadow: "var(--shadow-soft)" }}>
            <div
              className="flex size-12 items-center justify-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              <UtensilsCrossed className="size-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Meal guidance</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We suggest how many meals to eat each day so you can hit your targets without
              feeling stuffed or starved.
            </p>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          How it works
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Tell us about you",
              desc: "Enter your stats — gender, age, height, weight, and how active you are.",
            },
            {
              step: "02",
              title: "Pick your goal",
              desc: "Choose whether you want to lose weight, maintain, or gain muscle.",
            },
            {
              step: "03",
              title: "Get your macros",
              desc: "Instantly see your daily calories, protein, carbs, fat, and meal plan.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <span
                className="inline-block rounded-full px-4 py-2 text-sm font-bold text-primary-foreground"
                style={{ background: "var(--gradient-hero)" }}
              >
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / trust band */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-6 py-12 sm:gap-16">
          <div className="flex items-center gap-3">
            <Flame className="size-6 text-primary" />
            <div>
              <p className="text-lg font-bold">Mifflin–St Jeor</p>
              <p className="text-xs text-muted-foreground">Proven BMR formula</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="size-6 text-primary" />
            <div>
              <p className="text-lg font-bold">3 Goals</p>
              <p className="text-xs text-muted-foreground">Lose, maintain, or gain</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Droplets className="size-6 text-primary" />
            <div>
              <p className="text-lg font-bold">Full Breakdown</p>
              <p className="text-xs text-muted-foreground">Calories, macros & meals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-90"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center text-primary-foreground sm:py-28">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to hit your goals?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg opacity-95">
            Your personalized macro plan is one click away. No emails, no signup, no nonsense.
          </p>
          <div className="mt-10">
            <Link to="/calculator">
              <Button
                size="lg"
                className="group h-14 px-8 text-lg font-semibold shadow-lg transition-transform hover:-translate-y-0.5"
                style={{
                  background: "var(--primary-foreground)",
                  color: "var(--primary)",
                }}
              >
                Start Now
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-xs text-muted-foreground">
        Made with care · My Macros
      </footer>
    </div>
  );
}
