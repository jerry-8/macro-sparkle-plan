import { i as cn, n as Card, r as Button, t as ThemeToggle } from "./theme-toggle-DVEwP5v8.js";
import * as React from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Check, ChevronDown, ChevronUp, Circle } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";
//#region src/components/ui/input.tsx
var Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ jsx("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
//#region src/components/ui/label.tsx
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = LabelPrimitive.Root.displayName;
//#endregion
//#region src/components/ui/radio-group.tsx
var RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx(RadioGroupPrimitive.Item, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ jsx(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
//#endregion
//#region src/components/ui/select.tsx
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SelectPrimitive.Trigger, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ jsx(SelectPrimitive.Icon, {
		asChild: true,
		children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.ScrollUpButton, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.ScrollDownButton, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(SelectPrimitive.Content, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
		/* @__PURE__ */ jsx(SelectPrimitive.Viewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ jsx(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Label, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SelectPrimitive.Item, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })]
}));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Separator, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
//#endregion
//#region src/routes/calculator.tsx?tsr-split=component
var ACTIVITY_FACTORS = {
	sedentary: 1.2,
	light: 1.375,
	moderate: 1.55,
	active: 1.725,
	very_active: 1.9
};
var ACTIVITY_LABELS = {
	sedentary: "Sedentary (little or no exercise)",
	light: "Light (1–3 days/week)",
	moderate: "Moderate (3–5 days/week)",
	active: "Active (6–7 days/week)",
	very_active: "Very active (athlete / physical job)"
};
function calculate(form) {
	const tdee = (form.gender === "male" ? 10 * form.weight + 6.25 * form.height - 5 * form.age + 5 : 10 * form.weight + 6.25 * form.height - 5 * form.age - 161) * ACTIVITY_FACTORS[form.activity];
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
	const proteinPerKg = form.goal === "gain" ? 2 : form.goal === "lose" ? 2.2 : 1.8;
	const protein = Math.round(form.weight * proteinPerKg);
	const fat = Math.round(calories * .25 / 9);
	const carbs = Math.max(0, Math.round((calories - protein * 4 - fat * 9) / 4));
	const fiber = Math.round(calories / 1e3 * 14);
	const water = Math.round(form.weight * .033 * 10) / 10;
	let meals = 3;
	if (calories >= 2800) meals = 5;
	else if (calories >= 2200) meals = 4;
	else if (calories < 1600) meals = 3;
	return {
		calories,
		protein,
		carbs,
		fat,
		fiber,
		water,
		meals,
		goalLabel
	};
}
function Calculator() {
	const [units, setUnits] = useState("metric");
	const [gender, setGender] = useState("female");
	const [age, setAge] = useState("30");
	const [heightCm, setHeightCm] = useState("170");
	const [heightFt, setHeightFt] = useState("5");
	const [heightIn, setHeightIn] = useState("7");
	const [weight, setWeight] = useState("70");
	const [activity, setActivity] = useState("moderate");
	const [goal, setGoal] = useState("maintain");
	const [results, setResults] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		const ageN = parseInt(age, 10);
		let heightCmN;
		let weightKgN;
		if (units === "metric") {
			heightCmN = parseFloat(heightCm);
			weightKgN = parseFloat(weight);
		} else {
			heightCmN = (parseInt(heightFt, 10) * 12 + parseInt(heightIn, 10)) * 2.54;
			weightKgN = parseFloat(weight) * .453592;
		}
		if (!ageN || !heightCmN || !weightKgN) return;
		setResults(calculate({
			gender,
			age: ageN,
			height: heightCmN,
			weight: weightKgN,
			activity,
			goal
		}));
		setTimeout(() => {
			document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
		}, 50);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsxs("nav", {
				className: "relative z-10 flex items-center justify-between px-6 py-4",
				children: [/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "text-lg font-bold tracking-tight text-foreground",
					children: "My Macros"
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-sm text-muted-foreground",
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
					className: "relative mx-auto max-w-3xl px-6 py-14 text-center text-primary-foreground",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-4xl font-bold tracking-tight sm:text-5xl",
						children: "Daily Macros"
					}), /* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-3 max-w-xl text-base opacity-95",
						children: "Tell us a bit about you and your goal — we'll recommend your calories, protein, carbs, fat, and how many meals to spread them across."
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("main", {
				className: "mx-auto max-w-3xl px-6 py-10",
				children: [/* @__PURE__ */ jsx(Card, {
					className: "p-6 sm:p-8",
					style: { boxShadow: "var(--shadow-soft)" },
					children: /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "space-y-8",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "text-lg font-semibold",
									children: "About you"
								}), /* @__PURE__ */ jsx("div", {
									className: "inline-flex rounded-full border border-border bg-muted p-1 text-sm",
									children: ["metric", "imperial"].map((u) => /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => setUnits(u),
										className: `rounded-full px-3 py-1 transition-colors ${units === u ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`,
										children: u === "metric" ? "Metric" : "Imperial"
									}, u))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ jsx(Label, { children: "Gender" }), /* @__PURE__ */ jsx(RadioGroup, {
									value: gender,
									onValueChange: (v) => setGender(v),
									className: "grid grid-cols-2 gap-3",
									children: ["female", "male"].map((g) => /* @__PURE__ */ jsxs(Label, {
										htmlFor: `g-${g}`,
										className: `flex cursor-pointer items-center justify-center rounded-lg border-2 px-4 py-3 text-sm font-medium capitalize transition-colors ${gender === g ? "border-primary bg-accent text-accent-foreground" : "border-border bg-card text-foreground"}`,
										children: [/* @__PURE__ */ jsx(RadioGroupItem, {
											id: `g-${g}`,
											value: g,
											className: "sr-only"
										}), g]
									}, g))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "age",
										children: "Age"
									}), /* @__PURE__ */ jsx(Input, {
										id: "age",
										type: "number",
										min: 14,
										max: 100,
										value: age,
										onChange: (e) => setAge(e.target.value),
										required: true
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsxs(Label, {
										htmlFor: "weight",
										children: [
											"Weight (",
											units === "metric" ? "kg" : "lbs",
											")"
										]
									}), /* @__PURE__ */ jsx(Input, {
										id: "weight",
										type: "number",
										step: "0.1",
										value: weight,
										onChange: (e) => setWeight(e.target.value),
										required: true
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, { children: "Height" }), units === "metric" ? /* @__PURE__ */ jsx(Input, {
									type: "number",
									value: heightCm,
									onChange: (e) => setHeightCm(e.target.value),
									placeholder: "cm",
									required: true
								}) : /* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ jsx(Input, {
										type: "number",
										value: heightFt,
										onChange: (e) => setHeightFt(e.target.value),
										placeholder: "feet",
										required: true
									}), /* @__PURE__ */ jsx(Input, {
										type: "number",
										value: heightIn,
										onChange: (e) => setHeightIn(e.target.value),
										placeholder: "inches",
										required: true
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "activity",
									children: "Activity level"
								}), /* @__PURE__ */ jsxs(Select, {
									value: activity,
									onValueChange: (v) => setActivity(v),
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										id: "activity",
										children: /* @__PURE__ */ jsx(SelectValue, {})
									}), /* @__PURE__ */ jsx(SelectContent, { children: Object.keys(ACTIVITY_LABELS).map((a) => /* @__PURE__ */ jsx(SelectItem, {
										value: a,
										children: ACTIVITY_LABELS[a]
									}, a)) })]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ jsx(Label, { children: "Goal" }), /* @__PURE__ */ jsx("div", {
									className: "grid gap-3 sm:grid-cols-3",
									children: [
										{
											v: "lose",
											label: "Lose weight"
										},
										{
											v: "maintain",
											label: "Maintain"
										},
										{
											v: "gain",
											label: "Gain weight"
										}
									].map((g) => /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => setGoal(g.v),
										className: `rounded-lg border-2 px-4 py-3 text-sm font-medium transition-colors ${goal === g.v ? "border-primary bg-accent text-accent-foreground" : "border-border bg-card text-foreground hover:border-primary/50"}`,
										children: g.label
									}, g.v))
								})]
							}),
							/* @__PURE__ */ jsx(Button, {
								type: "submit",
								size: "lg",
								className: "w-full text-base font-semibold",
								style: {
									background: "var(--gradient-hero)",
									color: "var(--primary-foreground)"
								},
								children: "Calculate my macros"
							})
						]
					})
				}), results && /* @__PURE__ */ jsx("section", {
					id: "results",
					className: "mt-10",
					children: /* @__PURE__ */ jsxs(Card, {
						className: "overflow-hidden",
						style: { boxShadow: "var(--shadow-soft)" },
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "p-6 text-primary-foreground sm:p-8",
								style: { background: "var(--gradient-hero)" },
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-sm font-medium uppercase tracking-wider opacity-90",
										children: "Your daily target"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-2 flex items-baseline gap-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-5xl font-bold",
											children: results.calories.toLocaleString()
										}), /* @__PURE__ */ jsx("span", {
											className: "text-lg opacity-90",
											children: "calories / day"
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-1 text-sm opacity-90",
										children: results.goalLabel
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-3 gap-3 p-6 sm:p-8",
								children: [
									/* @__PURE__ */ jsx(MacroStat, {
										label: "Protein",
										value: `${results.protein}g`,
										pct: Math.round(results.protein * 4 / results.calories * 100)
									}),
									/* @__PURE__ */ jsx(MacroStat, {
										label: "Carbs",
										value: `${results.carbs}g`,
										pct: Math.round(results.carbs * 4 / results.calories * 100)
									}),
									/* @__PURE__ */ jsx(MacroStat, {
										label: "Fat",
										value: `${results.fat}g`,
										pct: Math.round(results.fat * 9 / results.calories * 100)
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid gap-3 border-t border-border p-6 sm:grid-cols-3 sm:p-8",
								children: [
									/* @__PURE__ */ jsx(InfoStat, {
										label: "Suggested meals",
										value: `${results.meals} / day`
									}),
									/* @__PURE__ */ jsx(InfoStat, {
										label: "Fiber",
										value: `${results.fiber}g`
									}),
									/* @__PURE__ */ jsx(InfoStat, {
										label: "Water",
										value: `${results.water} L`
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "border-t border-border bg-muted/50 p-6 text-sm text-muted-foreground sm:p-8",
								children: /* @__PURE__ */ jsx("p", { children: "These are estimates based on the Mifflin–St Jeor equation. Adjust over 2–3 weeks based on how your body responds. Always check with a professional for medical or performance needs." })
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "py-10 text-center text-xs text-muted-foreground",
				children: "Made with care · My Macros"
			})
		]
	});
}
function MacroStat({ label, value, pct }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card p-4 text-center",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-1 text-2xl font-bold text-foreground",
				children: value
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-0.5 text-xs text-muted-foreground",
				children: [pct, "% of cals"]
			})
		]
	});
}
function InfoStat({ label, value }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl bg-accent/50 p-4 text-center",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-lg font-semibold text-foreground",
			children: value
		})]
	});
}
//#endregion
export { Calculator as component };
