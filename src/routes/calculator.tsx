import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "My Macros — Calculator" },
      { name: "description", content: "Get your personalized daily calories, protein, carbs, and fat based on your goals and activity." },
      { property: "og:title", content: "My Macros — Calculator" },
      { property: "og:description", content: "Get your personalized daily calories, protein, carbs, and fat based on your goals and activity." },
    ],
  }),
  component: Calculator,
});

type Gender = "male" | "female";
type Goal = "lose" | "maintain" | "gain";
type Activity = "sedentary" | "light" | "moderate" | "active" | "very_active";
type Units = "metric" | "imperial";

const ACTIVITY_FACTORS: Record<Activity, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

const ACTIVITY_LABELS: Record<Activity, string> = {
  sedentary: "Sedentary (little or no exercise)",
  light: "Light (1–3 days/week)",
  moderate: "Moderate (3–5 days/week)",
  active: "Active (6–7 days/week)",
  very_active: "Very active (athlete / physical job)",
};

interface Results {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  water: number;
  meals: number;
  goalLabel: string;
}

function calculate(form: {
  gender: Gender;
  age: number;
  height: number; // cm
  weight: number; // kg
  activity: Activity;
  goal: Goal;
}): Results {
  // Mifflin-St Jeor BMR
  const bmr =
    form.gender === "male"
      ? 10 * form.weight + 6.25 * form.height - 5 * form.age + 5
      : 10 * form.weight + 6.25 * form.height - 5 * form.age - 161;

  const tdee = bmr * ACTIVITY_FACTORS[form.activity];

  let calories = tdee;
  let goalLabel = "Maintain weight";
  if (form.goal === "lose") {
    calories = tdee - 500;
    goalLabel = "Lose weight (~0.5 kg / week)";
  } else if (form.goal === "gain") {
    calories = tdee + 400;
    goalLabel = "Gain weight (~0.4 kg / week)";
  }
  calories = Math.max(1200, Math.round(calories));

  // Macro split
  const proteinPerKg = form.goal === "gain" ? 2.0 : form.goal === "lose" ? 2.2 : 1.8;
  const protein = Math.round(form.weight * proteinPerKg);
  const fat = Math.round((calories * 0.25) / 9);
  const carbs = Math.max(0, Math.round((calories - protein * 4 - fat * 9) / 4));
  const fiber = Math.round((calories / 1000) * 14);
  const water = Math.round(form.weight * 0.033 * 10) / 10; // liters

  // Meal recommendation
  let meals = 3;
  if (calories >= 2800) meals = 5;
  else if (calories >= 2200) meals = 4;
  else if (calories < 1600) meals = 3;

  return { calories, protein, carbs, fat, fiber, water, meals, goalLabel };
}

function Calculator() {
  const [units, setUnits] = useState<Units>("metric");
  const [gender, setGender] = useState<Gender>("female");
  const [age, setAge] = useState("30");
  const [heightCm, setHeightCm] = useState("170");
  const [heightFt, setHeightFt] = useState("5");
  const [heightIn, setHeightIn] = useState("7");
  const [weight, setWeight] = useState("70"); // kg or lbs depending on units
  const [activity, setActivity] = useState<Activity>("moderate");
  const [goal, setGoal] = useState<Goal>("maintain");
  const [results, setResults] = useState<Results | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ageN = parseInt(age, 10);
    let heightCmN: number;
    let weightKgN: number;
    if (units === "metric") {
      heightCmN = parseFloat(heightCm);
      weightKgN = parseFloat(weight);
    } else {
      heightCmN = (parseInt(heightFt, 10) * 12 + parseInt(heightIn, 10)) * 2.54;
      weightKgN = parseFloat(weight) * 0.453592;
    }
    if (!ageN || !heightCmN || !weightKgN) return;
    const r = calculate({
      gender,
      age: ageN,
      height: heightCmN,
      weight: weightKgN,
      activity,
      goal,
    });
    setResults(r);
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="relative z-10 flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
          My Macros
        </Link>
        <div className="text-sm text-muted-foreground">Calculator</div>
      </nav>

      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-90"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 py-14 text-center text-primary-foreground">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Daily Macros
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base opacity-95">
            Tell us a bit about you and your goal — we'll recommend your calories, protein,
            carbs, fat, and how many meals to spread them across.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">
        <Card className="p-6 sm:p-8" style={{ boxShadow: "var(--shadow-soft)" }}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold">About you</h2>
              <div className="inline-flex rounded-full border border-border bg-muted p-1 text-sm">
                {(["metric", "imperial"] as const).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setUnits(u)}
                    className={`rounded-full px-3 py-1 transition-colors ${
                      units === u
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {u === "metric" ? "Metric" : "Imperial"}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label>Gender</Label>
              <RadioGroup
                value={gender}
                onValueChange={(v) => setGender(v as Gender)}
                className="grid grid-cols-2 gap-3"
              >
                {(["female", "male"] as const).map((g) => (
                  <Label
                    key={g}
                    htmlFor={`g-${g}`}
                    className={`flex cursor-pointer items-center justify-center rounded-lg border-2 px-4 py-3 text-sm font-medium capitalize transition-colors ${
                      gender === g
                        ? "border-primary bg-accent text-accent-foreground"
                        : "border-border bg-card text-foreground"
                    }`}
                  >
                    <RadioGroupItem id={`g-${g}`} value={g} className="sr-only" />
                    {g}
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" min={14} max={100} value={age} onChange={(e) => setAge(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight ({units === "metric" ? "kg" : "lbs"})</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Height</Label>
              {units === "metric" ? (
                <Input
                  type="number"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  placeholder="cm"
                  required
                />
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="number"
                    value={heightFt}
                    onChange={(e) => setHeightFt(e.target.value)}
                    placeholder="feet"
                    required
                  />
                  <Input
                    type="number"
                    value={heightIn}
                    onChange={(e) => setHeightIn(e.target.value)}
                    placeholder="inches"
                    required
                  />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="activity">Activity level</Label>
              <Select value={activity} onValueChange={(v) => setActivity(v as Activity)}>
                <SelectTrigger id="activity">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(ACTIVITY_LABELS) as Activity[]).map((a) => (
                    <SelectItem key={a} value={a}>
                      {ACTIVITY_LABELS[a]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Goal</Label>
              <div className="grid gap-3 sm:grid-cols-3">
                {([
                  { v: "lose", label: "Lose weight" },
                  { v: "maintain", label: "Maintain" },
                  { v: "gain", label: "Gain weight" },
                ] as const).map((g) => (
                  <button
                    type="button"
                    key={g.v}
                    onClick={() => setGoal(g.v)}
                    className={`rounded-lg border-2 px-4 py-3 text-sm font-medium transition-colors ${
                      goal === g.v
                        ? "border-primary bg-accent text-accent-foreground"
                        : "border-border bg-card text-foreground hover:border-primary/50"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-base font-semibold"
              style={{ background: "var(--gradient-hero)", color: "var(--primary-foreground)" }}
            >
              Calculate my macros
            </Button>
          </form>
        </Card>

        {results && (
          <section id="results" className="mt-10">
            <Card className="overflow-hidden" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="p-6 text-primary-foreground sm:p-8" style={{ background: "var(--gradient-hero)" }}>
                <p className="text-sm font-medium uppercase tracking-wider opacity-90">Your daily target</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{results.calories.toLocaleString()}</span>
                  <span className="text-lg opacity-90">calories / day</span>
                </div>
                <p className="mt-1 text-sm opacity-90">{results.goalLabel}</p>
              </div>

              <div className="grid grid-cols-3 gap-3 p-6 sm:p-8">
                <MacroStat label="Protein" value={`${results.protein}g`} pct={Math.round(((results.protein * 4) / results.calories) * 100)} />
                <MacroStat label="Carbs" value={`${results.carbs}g`} pct={Math.round(((results.carbs * 4) / results.calories) * 100)} />
                <MacroStat label="Fat" value={`${results.fat}g`} pct={Math.round(((results.fat * 9) / results.calories) * 100)} />
              </div>

              <div className="grid gap-3 border-t border-border p-6 sm:grid-cols-3 sm:p-8">
                <InfoStat label="Suggested meals" value={`${results.meals} / day`} />
                <InfoStat label="Fiber" value={`${results.fiber}g`} />
                <InfoStat label="Water" value={`${results.water} L`} />
              </div>

              <div className="border-t border-border bg-muted/50 p-6 text-sm text-muted-foreground sm:p-8">
                <p>
                  These are estimates based on the Mifflin–St Jeor equation. Adjust over 2–3 weeks
                  based on how your body responds. Always check with a professional for medical or
                  performance needs.
                </p>
              </div>
            </Card>
          </section>
        )}
      </main>

      <footer className="py-10 text-center text-xs text-muted-foreground">
        Made with care · My Macros
      </footer>
    </div>
  );
}

function MacroStat({ label, value, pct }: { label: string; value: string; pct: number }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 text-center">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{pct}% of cals</p>
    </div>
  );
}

function InfoStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-accent/50 p-4 text-center">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
    </div>
  );
}
