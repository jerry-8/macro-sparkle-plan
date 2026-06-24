import { n as Card, r as Button, t as ThemeToggle } from "./theme-toggle-DVEwP5v8.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Calculator, Droplets, Flame, Target, TrendingUp, UtensilsCrossed } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
function LandingPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsxs("nav", {
				className: "flex items-center justify-between px-6 py-5",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xl font-bold tracking-tight text-foreground",
					children: "My Macros"
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/calculator",
						className: "text-sm font-medium text-foreground transition-colors hover:text-primary",
						children: "Calculator"
					}), /* @__PURE__ */ jsx(ThemeToggle, {})]
				})]
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 opacity-90",
					style: { background: "var(--gradient-hero)" },
					"aria-hidden": true
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center text-primary-foreground sm:py-28",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl",
							children: "Know exactly what to eat"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-6 max-w-xl text-lg leading-relaxed opacity-95 sm:text-xl",
							children: "Stop guessing. Get your personalized daily calories, protein, carbs, and fat tailored to your body and your goals in 30 seconds."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/calculator",
								children: /* @__PURE__ */ jsxs(Button, {
									size: "lg",
									className: "group h-14 px-8 text-lg font-semibold shadow-lg transition-transform hover:-translate-y-0.5",
									style: {
										background: "var(--primary-foreground)",
										color: "var(--primary)"
									},
									children: ["Calculate My Macros", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 size-5 transition-transform group-hover:translate-x-1" })]
								})
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-sm opacity-80",
							children: "Free. No signup required."
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "mx-auto max-w-5xl px-6 py-16 sm:py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid gap-6 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ jsxs(Card, {
							className: "p-6",
							style: { boxShadow: "var(--shadow-soft)" },
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex size-12 items-center justify-center rounded-xl text-primary-foreground",
									style: { background: "var(--gradient-hero)" },
									children: /* @__PURE__ */ jsx(Calculator, { className: "size-6" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-4 text-lg font-semibold",
									children: "Personalized to you"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: "We factor in your age, gender, height, weight, and activity level so your numbers actually match your body."
								})
							]
						}),
						/* @__PURE__ */ jsxs(Card, {
							className: "p-6",
							style: { boxShadow: "var(--shadow-soft)" },
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex size-12 items-center justify-center rounded-xl text-primary-foreground",
									style: { background: "var(--gradient-hero)" },
									children: /* @__PURE__ */ jsx(Target, { className: "size-6" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-4 text-lg font-semibold",
									children: "Goal-based targets"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: "Whether you want to lose weight, maintain, or build muscle — your calories and macros adjust automatically."
								})
							]
						}),
						/* @__PURE__ */ jsxs(Card, {
							className: "p-6",
							style: { boxShadow: "var(--shadow-soft)" },
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex size-12 items-center justify-center rounded-xl text-primary-foreground",
									style: { background: "var(--gradient-hero)" },
									children: /* @__PURE__ */ jsx(UtensilsCrossed, { className: "size-6" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-4 text-lg font-semibold",
									children: "Meal guidance"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: "We suggest how many meals to eat each day so you can hit your targets without feeling stuffed or starved."
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mx-auto max-w-4xl px-6 py-16 sm:py-24",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-center text-3xl font-bold tracking-tight sm:text-4xl",
					children: "How it works"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-8 sm:grid-cols-3",
					children: [
						{
							step: "01",
							title: "Tell us about you",
							desc: "Enter your stats — gender, age, height, weight, and how active you are."
						},
						{
							step: "02",
							title: "Pick your goal",
							desc: "Choose whether you want to lose weight, maintain, or gain muscle."
						},
						{
							step: "03",
							title: "Get your macros",
							desc: "Instantly see your daily calories, protein, carbs, fat, and meal plan."
						}
					].map((item) => /* @__PURE__ */ jsxs("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "inline-block rounded-full px-4 py-2 text-sm font-bold text-primary-foreground",
								style: { background: "var(--gradient-hero)" },
								children: item.step
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-4 text-lg font-semibold",
								children: item.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: item.desc
							})
						]
					}, item.step))
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-t border-border bg-muted/40",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-6 py-12 sm:gap-16",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx(Flame, { className: "size-6 text-primary" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-lg font-bold",
								children: "Mifflin–St Jeor"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground",
								children: "Proven BMR formula"
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx(TrendingUp, { className: "size-6 text-primary" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-lg font-bold",
								children: "3 Goals"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground",
								children: "Lose, maintain, or gain"
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx(Droplets, { className: "size-6 text-primary" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-lg font-bold",
								children: "Full Breakdown"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground",
								children: "Calories, macros & meals"
							})] })]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 opacity-90",
					style: { background: "var(--gradient-hero)" },
					"aria-hidden": true
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto max-w-3xl px-6 py-20 text-center text-primary-foreground sm:py-28",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-bold tracking-tight sm:text-5xl",
							children: "Ready to hit your goals?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-4 max-w-lg text-lg opacity-95",
							children: "Your personalized macro plan is one click away. No emails, no signup, no nonsense."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/calculator",
								children: /* @__PURE__ */ jsxs(Button, {
									size: "lg",
									className: "group h-14 px-8 text-lg font-semibold shadow-lg transition-transform hover:-translate-y-0.5",
									style: {
										background: "var(--primary-foreground)",
										color: "var(--primary)"
									},
									children: ["Start Now", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 size-5 transition-transform group-hover:translate-x-1" })]
								})
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "py-10 text-center text-xs text-muted-foreground",
				children: "Made with care · My Macros"
			})
		]
	});
}
//#endregion
export { LandingPage as component };
