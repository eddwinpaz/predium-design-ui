import { Fragment as e, Teleport as t, Transition as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createStaticVNode as c, createTextVNode as l, createVNode as u, defineComponent as d, inject as f, nextTick as p, normalizeClass as m, normalizeStyle as h, onBeforeUnmount as g, onMounted as _, openBlock as v, provide as y, readonly as b, ref as x, renderList as S, renderSlot as C, resolveComponent as w, resolveDynamicComponent as T, toDisplayString as E, unref as D, useSlots as O, watch as k, withCtx as A, withKeys as j, withModifiers as M } from "vue";
import { Combobox as N, ComboboxButton as P, ComboboxInput as F, ComboboxOption as ee, ComboboxOptions as I, Dialog as L, DialogPanel as R, DialogTitle as te, Listbox as ne, ListboxButton as re, ListboxOption as ie, ListboxOptions as ae, TransitionChild as z, TransitionRoot as B } from "@headlessui/vue";
//#region src/components/ui/Accordion.vue?vue&type=script&setup=true&lang.ts
var V = { class: "w-full" }, H = ["aria-expanded", "onClick"], U = { class: "px-[14px] pb-[14px] text-[14px] text-content-secondary leading-[22px]" }, W = /* @__PURE__ */ d({
	__name: "Accordion",
	props: {
		items: {},
		multiple: {
			type: Boolean,
			default: !1
		}
	},
	setup(t) {
		let n = t, r = x(/* @__PURE__ */ new Set());
		k(() => n.items, (e) => {
			e.forEach((e, t) => {
				e.defaultOpen && r.value.add(t);
			});
		}, { immediate: !0 });
		function i(e) {
			let t = new Set(r.value);
			t.has(e) ? t.delete(e) : (n.multiple || t.clear(), t.add(e)), r.value = t;
		}
		function a(e) {
			return r.value.has(e);
		}
		return (n, r) => (v(), o("div", V, [(v(!0), o(e, null, S(t.items, (e, t) => (v(), o("div", {
			key: t,
			class: "border-b border-border"
		}, [s("button", {
			type: "button",
			class: "flex items-center justify-between w-full px-[14px] py-[14px] text-left text-[14px] font-medium text-content-primary hover:bg-surface-hover transition-colors",
			"aria-expanded": a(t),
			onClick: (e) => i(t)
		}, [s("span", null, E(e.title), 1), (v(), o("svg", {
			class: m(["w-[16px] h-[16px] text-content-secondary transform transition-transform duration-200 flex-shrink-0", a(t) ? "rotate-180" : ""]),
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 24 24"
		}, [...r[0] ||= [s("path", {
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "2",
			d: "M19 9l-7 7-7-7"
		}, null, -1)]], 2))], 8, H), s("div", { class: m(["overflow-hidden transition-all duration-200", a(t) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"]) }, [s("div", U, E(e.content), 1)], 2)]))), 128))]));
	}
}), G = ["src", "alt"], K = /* @__PURE__ */ d({
	__name: "Avatar",
	props: {
		name: {},
		size: { default: "md" },
		src: {},
		color: {}
	},
	setup(e) {
		let t = e, n = [
			"#276EF1",
			"#048848",
			"#7356BF",
			"#E11900",
			"#FFC043",
			"#0D9488",
			"#4F46E5",
			"#F97066"
		], i = r(() => {
			let e = t.name.trim().split(/\s+/);
			return e.length === 0 ? "" : e.length === 1 ? (e[0]?.[0] ?? "").toUpperCase() : ((e[0]?.[0] ?? "") + (e[e.length - 1]?.[0] ?? "")).toUpperCase();
		}), a = r(() => {
			let e = 0;
			for (let n = 0; n < t.name.length; n++) e = t.name.charCodeAt(n) + ((e << 5) - e);
			return n[Math.abs(e) % n.length];
		}), s = r(() => t.color ?? a.value), c = r(() => ({
			xs: "w-6 h-6",
			sm: "w-7 h-7",
			md: "w-9 h-9",
			lg: "w-12 h-12"
		})[t.size]), l = r(() => ({
			xs: "text-[10px]",
			sm: "text-[11px]",
			md: "text-xs",
			lg: "text-sm"
		})[t.size]);
		return (t, n) => (v(), o("div", {
			class: m([c.value, "rounded-full flex items-center justify-center font-semibold flex-shrink-0 select-none"]),
			style: h({
				backgroundColor: s.value,
				color: "#fff"
			})
		}, [e.src ? (v(), o("img", {
			key: 0,
			src: e.src,
			alt: e.name,
			class: "w-full h-full rounded-full object-cover"
		}, null, 8, G)) : (v(), o("span", {
			key: 1,
			class: m(l.value)
		}, E(i.value), 3))], 6));
	}
}), q = /* @__PURE__ */ d({
	__name: "Badge",
	props: {
		variant: { default: "neutral" },
		size: { default: "md" },
		dot: {
			type: Boolean,
			default: !1
		},
		closeable: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, i = t;
		function c() {
			return [
				"inline-flex items-center gap-1.5 rounded-full font-medium",
				{
					neutral: "bg-bg-secondary text-content-primary",
					positive: "bg-positive-light text-positive-text",
					warning: "bg-warning-light text-warning-text",
					negative: "bg-negative-light text-negative-text",
					accent: "bg-accent-light text-accent-text",
					purple: "bg-purple-light text-purple"
				}[n.variant],
				{
					sm: "px-2 py-0.5 text-xs",
					md: "px-2.5 py-1 text-xs"
				}[n.size]
			].join(" ");
		}
		function l() {
			return ["w-1.5 h-1.5 rounded-full", {
				neutral: "bg-content-secondary",
				positive: "bg-positive",
				warning: "bg-warning",
				negative: "bg-negative",
				accent: "bg-accent",
				purple: "bg-purple-600"
			}[n.variant]].join(" ");
		}
		let u = r(() => c()), d = r(() => l());
		return (t, n) => (v(), o("span", { class: m(u.value) }, [
			e.dot ? (v(), o("span", {
				key: 0,
				class: m(d.value)
			}, null, 2)) : a("", !0),
			C(t.$slots, "default"),
			e.closeable ? (v(), o("button", {
				key: 1,
				class: "ml-0.5 inline-flex items-center justify-center rounded-full hover:bg-black/10 w-3.5 h-3.5 cursor-pointer",
				onClick: n[0] ||= M((e) => i("close"), ["stop"])
			}, [...n[1] ||= [s("svg", {
				class: "w-2.5 h-2.5",
				viewBox: "0 0 12 12",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, [s("path", {
				d: "M9 3L3 9M3 3l6 6",
				stroke: "currentColor",
				"stroke-width": "1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			})], -1)]])) : a("", !0)
		], 2));
	}
}), J = {
	class: "w-5 h-5 flex-shrink-0",
	fill: "none",
	viewBox: "0 0 24 24",
	"stroke-width": "1.5",
	stroke: "currentColor"
}, oe = ["d"], se = { class: "flex-1" }, ce = {
	key: 0,
	class: "font-semibold"
}, le = /* @__PURE__ */ d({
	__name: "Banner",
	props: {
		kind: { default: "info" },
		title: { default: void 0 },
		closeable: {
			type: Boolean,
			default: !0
		},
		action: { default: void 0 }
	},
	emits: ["close", "action"],
	setup(e, { emit: t }) {
		let n = e, i = t, c = x(!0), l = r(() => {
			switch (n.kind) {
				case "positive": return "bg-positive-light text-positive-text";
				case "warning": return "bg-warning-light text-warning-text";
				case "negative": return "bg-negative-light text-negative-text";
				default: return "bg-accent-light text-accent-text";
			}
		}), u = r(() => {
			switch (n.kind) {
				case "positive": return "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
				case "warning": return "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z";
				case "negative": return "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
				default: return "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z";
			}
		});
		return (t, n) => c.value ? (v(), o("div", {
			key: 0,
			class: m(["flex items-center gap-3 px-4 py-3 text-sm", l.value])
		}, [
			(v(), o("svg", J, [s("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: u.value
			}, null, 8, oe)])),
			s("div", se, [e.title ? (v(), o("span", ce, E(e.title), 1)) : a("", !0), s("span", null, [C(t.$slots, "default")])]),
			e.action ? (v(), o("button", {
				key: 0,
				class: "font-medium underline text-sm",
				onClick: n[0] ||= (e) => i("action")
			}, E(e.action), 1)) : a("", !0),
			e.closeable ? (v(), o("button", {
				key: 1,
				class: "opacity-60 hover:opacity-100 ml-2",
				onClick: n[1] ||= (e) => {
					c.value = !1, i("close");
				}
			}, " ✕ ")) : a("", !0)
		], 2)) : a("", !0);
	}
}), ue = { class: "flex items-center gap-1.5 text-sm" }, de = {
	key: 0,
	class: "text-content-tertiary"
}, fe = ["href"], pe = /* @__PURE__ */ d({
	__name: "Breadcrumbs",
	props: {
		items: {},
		separator: { default: "/" }
	},
	setup(t) {
		return (n, r) => (v(), o("nav", ue, [(v(!0), o(e, null, S(t.items, (n, r) => (v(), o(e, { key: r }, [r > 0 ? (v(), o("span", de, E(t.separator), 1)) : a("", !0), n.to && r < t.items.length - 1 ? (v(), o("a", {
			key: 1,
			href: n.to,
			class: "text-accent hover:underline cursor-pointer"
		}, E(n.label), 9, fe)) : (v(), o("span", {
			key: 2,
			class: m(r === t.items.length - 1 ? "text-content-primary font-medium" : "text-content-secondary")
		}, E(n.label), 3))], 64))), 128))]));
	}
}), me = ["disabled"], he = {
	key: 0,
	class: "animate-spin h-4 w-4",
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24"
}, ge = /* @__PURE__ */ d({
	__name: "Button",
	props: {
		kind: { default: "primary" },
		size: { default: "default" },
		disabled: {
			type: Boolean,
			default: !1
		},
		loading: {
			type: Boolean,
			default: !1
		},
		shape: { default: "default" }
	},
	setup(t) {
		let n = t, i = O();
		function a() {
			let e = {
				primary: "bg-black text-white hover:bg-btn-primary-hover active:bg-[#1a1a1a]",
				secondary: "bg-transparent text-black border border-border hover:bg-bg-secondary",
				tertiary: "bg-bg-secondary text-black hover:bg-bg-tertiary",
				minimal: "bg-transparent text-black hover:bg-bg-secondary"
			}, t = {
				mini: "h-[30px] px-[8px] py-[8px] text-[12px] gap-[4px]",
				compact: "h-[36px] px-[12px] py-[8px] text-[14px] gap-[8px]",
				default: "h-[48px] px-[12px] py-[10px] text-[16px] gap-[8px]",
				large: "h-[56px] px-[16px] py-[14px] text-[16px] gap-[12px]"
			}, r = [
				"inline-flex items-center font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000] focus-visible:ring-offset-2",
				e[n.kind],
				{
					default: "rounded-[8px]",
					pill: "rounded-pill",
					circle: "rounded-pill w-[48px] h-[48px] p-0 justify-center"
				}[n.shape]
			];
			return n.shape !== "circle" && r.push(t[n.size]), n.disabled && r.push("opacity-40 cursor-not-allowed pointer-events-none"), r.filter(Boolean).join(" ");
		}
		let c = r(() => a());
		return (n, r) => (v(), o("button", {
			class: m(c.value),
			disabled: t.disabled
		}, [t.loading ? (v(), o("svg", he, [...r[0] ||= [s("circle", {
			class: "opacity-25",
			cx: "12",
			cy: "12",
			r: "10",
			stroke: "currentColor",
			"stroke-width": "4"
		}, null, -1), s("path", {
			class: "opacity-75",
			fill: "currentColor",
			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
		}, null, -1)]])) : (v(), o(e, { key: 1 }, [
			C(n.$slots, "startIcon"),
			s("span", { class: m({ "mx-1": D(i).startIcon || D(i).endIcon }) }, [C(n.$slots, "default")], 2),
			C(n.$slots, "endIcon")
		], 64))], 10, me));
	}
}), _e = { class: "inline-flex rounded-lg border border-border overflow-hidden" }, ve = ["disabled", "onClick"], ye = /* @__PURE__ */ d({
	__name: "ButtonGroup",
	props: {
		modelValue: {},
		options: {},
		size: { default: "default" }
	},
	emits: ["update:modelValue"],
	setup(t) {
		return (n, r) => (v(), o("div", _e, [(v(!0), o(e, null, S(t.options, (e, r) => (v(), o("button", {
			key: e.value,
			class: m([
				"px-4 text-sm font-medium transition-colors",
				t.size === "compact" ? "py-1.5" : "py-2",
				t.modelValue === e.value ? "bg-black text-white" : "bg-bg-primary text-content-primary hover:bg-bg-secondary",
				r > 0 ? "border-l border-border" : "",
				e.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
			]),
			disabled: e.disabled,
			onClick: (t) => !e.disabled && n.$emit("update:modelValue", e.value)
		}, E(e.label), 11, ve))), 128))]));
	}
}), be = {
	key: 0,
	class: "px-scale600 py-scale400 border-b border-border"
}, xe = {
	key: 1,
	class: "px-scale600 py-scale300 border-t border-border bg-bg-secondary/50"
}, Se = /* @__PURE__ */ d({
	__name: "Card",
	props: {
		padding: { default: "md" },
		bordered: {
			type: Boolean,
			default: !0
		},
		hoverable: {
			type: Boolean,
			default: !1
		},
		shadow: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = r(() => ({
			none: "p-0",
			sm: "p-scale300",
			md: "p-scale600",
			lg: "p-scale800"
		})[t.padding]), i = r(() => [
			"bg-bg-primary rounded-[12px] overflow-hidden",
			t.bordered ? "border-2 border-border" : "",
			t.hoverable ? "hover:shadow-md transition-shadow duration-200 cursor-pointer" : "",
			t.shadow ? "shadow-sm" : ""
		]);
		return (e, t) => (v(), o("div", { class: m(i.value) }, [
			e.$slots.header ? (v(), o("div", be, [C(e.$slots, "header")])) : a("", !0),
			s("div", { class: m(n.value) }, [C(e.$slots, "default")], 2),
			e.$slots.footer ? (v(), o("div", xe, [C(e.$slots, "footer")])) : a("", !0)
		], 2));
	}
}), Ce = { class: "flex items-start pt-0.5" }, we = {
	key: 0,
	class: "w-3 h-3 text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, Te = { class: "text-sm font-medium text-content-primary" }, Ee = {
	key: 0,
	class: "text-xs text-content-tertiary mt-0.5"
}, De = /* @__PURE__ */ d({
	__name: "Checkbox",
	props: {
		modelValue: { type: Boolean },
		label: {},
		description: { default: "" },
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e) {
		return (t, n) => (v(), o("label", { class: m(["flex gap-3 cursor-pointer group", e.disabled ? "opacity-40 cursor-not-allowed" : ""]) }, [s("div", Ce, [s("div", {
			class: m([
				"w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-150",
				e.modelValue ? "bg-black border-black" : "border-border group-hover:border-border-hover",
				e.disabled ? "" : "cursor-pointer"
			]),
			onClick: n[0] ||= M((n) => !e.disabled && t.$emit("update:modelValue", !e.modelValue), ["prevent"])
		}, [e.modelValue ? (v(), o("svg", we, [...n[1] ||= [s("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : a("", !0)], 2)]), s("div", null, [s("span", Te, E(e.label), 1), e.description ? (v(), o("p", Ee, E(e.description), 1)) : a("", !0)])], 2));
	}
}), Oe = { class: "relative" }, ke = {
	key: 0,
	class: "px-3 py-2 text-sm text-content-tertiary"
}, Ae = {
	key: 0,
	class: "w-4 h-4 text-accent",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, je = /* @__PURE__ */ d({
	__name: "Combobox",
	props: {
		modelValue: {},
		options: {},
		placeholder: { default: "Search..." },
		disabled: {
			type: Boolean,
			default: !1
		},
		size: { default: "default" }
	},
	emits: ["update:modelValue"],
	setup(t, { emit: c }) {
		let d = t, f = c, p = x(""), h = r(() => {
			if (p.value === "") return d.options;
			let e = p.value.toLowerCase();
			return d.options.filter((t) => t.label.toLowerCase().includes(e));
		}), g = r(() => {
			switch (d.size) {
				case "compact": return "h-8";
				case "large": return "h-12";
				default: return "h-10";
			}
		});
		function _(e) {
			return d.options.find((t) => t.value === e)?.label ?? "";
		}
		return (r, c) => (v(), i(D(N), {
			modelValue: t.modelValue,
			"onUpdate:modelValue": c[1] ||= (e) => f("update:modelValue", e),
			disabled: t.disabled
		}, {
			default: A(() => [s("div", Oe, [s("div", { class: m([
				"flex items-center border-2 rounded-[8px] transition-colors",
				t.disabled ? "opacity-40 bg-surface-input border-transparent cursor-not-allowed" : "bg-surface-input border-transparent hover:bg-surface-input-hover focus-within:!bg-surface focus-within:!border-border-selected",
				g.value
			]) }, [u(D(F), {
				placeholder: t.placeholder,
				displayValue: _,
				class: "w-full bg-transparent outline-none px-3 text-sm placeholder:text-content-tertiary text-content-primary",
				onChange: c[0] ||= (e) => p.value = e.target.value
			}, null, 8, ["placeholder"]), u(D(P), { class: "px-2 text-content-tertiary hover:text-content-secondary" }, {
				default: A(() => [...c[2] ||= [s("svg", {
					class: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [s("path", { d: "M6 9l6 6 6-6" })], -1)]]),
				_: 1
			})], 2), u(n, {
				"enter-active-class": "transition duration-100 ease-out",
				"enter-from-class": "opacity-0 -translate-y-1",
				"enter-to-class": "opacity-100 translate-y-0",
				"leave-active-class": "transition duration-75 ease-in",
				"leave-from-class": "opacity-100",
				"leave-to-class": "opacity-0"
			}, {
				default: A(() => [u(D(I), { class: "absolute z-50 mt-1 w-full bg-bg-primary border border-border rounded-lg shadow-lg py-1 max-h-60 overflow-auto" }, {
					default: A(() => [h.value.length === 0 ? (v(), o("div", ke, " No results found ")) : a("", !0), (v(!0), o(e, null, S(h.value, (e) => (v(), i(D(ee), {
						key: e.value,
						value: e.value
					}, {
						default: A(({ active: t, selected: n }) => [s("div", { class: m(["px-3 py-2 text-sm cursor-pointer flex items-center justify-between text-content-primary", t ? "bg-bg-secondary" : ""]) }, [l(E(e.label) + " ", 1), n ? (v(), o("svg", Ae, [...c[3] ||= [s("path", { d: "M5 13l4 4L19 7" }, null, -1)]])) : a("", !0)], 2)]),
						_: 2
					}, 1032, ["value"]))), 128))]),
					_: 1
				})]),
				_: 1
			})])]),
			_: 1
		}, 8, ["modelValue", "disabled"]));
	}
}), Me = { class: "flex items-center justify-between mb-[12px]" }, Ne = { class: "text-[15px] font-semibold text-content-primary" }, Pe = { class: "border border-border rounded-[12px] bg-surface" }, Fe = { class: "text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] leading-[16px] truncate" }, Ie = { class: "text-[14px] text-content-primary leading-[20px] mt-[2px] break-words" }, Le = {
	key: 1,
	class: "px-[24px] py-[20px]"
}, Re = /* @__PURE__ */ d({
	__name: "DetailSection",
	props: {
		title: {},
		fields: {},
		columns: { default: 3 },
		editable: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["edit"],
	setup(t) {
		let n = t, i = r(() => ({
			2: "grid-cols-2",
			3: "grid-cols-2 sm:grid-cols-3",
			4: "grid-cols-2 sm:grid-cols-4",
			5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
			6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
		})[n.columns] ?? "grid-cols-2 sm:grid-cols-3");
		return (n, r) => (v(), o("div", null, [s("div", Me, [
			s("h3", Ne, E(t.title), 1),
			t.editable ? (v(), o("button", {
				key: 0,
				class: "px-[12px] py-[8px] text-[14px] font-medium text-content-primary bg-surface-input hover:bg-surface-input-hover rounded-[8px] transition-colors cursor-pointer",
				onClick: r[0] ||= (e) => n.$emit("edit")
			}, " Edit ")) : a("", !0),
			C(n.$slots, "action")
		]), s("div", Pe, [t.fields?.length ? (v(), o("div", {
			key: 0,
			class: m(["grid gap-0 px-[16px] sm:px-[24px] py-[16px] sm:py-[20px]", i.value])
		}, [(v(!0), o(e, null, S(t.fields, (e, t) => (v(), o("div", {
			key: t,
			class: "py-[8px] pr-[16px] min-w-0"
		}, [s("div", Fe, E(e.label), 1), s("div", Ie, E(e.value), 1)]))), 128))], 2)) : a("", !0), n.$slots.default ? (v(), o("div", Le, [C(n.$slots, "default")])) : a("", !0)])]));
	}
}), ze = { class: "flex flex-wrap items-center justify-between gap-[8px] mb-[12px]" }, Be = { class: "flex items-center gap-[8px]" }, Ve = {
	key: 0,
	class: "text-[15px] font-semibold text-content-primary"
}, He = {
	key: 1,
	class: "text-[12px] font-medium text-content-secondary bg-surface-input px-[8px] py-[2px] rounded-full"
}, Ue = { class: "flex items-center gap-[6px]" }, We = ["onClick"], Ge = { class: "hidden sm:block border border-border rounded-[12px] bg-surface overflow-hidden" }, Ke = { class: "overflow-x-auto" }, qe = { class: "w-full border-collapse" }, Je = { class: "border-b border-border" }, Ye = {
	key: 0,
	class: "w-[44px] px-[12px] py-[10px] text-left"
}, Xe = {
	key: 0,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, Ze = {
	key: 1,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, Qe = {
	key: 0,
	class: "w-[44px] px-[12px] py-[10px]"
}, $e = ["onClick"], et = {
	key: 0,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, tt = { class: "sm:hidden flex flex-col gap-[8px]" }, nt = { class: "flex items-start gap-[10px]" }, rt = ["onClick"], it = {
	key: 0,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, at = { class: "flex-1 min-w-0" }, ot = { class: "grid grid-cols-2 gap-x-[12px] gap-y-[8px]" }, st = { class: "text-[10px] font-medium text-content-tertiary uppercase tracking-[0.5px]" }, ct = { class: "text-[13px] text-content-primary mt-[1px] truncate" }, lt = /* @__PURE__ */ d({
	__name: "DataGrid",
	props: {
		title: {},
		columns: {},
		rows: {},
		selectable: {
			type: Boolean,
			default: !0
		},
		editable: {
			type: Boolean,
			default: !0
		},
		bulkActions: { default: () => [{
			label: "Delete",
			key: "delete",
			danger: !0
		}, {
			label: "Export",
			key: "export"
		}] }
	},
	emits: ["edit", "bulkAction"],
	setup(t, { emit: n }) {
		let i = t, c = n, u = x(/* @__PURE__ */ new Set()), d = x(!1), f = r(() => i.rows.length > 0 && u.value.size === i.rows.length), p = r(() => u.value.size > 0 && u.value.size < i.rows.length), g = r(() => u.value.size > 0);
		function _() {
			f.value ? u.value = /* @__PURE__ */ new Set() : u.value = new Set(i.rows.map((e, t) => t));
		}
		function y(e) {
			let t = new Set(u.value);
			t.has(e) ? t.delete(e) : t.add(e), u.value = t;
		}
		function b(e) {
			c("bulkAction", e, Array.from(u.value)), u.value = /* @__PURE__ */ new Set();
		}
		function w() {
			d.value = !0, c("edit");
		}
		function T() {
			d.value = !1, u.value = /* @__PURE__ */ new Set();
		}
		return (n, r) => (v(), o("div", null, [
			s("div", ze, [s("div", Be, [t.title ? (v(), o("h3", Ve, E(t.title), 1)) : a("", !0), g.value ? (v(), o("span", He, E(u.value.size) + " selected ", 1)) : a("", !0)]), s("div", Ue, [g.value ? (v(), o(e, { key: 0 }, [(v(!0), o(e, null, S(t.bulkActions, (e) => (v(), o("button", {
				key: e.key,
				class: m(["px-[8px] py-[4px] text-[12px] font-medium rounded-[6px] transition-colors", e.danger ? "text-white bg-[#e11900] hover:bg-[#c41400]" : "text-content-primary bg-surface-input hover:bg-surface-input-hover"]),
				onClick: (t) => b(e.key)
			}, E(e.label) + " (" + E(u.value.size) + ") ", 11, We))), 128)), s("button", {
				class: "px-[8px] py-[4px] text-[12px] font-medium text-content-primary hover:underline transition-colors",
				onClick: r[0] ||= (e) => u.value = /* @__PURE__ */ new Set()
			}, " Cancel ")], 64)) : (v(), o(e, { key: 1 }, [
				C(n.$slots, "headerActions"),
				t.editable && !d.value ? (v(), o("button", {
					key: 0,
					class: "hidden",
					onClick: w
				}, " Edit ")) : a("", !0),
				d.value ? (v(), o("button", {
					key: 1,
					class: "px-[10px] sm:px-[12px] py-[6px] sm:py-[8px] text-[13px] sm:text-[14px] font-medium text-white bg-btn-primary hover:bg-btn-primary-hover rounded-[8px] transition-colors",
					onClick: T
				}, " Done ")) : a("", !0)
			], 64))])]),
			s("div", Ge, [s("div", Ke, [s("table", qe, [s("thead", null, [s("tr", Je, [t.selectable ? (v(), o("th", Ye, [s("div", {
				class: m(["w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors", f.value || p.value ? "bg-btn-primary border-border-selected" : "border-border-hover hover:border-border-hover"]),
				onClick: _
			}, [f.value ? (v(), o("svg", Xe, [...r[1] ||= [s("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : p.value ? (v(), o("svg", Ze, [...r[2] ||= [s("path", { d: "M2 6h8" }, null, -1)]])) : a("", !0)], 2)])) : a("", !0), (v(!0), o(e, null, S(t.columns, (e) => (v(), o("th", {
				key: e.key,
				class: "px-[12px] py-[10px] text-left text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap",
				style: h(e.width ? { width: e.width } : {})
			}, E(e.label), 5))), 128))])]), s("tbody", null, [(v(!0), o(e, null, S(t.rows, (i, c) => (v(), o("tr", {
				key: c,
				class: m(["border-b border-border last:border-b-0 transition-colors", u.value.has(c) ? "bg-surface-selected" : "hover:bg-surface-hover"])
			}, [t.selectable ? (v(), o("td", Qe, [s("div", {
				class: m(["w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors", u.value.has(c) ? "bg-btn-primary border-border-selected" : "border-border-hover hover:border-border-hover"]),
				onClick: (e) => y(c)
			}, [u.value.has(c) ? (v(), o("svg", et, [...r[3] ||= [s("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : a("", !0)], 10, $e)])) : a("", !0), (v(!0), o(e, null, S(t.columns, (e) => (v(), o("td", {
				key: e.key,
				class: "px-[12px] py-[10px] text-[13px] text-content-primary"
			}, [C(n.$slots, "cell-" + e.key, {
				row: i,
				value: i[e.key],
				index: c,
				editMode: d.value
			}, () => [l(E(i[e.key]), 1)])]))), 128))], 2))), 128))])])])]),
			s("div", tt, [(v(!0), o(e, null, S(t.rows, (i, c) => (v(), o("div", {
				key: c,
				class: m(["border border-border rounded-[12px] bg-surface p-[14px] transition-colors", u.value.has(c) ? "border-border-selected bg-surface-selected" : ""])
			}, [s("div", nt, [t.selectable ? (v(), o("div", {
				key: 0,
				class: m(["w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors flex-shrink-0 mt-[2px]", u.value.has(c) ? "bg-btn-primary border-border-selected" : "border-border-hover"]),
				onClick: (e) => y(c)
			}, [u.value.has(c) ? (v(), o("svg", it, [...r[4] ||= [s("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : a("", !0)], 10, rt)) : a("", !0), s("div", at, [s("div", ot, [(v(!0), o(e, null, S(t.columns, (e) => (v(), o("div", { key: e.key }, [s("div", st, E(e.label), 1), s("div", ct, [C(n.$slots, "cell-" + e.key, {
				row: i,
				value: i[e.key],
				index: c,
				editMode: d.value
			}, () => [l(E(i[e.key]), 1)])])]))), 128))])])])], 2))), 128))])
		]));
	}
}), ut = ["disabled"], dt = {
	key: 0,
	class: "absolute z-50 mt-1 w-72 bg-bg-primary border border-border rounded-xl shadow-lg p-3"
}, ft = { class: "flex items-center justify-between mb-2" }, pt = { class: "text-sm font-semibold text-content-primary" }, mt = { class: "grid grid-cols-7 mb-1" }, ht = { class: "grid grid-cols-7" }, gt = ["onClick"], _t = /* @__PURE__ */ d({
	__name: "DatePicker",
	props: {
		modelValue: { default: "" },
		placeholder: { default: "Select date" },
		disabled: {
			type: Boolean,
			default: !1
		},
		size: { default: "default" }
	},
	emits: ["update:modelValue"],
	setup(t, { emit: n }) {
		let i = t, l = n, u = x(!1), d = x(null), f = /* @__PURE__ */ new Date(), p = x(f.getFullYear()), h = x(f.getMonth()), y = [
			"Su",
			"Mo",
			"Tu",
			"We",
			"Th",
			"Fr",
			"Sa"
		], b = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		], C = r(() => {
			if (!i.modelValue) return null;
			let e = i.modelValue.split("-").map(Number), t = e[0] ?? 2026, n = e[1] ?? 1, r = e[2] ?? 1;
			return {
				year: t,
				month: n - 1,
				day: r
			};
		}), w = r(() => {
			if (!i.modelValue) return "";
			let e = C.value;
			return e ? `${b[e.month]} ${e.day}, ${e.year}` : "";
		}), T = r(() => {
			let e = new Date(p.value, h.value, 1).getDay(), t = new Date(p.value, h.value + 1, 0).getDate(), n = new Date(p.value, h.value, 0).getDate(), r = [];
			for (let t = e - 1; t >= 0; t--) {
				let e = h.value - 1, i = e < 0 ? p.value - 1 : p.value;
				r.push({
					day: n - t,
					month: (e + 12) % 12,
					year: i,
					current: !1
				});
			}
			for (let e = 1; e <= t; e++) r.push({
				day: e,
				month: h.value,
				year: p.value,
				current: !0
			});
			let i = 42 - r.length;
			for (let e = 1; e <= i; e++) {
				let t = h.value + 1, n = t > 11 ? p.value + 1 : p.value;
				r.push({
					day: e,
					month: t % 12,
					year: n,
					current: !1
				});
			}
			return r;
		});
		function D() {
			h.value === 0 ? (h.value = 11, p.value--) : h.value--;
		}
		function O() {
			h.value === 11 ? (h.value = 0, p.value++) : h.value++;
		}
		function k(e) {
			let t = String(e.month + 1).padStart(2, "0"), n = String(e.day).padStart(2, "0");
			l("update:modelValue", `${e.year}-${t}-${n}`), u.value = !1;
		}
		function A(e) {
			return C.value ? e.day === C.value.day && e.month === C.value.month && e.year === C.value.year : !1;
		}
		function j(e) {
			return e.day === f.getDate() && e.month === f.getMonth() && e.year === f.getFullYear();
		}
		function M() {
			i.disabled || (u.value = !u.value);
		}
		function N(e) {
			d.value && !d.value.contains(e.target) && (u.value = !1);
		}
		_(() => document.addEventListener("mousedown", N)), g(() => document.removeEventListener("mousedown", N));
		let P = r(() => ({
			compact: "h-8 px-3 text-sm",
			default: "h-10 px-4 text-sm",
			large: "h-12 px-5 text-base"
		})[i.size]);
		return (n, r) => (v(), o("div", {
			ref_key: "containerRef",
			ref: d,
			class: "relative inline-block w-full"
		}, [s("button", {
			type: "button",
			disabled: t.disabled,
			class: m([
				"w-full flex items-center justify-between border-2 rounded-[8px] transition-colors",
				P.value,
				t.disabled ? "opacity-40 cursor-not-allowed bg-surface-input border-transparent" : "bg-surface-input border-transparent hover:bg-surface-input-hover focus:!bg-surface focus:!border-border-selected cursor-pointer"
			]),
			onClick: M
		}, [s("span", { class: m(t.modelValue ? "text-content-primary" : "text-content-tertiary") }, E(w.value || t.placeholder), 3), r[0] ||= c("<svg class=\"w-4 h-4 text-content-secondary ml-2 shrink-0\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>", 1)], 10, ut), u.value ? (v(), o("div", dt, [
			s("div", ft, [
				s("button", {
					type: "button",
					class: "w-8 h-8 flex items-center justify-center rounded-lg text-content-primary hover:bg-bg-secondary transition-colors cursor-pointer",
					onClick: D
				}, [...r[1] ||= [s("svg", {
					class: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [s("polyline", { points: "15 18 9 12 15 6" })], -1)]]),
				s("span", pt, E(b[h.value]) + " " + E(p.value), 1),
				s("button", {
					type: "button",
					class: "w-8 h-8 flex items-center justify-center rounded-lg text-content-primary hover:bg-bg-secondary transition-colors cursor-pointer",
					onClick: O
				}, [...r[2] ||= [s("svg", {
					class: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [s("polyline", { points: "9 18 15 12 9 6" })], -1)]])
			]),
			s("div", mt, [(v(), o(e, null, S(y, (e) => s("div", {
				key: e,
				class: "w-9 h-9 flex items-center justify-center text-xs font-medium text-content-tertiary"
			}, E(e), 1)), 64))]),
			s("div", ht, [(v(!0), o(e, null, S(T.value, (e, t) => (v(), o("div", {
				key: t,
				class: m([
					"w-9 h-9 flex items-center justify-center text-sm cursor-pointer rounded-full transition-colors",
					A(e) ? "bg-black text-white" : e.current ? "text-content-primary hover:bg-bg-secondary" : "text-content-tertiary hover:bg-bg-secondary",
					j(e) && !A(e) ? "font-bold" : ""
				]),
				onClick: (t) => k(e)
			}, E(e.day), 11, gt))), 128))])
		])) : a("", !0)], 512));
	}
}), vt = { class: "fixed inset-0 overflow-hidden" }, yt = { class: "absolute inset-0 overflow-hidden" }, bt = { class: "flex items-center justify-between px-4 py-3 border-b border-border" }, xt = { class: "text-lg font-semibold text-content-primary" }, St = { class: "flex-1 overflow-y-auto p-4" }, Ct = {
	key: 0,
	class: "border-t border-border px-4 py-3"
}, wt = /* @__PURE__ */ d({
	__name: "Drawer",
	props: {
		open: { type: Boolean },
		side: { default: "right" },
		size: { default: "md" },
		title: { default: "" }
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = t, r = {
			sm: "max-w-sm",
			md: "max-w-md",
			lg: "max-w-lg"
		};
		return (t, c) => (v(), i(D(B), {
			show: e.open,
			as: "template"
		}, {
			default: A(() => [u(D(L), {
				class: "relative z-50",
				onClose: c[1] ||= (e) => n("close")
			}, {
				default: A(() => [u(D(z), {
					as: "template",
					enter: "transition-opacity duration-300 ease-out",
					"enter-from": "opacity-0",
					"enter-to": "opacity-100",
					leave: "transition-opacity duration-200 ease-in",
					"leave-from": "opacity-100",
					"leave-to": "opacity-0"
				}, {
					default: A(() => [...c[2] ||= [s("div", { class: "fixed inset-0 bg-black/50" }, null, -1)]]),
					_: 1
				}), s("div", vt, [s("div", yt, [s("div", { class: m(["pointer-events-none fixed inset-y-0 flex", e.side === "right" ? "right-0" : "left-0"]) }, [u(D(z), {
					as: "template",
					enter: "transform transition duration-300 ease-out",
					"enter-from": e.side === "right" ? "translate-x-full" : "-translate-x-full",
					"enter-to": "translate-x-0",
					leave: "transform transition duration-200 ease-in",
					"leave-from": "translate-x-0",
					"leave-to": e.side === "right" ? "translate-x-full" : "-translate-x-full"
				}, {
					default: A(() => [u(D(R), { class: m(["pointer-events-auto w-screen flex flex-col bg-bg-primary shadow-xl", r[e.size]]) }, {
						default: A(() => [
							s("div", bt, [s("h2", xt, E(e.title), 1), s("button", {
								class: "p-1 rounded-lg text-content-tertiary hover:text-content-primary hover:bg-bg-secondary transition-colors cursor-pointer",
								onClick: c[0] ||= (e) => n("close")
							}, [...c[3] ||= [s("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								class: "h-5 w-5",
								viewBox: "0 0 20 20",
								fill: "currentColor"
							}, [s("path", {
								"fill-rule": "evenodd",
								d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
								"clip-rule": "evenodd"
							})], -1)]])]),
							s("div", St, [C(t.$slots, "default")]),
							t.$slots.footer ? (v(), o("div", Ct, [C(t.$slots, "footer")])) : a("", !0)
						]),
						_: 3
					}, 8, ["class"])]),
					_: 3
				}, 8, ["enter-from", "leave-to"])], 2)])])]),
				_: 3
			})]),
			_: 3
		}, 8, ["show"]));
	}
}), Tt = { class: "flex flex-col items-center justify-center text-center py-[48px] sm:py-[64px] px-[24px]" }, Et = { class: "w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full bg-surface-input flex items-center justify-center mb-[20px] sm:mb-[24px]" }, Dt = {
	class: /* @__PURE__ */ m("w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] text-content-tertiary"),
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Ot = ["d"], kt = { class: "text-[18px] sm:text-[20px] font-semibold text-content-primary leading-[26px]" }, At = {
	key: 0,
	class: "text-[13px] sm:text-[14px] text-content-secondary mt-[8px] max-w-[400px] leading-[20px]"
}, jt = {
	key: 1,
	class: "flex flex-col sm:flex-row items-center gap-[10px] mt-[20px] sm:mt-[24px]"
}, Mt = /* @__PURE__ */ d({
	__name: "EmptyState",
	props: {
		title: {},
		description: {},
		actionLabel: {},
		secondaryActionLabel: {},
		icon: {}
	},
	emits: ["action", "secondaryAction"],
	setup(e) {
		let t = {
			search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
			document: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
			inbox: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",
			error: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
		};
		return (n, r) => (v(), o("div", Tt, [
			s("div", Et, [C(n.$slots, "icon", {}, () => [(v(), o("svg", Dt, [s("path", { d: t[e.icon || "inbox"] }, null, 8, Ot)]))])]),
			s("h3", kt, E(e.title), 1),
			e.description ? (v(), o("p", At, E(e.description), 1)) : a("", !0),
			e.actionLabel || e.secondaryActionLabel ? (v(), o("div", jt, [e.actionLabel ? (v(), o("button", {
				key: 0,
				class: "px-[20px] py-[10px] text-[14px] font-medium bg-btn-primary text-btn-primary-text rounded-[8px] hover:bg-btn-primary-hover transition-colors",
				onClick: r[0] ||= (e) => n.$emit("action")
			}, E(e.actionLabel), 1)) : a("", !0), e.secondaryActionLabel ? (v(), o("button", {
				key: 1,
				class: "px-[20px] py-[10px] text-[14px] font-medium text-content-primary bg-surface-input hover:bg-surface-input-hover rounded-[8px] transition-colors",
				onClick: r[1] ||= (e) => n.$emit("secondaryAction")
			}, E(e.secondaryActionLabel), 1)) : a("", !0)])) : a("", !0)
		]));
	}
}), Nt = { class: "text-sm text-content-secondary" }, Pt = { class: "text-xs text-content-tertiary mt-1" }, Ft = ["accept", "multiple"], It = {
	key: 0,
	class: "mt-3 space-y-2"
}, Lt = { class: "flex-1 truncate text-content-primary" }, Rt = { class: "text-content-tertiary text-xs" }, zt = ["onClick"], Bt = /* @__PURE__ */ d({
	__name: "FileUploader",
	props: {
		accept: { default: "" },
		multiple: {
			type: Boolean,
			default: !1
		},
		maxSize: { default: 10 * 1024 * 1024 },
		disabled: {
			type: Boolean,
			default: !1
		},
		label: { default: "Drop files here or" }
	},
	emits: ["upload", "error"],
	setup(t, { emit: n }) {
		let r = t, i = n, c = x(!1), u = x([]), d = x(null);
		function f(e) {
			if (e === 0) return "0 B";
			let t = [
				"B",
				"KB",
				"MB",
				"GB"
			], n = Math.floor(Math.log(e) / Math.log(1024));
			return `${(e / 1024 ** n).toFixed(+(n > 0))} ${t[n]}`;
		}
		function p(e) {
			let t = [];
			for (let n of e) {
				if (n.size > r.maxSize) {
					i("error", `File "${n.name}" exceeds maximum size of ${f(r.maxSize)}`);
					continue;
				}
				t.push(n);
			}
			t.length && (r.multiple ? u.value = [...u.value, ...t] : u.value = t[0] ? [t[0]] : [], i("upload", u.value));
		}
		function h(e) {
			c.value = !1, !(r.disabled || !e.dataTransfer?.files.length) && p(Array.from(e.dataTransfer.files));
		}
		function g(e) {
			let t = e.target;
			t.files?.length && (p(Array.from(t.files)), t.value = "");
		}
		function _() {
			r.disabled || d.value?.click();
		}
		function y(e) {
			u.value = u.value.filter((t, n) => n !== e);
		}
		return (n, r) => (v(), o("div", null, [s("div", {
			class: m([
				"border-2 border-dashed rounded-xl p-8 text-center transition-colors",
				c.value ? "border-accent bg-accent-light" : "border-border hover:border-content-tertiary",
				t.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
			]),
			onDragover: r[0] ||= M((e) => !t.disabled && (c.value = !0), ["prevent"]),
			onDragleave: r[1] ||= (e) => c.value = !1,
			onDrop: M(h, ["prevent"]),
			onClick: _
		}, [
			r[3] ||= s("svg", {
				class: "mx-auto w-10 h-10 text-content-tertiary mb-3",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, [s("path", {
				d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12",
				stroke: "currentColor",
				"stroke-width": "1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			})], -1),
			s("p", Nt, [l(E(t.label) + " ", 1), r[2] ||= s("span", { class: "text-accent font-medium" }, "browse", -1)]),
			s("p", Pt, " Maximum file size: " + E(f(t.maxSize)), 1),
			s("input", {
				ref_key: "fileInput",
				ref: d,
				type: "file",
				accept: t.accept,
				multiple: t.multiple,
				class: "hidden",
				onChange: g
			}, null, 40, Ft)
		], 34), u.value.length ? (v(), o("div", It, [(v(!0), o(e, null, S(u.value, (e, t) => (v(), o("div", {
			key: t,
			class: "flex items-center gap-3 px-3 py-2 bg-bg-secondary rounded-lg text-sm"
		}, [
			r[4] ||= s("svg", {
				class: "w-4 h-4 text-content-tertiary shrink-0",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, [s("path", {
				d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z",
				stroke: "currentColor",
				"stroke-width": "1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}), s("path", {
				d: "M14 2v6h6M16 13H8M16 17H8M10 9H8",
				stroke: "currentColor",
				"stroke-width": "1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			})], -1),
			s("span", Lt, E(e.name), 1),
			s("span", Rt, E(f(e.size)), 1),
			s("button", {
				class: "text-content-tertiary hover:text-negative cursor-pointer",
				onClick: M((e) => y(t), ["stop"])
			}, " ✕ ", 8, zt)
		]))), 128))])) : a("", !0)]));
	}
}), Vt = {
	key: 0,
	class: "text-[13px] font-semibold text-content-primary mb-[8px] px-[4px]"
}, Ht = { class: "flex flex-col" }, Ut = ["onClick"], Wt = {
	key: 0,
	class: "absolute left-0 top-0 bottom-0 w-[3px] bg-[#276EF1]"
}, Gt = /* @__PURE__ */ d({
	__name: "FilterList",
	props: {
		title: {},
		modelValue: {},
		items: {}
	},
	emits: ["update:modelValue"],
	setup(t) {
		return (n, r) => (v(), o("div", null, [t.title ? (v(), o("div", Vt, E(t.title), 1)) : a("", !0), s("div", Ht, [(v(!0), o(e, null, S(t.items, (e) => (v(), o("button", {
			key: e.value,
			class: m(["relative flex items-center justify-between px-[12px] py-[10px] text-[14px] transition-colors text-left", t.modelValue === e.value ? "text-[#276EF1] font-medium bg-surface-selected" : "text-content-secondary hover:bg-surface-input"]),
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [
			t.modelValue === e.value ? (v(), o("div", Wt)) : a("", !0),
			s("span", null, E(e.label), 1),
			e.count == null ? a("", !0) : (v(), o("span", {
				key: 1,
				class: m(["text-[13px]", t.modelValue === e.value ? "text-[#276EF1]" : "text-content-tertiary"])
			}, E(e.count), 3))
		], 10, Ut))), 128))])]));
	}
}), Kt = { class: "mb-4" }, qt = {
	key: 0,
	class: "block text-sm font-medium text-content-primary mb-1.5"
}, Jt = {
	key: 0,
	class: "text-negative ml-0.5"
}, Yt = {
	key: 1,
	class: "mt-1 text-xs text-negative"
}, Xt = {
	key: 2,
	class: "mt-1 text-xs text-content-tertiary"
}, Zt = /* @__PURE__ */ d({
	__name: "FormControl",
	props: {
		label: { default: "" },
		caption: { default: "" },
		error: { default: "" },
		required: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (t, n) => (v(), o("div", Kt, [
			e.label ? (v(), o("label", qt, [l(E(e.label), 1), e.required ? (v(), o("span", Jt, "*")) : a("", !0)])) : a("", !0),
			C(t.$slots, "default"),
			e.error ? (v(), o("p", Yt, E(e.error), 1)) : e.caption ? (v(), o("p", Xt, E(e.caption), 1)) : a("", !0)
		]));
	}
}), Qt = { class: "relative inline-block" }, $t = /* @__PURE__ */ d({
	__name: "HintDot",
	props: {
		color: { default: "accent" },
		hidden: {
			type: Boolean,
			default: !1
		},
		horizontalOffset: { default: "-14px" },
		verticalOffset: { default: "-4px" }
	},
	setup(e) {
		let t = e, n = r(() => ({
			accent: "bg-accent",
			primary: "bg-content-primary",
			positive: "bg-positive",
			negative: "bg-negative",
			warning: "bg-warning"
		})[t.color]), i = r(() => ({
			top: t.verticalOffset,
			right: t.horizontalOffset
		}));
		return (t, r) => (v(), o("div", Qt, [C(t.$slots, "default"), e.hidden ? a("", !0) : (v(), o("div", {
			key: 0,
			class: "absolute w-[16px] h-[16px] flex items-center justify-center pointer-events-none",
			style: h(i.value)
		}, [s("div", { class: m(["w-[8px] h-[8px] rounded-full", n.value]) }, null, 2)], 4))]));
	}
}), en = {
	key: 0,
	class: "text-content-secondary font-medium whitespace-nowrap"
}, tn = [
	"type",
	"value",
	"placeholder",
	"disabled"
], nn = ["disabled"], rn = {
	key: 0,
	class: "text-content-secondary font-medium whitespace-nowrap"
}, an = /* @__PURE__ */ d({
	__name: "Input",
	props: {
		modelValue: { default: "" },
		placeholder: { default: "" },
		size: { default: "default" },
		disabled: {
			type: Boolean,
			default: !1
		},
		error: {
			type: Boolean,
			default: !1
		},
		positive: {
			type: Boolean,
			default: !1
		},
		clearable: {
			type: Boolean,
			default: !1
		},
		type: { default: "text" },
		startText: { default: void 0 },
		endText: { default: void 0 }
	},
	emits: ["update:modelValue"],
	setup(e) {
		let t = e, n = r(() => {
			switch (t.size) {
				case "compact": return "h-[36px] text-[14px]";
				case "large": return "h-[56px] text-[16px]";
				default: return "h-[48px] text-[16px]";
			}
		});
		return (t, r) => (v(), o("div", { class: m([
			"relative flex items-center border-2 rounded-[8px] transition-colors",
			n.value,
			{
				"border-[#e11900] bg-surface": e.error,
				"border-[#048848] bg-surface": e.positive && !e.error,
				"bg-surface-input border-transparent hover:bg-surface-input-hover focus-within:!bg-surface focus-within:!border-border-selected": !e.error && !e.positive,
				"opacity-40 cursor-not-allowed": e.disabled
			}
		]) }, [
			e.startText || t.$slots.startEnhancer ? (v(), o("div", {
				key: 0,
				class: m(["flex items-center flex-shrink-0 text-content-tertiary", e.startText ? "pl-[14px] pr-[10px]" : "pl-scale300"])
			}, [e.startText ? (v(), o("span", en, E(e.startText), 1)) : C(t.$slots, "startEnhancer", { key: 1 })], 2)) : a("", !0),
			s("input", {
				type: e.type,
				value: e.modelValue,
				placeholder: e.placeholder,
				disabled: e.disabled,
				class: "flex-1 px-[14px] py-0 w-full bg-transparent outline-none placeholder:text-content-tertiary text-content-primary",
				onInput: r[0] ||= (e) => t.$emit("update:modelValue", e.target.value)
			}, null, 40, tn),
			e.clearable && e.modelValue ? (v(), o("button", {
				key: 1,
				type: "button",
				class: "mr-[10px] flex-shrink-0 w-[20px] h-[20px] flex items-center justify-center rounded-full bg-content-primary text-content-inverse hover:opacity-80 transition-opacity",
				disabled: e.disabled,
				onClick: r[1] ||= (e) => t.$emit("update:modelValue", "")
			}, [...r[2] ||= [s("svg", {
				class: "w-[10px] h-[10px]",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "3",
				"stroke-linecap": "round"
			}, [s("path", { d: "M18 6L6 18M6 6l12 12" })], -1)]], 8, nn)) : a("", !0),
			e.endText || t.$slots.endEnhancer ? (v(), o("div", {
				key: 2,
				class: m(["flex items-center flex-shrink-0 text-content-tertiary", e.endText ? "pr-[14px] pl-[10px]" : "pr-scale300"])
			}, [e.endText ? (v(), o("span", rn, E(e.endText), 1)) : C(t.$slots, "endEnhancer", { key: 1 })], 2)) : a("", !0)
		], 2));
	}
}), on = { class: "bg-bg-primary border border-border rounded-xl p-5 relative overflow-hidden" }, sn = { class: "flex items-start justify-between" }, cn = { class: "text-3xl font-bold text-content-primary tracking-tight" }, ln = { class: "flex items-center gap-1.5 mt-1" }, un = { class: "text-sm text-content-secondary" }, dn = {
	key: 0,
	class: "w-3.5 h-3.5",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2.5"
}, fn = {
	key: 1,
	class: "w-3.5 h-3.5",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2.5"
}, pn = /* @__PURE__ */ d({
	__name: "KpiCard",
	props: {
		value: {},
		label: {},
		trend: {},
		trendDirection: { default: "neutral" },
		accentColor: { default: "neutral" },
		dot: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = r(() => ({
			positive: "bg-positive",
			negative: "bg-negative",
			warning: "bg-warning",
			accent: "bg-accent",
			neutral: "bg-border"
		})[t.accentColor]), i = r(() => ({
			positive: "bg-positive",
			negative: "bg-negative",
			warning: "bg-warning",
			accent: "bg-accent",
			neutral: "bg-content-tertiary"
		})[t.accentColor]), c = r(() => t.trendDirection === "up" ? "text-positive" : t.trendDirection === "down" ? "text-negative" : "text-content-tertiary");
		return (t, r) => (v(), o("div", on, [s("div", sn, [s("div", null, [s("div", cn, E(e.value), 1), s("div", ln, [e.dot ? (v(), o("span", {
			key: 0,
			class: m(["w-2 h-2 rounded-full", i.value])
		}, null, 2)) : a("", !0), s("span", un, E(e.label), 1)])]), e.trend ? (v(), o("div", {
			key: 0,
			class: m(["text-sm font-medium flex items-center gap-0.5", c.value])
		}, [
			e.trendDirection === "up" ? (v(), o("svg", dn, [...r[0] ||= [s("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
			}, null, -1)]])) : a("", !0),
			e.trendDirection === "down" ? (v(), o("svg", fn, [...r[1] ||= [s("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
			}, null, -1)]])) : a("", !0),
			l(" " + E(e.trend), 1)
		], 2)) : a("", !0)]), s("div", { class: m(["absolute bottom-0 left-0 right-0 h-[3px]", n.value]) }, null, 2)]));
	}
}), mn = {
	key: 0,
	class: "inline-block w-3 h-3 ml-0.5",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, hn = /* @__PURE__ */ d({
	__name: "Link",
	props: {
		href: { default: void 0 },
		to: { default: void 0 },
		external: {
			type: Boolean,
			default: !1
		},
		kind: { default: "default" },
		size: { default: "md" }
	},
	setup(e) {
		let t = e, n = r(() => [
			"inline-flex items-center transition-colors",
			{
				default: "text-accent hover:text-accent/80 font-medium",
				underline: "text-accent underline underline-offset-2 hover:text-accent/80",
				subtle: "text-content-secondary hover:text-content-primary"
			}[t.kind],
			{
				sm: "text-xs",
				md: "text-sm"
			}[t.size]
		].join(" "));
		return (t, r) => (v(), i(T(e.to ? "router-link" : "a"), {
			to: e.to,
			href: e.href,
			target: e.external ? "_blank" : void 0,
			rel: e.external ? "noopener noreferrer" : void 0,
			class: m(n.value)
		}, {
			default: A(() => [C(t.$slots, "default"), e.external ? (v(), o("svg", mn, [...r[0] ||= [s("path", {
				d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, null, -1)]])) : a("", !0)]),
			_: 3
		}, 8, [
			"to",
			"href",
			"target",
			"rel",
			"class"
		]));
	}
}), gn = { class: "w-full" }, _n = { class: "text-sm font-medium text-content-primary" }, vn = {
	key: 0,
	class: "text-xs text-content-tertiary mt-0.5"
}, yn = {
	key: 0,
	class: "text-sm text-content-secondary"
}, bn = /* @__PURE__ */ d({
	__name: "List",
	props: {
		items: {},
		hoverable: {
			type: Boolean,
			default: !0
		},
		divided: {
			type: Boolean,
			default: !0
		}
	},
	setup(t) {
		return (n, r) => (v(), o("ul", gn, [(v(!0), o(e, null, S(t.items, (e, r) => (v(), o("li", {
			key: r,
			class: m([
				"px-4 py-3 flex items-center justify-between",
				t.divided && r < t.items.length - 1 ? "border-b border-border" : "",
				t.hoverable ? "hover:bg-bg-secondary transition-colors cursor-pointer" : ""
			])
		}, [C(n.$slots, "item", {
			item: e,
			index: r
		}, () => [s("div", null, [s("div", _n, E(e.label), 1), e.description ? (v(), o("div", vn, E(e.description), 1)) : a("", !0)]), e.endContent ? (v(), o("span", yn, E(e.endContent), 1)) : a("", !0)])], 2))), 128))]));
	}
}), xn = { class: "relative inline-block text-left" }, Sn = {
	key: 0,
	class: "border-t border-border my-1"
}, Cn = ["onClick"], wn = /* @__PURE__ */ d({
	__name: "Menu",
	props: {
		items: {},
		align: { default: "left" }
	},
	emits: ["select"],
	setup(t, { emit: i }) {
		let c = t, l = i, d = x(!1), f = r(() => c.align === "right" ? "right-0" : "left-0");
		function p(e) {
			d.value = !1;
		}
		function h() {
			d.value = !d.value, d.value && setTimeout(() => {
				document.addEventListener("click", p, { once: !0 });
			}, 0);
		}
		function g(e) {
			e.disabled || (l("select", e), d.value = !1);
		}
		return (r, i) => (v(), o("div", xn, [s("div", { onClick: M(h, ["stop"]) }, [C(r.$slots, "trigger", {}, () => [i[1] ||= s("button", { class: "px-4 py-2 text-sm font-medium bg-btn-primary text-btn-primary-text rounded-lg" }, " Menu ", -1)])]), u(n, {
			"enter-active-class": "transition duration-100 ease-out",
			"enter-from-class": "opacity-0 scale-95",
			"enter-to-class": "opacity-100 scale-100",
			"leave-active-class": "transition duration-75 ease-in",
			"leave-from-class": "opacity-100",
			"leave-to-class": "opacity-0"
		}, {
			default: A(() => [d.value ? (v(), o("div", {
				key: 0,
				class: m(["absolute z-[9999] mt-1 w-56 bg-surface border border-border rounded-xl shadow-lg py-1 focus:outline-none", f.value]),
				onClick: i[0] ||= M(() => {}, ["stop"])
			}, [(v(!0), o(e, null, S(t.items, (t, n) => (v(), o(e, { key: n }, [t.divider ? (v(), o("div", Sn)) : (v(), o("button", {
				key: 1,
				class: m([
					"w-full text-left px-3 py-2 text-sm flex items-center gap-2 transition-colors",
					t.danger ? "text-[#e11900] hover:bg-[#fef2f2]" : "text-content-primary hover:bg-surface-input",
					t.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
				]),
				onClick: (e) => g(t)
			}, E(t.label), 11, Cn))], 64))), 128))], 2)) : a("", !0)]),
			_: 1
		})]));
	}
}), Tn = {
	key: 0,
	class: "rounded-[16px] overflow-hidden border border-border bg-surface"
}, En = {
	key: 0,
	class: "w-full h-[200px] overflow-hidden"
}, Dn = ["src", "alt"], On = { class: "p-[24px]" }, kn = { class: "text-[18px] font-bold text-content-primary leading-[24px]" }, An = { class: "text-[14px] text-content-secondary mt-[6px] leading-[20px]" }, jn = { class: "flex items-center min-h-[120px]" }, Mn = { class: "flex-1 p-[24px]" }, Nn = { class: "text-[18px] font-bold leading-[24px]" }, Pn = { class: "text-[14px] opacity-85 mt-[4px] leading-[20px]" }, Fn = {
	key: 0,
	class: "flex-shrink-0 p-[16px]"
}, In = ["src", "alt"], Ln = /* @__PURE__ */ d({
	__name: "MessageCard",
	props: {
		heading: {},
		description: {},
		buttonLabel: {},
		image: {},
		backgroundColor: { default: "#276EF1" },
		color: { default: "white" },
		layout: { default: "horizontal" }
	},
	emits: ["action"],
	setup(e) {
		return (t, n) => e.layout === "vertical" ? (v(), o("div", Tn, [e.image ? (v(), o("div", En, [s("img", {
			src: e.image,
			alt: e.heading,
			class: "w-full h-full object-cover"
		}, null, 8, Dn)])) : a("", !0), s("div", On, [
			s("h3", kn, E(e.heading), 1),
			s("p", An, E(e.description), 1),
			e.buttonLabel ? (v(), o("button", {
				key: 0,
				class: "mt-[16px] px-[16px] py-[10px] text-[14px] font-medium rounded-[8px] bg-btn-primary text-btn-primary-text hover:bg-btn-primary-hover transition-colors",
				onClick: n[0] ||= (e) => t.$emit("action")
			}, E(e.buttonLabel), 1)) : a("", !0)
		])])) : (v(), o("div", {
			key: 1,
			class: "rounded-[16px] overflow-hidden",
			style: h({
				backgroundColor: e.backgroundColor,
				color: e.color
			})
		}, [s("div", jn, [s("div", Mn, [
			s("h3", Nn, E(e.heading), 1),
			s("p", Pn, E(e.description), 1),
			e.buttonLabel ? (v(), o("button", {
				key: 0,
				class: "mt-[16px] px-[16px] py-[10px] text-[14px] font-medium rounded-[8px] bg-surface/20 hover:bg-surface/30 transition-colors",
				onClick: n[1] ||= (e) => t.$emit("action")
			}, E(e.buttonLabel), 1)) : a("", !0)
		]), e.image ? (v(), o("div", Fn, [s("img", {
			src: e.image,
			alt: e.heading,
			class: "w-[100px] h-[100px] rounded-[12px] object-cover"
		}, null, 8, In)])) : a("", !0)])], 4));
	}
}), Rn = { class: "fixed inset-0 flex items-center justify-center p-4" }, zn = { class: "flex items-center justify-between px-6 pt-6 pb-0" }, Bn = { class: "px-6 py-4" }, Vn = {
	key: 0,
	class: "px-6 pb-6 pt-0"
}, Hn = /* @__PURE__ */ d({
	__name: "Modal",
	props: {
		open: { type: Boolean },
		size: { default: "md" },
		title: {},
		closeable: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = t, r = {
			sm: "max-w-sm",
			md: "max-w-md",
			lg: "max-w-lg",
			xl: "max-w-xl"
		};
		function c() {
			n("close");
		}
		return (t, n) => (v(), i(D(B), {
			show: e.open,
			as: "template"
		}, {
			default: A(() => [u(D(L), {
				open: e.open,
				onClose: n[0] ||= (t) => e.closeable ? c() : void 0,
				class: "relative z-50"
			}, {
				default: A(() => [u(D(z), {
					as: "template",
					enter: "transition duration-200 ease-out",
					"enter-from": "opacity-0",
					"enter-to": "opacity-100",
					leave: "transition duration-150 ease-in",
					"leave-from": "opacity-100",
					"leave-to": "opacity-0"
				}, {
					default: A(() => [...n[1] ||= [s("div", {
						class: "fixed inset-0 bg-black/50",
						"aria-hidden": "true"
					}, null, -1)]]),
					_: 1
				}), s("div", Rn, [u(D(z), {
					as: "template",
					enter: "transition duration-200 ease-out",
					"enter-from": "opacity-0 scale-95",
					"enter-to": "opacity-100 scale-100",
					leave: "transition duration-150 ease-in",
					"leave-from": "opacity-100 scale-100",
					"leave-to": "opacity-0 scale-95"
				}, {
					default: A(() => [u(D(R), { class: m(["w-full rounded-xl bg-bg-primary shadow-xl", r[e.size]]) }, {
						default: A(() => [
							s("div", zn, [e.title ? (v(), i(D(te), {
								key: 0,
								class: "text-lg font-semibold text-content-primary"
							}, {
								default: A(() => [l(E(e.title), 1)]),
								_: 1
							})) : a("", !0), e.closeable ? (v(), o("button", {
								key: 1,
								class: "ml-auto p-1 rounded-md text-content-tertiary hover:text-content-primary hover:bg-secondary transition-colors cursor-pointer",
								"aria-label": "Close",
								onClick: c
							}, [...n[2] ||= [s("svg", {
								class: "w-5 h-5",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [s("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								d: "M6 18L18 6M6 6l12 12"
							})], -1)]])) : a("", !0)]),
							s("div", Bn, [C(t.$slots, "default")]),
							t.$slots.footer ? (v(), o("div", Vn, [C(t.$slots, "footer")])) : a("", !0)
						]),
						_: 3
					}, 8, ["class"])]),
					_: 3
				})])]),
				_: 3
			}, 8, ["open"])]),
			_: 3
		}, 8, ["show"]));
	}
}), Un = { class: "relative z-[9999]" }, Wn = { class: "relative z-[9999] flex items-center justify-between h-[52px] px-[12px] sm:px-[24px] border-b border-border bg-surface" }, Gn = { class: "flex items-center gap-[8px]" }, Kn = { class: "flex items-center gap-1" }, qn = { class: "text-[15px] font-bold text-content-primary tracking-tight" }, Jn = {
	key: 0,
	class: "text-[15px] font-normal text-content-primary"
}, Yn = {
	key: 1,
	class: "hidden sm:block ml-2 pl-2 border-l border-border"
}, Xn = { class: "text-xs text-content-secondary italic" }, Zn = { class: "flex items-center gap-[4px]" }, Qn = {
	key: 0,
	class: "sm:hidden border-b border-border bg-surface"
}, $n = /* @__PURE__ */ d({
	__name: "NavHeader",
	props: {
		brand: { default: "Predium" },
		brandSuffix: { default: "Exchange" },
		subtitle: { default: "" },
		showMenuButton: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["menuClick"],
	setup(e, { emit: t }) {
		let r = O(), i = x(!1);
		function c() {
			i.value = !i.value;
		}
		return (t, l) => (v(), o("div", Un, [s("header", Wn, [s("div", Gn, [e.showMenuButton || D(r)["mobile-menu"] ? (v(), o("button", {
			key: 0,
			class: "sm:hidden w-[36px] h-[36px] flex items-center justify-center rounded-[8px] text-content-primary hover:bg-surface-input transition-colors",
			onClick: l[0] ||= (n) => e.showMenuButton ? t.$emit("menuClick") : c()
		}, [...l[1] ||= [s("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round"
		}, [s("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]])) : a("", !0), s("div", Kn, [
			s("span", qn, E(e.brand), 1),
			e.brandSuffix ? (v(), o("span", Jn, E(e.brandSuffix), 1)) : a("", !0),
			e.subtitle ? (v(), o("div", Yn, [s("span", Xn, E(e.subtitle), 1)])) : a("", !0)
		])]), s("div", Zn, [C(t.$slots, "actions")])]), u(n, {
			"enter-active-class": "transition duration-150 ease-out",
			"enter-from-class": "opacity-0 -translate-y-2",
			"enter-to-class": "opacity-100 translate-y-0",
			"leave-active-class": "transition duration-100 ease-in",
			"leave-from-class": "opacity-100",
			"leave-to-class": "opacity-0 -translate-y-2"
		}, {
			default: A(() => [i.value && D(r)["mobile-menu"] ? (v(), o("div", Qn, [C(t.$slots, "mobile-menu")])) : a("", !0)]),
			_: 3
		})]));
	}
}), er = { class: "flex-shrink-0 mt-0.5" }, tr = {
	key: 0,
	class: "w-5 h-5 text-accent",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, nr = {
	key: 1,
	class: "w-5 h-5 text-positive",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, rr = {
	key: 2,
	class: "w-5 h-5 text-warning",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, ir = {
	key: 3,
	class: "w-5 h-5 text-negative",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, ar = { class: "flex-1 min-w-0" }, or = {
	key: 0,
	class: "font-semibold mb-0.5"
}, sr = /* @__PURE__ */ d({
	__name: "Notification",
	props: {
		kind: { default: "info" },
		closeable: {
			type: Boolean,
			default: !0
		},
		title: { default: "" }
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, i = t, c = x(!0), l = r(() => {
			switch (n.kind) {
				case "info": return "bg-accent-light border-l-accent text-content-primary";
				case "positive": return "bg-positive-light border-l-positive text-content-primary";
				case "warning": return "bg-warning-light border-l-warning text-content-primary";
				case "negative": return "bg-negative-light border-l-negative text-content-primary";
				default: return "bg-accent-light border-l-accent text-content-primary";
			}
		});
		function u() {
			c.value = !1, i("close");
		}
		return (t, n) => c.value ? (v(), o("div", {
			key: 0,
			class: m(["flex items-start gap-3 px-4 py-3 rounded-lg text-sm border-l-4", l.value])
		}, [
			s("div", er, [e.kind === "info" ? (v(), o("svg", tr, [...n[0] ||= [s("path", {
				"fill-rule": "evenodd",
				d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : e.kind === "positive" ? (v(), o("svg", nr, [...n[1] ||= [s("path", {
				"fill-rule": "evenodd",
				d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : e.kind === "warning" ? (v(), o("svg", rr, [...n[2] ||= [s("path", {
				"fill-rule": "evenodd",
				d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : e.kind === "negative" ? (v(), o("svg", ir, [...n[3] ||= [s("path", {
				"fill-rule": "evenodd",
				d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : a("", !0)]),
			s("div", ar, [e.title ? (v(), o("p", or, E(e.title), 1)) : a("", !0), s("div", null, [C(t.$slots, "default")])]),
			e.closeable ? (v(), o("button", {
				key: 0,
				class: "flex-shrink-0 p-0.5 rounded hover:bg-black/5 transition-colors duration-150 cursor-pointer",
				onClick: u
			}, [...n[4] ||= [s("svg", {
				class: "w-4 h-4 text-content-secondary",
				viewBox: "0 0 20 20",
				fill: "currentColor"
			}, [s("path", {
				"fill-rule": "evenodd",
				d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
				"clip-rule": "evenodd"
			})], -1)]])) : a("", !0)
		], 2)) : a("", !0);
	}
}), cr = { class: "px-[16px] sm:px-[24px] pt-[16px] sm:pt-[20px] pb-[12px] sm:pb-[16px] bg-surface" }, lr = { class: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-[12px]" }, ur = {
	key: 0,
	class: "flex items-center gap-[6px] text-[13px] sm:text-[14px] mb-[4px]"
}, dr = { class: "flex items-baseline flex-wrap gap-[4px] sm:hidden" }, fr = {
	key: 1,
	class: "text-content-tertiary"
}, pr = {
	key: 2,
	class: "text-content-primary font-medium break-words"
}, mr = { class: "hidden sm:flex items-center gap-[6px]" }, hr = {
	key: 0,
	class: "text-content-tertiary"
}, gr = ["onClick"], _r = {
	key: 2,
	class: "text-content-primary font-medium"
}, vr = { class: "flex flex-wrap items-center gap-[8px] sm:gap-[12px]" }, yr = { class: "text-[20px] sm:text-[24px] font-bold text-content-primary leading-[28px] sm:leading-[32px]" }, br = {
	key: 1,
	class: "text-[13px] text-content-tertiary mt-[2px]"
}, xr = {
	key: 0,
	class: "flex flex-wrap items-center gap-[8px] sm:mt-[4px]"
}, Sr = {
	key: 0,
	class: "relative"
}, Cr = ["onClick"], wr = {
	key: 0,
	class: "absolute right-0 top-full mt-[4px] z-50 min-w-[180px] bg-surface border border-border rounded-[12px] shadow-xl overflow-hidden"
}, Tr = ["onClick"], Er = ["onClick"], Dr = /* @__PURE__ */ d({
	__name: "PageHeader",
	props: {
		breadcrumbs: {},
		title: {},
		subtitle: {},
		status: {},
		statusColor: { default: "positive" },
		actions: {}
	},
	emits: [
		"breadcrumbClick",
		"actionClick",
		"dropdownSelect"
	],
	setup(t) {
		let n = t, i = x(null);
		function c(e) {
			i.value = i.value === e ? null : e;
		}
		let u = r(() => {
			let e = {
				positive: "bg-positive-light text-positive-text",
				warning: "bg-warning-light text-warning-text",
				negative: "bg-negative-light text-negative-text",
				accent: "bg-accent-light text-accent-text",
				neutral: "bg-surface-input text-content-secondary"
			};
			return e[n.statusColor] ?? e.neutral;
		});
		return (n, r) => (v(), o("div", cr, [s("div", lr, [s("div", null, [
			t.breadcrumbs?.length ? (v(), o("div", ur, [s("div", dr, [
				s("span", {
					class: "text-content-secondary hover:text-content-primary cursor-pointer",
					onClick: r[0] ||= (e) => n.$emit("breadcrumbClick", 0)
				}, E(t.breadcrumbs[0]), 1),
				t.breadcrumbs.length > 2 ? (v(), o(e, { key: 0 }, [r[1] ||= s("span", { class: "text-content-tertiary" }, "›", -1), r[2] ||= s("span", { class: "text-content-tertiary" }, "...", -1)], 64)) : a("", !0),
				t.breadcrumbs.length > 1 ? (v(), o("span", fr, "›")) : a("", !0),
				t.breadcrumbs.length > 1 ? (v(), o("span", pr, E(t.breadcrumbs[t.breadcrumbs.length - 1]), 1)) : a("", !0)
			]), s("div", mr, [(v(!0), o(e, null, S(t.breadcrumbs, (r, i) => (v(), o(e, { key: i }, [i > 0 ? (v(), o("span", hr, "›")) : a("", !0), i < t.breadcrumbs.length - 1 ? (v(), o("span", {
				key: 1,
				class: "text-content-secondary hover:text-content-primary cursor-pointer",
				onClick: (e) => n.$emit("breadcrumbClick", i)
			}, E(r), 9, gr)) : (v(), o("span", _r, E(r), 1))], 64))), 128))])])) : a("", !0),
			s("div", vr, [s("h1", yr, E(t.title), 1), t.status ? (v(), o("span", {
				key: 0,
				class: m(["inline-flex items-center px-[10px] py-[2px] rounded-full text-[12px] font-medium", u.value])
			}, E(t.status), 3)) : a("", !0)]),
			t.subtitle ? (v(), o("div", br, E(t.subtitle), 1)) : a("", !0)
		]), t.actions?.length ? (v(), o("div", xr, [(v(!0), o(e, null, S(t.actions, (t, u) => (v(), o(e, { key: u }, [t.kind === "dropdown" ? (v(), o("div", Sr, [s("button", {
			class: "flex items-center gap-[4px] px-[12px] py-[8px] text-[14px] font-medium text-content-primary hover:bg-surface-input rounded-[8px] transition-colors",
			onClick: M((e) => c(u), ["stop"])
		}, [l(E(t.label) + " ", 1), r[3] ||= s("svg", {
			class: "w-[14px] h-[14px] text-content-secondary",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2"
		}, [s("path", { d: "M6 9l6 6 6-6" })], -1)], 8, Cr), i.value === u ? (v(), o("div", wr, [(v(!0), o(e, null, S(t.items, (e) => (v(), o("button", {
			key: e,
			class: "w-full text-left px-[16px] py-[10px] text-[14px] text-content-primary hover:bg-surface-input transition-colors",
			onClick: (r) => {
				i.value = null, n.$emit("dropdownSelect", t, e);
			}
		}, E(e), 9, Tr))), 128))])) : a("", !0)])) : (v(), o("button", {
			key: 1,
			class: m(["px-[12px] py-[8px] text-[14px] font-medium rounded-[8px] transition-colors", t.kind === "primary" ? "bg-btn-primary text-btn-primary-text hover:bg-btn-primary-hover" : "text-content-primary hover:bg-surface-input"]),
			onClick: (e) => n.$emit("actionClick", t)
		}, E(t.label), 11, Er))], 64))), 128))])) : a("", !0)])]));
	}
}), Or = { class: "flex flex-wrap items-center justify-between gap-3 py-3" }, kr = { class: "flex items-center gap-2" }, Ar = { class: "relative" }, jr = {
	key: 0,
	class: "absolute bottom-full left-0 mb-1 z-[100] w-[72px] rounded-[8px] border border-border bg-surface shadow-lg py-[4px]"
}, Mr = ["onClick"], Nr = {
	key: 0,
	class: "text-[13px] text-content-tertiary hidden sm:block"
}, Pr = { class: "font-medium text-content-secondary" }, Fr = { class: "font-medium text-content-secondary" }, Ir = { class: "font-medium text-content-secondary" }, Lr = {
	class: "flex items-center gap-1",
	role: "navigation",
	"aria-label": "Pagination"
}, Rr = ["disabled"], zr = ["onClick"], Br = ["disabled"], Vr = /* @__PURE__ */ d({
	__name: "Pagination",
	props: {
		currentPage: {},
		totalPages: {},
		totalItems: { default: 0 },
		pageSize: { default: 20 },
		pageSizes: { default: () => [
			10,
			25,
			50,
			100
		] },
		siblingCount: { default: 1 },
		size: { default: "default" }
	},
	emits: ["update:currentPage", "update:pageSize"],
	setup(t, { emit: n }) {
		let i = t, c = n, u = x(!1), d = r(() => {
			let e = i.totalPages, t = i.currentPage, n = i.siblingCount, r = (e, t) => {
				let n = [];
				for (let r = e; r <= t; r++) n.push(r);
				return n;
			};
			if (e <= n * 2 + 5) return r(1, e);
			let a = Math.max(t - n, 1), o = Math.min(t + n, e), s = a > 2, c = o < e - 1;
			return !s && c ? [
				...r(1, 3 + 2 * n),
				"ellipsis-right",
				e
			] : s && !c ? [
				1,
				"ellipsis-left",
				...r(e - (3 + 2 * n) + 1, e)
			] : [
				1,
				"ellipsis-left",
				...r(a, o),
				"ellipsis-right",
				e
			];
		}), f = r(() => i.totalItems === 0 ? 0 : (i.currentPage - 1) * i.pageSize + 1), p = r(() => Math.min(i.currentPage * i.pageSize, i.totalItems));
		function h(e) {
			e < 1 || e > i.totalPages || e === i.currentPage || c("update:currentPage", e);
		}
		function g(e) {
			u.value = !1, c("update:pageSize", e), c("update:currentPage", 1);
		}
		let _ = r(() => i.size === "compact" ? "w-7 h-7 text-xs" : "w-8 h-8 text-sm");
		return (n, r) => (v(), o(e, null, [s("div", Or, [
			s("div", kr, [r[5] ||= s("span", { class: "text-[13px] text-content-tertiary whitespace-nowrap" }, "Rows per page", -1), s("div", Ar, [s("button", {
				class: "flex items-center gap-1 px-[10px] py-[5px] text-[13px] font-medium text-content-primary border border-border rounded-[8px] hover:bg-surface-input transition-colors min-w-[56px] justify-between",
				onClick: r[0] ||= (e) => u.value = !u.value
			}, [l(E(t.pageSize) + " ", 1), r[4] ||= s("svg", {
				class: "w-3 h-3 text-content-tertiary",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [s("polyline", { points: "6 9 12 15 18 9" })], -1)]), u.value ? (v(), o("div", jr, [(v(!0), o(e, null, S(t.pageSizes, (e) => (v(), o("button", {
				key: e,
				class: m(["w-full text-left px-[12px] py-[6px] text-[13px] transition-colors", e === t.pageSize ? "text-content-primary font-medium bg-surface-input" : "text-content-secondary hover:bg-surface-input"]),
				onClick: (t) => g(e)
			}, E(e), 11, Mr))), 128))])) : a("", !0)])]),
			t.totalItems > 0 ? (v(), o("span", Nr, [
				s("span", Pr, E(f.value), 1),
				r[6] ||= l(" – ", -1),
				s("span", Fr, E(p.value), 1),
				r[7] ||= l(" of ", -1),
				s("span", Ir, E(t.totalItems), 1)
			])) : a("", !0),
			s("nav", Lr, [
				s("button", {
					type: "button",
					class: m([
						_.value,
						"flex items-center justify-center rounded-lg transition-colors",
						t.currentPage <= 1 ? "text-content-tertiary cursor-not-allowed" : "text-content-primary hover:bg-bg-secondary cursor-pointer"
					]),
					disabled: t.currentPage <= 1,
					onClick: r[1] ||= (e) => h(t.currentPage - 1)
				}, [...r[8] ||= [s("svg", {
					class: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [s("polyline", { points: "15 18 9 12 15 6" })], -1)]], 10, Rr),
				(v(!0), o(e, null, S(d.value, (n, r) => (v(), o(e, { key: r }, [typeof n == "string" ? (v(), o("span", {
					key: 0,
					class: m([_.value, "flex items-center justify-center text-content-tertiary"])
				}, " … ", 2)) : (v(), o("button", {
					key: 1,
					type: "button",
					class: m([
						_.value,
						"flex items-center justify-center rounded-lg transition-colors cursor-pointer",
						n === t.currentPage ? "bg-black text-white" : "text-content-primary hover:bg-bg-secondary"
					]),
					onClick: (e) => h(n)
				}, E(n), 11, zr))], 64))), 128)),
				s("button", {
					type: "button",
					class: m([
						_.value,
						"flex items-center justify-center rounded-lg transition-colors",
						t.currentPage >= t.totalPages ? "text-content-tertiary cursor-not-allowed" : "text-content-primary hover:bg-bg-secondary cursor-pointer"
					]),
					disabled: t.currentPage >= t.totalPages,
					onClick: r[2] ||= (e) => h(t.currentPage + 1)
				}, [...r[9] ||= [s("svg", {
					class: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [s("polyline", { points: "9 18 15 12 9 6" })], -1)]], 10, Br)
			])
		]), u.value ? (v(), o("div", {
			key: 0,
			class: "fixed inset-0 z-[99]",
			onClick: r[3] ||= (e) => u.value = !1
		})) : a("", !0)], 64));
	}
}), Hr = ["value", "disabled"], Ur = ["value", "disabled"], Wr = /* @__PURE__ */ d({
	__name: "PhoneInput",
	props: {
		modelValue: { default: "" },
		countryCode: { default: "+1" },
		disabled: {
			type: Boolean,
			default: !1
		},
		error: {
			type: Boolean,
			default: !1
		},
		size: { default: "default" }
	},
	emits: ["update:modelValue", "update:countryCode"],
	setup(e, { emit: t }) {
		let n = e, i = t, a = r(() => {
			switch (n.size) {
				case "compact": return "h-8 text-sm";
				case "large": return "h-12 text-base";
				default: return "h-10 text-sm";
			}
		});
		return (t, n) => (v(), o("div", { class: m([
			"flex border-2 rounded-[8px] overflow-hidden transition-colors",
			e.error ? "border-[#e11900] bg-surface" : "",
			!e.error && !e.disabled ? "bg-surface-input border-transparent hover:bg-surface-input-hover focus-within:!bg-surface focus-within:!border-border-selected" : "",
			e.disabled ? "opacity-40 bg-surface-input border-transparent" : ""
		]) }, [s("select", {
			value: e.countryCode,
			disabled: e.disabled,
			class: m(["bg-bg-secondary border-r border-border px-2 text-sm font-medium outline-none cursor-pointer", a.value]),
			onChange: n[0] ||= (e) => i("update:countryCode", e.target.value)
		}, [...n[2] ||= [c("<option value=\"+1\">🇺🇸 +1</option><option value=\"+52\">🇲🇽 +52</option><option value=\"+44\">🇬🇧 +44</option><option value=\"+49\">🇩🇪 +49</option><option value=\"+33\">🇫🇷 +33</option><option value=\"+81\">🇯🇵 +81</option><option value=\"+86\">🇨🇳 +86</option><option value=\"+91\">🇮🇳 +91</option>", 8)]], 42, Hr), s("input", {
			value: e.modelValue,
			disabled: e.disabled,
			type: "tel",
			placeholder: "(555) 123-4567",
			class: m(["flex-1 outline-none px-3 text-sm bg-transparent", a.value]),
			onInput: n[1] ||= (e) => i("update:modelValue", e.target.value)
		}, null, 42, Ur)], 2));
	}
}), Gr = { class: "flex gap-2" }, Kr = [
	"type",
	"value",
	"disabled",
	"onInput",
	"onKeydown"
], qr = /* @__PURE__ */ d({
	__name: "PinCode",
	props: {
		modelValue: { default: "" },
		length: { default: 4 },
		mask: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		error: {
			type: Boolean,
			default: !1
		},
		size: { default: "default" }
	},
	emits: ["update:modelValue", "complete"],
	setup(t, { emit: n }) {
		let r = t, i = n, a = x([]);
		function s(e, t) {
			let n = t.target, o = n.value;
			o.length > 1 && (n.value = o.charAt(o.length - 1));
			let s = r.modelValue.split("");
			for (s[e] = n.value; s.length <= e;) s.push("");
			let c = s.join("").slice(0, r.length);
			i("update:modelValue", c), n.value && e < r.length - 1 && p(() => {
				a.value[e + 1]?.focus();
			}), c.length === r.length && !c.includes("") && i("complete", c);
		}
		function c(e, t) {
			if (!t.target.value && e > 0) {
				let t = r.modelValue.split("");
				t[e - 1] = "", i("update:modelValue", t.join("")), p(() => {
					a.value[e - 1]?.focus();
				});
			}
		}
		function l(e) {
			e.preventDefault();
			let t = e.clipboardData?.getData("text").replace(/\D/g, "").slice(0, r.length) || "";
			if (!t) return;
			i("update:modelValue", t.padEnd(r.length, "").slice(0, r.length));
			let n = Math.min(t.length, r.length - 1);
			p(() => {
				a.value[n]?.focus();
			}), t.length === r.length && i("complete", t);
		}
		return (n, r) => (v(), o("div", Gr, [(v(!0), o(e, null, S(t.length, (e) => (v(), o("input", {
			key: e,
			ref_for: !0,
			ref_key: "inputs",
			ref: a,
			type: t.mask ? "password" : "text",
			maxlength: "1",
			inputmode: "numeric",
			value: t.modelValue[e - 1] || "",
			disabled: t.disabled,
			class: m([
				"text-center font-semibold border-2 rounded-[8px] outline-none transition-colors",
				t.size === "compact" ? "w-10 h-10 text-lg" : "w-12 h-12 text-xl",
				t.error ? "border-[#e11900] bg-surface" : "bg-surface-input border-transparent focus:!bg-surface focus:!border-border-selected",
				t.disabled ? "opacity-40 cursor-not-allowed" : ""
			]),
			onInput: (t) => s(e - 1, t),
			onKeydown: j((t) => c(e - 1, t), ["backspace"]),
			onPaste: l
		}, null, 42, Kr))), 128))]));
	}
}), Jr = /* @__PURE__ */ d({
	__name: "Popover",
	props: { placement: { default: "bottom-start" } },
	setup(e) {
		let t = e, i = x(!1), c = x(null);
		function l() {
			i.value = !i.value;
		}
		function d() {
			i.value = !1;
		}
		function f(e) {
			c.value && !c.value.contains(e.target) && d();
		}
		_(() => {
			document.addEventListener("click", f);
		}), g(() => {
			document.removeEventListener("click", f);
		});
		let p = r(() => ({
			"bottom-end": "right-0 top-full mt-2",
			"bottom-start": "left-0 top-full mt-2",
			bottom: "left-1/2 -translate-x-1/2 top-full mt-2",
			"top-end": "right-0 bottom-full mb-2",
			"top-start": "left-0 bottom-full mb-2",
			top: "left-1/2 -translate-x-1/2 bottom-full mb-2"
		})[t.placement] ?? "left-0 top-full mt-2");
		return (e, t) => (v(), o("div", {
			ref_key: "popoverRef",
			ref: c,
			class: "relative inline-block"
		}, [s("div", {
			onClick: M(l, ["stop"]),
			class: "inline-block cursor-pointer"
		}, [C(e.$slots, "trigger", {}, () => [t[0] ||= s("button", { class: "px-4 py-2 text-sm font-medium bg-black text-white rounded-lg" }, " Open ", -1)])]), u(n, {
			"enter-active-class": "transition duration-150 ease-out",
			"enter-from-class": "opacity-0 translate-y-1",
			"enter-to-class": "opacity-100 translate-y-0",
			"leave-active-class": "transition duration-100 ease-in",
			"leave-from-class": "opacity-100",
			"leave-to-class": "opacity-0"
		}, {
			default: A(() => [i.value ? (v(), o("div", {
				key: 0,
				class: m(["absolute z-[9999] min-w-[180px] bg-surface border border-border rounded-xl shadow-xl overflow-hidden", p.value])
			}, [C(e.$slots, "default")], 2)) : a("", !0)]),
			_: 3
		})], 512));
	}
}), Yr = { class: "w-full" }, Xr = {
	key: 0,
	class: "text-xs text-content-secondary mt-1 inline-block"
}, Zr = /* @__PURE__ */ d({
	__name: "ProgressBar",
	props: {
		value: {},
		color: { default: "primary" },
		size: { default: "md" },
		showLabel: {
			type: Boolean,
			default: !1
		},
		animated: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = r(() => Math.max(0, Math.min(100, t.value))), i = r(() => ({
			sm: "h-1",
			md: "h-2",
			lg: "h-3"
		})[t.size]), c = r(() => ({
			primary: "bg-content-primary",
			positive: "bg-positive",
			warning: "bg-warning",
			negative: "bg-negative",
			accent: "bg-accent"
		})[t.color]);
		return (t, r) => (v(), o("div", Yr, [s("div", { class: m(["w-full rounded-full bg-bg-tertiary overflow-hidden", i.value]) }, [s("div", {
			class: m([
				"h-full rounded-full transition-all duration-500 ease-out",
				c.value,
				e.animated ? "animate-pulse" : ""
			]),
			style: h({ width: n.value + "%" })
		}, null, 6)], 2), e.showLabel ? (v(), o("span", Xr, E(n.value) + "% ", 1)) : a("", !0)]));
	}
}), Qr = { class: "space-y-0" }, $r = { class: "flex flex-col items-center" }, ei = {
	key: 0,
	class: "w-4 h-4",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "3"
}, ti = { key: 1 }, ni = {
	key: 1,
	class: "mt-3"
}, ri = /* @__PURE__ */ d({
	__name: "ProgressSteps",
	props: {
		steps: {},
		currentStep: { default: 0 }
	},
	setup(t) {
		return (n, r) => (v(), o("div", Qr, [(v(!0), o(e, null, S(t.steps, (e, i) => (v(), o("div", {
			key: i,
			class: "relative flex gap-4"
		}, [s("div", $r, [s("div", { class: m([
			"w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 border-2 transition-colors",
			i < t.currentStep ? "bg-btn-primary border-btn-primary text-btn-primary-text" : "",
			i === t.currentStep ? "bg-btn-primary border-btn-primary text-btn-primary-text" : "",
			i > t.currentStep ? "bg-surface border-border text-content-tertiary" : ""
		]) }, [i < t.currentStep ? (v(), o("svg", ei, [...r[0] ||= [s("path", { d: "M5 13l4 4L19 7" }, null, -1)]])) : (v(), o("span", ti, E(i + 1), 1))], 2), i < t.steps.length - 1 ? (v(), o("div", {
			key: 0,
			class: m(["w-0.5 flex-1 min-h-[24px]", i < t.currentStep ? "bg-btn-primary" : "bg-border"])
		}, null, 2)) : a("", !0)]), s("div", { class: m(["pb-8 flex-1", i === t.steps.length - 1 ? "pb-0" : ""]) }, [
			s("h4", { class: m(["text-sm font-semibold", i <= t.currentStep ? "text-content-primary" : "text-content-tertiary"]) }, E(e.title), 3),
			e.description ? (v(), o("p", {
				key: 0,
				class: m(["text-xs mt-0.5", i <= t.currentStep ? "text-content-secondary" : "text-content-tertiary"])
			}, E(e.description), 3)) : a("", !0),
			i === t.currentStep ? (v(), o("div", ni, [C(n.$slots, "step-" + i, {
				step: e,
				index: i,
				isActive: !0,
				isCompleted: !1
			})])) : a("", !0)
		], 2)]))), 128))]));
	}
}), ii = ["onClick"], ai = [
	"name",
	"value",
	"checked",
	"disabled"
], oi = { class: "mt-0.5" }, si = {
	key: 0,
	class: "w-2.5 h-2.5 rounded-full bg-content-primary"
}, ci = { class: "text-sm font-medium text-content-primary" }, li = {
	key: 0,
	class: "text-xs text-content-tertiary mt-0.5"
}, ui = /* @__PURE__ */ d({
	__name: "Radio",
	props: {
		modelValue: {},
		options: {},
		name: {},
		orientation: { default: "vertical" }
	},
	emits: ["update:modelValue"],
	setup(t, { emit: n }) {
		let r = n;
		function i(e) {
			e.disabled || r("update:modelValue", e.value);
		}
		return (n, r) => (v(), o("div", {
			class: m(["flex gap-4", t.orientation === "horizontal" ? "flex-row flex-wrap" : "flex-col"]),
			role: "radiogroup"
		}, [(v(!0), o(e, null, S(t.options, (e) => (v(), o("label", {
			key: e.value,
			class: m(["flex items-start gap-3 group", e.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"]),
			onClick: (t) => i(e)
		}, [
			s("input", {
				type: "radio",
				name: t.name,
				value: e.value,
				checked: t.modelValue === e.value,
				disabled: e.disabled,
				class: "sr-only"
			}, null, 8, ai),
			s("div", oi, [s("div", { class: m(["w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors", t.modelValue === e.value ? "border-content-primary" : e.disabled ? "border-border" : "border-content-tertiary group-hover:border-content-secondary"]) }, [t.modelValue === e.value ? (v(), o("div", si)) : a("", !0)], 2)]),
			s("div", null, [s("span", ci, E(e.label), 1), e.description ? (v(), o("p", li, E(e.description), 1)) : a("", !0)])
		], 10, ii))), 128))], 2));
	}
}), di = { class: "inline-flex items-center gap-0.5" }, fi = ["onClick", "onMouseenter"], pi = ["fill"], mi = /* @__PURE__ */ d({
	__name: "Rating",
	props: {
		modelValue: { default: 0 },
		max: { default: 5 },
		size: { default: "md" },
		readOnly: {
			type: Boolean,
			default: !1
		},
		color: { default: "#FFC043" }
	},
	emits: ["update:modelValue"],
	setup(t, { emit: n }) {
		let i = t, a = n, c = x(0), l = r(() => {
			switch (i.size) {
				case "sm": return "w-4 h-4";
				case "lg": return "w-7 h-7";
				default: return "w-5 h-5";
			}
		});
		return (n, r) => (v(), o("div", di, [(v(!0), o(e, null, S(t.max, (e) => (v(), o("button", {
			key: e,
			type: "button",
			class: m(["transition-colors", t.readOnly ? "cursor-default" : "cursor-pointer hover:scale-110 transition-transform"]),
			onClick: (n) => !t.readOnly && a("update:modelValue", e),
			onMouseenter: (n) => !t.readOnly && (c.value = e),
			onMouseleave: r[0] ||= (e) => !t.readOnly && (c.value = 0)
		}, [(v(), o("svg", {
			class: m(l.value),
			viewBox: "0 0 24 24",
			fill: (c.value || t.modelValue) >= e ? t.color : "#E2E2E2",
			stroke: "none"
		}, [...r[1] ||= [s("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }, null, -1)]], 10, pi))], 42, fi))), 128))]));
	}
}), hi = { class: "flex h-screen overflow-hidden bg-surface" }, gi = { class: "hidden lg:flex" }, _i = {
	key: 0,
	class: "lg:hidden fixed inset-y-0 left-0 z-[10001] flex [&_nav]:!w-[240px]"
}, vi = { class: "flex-1 flex flex-col min-w-0 overflow-hidden" }, yi = { class: "flex-1 overflow-y-auto" }, bi = {
	key: 0,
	class: "bg-surface sticky top-0 z-10"
}, xi = { class: "px-[12px] sm:px-[16px] md:px-[24px]" }, Si = { class: "flex flex-col lg:flex-row lg:min-h-full" }, Ci = { class: "flex-1 min-w-0 p-[12px] sm:p-[16px] md:p-[24px]" }, wi = { class: "flex flex-col gap-[20px] sm:gap-[24px] md:gap-[32px]" }, Ti = {
	key: 0,
	class: "w-full lg:w-[340px] xl:w-[400px] flex-shrink-0 border-t lg:border-t-0 lg:border-l border-border p-[12px] sm:p-[16px] md:p-[24px]"
}, Ei = { class: "lg:sticky lg:top-[24px]" }, Di = /* @__PURE__ */ d({
	__name: "ScaffoldDetail",
	setup(e, { expose: t }) {
		let r = x(!1);
		function i() {
			r.value = !0;
		}
		function c() {
			r.value = !1;
		}
		return t({
			openMobileSidebar: i,
			closeMobileSidebar: c
		}), (e, t) => (v(), o("div", hi, [
			s("div", gi, [C(e.$slots, "sidebar")]),
			u(n, {
				"enter-active-class": "transition duration-300 ease-out",
				"enter-from-class": "-translate-x-full",
				"enter-to-class": "translate-x-0",
				"leave-active-class": "transition duration-200 ease-in",
				"leave-from-class": "translate-x-0",
				"leave-to-class": "-translate-x-full"
			}, {
				default: A(() => [r.value ? (v(), o("div", _i, [C(e.$slots, "sidebar")])) : a("", !0)]),
				_: 3
			}),
			u(n, {
				"enter-active-class": "transition duration-300 ease-out",
				"enter-from-class": "opacity-0",
				"enter-to-class": "opacity-100",
				"leave-active-class": "transition duration-200 ease-in",
				"leave-from-class": "opacity-100",
				"leave-to-class": "opacity-0"
			}, {
				default: A(() => [r.value ? (v(), o("div", {
					key: 0,
					class: "lg:hidden fixed inset-0 z-[10000] bg-black/40",
					onClick: c
				})) : a("", !0)]),
				_: 1
			}),
			s("div", vi, [C(e.$slots, "navHeader", { openSidebar: i }), s("div", yi, [
				C(e.$slots, "pageHeader"),
				e.$slots.tabs ? (v(), o("div", bi, [s("div", xi, [C(e.$slots, "tabs")])])) : a("", !0),
				s("div", Si, [s("div", Ci, [s("div", wi, [C(e.$slots, "content")])]), e.$slots.rightPanel ? (v(), o("div", Ti, [s("div", Ei, [C(e.$slots, "rightPanel")])])) : a("", !0)])
			])])
		]));
	}
}), Oi = ["onClick"], ki = { class: "inline-flex items-center gap-[6px]" }, Ai = {
	key: 0,
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, ji = ["d"], Mi = { class: "flex flex-col gap-[3px] sm:hidden w-full" }, Ni = ["onClick"], Pi = { class: "inline-flex items-center gap-[6px]" }, Fi = {
	key: 0,
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Ii = ["d"], Li = {
	key: 1,
	class: "inline-flex flex-wrap gap-[8px]"
}, Ri = ["onClick"], zi = {
	key: 0,
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Bi = ["d"], Vi = /* @__PURE__ */ d({
	__name: "SegmentControl",
	props: {
		modelValue: {},
		options: {},
		size: { default: "default" },
		rounded: {
			type: Boolean,
			default: !0
		},
		variant: { default: "filled" }
	},
	emits: ["update:modelValue"],
	setup(t) {
		let n = t, i = x(null), c = x({}), u = r(() => n.options.findIndex((e) => e.value === n.modelValue));
		function d() {
			if (!i.value) return;
			let e = i.value.querySelectorAll("[data-segment-btn]"), t = u.value;
			if (t < 0 || !e[t]) {
				c.value = { opacity: "0" };
				return;
			}
			let n = e[t];
			c.value = {
				width: `${n.offsetWidth}px`,
				height: `${n.offsetHeight}px`,
				transform: `translateX(${n.offsetLeft}px)`,
				opacity: "1"
			};
		}
		let f = null;
		return _(() => {
			p(d), i.value && (f = new ResizeObserver(() => {
				d();
			}), f.observe(i.value));
		}), g(() => {
			f?.disconnect();
		}), k(() => n.modelValue, () => {
			p(d);
		}), k(() => n.options, () => {
			p(d);
		}, { deep: !0 }), (n, r) => t.variant === "filled" ? (v(), o("div", {
			key: 0,
			class: m(["segment-control flex flex-col sm:inline-flex sm:flex-row bg-surface-input p-[3px]", t.rounded ? "rounded-[12px] sm:rounded-full" : "rounded-[8px]"])
		}, [s("div", {
			ref_key: "trackRef",
			ref: i,
			class: "relative hidden sm:inline-flex gap-[3px]"
		}, [s("div", {
			class: m(["absolute top-0 left-0 bg-btn-primary shadow-sm transition-all duration-300 ease-out pointer-events-none", t.rounded ? "rounded-full" : "rounded-[6px]"]),
			style: h(c.value)
		}, null, 6), (v(!0), o(e, null, S(t.options, (e) => (v(), o("button", {
			key: e.value,
			"data-segment-btn": "",
			class: m([
				"relative z-[1] font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer",
				t.rounded ? "rounded-full" : "rounded-[6px]",
				t.size === "compact" ? "px-[10px] py-[4px] text-[12px]" : t.size === "large" ? "px-[20px] py-[10px] text-[14px]" : "px-[16px] py-[6px] text-[14px]",
				t.modelValue === e.value ? "text-btn-primary-text" : "text-content-secondary hover:text-content-primary"
			]),
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [s("span", ki, [e.icon ? (v(), o("svg", Ai, [s("path", { d: e.icon }, null, 8, ji)])) : a("", !0), l(" " + E(e.label), 1)])], 10, Oi))), 128))], 512), s("div", Mi, [(v(!0), o(e, null, S(t.options, (e) => (v(), o("button", {
			key: "m-" + e.value,
			class: m([
				"w-full text-left font-medium transition-colors duration-200 cursor-pointer",
				t.rounded ? "rounded-[10px]" : "rounded-[6px]",
				t.size === "compact" ? "px-[10px] py-[6px] text-[12px]" : t.size === "large" ? "px-[16px] py-[10px] text-[14px]" : "px-[14px] py-[8px] text-[14px]",
				t.modelValue === e.value ? "bg-btn-primary text-btn-primary-text shadow-sm" : "text-content-secondary hover:text-content-primary"
			]),
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [s("span", Pi, [e.icon ? (v(), o("svg", Fi, [s("path", { d: e.icon }, null, 8, Ii)])) : a("", !0), l(" " + E(e.label), 1)])], 10, Ni))), 128))])], 2)) : (v(), o("div", Li, [(v(!0), o(e, null, S(t.options, (e) => (v(), o("button", {
			key: e.value,
			class: m([
				"inline-flex items-center gap-[6px] font-medium transition-all duration-150 whitespace-nowrap cursor-pointer border-2",
				t.rounded ? "rounded-full" : "rounded-[8px]",
				t.size === "compact" ? "px-[10px] py-[4px] text-[12px]" : t.size === "large" ? "px-[16px] py-[10px] text-[14px]" : "px-[14px] py-[6px] text-[14px]",
				t.modelValue === e.value ? "border-content-primary bg-surface text-content-primary" : "border-border bg-surface text-content-secondary hover:border-content-primary hover:text-content-primary"
			]),
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [e.icon ? (v(), o("svg", zi, [s("path", { d: e.icon }, null, 8, Bi)])) : a("", !0), l(" " + E(e.label), 1)], 10, Ri))), 128))]));
	}
}), Hi = { class: "relative" }, Ui = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	class: "h-4 w-4 text-content-primary flex-shrink-0",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, Wi = /* @__PURE__ */ d({
	__name: "Select",
	props: {
		modelValue: { default: null },
		options: {},
		placeholder: { default: "Select..." },
		size: { default: "default" },
		disabled: {
			type: Boolean,
			default: !1
		},
		error: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue"],
	setup(t) {
		let c = t, l = r(() => {
			switch (c.size) {
				case "compact": return "h-[36px] text-[14px]";
				case "large": return "h-[48px] text-[16px]";
				default: return "h-[40px] text-[14px]";
			}
		}), d = r(() => {
			let e = c.options.find((e) => e.value === c.modelValue);
			return e ? e.label : "";
		});
		return (r, c) => (v(), i(D(ne), {
			"model-value": t.modelValue,
			disabled: t.disabled,
			"onUpdate:modelValue": c[0] ||= (e) => r.$emit("update:modelValue", e)
		}, {
			default: A(() => [s("div", Hi, [u(D(re), { class: m([
				"flex items-center justify-between w-full border-2 rounded-[8px] px-[14px] text-left transition-colors",
				l.value,
				{
					"border-[#e11900] bg-surface": t.error,
					"bg-surface-input border-transparent hover:bg-surface-input-hover focus:!bg-surface focus:!border-border-selected": !t.error && !t.disabled,
					"opacity-40 cursor-not-allowed bg-surface-input border-transparent": t.disabled
				}
			]) }, {
				default: A(() => [s("span", { class: m([d.value ? "text-content-primary" : "text-content-tertiary", "truncate"]) }, E(d.value || t.placeholder), 3), c[1] ||= s("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					class: "h-4 w-4 text-content-tertiary ml-2 flex-shrink-0",
					viewBox: "0 0 20 20",
					fill: "currentColor"
				}, [s("path", {
					"fill-rule": "evenodd",
					d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
					"clip-rule": "evenodd"
				})], -1)]),
				_: 1
			}, 8, ["class"]), u(n, {
				"enter-active-class": "transition duration-100 ease-out",
				"enter-from-class": "opacity-0 -translate-y-1",
				"enter-to-class": "opacity-100 translate-y-0",
				"leave-active-class": "transition duration-75 ease-in",
				"leave-from-class": "opacity-100",
				"leave-to-class": "opacity-0"
			}, {
				default: A(() => [u(D(ae), { class: "absolute z-50 mt-1 w-full bg-surface border border-border rounded-lg shadow-lg py-1 max-h-60 overflow-auto focus:outline-none" }, {
					default: A(() => [(v(!0), o(e, null, S(t.options, (e) => (v(), i(D(ie), {
						key: e.value,
						value: e.value,
						as: "template"
					}, {
						default: A(({ active: t, selected: n }) => [s("li", { class: m([
							"flex items-center justify-between px-3 py-2 cursor-pointer text-sm text-content-primary",
							t ? "bg-bg-secondary" : "",
							n ? "font-medium" : ""
						]) }, [s("span", null, E(e.label), 1), n ? (v(), o("svg", Ui, [...c[2] ||= [s("path", {
							"fill-rule": "evenodd",
							d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
							"clip-rule": "evenodd"
						}, null, -1)]])) : a("", !0)], 2)]),
						_: 2
					}, 1032, ["value"]))), 128))]),
					_: 1
				})]),
				_: 1
			})])]),
			_: 1
		}, 8, ["model-value", "disabled"]));
	}
}), Gi = { class: "flex items-center h-[52px] px-[14px] flex-shrink-0" }, Ki = {
	key: 0,
	class: "ml-[10px] text-[14px] font-semibold truncate"
}, qi = { class: "flex-1 overflow-y-auto overflow-x-hidden py-[8px] px-[8px]" }, Ji = ["onClick"], Yi = {
	class: "w-[20px] h-[20px] flex-shrink-0",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Xi = ["d"], Zi = {
	key: 0,
	class: "flex-1 text-[14px] text-left truncate"
}, Qi = {
	key: 0,
	class: "ml-[42px] mb-[4px]"
}, $i = ["onClick"], ea = ["onClick"], ta = {
	class: "w-[20px] h-[20px] flex-shrink-0",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, na = ["d"], ra = {
	key: 0,
	class: "text-[14px] truncate"
}, ia = /* @__PURE__ */ d({
	__name: "SidebarNav",
	props: {
		items: {},
		collapsed: {
			type: Boolean,
			default: !1
		},
		brand: { default: "Predium" },
		variant: { default: "dark" }
	},
	emits: ["update:collapsed", "navigate"],
	setup(t, { emit: n }) {
		let i = t, c = r(() => i.variant === "light"), l = n, u = x(i.collapsed), d = x(/* @__PURE__ */ new Set());
		i.items.forEach((e) => {
			e.children?.some((e) => e.active) && d.value.add(e.label);
		});
		function f() {
			u.value = !u.value, l("update:collapsed", u.value);
		}
		function p(e) {
			d.value.has(e) ? d.value.delete(e) : d.value.add(e);
		}
		function h(e) {
			l("navigate", e);
		}
		function g(e) {
			return e.active || (e.children?.some((e) => e.active) ?? !1);
		}
		let _ = {
			Dashboard: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4",
			Search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
			Orders: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
			Shipments: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
			"Rates & Routing": "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
			Carriers: "M8 7h8m-8 5h8M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z",
			Facilities: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
			Financials: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
			Settings: "M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
		};
		function y(e) {
			return e.icon || _[e.label] || "M4 6h16M4 12h16M4 18h16";
		}
		return (n, r) => (v(), o("nav", { class: m([
			"flex flex-col h-full transition-all duration-300 ease-in-out flex-shrink-0 overflow-hidden",
			u.value ? "w-[56px]" : "w-[240px]",
			c.value ? "bg-surface text-content-primary border-r border-border" : "bg-sidebar-bg text-sidebar-text"
		]) }, [s("div", Gi, [s("button", {
			class: m(["w-[32px] h-[32px] flex items-center justify-center rounded-[8px] transition-colors", c.value ? "text-content-primary hover:bg-surface-input" : "text-white hover:bg-sidebar-hover"]),
			onClick: f
		}, [...r[0] ||= [s("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round"
		}, [s("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]], 2), u.value ? a("", !0) : (v(), o("span", Ki, E(t.brand), 1))]), s("div", qi, [(v(!0), o(e, null, S(t.items, (t) => (v(), o(e, { key: t.label }, [t.children?.length ? (v(), o(e, { key: 0 }, [s("button", {
			class: m([
				"flex items-center w-full rounded-[8px] transition-colors gap-[12px] mb-[2px]",
				u.value ? "justify-center px-0 py-[10px]" : "px-[10px] py-[10px]",
				g(t) ? c.value ? "text-content-primary" : "text-white" : c.value ? "text-content-tertiary hover:text-content-primary hover:bg-surface-input" : "text-content-tertiary hover:text-white hover:bg-[#1a1a1a]"
			]),
			onClick: (e) => u.value ? f() : p(t.label)
		}, [
			(v(), o("svg", Yi, [s("path", { d: y(t) }, null, 8, Xi)])),
			u.value ? a("", !0) : (v(), o("span", Zi, E(t.label), 1)),
			u.value ? a("", !0) : (v(), o("svg", {
				key: 1,
				class: m(["w-[14px] h-[14px] transition-transform duration-200 flex-shrink-0", d.value.has(t.label) ? "rotate-180" : ""]),
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [...r[1] ||= [s("path", { d: "M6 9l6 6 6-6" }, null, -1)]], 2))
		], 10, Ji), !u.value && d.value.has(t.label) ? (v(), o("div", Qi, [(v(!0), o(e, null, S(t.children, (e) => (v(), o("button", {
			key: e.to,
			class: m(["block w-full text-left text-[14px] py-[8px] px-[10px] rounded-[8px] transition-colors mb-[1px]", e.active ? c.value ? "text-content-primary bg-surface-input" : "text-white bg-[#333]" : c.value ? "text-content-tertiary hover:text-content-primary hover:bg-surface-input" : "text-content-tertiary hover:text-white hover:bg-[#1a1a1a]"]),
			onClick: (t) => h(e.to)
		}, E(e.label), 11, $i))), 128))])) : a("", !0)], 64)) : (v(), o("button", {
			key: 1,
			class: m([
				"flex items-center w-full rounded-[8px] transition-colors gap-[12px] mb-[2px]",
				u.value ? "justify-center px-0 py-[10px]" : "px-[10px] py-[10px]",
				t.active ? c.value ? "text-content-primary bg-surface-input" : "text-white bg-[#333]" : c.value ? "text-content-tertiary hover:text-content-primary hover:bg-surface-input" : "text-content-tertiary hover:text-white hover:bg-[#1a1a1a]"
			]),
			onClick: (e) => t.to && h(t.to)
		}, [(v(), o("svg", ta, [s("path", { d: y(t) }, null, 8, na)])), u.value ? a("", !0) : (v(), o("span", ra, E(t.label), 1))], 10, ea))], 64))), 128))])], 2));
	}
}), aa = { class: "flex h-full w-full overflow-hidden" }, oa = {
	key: 0,
	class: "flex items-center justify-between h-[48px] px-[16px] flex-shrink-0"
}, sa = { class: "text-[15px] font-semibold text-content-primary truncate" }, ca = { class: "flex items-center gap-[4px]" }, la = { class: "flex-1 overflow-y-auto overflow-x-hidden" }, ua = {
	key: 0,
	class: "flex-shrink-0 border-r border-border flex flex-col items-center pt-[12px]"
}, da = { class: "flex-1 min-w-0 overflow-auto" }, fa = /* @__PURE__ */ d({
	__name: "SidePanel",
	props: {
		title: { default: "" },
		collapsed: {
			type: Boolean,
			default: !1
		},
		collapsible: {
			type: Boolean,
			default: !0
		},
		width: { default: 260 },
		bordered: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["update:collapsed", "add"],
	setup(e, { emit: t }) {
		let n = e, i = t, c = x(n.collapsed);
		k(() => n.collapsed, (e) => {
			c.value = e;
		});
		function l() {
			c.value = !c.value, i("update:collapsed", c.value);
		}
		let u = r(() => ({
			width: c.value ? "0px" : `${n.width}px`,
			minWidth: c.value ? "0px" : `${n.width}px`
		}));
		return (t, n) => (v(), o("div", aa, [
			s("div", {
				class: m(["flex flex-col bg-surface overflow-hidden transition-all duration-300 ease-in-out flex-shrink-0", e.bordered ? "border-r border-border" : ""]),
				style: h(u.value)
			}, [e.title || t.$slots.headerActions || e.collapsible ? (v(), o("div", oa, [s("span", sa, E(e.title), 1), s("div", ca, [
				C(t.$slots, "headerActions"),
				t.$slots.headerActions === void 0 && t.$slots.add ? (v(), o("button", {
					key: 0,
					class: "w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-content-secondary hover:bg-surface-input transition-colors",
					onClick: n[0] ||= (e) => t.$emit("add")
				}, [...n[1] ||= [s("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round"
				}, [s("path", { d: "M12 5v14M5 12h14" })], -1)]])) : a("", !0),
				e.collapsible ? (v(), o("button", {
					key: 1,
					class: "w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-content-secondary hover:bg-surface-input transition-colors",
					onClick: l
				}, [...n[2] ||= [s("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round"
				}, [s("path", { d: "M15 18l-6-6 6-6" })], -1)]])) : a("", !0)
			])])) : a("", !0), s("div", la, [C(t.$slots, "sidebar")])], 6),
			c.value && e.collapsible ? (v(), o("div", ua, [s("button", {
				class: "w-[32px] h-[32px] flex items-center justify-center rounded-[6px] text-content-secondary hover:bg-surface-input transition-colors",
				onClick: l
			}, [...n[3] ||= [s("svg", {
				width: "16",
				height: "16",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round"
			}, [s("path", { d: "M9 18l6-6-6-6" })], -1)]])])) : a("", !0),
			s("div", da, [C(t.$slots, "default")])
		]));
	}
}), pa = /* @__PURE__ */ d({
	__name: "Separator",
	props: {
		orientation: { default: "horizontal" },
		spacing: { default: "md" }
	},
	setup(e) {
		let t = e, n = r(() => ({
			none: "my-0",
			sm: "my-2",
			md: "my-4",
			lg: "my-6"
		})[t.spacing]), i = r(() => ({
			none: "mx-0",
			sm: "mx-2",
			md: "mx-4",
			lg: "mx-6"
		})[t.spacing]);
		return (t, r) => e.orientation === "horizontal" ? (v(), o("div", {
			key: 0,
			class: m(["border-t border-border", n.value])
		}, null, 2)) : (v(), o("div", {
			key: 1,
			class: m(["border-l border-border self-stretch", i.value])
		}, null, 2));
	}
}), ma = {
	key: 0,
	class: "space-y-2"
}, ha = /* @__PURE__ */ d({
	__name: "Skeleton",
	props: {
		variant: { default: "text" },
		width: { default: "100%" },
		height: { default: "16px" },
		rows: { default: 1 },
		animated: {
			type: Boolean,
			default: !0
		}
	},
	setup(t) {
		return (n, r) => t.variant === "text" ? (v(), o("div", ma, [(v(!0), o(e, null, S(t.rows, (e) => (v(), o("div", {
			key: e,
			class: m(["rounded bg-bg-secondary", t.animated ? "animate-pulse" : ""]),
			style: h({
				width: e === t.rows ? "60%" : t.width,
				height: t.height
			})
		}, null, 6))), 128))])) : t.variant === "circle" ? (v(), o("div", {
			key: 1,
			class: m(["rounded-full bg-bg-secondary", t.animated ? "animate-pulse" : ""]),
			style: h({
				width: t.width,
				height: t.width
			})
		}, null, 6)) : (v(), o("div", {
			key: 2,
			class: m(["rounded-lg bg-bg-secondary", t.animated ? "animate-pulse" : ""]),
			style: h({
				width: t.width,
				height: t.height
			})
		}, null, 6));
	}
}), ga = { class: "w-full" }, _a = { class: "flex items-center gap-3" }, va = [
	"min",
	"max",
	"step",
	"value",
	"disabled"
], ya = {
	key: 0,
	class: "text-sm font-medium text-content-primary min-w-[3ch] text-right"
}, ba = /* @__PURE__ */ d({
	__name: "Slider",
	props: {
		modelValue: {},
		min: { default: 0 },
		max: { default: 100 },
		step: { default: 1 },
		disabled: {
			type: Boolean,
			default: !1
		},
		showValue: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e) {
		return (t, n) => (v(), o("div", ga, [s("div", _a, [s("input", {
			type: "range",
			min: e.min,
			max: e.max,
			step: e.step,
			value: e.modelValue,
			disabled: e.disabled,
			class: "slider-input w-full h-2 rounded-full appearance-none cursor-pointer bg-bg-tertiary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-content-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-surface [&::-webkit-slider-thumb]:shadow-md disabled:opacity-40 disabled:cursor-not-allowed",
			onInput: n[0] ||= (e) => t.$emit("update:modelValue", Number(e.target.value))
		}, null, 40, va), e.showValue ? (v(), o("span", ya, E(e.modelValue), 1)) : a("", !0)])]));
	}
}), xa = ["stroke"], Sa = ["fill"], Y = /* @__PURE__ */ d({
	__name: "Spinner",
	props: {
		size: { default: "md" },
		color: { default: "primary" }
	},
	setup(e) {
		let t = e, n = r(() => ({
			xs: "w-4 h-4",
			sm: "w-5 h-5",
			md: "w-6 h-6",
			lg: "w-8 h-8"
		})[t.size]), i = r(() => ({
			primary: "currentColor",
			accent: "#276ef1",
			inverse: "#ffffff"
		})[t.color]);
		return (e, t) => (v(), o("svg", {
			class: m([n.value, "animate-spin"]),
			viewBox: "0 0 24 24",
			fill: "none"
		}, [s("circle", {
			class: "opacity-25",
			cx: "12",
			cy: "12",
			r: "10",
			stroke: i.value,
			"stroke-width": "3"
		}, null, 8, xa), s("path", {
			class: "opacity-75",
			fill: i.value,
			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
		}, null, 8, Sa)], 2));
	}
}), Ca = { class: "inline-flex items-center bg-[rgb(40,40,40)] text-white rounded-[12px] min-w-[320px] max-w-[540px] w-full sm:w-auto shadow-xl" }, wa = {
	key: 0,
	class: "flex items-center pl-[16px] flex-shrink-0"
}, Ta = {
	key: 1,
	class: "flex-shrink-0"
}, X = /* @__PURE__ */ d({
	__name: "SnackbarElement",
	props: {
		message: {},
		actionText: { default: void 0 },
		progress: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["actionClick"],
	setup(e, { emit: t }) {
		let n = e, i = t, c = r(() => {
			let e = "flex-1 text-[16px] leading-[24px] text-white line-clamp-3";
			return n.progress ? `${e} px-[16px] py-[16px]` : n.actionText ? `${e} pl-[16px] pr-[8px] py-[16px]` : `${e} px-[16px] py-[16px]`;
		});
		return (t, n) => (v(), o("div", Ca, [
			e.progress ? (v(), o("span", wa, [u(Y, {
				size: "sm",
				color: "inverse"
			})])) : a("", !0),
			s("p", { class: m(c.value) }, E(e.message), 3),
			e.actionText ? (v(), o("div", Ta, [s("button", {
				class: "h-[48px] px-[16px] text-[16px] font-medium text-white bg-transparent rounded-full cursor-pointer hover:bg-white/10 transition-colors",
				onClick: n[0] ||= (e) => i("actionClick")
			}, E(e.actionText), 1)])) : a("", !0)
		]));
	}
}), Ea = 0, Z = Symbol("snackbar"), Q = {
	short: 1500,
	medium: 3e3,
	long: 5e3,
	infinite: 0
};
function Da() {
	let e = x([]), t = x(null), n = null;
	function r() {
		n &&= (clearTimeout(n), null);
	}
	function i() {
		if (r(), e.value.length === 0) {
			t.value = null;
			return;
		}
		let i = e.value.shift();
		t.value = i;
		let a = Q[i.duration ?? "medium"] ?? 3e3;
		a > 0 && (n = setTimeout(() => {
			o();
		}, a));
	}
	function a(r) {
		let i = {
			...r,
			id: ++Ea
		};
		if (t.value) e.value.push(i);
		else {
			t.value = i;
			let e = Q[i.duration ?? "medium"] ?? 3e3;
			e > 0 && (n = setTimeout(() => {
				o();
			}, e));
		}
	}
	function o() {
		r(), t.value = null, setTimeout(() => {
			i();
		}, 150);
	}
	let s = {
		current: b(t),
		enqueue: a,
		dequeue: o
	};
	return y(Z, s), s;
}
function Oa() {
	let e = f(Z);
	if (!e) throw Error("useSnackbar() must be used inside a <SnackbarProvider>");
	return e;
}
//#endregion
//#region src/components/ui/SnackbarProvider.vue?vue&type=script&setup=true&lang.ts
var ka = {
	key: 0,
	class: "pointer-events-auto w-full sm:w-auto"
}, Aa = /* @__PURE__ */ d({
	__name: "SnackbarProvider",
	props: { placement: { default: "top" } },
	setup(c) {
		let l = c, { current: d, dequeue: f } = Da();
		function p() {
			d.value?.onAction && d.value.onAction(), f();
		}
		let h = r(() => {
			let e = "fixed z-[10000] flex pointer-events-none px-[16px] sm:px-[24px]";
			return {
				top: `${e} top-[16px] left-0 right-0 justify-center`,
				topLeft: `${e} top-[16px] left-0 right-0 justify-start`,
				topRight: `${e} top-[16px] left-0 right-0 justify-end`,
				bottom: `${e} bottom-[16px] left-0 right-0 justify-center`,
				bottomLeft: `${e} bottom-[16px] left-0 right-0 justify-start`,
				bottomRight: `${e} bottom-[16px] left-0 right-0 justify-end`
			}[l.placement];
		}), g = r(() => l.placement.startsWith("top"));
		return (r, c) => (v(), o(e, null, [C(r.$slots, "default"), (v(), i(t, { to: "body" }, [s("div", { class: m(h.value) }, [u(n, {
			"enter-active-class": "transition duration-300 ease-out",
			"enter-from-class": g.value ? "-translate-y-4 opacity-0" : "translate-y-4 opacity-0",
			"enter-to-class": "translate-y-0 opacity-100",
			"leave-active-class": "transition duration-200 ease-in",
			"leave-from-class": "translate-y-0 opacity-100",
			"leave-to-class": g.value ? "-translate-y-4 opacity-0" : "translate-y-4 opacity-0"
		}, {
			default: A(() => [D(d) ? (v(), o("div", ka, [u(X, {
				message: D(d).message,
				"action-text": D(d).actionText,
				progress: D(d).progress,
				onActionClick: p
			}, null, 8, [
				"message",
				"action-text",
				"progress"
			])])) : a("", !0)]),
			_: 1
		}, 8, ["enter-from-class", "leave-to-class"])], 2)]))], 64));
	}
}), ja = { class: "overflow-x-auto scrollbar-none" }, Ma = { class: "px-[40px] sm:px-[50px]" }, Na = { class: "min-w-max mx-auto" }, Pa = { class: "flex items-center" }, Fa = {
	key: 0,
	class: "w-[14px] h-[14px]",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "3"
}, Ia = { key: 1 }, La = { class: "flex items-start" }, Ra = { class: "flex-shrink-0 w-[28px] sm:w-[32px] flex justify-center" }, za = {
	key: 0,
	class: "flex-1 min-w-[40px] sm:min-w-[60px]"
}, Ba = /* @__PURE__ */ d({
	__name: "Stepper",
	props: {
		steps: {},
		activeStep: {}
	},
	setup(t) {
		return (n, r) => (v(), o("div", ja, [s("div", Ma, [s("div", Na, [s("div", Pa, [(v(!0), o(e, null, S(t.steps, (n, i) => (v(), o(e, { key: "c" + i }, [s("div", { class: m(["flex items-center justify-center flex-shrink-0 w-[28px] sm:w-[32px] h-[28px] sm:h-[32px] rounded-full text-[12px] sm:text-[13px] font-semibold transition-colors", i <= t.activeStep ? "bg-btn-primary text-btn-primary-text" : "border-2 border-border text-content-tertiary"]) }, [i < t.activeStep ? (v(), o("svg", Fa, [...r[0] ||= [s("path", {
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			d: "M5 13l4 4L19 7"
		}, null, -1)]])) : (v(), o("span", Ia, E(i + 1), 1))], 2), i < t.steps.length - 1 ? (v(), o("div", {
			key: 0,
			class: m(["flex-1 h-[2px] min-w-[40px] sm:min-w-[60px]", i < t.activeStep ? "bg-btn-primary" : "bg-border"])
		}, null, 2)) : a("", !0)], 64))), 128))]), s("div", La, [(v(!0), o(e, null, S(t.steps, (n, r) => (v(), o(e, { key: "l" + r }, [s("div", Ra, [s("span", {
			class: m(["mt-[6px] text-[11px] sm:text-[12px] font-medium whitespace-nowrap text-center", r <= t.activeStep ? "text-content-primary" : "text-content-tertiary"]),
			style: {
				"margin-left": "-50px",
				"margin-right": "-50px"
			}
		}, E(n.label), 3)]), r < t.steps.length - 1 ? (v(), o("div", za)) : a("", !0)], 64))), 128))])])])]));
	}
}), Va = { class: "w-full border-collapse text-sm" }, Ha = /* @__PURE__ */ d({
	__name: "Table",
	props: {
		columns: {},
		rows: {},
		hoverable: {
			type: Boolean,
			default: !0
		},
		striped: {
			type: Boolean,
			default: !1
		},
		compact: {
			type: Boolean,
			default: !1
		},
		stickyHeader: {
			type: Boolean,
			default: !1
		}
	},
	setup(t) {
		let n = t, i = r(() => ["text-font100 font-medium text-content-tertiary uppercase tracking-wider px-scale400 py-scale300 border-b-2 border-border bg-bg-primary", n.stickyHeader ? "sticky top-0 z-10" : ""]);
		function a(e) {
			return [
				"border-b border-border",
				n.hoverable ? "hover:bg-bg-secondary" : "",
				n.striped && e % 2 != 0 ? "bg-bg-secondary/50" : ""
			];
		}
		let c = r(() => ["px-scale400 text-font200 text-content-primary", n.compact ? "py-scale200" : "py-scale400"]);
		return (n, r) => (v(), o("div", { class: m(t.stickyHeader ? "" : "overflow-x-auto") }, [s("table", Va, [s("thead", null, [s("tr", null, [(v(!0), o(e, null, S(t.columns, (e) => (v(), o("th", {
			key: e.key,
			class: m([i.value, e.align === "right" ? "text-right" : e.align === "center" ? "text-center" : "text-left"]),
			style: h(e.width ? { width: e.width } : {})
		}, [C(n.$slots, "header-" + e.key, { column: e }, () => [l(E(e.label), 1)])], 6))), 128))])]), s("tbody", null, [(v(!0), o(e, null, S(t.rows, (r, i) => (v(), o("tr", {
			key: i,
			class: m(a(i))
		}, [(v(!0), o(e, null, S(t.columns, (e) => (v(), o("td", {
			key: e.key,
			class: m([c.value, e.align === "right" ? "text-right" : e.align === "center" ? "text-center" : "text-left"])
		}, [C(n.$slots, "cell-" + e.key, {
			row: r,
			value: r[e.key],
			rowIndex: i
		}, () => [l(E(r[e.key]), 1)])], 2))), 128))], 2))), 128))])])], 2));
	}
}), Ua = ["aria-selected", "onClick"], Wa = {
	key: 0,
	class: "ml-1 text-content-tertiary"
}, Ga = {
	key: 1,
	class: "absolute bottom-0 left-0 right-0 h-[3px] bg-content-primary"
}, Ka = { class: "mt-4" }, qa = /* @__PURE__ */ d({
	__name: "Tabs",
	props: {
		modelValue: {},
		tabs: {},
		fill: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue"],
	setup(t) {
		return (n, r) => (v(), o("div", null, [s("div", {
			class: m(["flex border-b border-border overflow-x-auto scrollbar-none", t.fill ? "" : "gap-0"]),
			role: "tablist"
		}, [(v(!0), o(e, null, S(t.tabs, (e) => (v(), o("button", {
			key: e.key,
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			class: m([
				"relative px-4 py-2.5 text-sm font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer",
				t.fill ? "flex-1 text-center" : "",
				t.modelValue === e.key ? "text-content-primary" : "text-content-tertiary hover:text-content-secondary"
			]),
			onClick: (t) => n.$emit("update:modelValue", e.key)
		}, [
			l(E(e.label), 1),
			e.count == null ? a("", !0) : (v(), o("span", Wa, "(" + E(e.count) + ")", 1)),
			t.modelValue === e.key ? (v(), o("span", Ga)) : a("", !0)
		], 10, Ua))), 128))], 2), s("div", Ka, [C(n.$slots, "default")])]));
	}
}), Ja = /* @__PURE__ */ d({
	__name: "Tag",
	props: {
		selected: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		size: { default: "md" }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, i = t;
		function a() {
			let e = {
				sm: "px-3 py-1 text-xs",
				md: "px-4 py-1.5 text-sm"
			}, t = n.selected ? "bg-btn-primary text-btn-primary-text border border-btn-primary cursor-pointer" : "bg-surface text-content-primary border border-border hover:bg-surface-hover cursor-pointer", r = [
				"inline-flex items-center rounded-full font-medium transition-colors duration-150",
				e[n.size],
				t
			];
			return n.disabled && r.push("opacity-40 cursor-not-allowed"), r.join(" ");
		}
		let s = r(() => a());
		function c(e) {
			n.disabled || i("click", e);
		}
		return (e, t) => (v(), o("button", {
			class: m(s.value),
			onClick: c
		}, [C(e.$slots, "default")], 2));
	}
}), Ya = [
	"value",
	"placeholder",
	"rows",
	"disabled"
], Xa = /* @__PURE__ */ d({
	__name: "Textarea",
	props: {
		modelValue: { default: "" },
		placeholder: { default: "" },
		rows: { default: 3 },
		disabled: {
			type: Boolean,
			default: !1
		},
		error: {
			type: Boolean,
			default: !1
		},
		resize: { default: "vertical" }
	},
	emits: ["update:modelValue"],
	setup(e) {
		return (t, n) => (v(), o("textarea", {
			class: m([
				"w-full border-2 rounded-[8px] px-[14px] py-[12px] text-sm bg-bg-primary outline-none transition-colors duration-150",
				"placeholder:text-content-tertiary",
				e.error ? "border-negative" : "border-transparent bg-surface-input hover:bg-surface-input-hover focus:!bg-surface focus:!border-border-selected",
				e.disabled ? "opacity-40 cursor-not-allowed bg-bg-secondary" : "",
				e.resize === "none" ? "resize-none" : e.resize === "vertical" ? "resize-y" : "resize"
			]),
			value: e.modelValue,
			placeholder: e.placeholder,
			rows: e.rows,
			disabled: e.disabled,
			onInput: n[0] ||= (e) => t.$emit("update:modelValue", e.target.value)
		}, null, 42, Ya));
	}
}), Za = ["aria-checked", "aria-label"], $ = /* @__PURE__ */ d({
	__name: "ThemeToggle",
	props: {
		modelValue: {},
		size: { default: "md" }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, i = t, a = r(() => n.modelValue === "dark");
		function c() {
			i("update:modelValue", a.value ? "light" : "dark");
		}
		return (t, n) => (v(), o("button", {
			type: "button",
			role: "switch",
			"aria-checked": a.value,
			"aria-label": a.value ? "Switch to light mode" : "Switch to dark mode",
			class: m([
				"relative inline-flex shrink-0 rounded-full transition-colors duration-300 border-2 cursor-pointer",
				a.value ? "bg-[#f0f0f0] border-[#f0f0f0]" : "bg-[#1a1a1a] border-[#1a1a1a]",
				e.size === "sm" ? "h-[26px] w-[50px]" : "h-[30px] w-[56px]"
			]),
			onClick: c
		}, [s("span", { class: m([
			"inline-flex items-center justify-center rounded-full shadow transition-all duration-300",
			a.value ? "bg-[#1a1a1a] translate-x-[24px]" : "bg-white translate-x-0",
			e.size === "sm" ? "h-[18px] w-[18px] mt-[2px] ml-[2px]" : "h-[22px] w-[22px] mt-[2px] ml-[2px]",
			a.value && e.size === "sm" ? "translate-x-[24px]" : "",
			a.value && e.size === "md" ? "translate-x-[26px]" : ""
		]) }, [a.value ? (v(), o("svg", {
			key: 1,
			class: m(e.size === "sm" ? "w-[11px] h-[11px]" : "w-[13px] h-[13px]"),
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "#f0f0f0",
			"stroke-width": "2.5",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, [...n[1] ||= [s("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)]], 2)) : (v(), o("svg", {
			key: 0,
			class: m(e.size === "sm" ? "w-[11px] h-[11px]" : "w-[13px] h-[13px]"),
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "#1a1a1a",
			"stroke-width": "2.5",
			"stroke-linecap": "round"
		}, [...n[0] ||= [s("circle", {
			cx: "12",
			cy: "12",
			r: "5"
		}, null, -1), s("path", { d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" }, null, -1)]], 2))], 2)], 10, Za));
	}
}), Qa = ["disabled"], $a = { class: "absolute top-[10px] sm:top-[16px] right-[10px] sm:right-[16px]" }, eo = {
	key: 0,
	class: "w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full bg-btn-primary flex items-center justify-center"
}, to = {
	key: 1,
	class: "w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full border-2 border-border group-hover:border-border-hover"
}, no = {
	key: 0,
	class: "mb-[12px]"
}, ro = { class: "text-[14px] sm:text-[16px] font-semibold text-content-primary leading-[20px] sm:leading-[24px] pr-[20px]" }, io = {
	key: 1,
	class: "text-[12px] sm:text-[14px] text-content-secondary mt-[4px] leading-[18px] sm:leading-[20px]"
}, ao = /* @__PURE__ */ d({
	__name: "Tile",
	props: {
		selected: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		align: { default: "center" }
	},
	emits: ["click"],
	setup(e) {
		return (t, n) => (v(), o("button", {
			type: "button",
			disabled: e.disabled,
			class: m([
				"relative flex flex-col w-full text-left rounded-[12px] transition-all duration-150 cursor-pointer group",
				"border-2",
				e.selected ? "border-border-selected bg-surface shadow-sm" : "border-border bg-surface hover:border-border-selected hover:shadow-sm",
				e.disabled ? "opacity-40 cursor-not-allowed hover:border-border hover:shadow-none" : "",
				e.align === "center" ? "items-center text-center" : "items-start"
			]),
			onClick: n[0] ||= (n) => !e.disabled && t.$emit("click")
		}, [s("div", $a, [e.selected ? (v(), o("div", eo, [...n[1] ||= [s("svg", {
			class: "w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] text-btn-primary-text",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "3"
		}, [s("path", { d: "M5 13l4 4L19 7" })], -1)]])) : (v(), o("div", to))]), s("div", { class: m(["p-[14px] sm:p-[20px] md:p-[24px] w-full", e.align === "center" ? "flex flex-col items-center" : ""]) }, [
			t.$slots.icon ? (v(), o("div", no, [C(t.$slots, "icon")])) : a("", !0),
			s("div", ro, [C(t.$slots, "default")]),
			t.$slots.description ? (v(), o("div", io, [C(t.$slots, "description")])) : a("", !0)
		], 2)], 10, Qa));
	}
}), oo = ["disabled"], so = {
	key: 1,
	class: "absolute inset-0 bg-btn-primary"
}, co = { class: "tabular-nums" }, lo = /* @__PURE__ */ d({
	__name: "TimedButton",
	props: {
		label: { default: "Countdown" },
		duration: { default: 10 },
		paused: {
			type: Boolean,
			default: !0
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["click"],
	setup(t, { expose: n, emit: i }) {
		let c = t, l = i, u = x(c.duration), d = x(!1), f = null, p = r(() => !c.paused && !d.value), _ = r(() => {
			let e = Math.floor(u.value / 60), t = u.value % 60;
			return `${e}:${String(t).padStart(2, "0")}`;
		}), y = r(() => c.duration === 0 ? 100 : (c.duration - u.value) / c.duration * 100);
		function b() {
			u.value--, u.value <= 0 && (u.value = 0, d.value = !0, C(), l("click"));
		}
		function S() {
			f || d.value || (f = setInterval(b, 1e3));
		}
		function C() {
			f &&= (clearInterval(f), null);
		}
		function w() {
			C(), u.value = c.duration, d.value = !1;
		}
		return k(() => c.paused, (e) => {
			!e && !d.value ? S() : C();
		}, { immediate: !0 }), k(() => c.duration, () => {
			w();
		}), g(() => C()), n({ reset: w }), (n, r) => (v(), o("button", {
			class: m([
				"relative inline-flex items-center justify-center overflow-hidden rounded-[8px] text-[14px] font-medium",
				"h-[48px] min-w-[140px]",
				d.value || t.disabled ? "bg-bg-tertiary text-content-disabled cursor-not-allowed" : "cursor-pointer"
			]),
			disabled: d.value || t.disabled,
			onClick: r[0] ||= (e) => !d.value && !t.disabled && n.$emit("click")
		}, [
			p.value && !d.value ? (v(), o(e, { key: 0 }, [s("div", {
				class: "absolute inset-y-0 left-0 bg-content-tertiary transition-[width] duration-1000 ease-linear",
				style: h({ width: y.value + "%" })
			}, null, 4), s("div", {
				class: "absolute inset-y-0 right-0 bg-bg-tertiary transition-[width] duration-1000 ease-linear",
				style: h({ width: 100 - y.value + "%" })
			}, null, 4)], 64)) : a("", !0),
			!p.value && !d.value && !t.disabled ? (v(), o("div", so)) : a("", !0),
			s("span", { class: m([
				"relative z-10 flex items-center gap-[4px] px-[16px]",
				d.value || t.disabled ? "text-content-disabled" : "",
				p.value ? "text-content-primary" : "",
				!p.value && !d.value && !t.disabled ? "text-btn-primary-text" : ""
			]) }, [s("span", null, E(t.label), 1), s("span", co, "(" + E(_.value) + ")", 1)], 2)
		], 10, oo));
	}
}), uo = { class: "flex-1" }, fo = /* @__PURE__ */ d({
	__name: "Toast",
	props: {
		message: {},
		kind: { default: "info" },
		action: {},
		duration: { default: 5e3 },
		visible: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["close", "action"],
	setup(e, { emit: t }) {
		let r = e, c = t, l = x(null);
		function u() {
			d(), r.duration > 0 && r.visible && (l.value = setTimeout(() => {
				c("close");
			}, r.duration));
		}
		function d() {
			l.value &&= (clearTimeout(l.value), null);
		}
		k(() => r.visible, (e) => {
			e ? u() : d();
		}, { immediate: !0 }), k(() => r.duration, () => {
			r.visible && u();
		}), g(() => {
			d();
		});
		let f = {
			info: "bg-bg-inverse text-content-inverse",
			positive: "bg-positive text-white",
			warning: "bg-warning text-black",
			negative: "bg-negative text-white"
		};
		function p() {
			return f[r.kind] ?? f.info ?? "";
		}
		return (t, r) => (v(), i(n, {
			"enter-active-class": "transition duration-300 ease-out",
			"enter-from-class": "translate-y-full opacity-0",
			"enter-to-class": "translate-y-0 opacity-100",
			"leave-active-class": "transition duration-200 ease-in",
			"leave-from-class": "translate-y-0 opacity-100",
			"leave-to-class": "translate-y-full opacity-0"
		}, {
			default: A(() => [e.visible ? (v(), o("div", {
				key: 0,
				class: m(["flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl text-sm min-w-[320px]", p()])
			}, [
				s("span", uo, E(e.message), 1),
				e.action ? (v(), o("button", {
					key: 0,
					class: "font-medium underline cursor-pointer",
					onClick: r[0] ||= (e) => c("action")
				}, E(e.action), 1)) : a("", !0),
				s("button", {
					class: "ml-1 opacity-60 hover:opacity-100 cursor-pointer",
					onClick: r[1] ||= (e) => c("close")
				}, " ✕ ")
			], 2)) : a("", !0)]),
			_: 1
		}));
	}
}), po = ["aria-checked", "disabled"], mo = { key: 0 }, ho = { class: "text-sm font-medium text-content-primary" }, go = {
	key: 0,
	class: "text-xs text-content-tertiary"
}, _o = /* @__PURE__ */ d({
	__name: "Toggle",
	props: {
		modelValue: { type: Boolean },
		label: {},
		description: {},
		disabled: {
			type: Boolean,
			default: !1
		},
		size: { default: "md" }
	},
	emits: ["update:modelValue"],
	setup(e) {
		return (t, n) => (v(), o("label", { class: m(["flex items-center gap-3", e.disabled ? "cursor-not-allowed" : "cursor-pointer"]) }, [s("button", {
			type: "button",
			role: "switch",
			"aria-checked": e.modelValue,
			disabled: e.disabled,
			class: m([
				"relative inline-flex shrink-0 rounded-full transition-colors duration-200 border-2",
				e.modelValue ? "bg-content-primary border-content-primary" : "bg-bg-tertiary border-content-tertiary",
				e.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
				e.size === "sm" ? "h-[22px] w-[40px]" : "h-[26px] w-[48px]"
			]),
			onClick: n[0] ||= (n) => !e.disabled && t.$emit("update:modelValue", !e.modelValue)
		}, [s("span", { class: m([
			"inline-block rounded-full shadow-sm transition-all duration-200",
			e.modelValue ? "bg-btn-primary-text" : "bg-content-secondary",
			e.size === "sm" ? "h-[14px] w-[14px] mt-[2px] ml-[2px]" : "h-[18px] w-[18px] mt-[2px] ml-[2px]",
			e.modelValue ? e.size === "sm" ? "translate-x-[18px]" : "translate-x-[22px]" : "translate-x-0"
		]) }, null, 2)], 10, po), e.label ? (v(), o("div", mo, [s("span", ho, E(e.label), 1), e.description ? (v(), o("p", go, E(e.description), 1)) : a("", !0)])) : a("", !0)], 2));
	}
}), vo = /* @__PURE__ */ d({
	__name: "Tooltip",
	props: {
		content: {},
		placement: { default: "top" }
	},
	setup(e) {
		let t = e, i = x(!1), c = r(() => {
			switch (t.placement) {
				case "top": return "bottom-full left-1/2 -translate-x-1/2 mb-2";
				case "bottom": return "top-full left-1/2 -translate-x-1/2 mt-2";
				case "left": return "right-full top-1/2 -translate-y-1/2 mr-2";
				case "right": return "left-full top-1/2 -translate-y-1/2 ml-2";
				default: return "bottom-full left-1/2 -translate-x-1/2 mb-2";
			}
		}), d = r(() => {
			switch (t.placement) {
				case "top": return "top-full left-1/2 -translate-x-1/2 -mt-1";
				case "bottom": return "bottom-full left-1/2 -translate-x-1/2 -mb-1";
				case "left": return "top-1/2 left-full -translate-y-1/2 -ml-1";
				case "right": return "top-1/2 right-full -translate-y-1/2 -mr-1";
				default: return "top-full left-1/2 -translate-x-1/2 -mt-1";
			}
		});
		return (t, r) => (v(), o("div", {
			class: "relative inline-flex",
			onMouseenter: r[0] ||= (e) => i.value = !0,
			onMouseleave: r[1] ||= (e) => i.value = !1
		}, [C(t.$slots, "default"), u(n, {
			"enter-active-class": "transition duration-150 ease-out",
			"enter-from-class": "opacity-0 scale-95",
			"enter-to-class": "opacity-100 scale-100",
			"leave-active-class": "transition duration-100 ease-in",
			"leave-from-class": "opacity-100",
			"leave-to-class": "opacity-0"
		}, {
			default: A(() => [i.value ? (v(), o("div", {
				key: 0,
				class: m(["absolute z-50 px-2.5 py-1.5 text-xs font-medium bg-bg-inverse text-content-inverse rounded-md shadow-lg whitespace-nowrap pointer-events-none", c.value])
			}, [l(E(e.content) + " ", 1), s("div", { class: m(["absolute w-2 h-2 bg-bg-inverse rotate-45", d.value]) }, null, 2)], 2)) : a("", !0)]),
			_: 1
		})], 32));
	}
}), yo = ["onClick"], bo = {
	key: 1,
	class: "w-4"
}, xo = { class: "text-content-primary" }, So = /* @__PURE__ */ d({
	__name: "TreeView",
	props: {
		items: {},
		defaultExpanded: {
			type: Boolean,
			default: !1
		},
		depth: { default: 0 }
	},
	setup(t) {
		let n = t;
		function r(e) {
			let t = [];
			for (let n of e) n.children?.length && (t.push(n.id), t.push(...r(n.children)));
			return t;
		}
		let c = x(n.defaultExpanded ? new Set(r(n.items)) : /* @__PURE__ */ new Set());
		k(() => n.defaultExpanded, (e) => {
			e ? c.value = new Set(r(n.items)) : c.value = /* @__PURE__ */ new Set();
		});
		function l(e) {
			let t = new Set(c.value);
			t.has(e) ? t.delete(e) : t.add(e), c.value = t;
		}
		return (n, r) => {
			let u = w("TreeView", !0);
			return v(), o("ul", { class: m(["text-sm", t.depth === 0 ? "" : "ml-4"]) }, [(v(!0), o(e, null, S(t.items, (e) => (v(), o("li", { key: e.id }, [s("button", {
				onClick: (t) => l(e.id),
				class: "flex items-center gap-1.5 w-full px-2 py-1.5 rounded hover:bg-bg-secondary transition-colors text-left"
			}, [e.children?.length ? (v(), o("svg", {
				key: 0,
				class: m(["w-4 h-4 text-content-tertiary transition-transform", c.value.has(e.id) ? "rotate-90" : ""]),
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [...r[0] ||= [s("path", { d: "M9 5l7 7-7 7" }, null, -1)]], 2)) : (v(), o("span", bo)), s("span", xo, E(e.label), 1)], 8, yo), e.children?.length && c.value.has(e.id) ? (v(), i(u, {
				key: 0,
				items: e.children,
				depth: t.depth + 1,
				"default-expanded": t.defaultExpanded
			}, null, 8, [
				"items",
				"depth",
				"default-expanded"
			])) : a("", !0)]))), 128))], 2);
		};
	}
}), Co = /* @__PURE__ */ d({
	__name: "Typography",
	props: {
		variant: { default: "paragraph-medium" },
		as: {},
		color: { default: "primary" }
	},
	setup(e) {
		let t = e, n = {
			"display-large": {
				classes: "text-4xl font-bold tracking-tight",
				tag: "h1"
			},
			"display-medium": {
				classes: "text-3xl font-bold tracking-tight",
				tag: "h1"
			},
			"display-small": {
				classes: "text-2xl font-bold",
				tag: "h1"
			},
			"heading-xlarge": {
				classes: "text-xl font-bold",
				tag: "h2"
			},
			"heading-large": {
				classes: "text-lg font-semibold",
				tag: "h2"
			},
			"heading-medium": {
				classes: "text-base font-semibold",
				tag: "h3"
			},
			"heading-small": {
				classes: "text-sm font-semibold",
				tag: "h4"
			},
			"heading-xsmall": {
				classes: "text-xs font-semibold uppercase tracking-wider",
				tag: "h5"
			},
			"label-large": {
				classes: "text-base font-medium",
				tag: "span"
			},
			"label-medium": {
				classes: "text-sm font-medium",
				tag: "span"
			},
			"label-small": {
				classes: "text-xs font-medium",
				tag: "span"
			},
			"paragraph-large": {
				classes: "text-base",
				tag: "p"
			},
			"paragraph-medium": {
				classes: "text-sm",
				tag: "p"
			},
			"paragraph-small": {
				classes: "text-xs",
				tag: "p"
			},
			"paragraph-xsmall": {
				classes: "text-[11px]",
				tag: "p"
			}
		}, a = {
			primary: "text-content-primary",
			secondary: "text-content-secondary",
			tertiary: "text-content-tertiary",
			inverse: "text-content-inverse",
			accent: "text-accent",
			positive: "text-positive",
			negative: "text-negative"
		}, o = r(() => t.as ?? n[t.variant].tag), s = r(() => n[t.variant].classes), c = r(() => a[t.color]);
		return (e, t) => (v(), i(T(o.value), { class: m([s.value, c.value]) }, {
			default: A(() => [C(e.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
}), wo = { class: "w-full border border-border rounded-[12px] overflow-hidden" }, To = ["onClick"], Eo = {
	key: 0,
	class: "text-[12px] text-content-tertiary mt-[2px]"
}, Do = {
	key: 1,
	class: "text-[11px] sm:text-[13px] text-content-primary mt-[4px]"
}, Oo = {
	key: 2,
	class: "text-[13px] text-content-primary font-medium mt-[4px]"
}, ko = /* @__PURE__ */ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ d({
	__name: "WeekPicker",
	props: {
		modelValue: {},
		days: {},
		headers: { default: () => [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		] }
	},
	emits: ["update:modelValue"],
	setup(t, { emit: n }) {
		let r = t, i = n;
		function c(e) {
			return r.modelValue === e.date;
		}
		let l = x(null);
		return k(() => r.modelValue, (e) => {
			e != null && (l.value = e, setTimeout(() => {
				l.value = null;
			}, 300));
		}), (n, r) => (v(), o("div", wo, [s("div", {
			class: "grid",
			style: h({ gridTemplateColumns: `repeat(${t.headers.length}, 1fr)` })
		}, [(v(!0), o(e, null, S(t.headers, (e) => (v(), o("div", {
			key: e,
			class: "py-[8px] sm:py-[10px] text-center text-[11px] sm:text-[13px] font-medium text-content-secondary border-b border-border"
		}, E(e), 1))), 128)), (v(!0), o(e, null, S(t.days, (e, t) => (v(), o("div", {
			key: t,
			class: m([
				"relative flex flex-col items-center justify-center py-[10px] sm:py-[16px] min-h-[72px] sm:min-h-[88px] cursor-pointer transition-colors",
				t > 0 ? "border-l border-border" : "",
				e.disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-surface-input"
			]),
			onClick: (t) => !e.disabled && i("update:modelValue", e.date)
		}, [
			s("div", { class: m([
				"flex items-center justify-center text-[15px] sm:text-[18px] font-semibold transition-all duration-300 ease-out",
				c(e) ? "w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full bg-black text-white" : "text-content-primary scale-100",
				l.value === e.date ? "animate-[pop_0.3s_ease-out]" : ""
			]) }, E(e.date), 3),
			e.month ? (v(), o("span", Eo, E(e.month), 1)) : a("", !0),
			e.price ? (v(), o("span", Do, E(e.price), 1)) : a("", !0),
			e.label ? (v(), o("span", Oo, E(e.label), 1)) : a("", !0)
		], 10, To))), 128))], 4)]));
	}
}), [["__scopeId", "data-v-a1e68a05"]]);
//#endregion
export { W as Accordion, K as Avatar, q as Badge, le as Banner, pe as Breadcrumbs, ge as Button, ye as ButtonGroup, Se as Card, De as Checkbox, je as Combobox, lt as DataGrid, _t as DatePicker, Re as DetailSection, wt as Drawer, Mt as EmptyState, Bt as FileUploader, Gt as FilterList, Zt as FormControl, $t as HintDot, an as Input, pn as KpiCard, hn as Link, bn as List, wn as Menu, Ln as MessageCard, Hn as Modal, $n as NavHeader, sr as Notification, Dr as PageHeader, Vr as Pagination, Wr as PhoneInput, qr as PinCode, Jr as Popover, Zr as ProgressBar, ri as ProgressSteps, ui as Radio, mi as Rating, Di as ScaffoldDetail, Vi as SegmentControl, Wi as Select, pa as Separator, fa as SidePanel, ia as SidebarNav, ha as Skeleton, ba as Slider, X as SnackbarElement, Aa as SnackbarProvider, Y as Spinner, Ba as Stepper, Ha as Table, qa as Tabs, Ja as Tag, Xa as Textarea, $ as ThemeToggle, ao as Tile, lo as TimedButton, fo as Toast, _o as Toggle, vo as Tooltip, So as TreeView, Co as Typography, ko as WeekPicker, Oa as useSnackbar };
