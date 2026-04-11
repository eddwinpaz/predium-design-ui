import { Fragment as e, Transition as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createStaticVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, nextTick as d, normalizeClass as f, normalizeStyle as p, onBeforeUnmount as m, onMounted as h, openBlock as g, ref as _, renderList as v, renderSlot as y, resolveComponent as b, resolveDynamicComponent as x, toDisplayString as S, unref as C, useSlots as w, watch as T, withCtx as E, withKeys as D, withModifiers as O } from "vue";
import { Combobox as k, ComboboxButton as A, ComboboxInput as j, ComboboxOption as M, ComboboxOptions as N, Dialog as P, DialogPanel as F, DialogTitle as I, Listbox as L, ListboxButton as ee, ListboxOption as te, ListboxOptions as R, TransitionChild as z, TransitionRoot as B } from "@headlessui/vue";
//#region src/components/ui/Accordion.vue?vue&type=script&setup=true&lang.ts
var V = { class: "w-full border-t border-border" }, H = ["aria-expanded", "onClick"], U = { class: "px-4 py-3 text-sm text-content-secondary" }, W = /* @__PURE__ */ u({
	__name: "Accordion",
	props: {
		items: {},
		multiple: {
			type: Boolean,
			default: !1
		}
	},
	setup(t) {
		let n = t, r = _(/* @__PURE__ */ new Set());
		T(() => n.items, (e) => {
			e.forEach((e, t) => {
				e.defaultOpen && r.value.add(t);
			});
		}, { immediate: !0 });
		function i(e) {
			let t = new Set(r.value);
			t.has(e) ? t.delete(e) : (n.multiple || t.clear(), t.add(e)), r.value = t;
		}
		function s(e) {
			return r.value.has(e);
		}
		return (n, r) => (g(), a("div", V, [(g(!0), a(e, null, v(t.items, (e, t) => (g(), a("div", { key: t }, [o("button", {
			type: "button",
			class: "flex items-center justify-between w-full px-4 py-3 text-left text-sm font-medium text-content-primary hover:bg-bg-secondary transition-colors border-b border-border",
			"aria-expanded": s(t),
			onClick: (e) => i(t)
		}, [o("span", null, S(e.title), 1), (g(), a("svg", {
			class: f(["w-4 h-4 text-content-secondary transform transition-transform duration-200", s(t) ? "rotate-180" : ""]),
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 24 24"
		}, [...r[0] ||= [o("path", {
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "2",
			d: "M19 9l-7 7-7-7"
		}, null, -1)]], 2))], 8, H), o("div", { class: f(["overflow-hidden transition-all duration-200 border-b border-border", s(t) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"]) }, [o("div", U, S(e.content), 1)], 2)]))), 128))]));
	}
}), G = ["src", "alt"], K = /* @__PURE__ */ u({
	__name: "Avatar",
	props: {
		name: {},
		size: { default: "md" },
		src: {},
		color: {}
	},
	setup(e) {
		let t = e, r = [
			"#276EF1",
			"#048848",
			"#7356BF",
			"#E11900",
			"#FFC043",
			"#0D9488",
			"#4F46E5",
			"#F97066"
		], i = n(() => {
			let e = t.name.trim().split(/\s+/);
			return e.length === 0 ? "" : e.length === 1 ? (e[0]?.[0] ?? "").toUpperCase() : ((e[0]?.[0] ?? "") + (e[e.length - 1]?.[0] ?? "")).toUpperCase();
		}), o = n(() => {
			let e = 0;
			for (let n = 0; n < t.name.length; n++) e = t.name.charCodeAt(n) + ((e << 5) - e);
			return r[Math.abs(e) % r.length];
		}), s = n(() => t.color ?? o.value), c = n(() => ({
			xs: "w-6 h-6",
			sm: "w-7 h-7",
			md: "w-9 h-9",
			lg: "w-12 h-12"
		})[t.size]), l = n(() => ({
			xs: "text-[10px]",
			sm: "text-[11px]",
			md: "text-xs",
			lg: "text-sm"
		})[t.size]);
		return (t, n) => (g(), a("div", {
			class: f([c.value, "rounded-full flex items-center justify-center font-semibold flex-shrink-0 select-none"]),
			style: p({
				backgroundColor: s.value,
				color: "#fff"
			})
		}, [e.src ? (g(), a("img", {
			key: 0,
			src: e.src,
			alt: e.name,
			class: "w-full h-full rounded-full object-cover"
		}, null, 8, G)) : (g(), a("span", {
			key: 1,
			class: f(l.value)
		}, S(i.value), 3))], 6));
	}
}), q = /* @__PURE__ */ u({
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
		let r = e, s = t;
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
				}[r.variant],
				{
					sm: "px-2 py-0.5 text-xs",
					md: "px-2.5 py-1 text-xs"
				}[r.size]
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
			}[r.variant]].join(" ");
		}
		let u = n(() => c()), d = n(() => l());
		return (t, n) => (g(), a("span", { class: f(u.value) }, [
			e.dot ? (g(), a("span", {
				key: 0,
				class: f(d.value)
			}, null, 2)) : i("", !0),
			y(t.$slots, "default"),
			e.closeable ? (g(), a("button", {
				key: 1,
				class: "ml-0.5 inline-flex items-center justify-center rounded-full hover:bg-black/10 w-3.5 h-3.5 cursor-pointer",
				onClick: n[0] ||= O((e) => s("close"), ["stop"])
			}, [...n[1] ||= [o("svg", {
				class: "w-2.5 h-2.5",
				viewBox: "0 0 12 12",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, [o("path", {
				d: "M9 3L3 9M3 3l6 6",
				stroke: "currentColor",
				"stroke-width": "1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			})], -1)]])) : i("", !0)
		], 2));
	}
}), J = {
	class: "w-5 h-5 flex-shrink-0",
	fill: "none",
	viewBox: "0 0 24 24",
	"stroke-width": "1.5",
	stroke: "currentColor"
}, Y = ["d"], X = { class: "flex-1" }, Z = {
	key: 0,
	class: "font-semibold"
}, Q = /* @__PURE__ */ u({
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
		let r = e, s = t, c = _(!0), l = n(() => {
			switch (r.kind) {
				case "positive": return "bg-positive-light text-positive-text";
				case "warning": return "bg-warning-light text-warning-text";
				case "negative": return "bg-negative-light text-negative-text";
				default: return "bg-accent-light text-accent-text";
			}
		}), u = n(() => {
			switch (r.kind) {
				case "positive": return "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
				case "warning": return "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z";
				case "negative": return "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
				default: return "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z";
			}
		});
		return (t, n) => c.value ? (g(), a("div", {
			key: 0,
			class: f(["flex items-center gap-3 px-4 py-3 text-sm", l.value])
		}, [
			(g(), a("svg", J, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: u.value
			}, null, 8, Y)])),
			o("div", X, [e.title ? (g(), a("span", Z, S(e.title), 1)) : i("", !0), o("span", null, [y(t.$slots, "default")])]),
			e.action ? (g(), a("button", {
				key: 0,
				class: "font-medium underline text-sm",
				onClick: n[0] ||= (e) => s("action")
			}, S(e.action), 1)) : i("", !0),
			e.closeable ? (g(), a("button", {
				key: 1,
				class: "opacity-60 hover:opacity-100 ml-2",
				onClick: n[1] ||= (e) => {
					c.value = !1, s("close");
				}
			}, " ✕ ")) : i("", !0)
		], 2)) : i("", !0);
	}
}), ne = { class: "flex items-center gap-1.5 text-sm" }, re = {
	key: 0,
	class: "text-content-tertiary"
}, ie = ["href"], ae = /* @__PURE__ */ u({
	__name: "Breadcrumbs",
	props: {
		items: {},
		separator: { default: "/" }
	},
	setup(t) {
		return (n, r) => (g(), a("nav", ne, [(g(!0), a(e, null, v(t.items, (n, r) => (g(), a(e, { key: r }, [r > 0 ? (g(), a("span", re, S(t.separator), 1)) : i("", !0), n.to && r < t.items.length - 1 ? (g(), a("a", {
			key: 1,
			href: n.to,
			class: "text-accent hover:underline cursor-pointer"
		}, S(n.label), 9, ie)) : (g(), a("span", {
			key: 2,
			class: f(r === t.items.length - 1 ? "text-content-primary font-medium" : "text-content-secondary")
		}, S(n.label), 3))], 64))), 128))]));
	}
}), oe = ["disabled"], se = {
	key: 0,
	class: "animate-spin h-4 w-4",
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24"
}, ce = /* @__PURE__ */ u({
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
		let r = t, i = w();
		function s() {
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
			}, n = [
				"inline-flex items-center font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000] focus-visible:ring-offset-2",
				e[r.kind],
				{
					default: "rounded-[8px]",
					pill: "rounded-pill",
					circle: "rounded-pill w-[48px] h-[48px] p-0 justify-center"
				}[r.shape]
			];
			return r.shape !== "circle" && n.push(t[r.size]), r.disabled && n.push("opacity-40 cursor-not-allowed pointer-events-none"), n.filter(Boolean).join(" ");
		}
		let c = n(() => s());
		return (n, r) => (g(), a("button", {
			class: f(c.value),
			disabled: t.disabled
		}, [t.loading ? (g(), a("svg", se, [...r[0] ||= [o("circle", {
			class: "opacity-25",
			cx: "12",
			cy: "12",
			r: "10",
			stroke: "currentColor",
			"stroke-width": "4"
		}, null, -1), o("path", {
			class: "opacity-75",
			fill: "currentColor",
			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
		}, null, -1)]])) : (g(), a(e, { key: 1 }, [
			y(n.$slots, "startIcon"),
			o("span", { class: f({ "mx-1": C(i).startIcon || C(i).endIcon }) }, [y(n.$slots, "default")], 2),
			y(n.$slots, "endIcon")
		], 64))], 10, oe));
	}
}), le = { class: "inline-flex rounded-lg border border-border overflow-hidden" }, ue = ["disabled", "onClick"], de = /* @__PURE__ */ u({
	__name: "ButtonGroup",
	props: {
		modelValue: {},
		options: {},
		size: { default: "default" }
	},
	emits: ["update:modelValue"],
	setup(t) {
		return (n, r) => (g(), a("div", le, [(g(!0), a(e, null, v(t.options, (e, r) => (g(), a("button", {
			key: e.value,
			class: f([
				"px-4 text-sm font-medium transition-colors",
				t.size === "compact" ? "py-1.5" : "py-2",
				t.modelValue === e.value ? "bg-black text-white" : "bg-bg-primary text-content-primary hover:bg-bg-secondary",
				r > 0 ? "border-l border-border" : "",
				e.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
			]),
			disabled: e.disabled,
			onClick: (t) => !e.disabled && n.$emit("update:modelValue", e.value)
		}, S(e.label), 11, ue))), 128))]));
	}
}), fe = {
	key: 0,
	class: "px-scale600 py-scale400 border-b border-border"
}, pe = {
	key: 1,
	class: "px-scale600 py-scale300 border-t border-border bg-bg-secondary/50"
}, me = /* @__PURE__ */ u({
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
		let t = e, r = n(() => ({
			none: "p-0",
			sm: "p-scale300",
			md: "p-scale600",
			lg: "p-scale800"
		})[t.padding]), s = n(() => [
			"bg-bg-primary rounded-xl overflow-hidden",
			t.bordered ? "border border-border" : "",
			t.hoverable ? "hover:shadow-md transition-shadow duration-200 cursor-pointer" : "",
			t.shadow ? "shadow-sm" : ""
		]);
		return (e, t) => (g(), a("div", { class: f(s.value) }, [
			e.$slots.header ? (g(), a("div", fe, [y(e.$slots, "header")])) : i("", !0),
			o("div", { class: f(r.value) }, [y(e.$slots, "default")], 2),
			e.$slots.footer ? (g(), a("div", pe, [y(e.$slots, "footer")])) : i("", !0)
		], 2));
	}
}), he = { class: "flex items-start pt-0.5" }, ge = {
	key: 0,
	class: "w-3 h-3 text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, _e = { class: "text-sm font-medium text-content-primary" }, ve = {
	key: 0,
	class: "text-xs text-content-tertiary mt-0.5"
}, ye = /* @__PURE__ */ u({
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
		return (t, n) => (g(), a("label", { class: f(["flex gap-3 cursor-pointer group", e.disabled ? "opacity-40 cursor-not-allowed" : ""]) }, [o("div", he, [o("div", {
			class: f([
				"w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-150",
				e.modelValue ? "bg-black border-black" : "border-border group-hover:border-border-hover",
				e.disabled ? "" : "cursor-pointer"
			]),
			onClick: n[0] ||= O((n) => !e.disabled && t.$emit("update:modelValue", !e.modelValue), ["prevent"])
		}, [e.modelValue ? (g(), a("svg", ge, [...n[1] ||= [o("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : i("", !0)], 2)]), o("div", null, [o("span", _e, S(e.label), 1), e.description ? (g(), a("p", ve, S(e.description), 1)) : i("", !0)])], 2));
	}
}), be = { class: "relative" }, xe = {
	key: 0,
	class: "px-3 py-2 text-sm text-content-tertiary"
}, Se = {
	key: 0,
	class: "w-4 h-4 text-accent",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, Ce = /* @__PURE__ */ u({
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
	setup(s, { emit: u }) {
		let d = s, p = u, m = _(""), h = n(() => {
			if (m.value === "") return d.options;
			let e = m.value.toLowerCase();
			return d.options.filter((t) => t.label.toLowerCase().includes(e));
		}), y = n(() => {
			switch (d.size) {
				case "compact": return "h-8";
				case "large": return "h-12";
				default: return "h-10";
			}
		});
		function b(e) {
			return d.options.find((t) => t.value === e)?.label ?? "";
		}
		return (n, u) => (g(), r(C(k), {
			modelValue: s.modelValue,
			"onUpdate:modelValue": u[1] ||= (e) => p("update:modelValue", e),
			disabled: s.disabled
		}, {
			default: E(() => [o("div", be, [o("div", { class: f([
				"flex items-center border-2 rounded-[8px] transition-colors",
				s.disabled ? "opacity-40 bg-surface-input border-transparent cursor-not-allowed" : "bg-surface-input border-transparent hover:bg-surface-input-hover focus-within:!bg-surface focus-within:!border-border-selected",
				y.value
			]) }, [l(C(j), {
				placeholder: s.placeholder,
				displayValue: b,
				class: "w-full bg-transparent outline-none px-3 text-sm placeholder:text-content-tertiary text-content-primary",
				onChange: u[0] ||= (e) => m.value = e.target.value
			}, null, 8, ["placeholder"]), l(C(A), { class: "px-2 text-content-tertiary hover:text-content-secondary" }, {
				default: E(() => [...u[2] ||= [o("svg", {
					class: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [o("path", { d: "M6 9l6 6 6-6" })], -1)]]),
				_: 1
			})], 2), l(t, {
				"enter-active-class": "transition duration-100 ease-out",
				"enter-from-class": "opacity-0 -translate-y-1",
				"enter-to-class": "opacity-100 translate-y-0",
				"leave-active-class": "transition duration-75 ease-in",
				"leave-from-class": "opacity-100",
				"leave-to-class": "opacity-0"
			}, {
				default: E(() => [l(C(N), { class: "absolute z-50 mt-1 w-full bg-bg-primary border border-border rounded-lg shadow-lg py-1 max-h-60 overflow-auto" }, {
					default: E(() => [h.value.length === 0 ? (g(), a("div", xe, " No results found ")) : i("", !0), (g(!0), a(e, null, v(h.value, (e) => (g(), r(C(M), {
						key: e.value,
						value: e.value
					}, {
						default: E(({ active: t, selected: n }) => [o("div", { class: f(["px-3 py-2 text-sm cursor-pointer flex items-center justify-between text-content-primary", t ? "bg-bg-secondary" : ""]) }, [c(S(e.label) + " ", 1), n ? (g(), a("svg", Se, [...u[3] ||= [o("path", { d: "M5 13l4 4L19 7" }, null, -1)]])) : i("", !0)], 2)]),
						_: 2
					}, 1032, ["value"]))), 128))]),
					_: 1
				})]),
				_: 1
			})])]),
			_: 1
		}, 8, ["modelValue", "disabled"]));
	}
}), we = { class: "flex items-center justify-between mb-[12px]" }, Te = { class: "text-[15px] font-semibold text-content-primary" }, Ee = { class: "border border-border rounded-[12px] bg-surface" }, De = { class: "text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] leading-[16px]" }, Oe = { class: "text-[14px] text-content-primary leading-[20px] mt-[2px]" }, ke = {
	key: 1,
	class: "px-[24px] py-[20px]"
}, Ae = /* @__PURE__ */ u({
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
		let r = t, s = n(() => ({
			2: "grid-cols-2",
			3: "grid-cols-2 sm:grid-cols-3",
			4: "grid-cols-2 sm:grid-cols-4",
			5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
			6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
		})[r.columns] ?? "grid-cols-2 sm:grid-cols-3");
		return (n, r) => (g(), a("div", null, [o("div", we, [
			o("h3", Te, S(t.title), 1),
			t.editable ? (g(), a("button", {
				key: 0,
				class: "px-[12px] py-[8px] text-[14px] font-medium text-content-primary bg-surface-input hover:bg-surface-input-hover rounded-[8px] transition-colors cursor-pointer",
				onClick: r[0] ||= (e) => n.$emit("edit")
			}, " Edit ")) : i("", !0),
			y(n.$slots, "action")
		]), o("div", Ee, [t.fields?.length ? (g(), a("div", {
			key: 0,
			class: f(["grid gap-0 px-[16px] sm:px-[24px] py-[16px] sm:py-[20px]", s.value])
		}, [(g(!0), a(e, null, v(t.fields, (e, t) => (g(), a("div", {
			key: t,
			class: "py-[8px] pr-[16px]"
		}, [o("div", De, S(e.label), 1), o("div", Oe, S(e.value), 1)]))), 128))], 2)) : i("", !0), n.$slots.default ? (g(), a("div", ke, [y(n.$slots, "default")])) : i("", !0)])]));
	}
}), je = { class: "flex flex-wrap items-center justify-between gap-[8px] mb-[12px]" }, Me = { class: "flex items-center gap-[8px]" }, Ne = {
	key: 0,
	class: "text-[15px] font-semibold text-content-primary"
}, Pe = {
	key: 1,
	class: "text-[12px] font-medium text-content-secondary bg-surface-input px-[8px] py-[2px] rounded-full"
}, Fe = { class: "flex items-center gap-[6px]" }, Ie = ["onClick"], Le = { class: "hidden sm:block border border-border rounded-[12px] bg-surface overflow-hidden" }, Re = { class: "overflow-x-auto" }, ze = { class: "w-full border-collapse" }, Be = { class: "border-b border-border" }, Ve = {
	key: 0,
	class: "w-[44px] px-[12px] py-[10px] text-left"
}, He = {
	key: 0,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, Ue = {
	key: 1,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, We = {
	key: 0,
	class: "w-[44px] px-[12px] py-[10px]"
}, Ge = ["onClick"], Ke = {
	key: 0,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, qe = { class: "sm:hidden flex flex-col gap-[8px]" }, Je = { class: "flex items-start gap-[10px]" }, Ye = ["onClick"], Xe = {
	key: 0,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, Ze = { class: "flex-1 min-w-0" }, Qe = { class: "grid grid-cols-2 gap-x-[12px] gap-y-[8px]" }, $e = { class: "text-[10px] font-medium text-content-tertiary uppercase tracking-[0.5px]" }, et = { class: "text-[13px] text-content-primary mt-[1px] truncate" }, tt = /* @__PURE__ */ u({
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
	setup(t, { emit: r }) {
		let s = t, l = r, u = _(/* @__PURE__ */ new Set()), d = _(!1), m = n(() => s.rows.length > 0 && u.value.size === s.rows.length), h = n(() => u.value.size > 0 && u.value.size < s.rows.length), b = n(() => u.value.size > 0);
		function x() {
			m.value ? u.value = /* @__PURE__ */ new Set() : u.value = new Set(s.rows.map((e, t) => t));
		}
		function C(e) {
			let t = new Set(u.value);
			t.has(e) ? t.delete(e) : t.add(e), u.value = t;
		}
		function w(e) {
			l("bulkAction", e, Array.from(u.value)), u.value = /* @__PURE__ */ new Set();
		}
		function T() {
			d.value = !0, l("edit");
		}
		function E() {
			d.value = !1, u.value = /* @__PURE__ */ new Set();
		}
		return (n, r) => (g(), a("div", null, [
			o("div", je, [o("div", Me, [t.title ? (g(), a("h3", Ne, S(t.title), 1)) : i("", !0), b.value ? (g(), a("span", Pe, S(u.value.size) + " selected ", 1)) : i("", !0)]), o("div", Fe, [b.value ? (g(), a(e, { key: 0 }, [(g(!0), a(e, null, v(t.bulkActions, (e) => (g(), a("button", {
				key: e.key,
				class: f(["px-[8px] py-[4px] text-[12px] font-medium rounded-[6px] transition-colors", e.danger ? "text-white bg-[#e11900] hover:bg-[#c41400]" : "text-content-primary bg-surface-input hover:bg-surface-input-hover"]),
				onClick: (t) => w(e.key)
			}, S(e.label) + " (" + S(u.value.size) + ") ", 11, Ie))), 128)), o("button", {
				class: "px-[8px] py-[4px] text-[12px] font-medium text-content-primary hover:underline transition-colors",
				onClick: r[0] ||= (e) => u.value = /* @__PURE__ */ new Set()
			}, " Cancel ")], 64)) : (g(), a(e, { key: 1 }, [
				y(n.$slots, "headerActions"),
				t.editable && !d.value ? (g(), a("button", {
					key: 0,
					class: "hidden",
					onClick: T
				}, " Edit ")) : i("", !0),
				d.value ? (g(), a("button", {
					key: 1,
					class: "px-[10px] sm:px-[12px] py-[6px] sm:py-[8px] text-[13px] sm:text-[14px] font-medium text-white bg-btn-primary hover:bg-btn-primary-hover rounded-[8px] transition-colors",
					onClick: E
				}, " Done ")) : i("", !0)
			], 64))])]),
			o("div", Le, [o("div", Re, [o("table", ze, [o("thead", null, [o("tr", Be, [t.selectable ? (g(), a("th", Ve, [o("div", {
				class: f(["w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors", m.value || h.value ? "bg-btn-primary border-border-selected" : "border-border-hover hover:border-border-hover"]),
				onClick: x
			}, [m.value ? (g(), a("svg", He, [...r[1] ||= [o("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : h.value ? (g(), a("svg", Ue, [...r[2] ||= [o("path", { d: "M2 6h8" }, null, -1)]])) : i("", !0)], 2)])) : i("", !0), (g(!0), a(e, null, v(t.columns, (e) => (g(), a("th", {
				key: e.key,
				class: "px-[12px] py-[10px] text-left text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap",
				style: p(e.width ? { width: e.width } : {})
			}, S(e.label), 5))), 128))])]), o("tbody", null, [(g(!0), a(e, null, v(t.rows, (s, l) => (g(), a("tr", {
				key: l,
				class: f(["border-b border-border last:border-b-0 transition-colors", u.value.has(l) ? "bg-surface-selected" : "hover:bg-surface-hover"])
			}, [t.selectable ? (g(), a("td", We, [o("div", {
				class: f(["w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors", u.value.has(l) ? "bg-btn-primary border-border-selected" : "border-border-hover hover:border-border-hover"]),
				onClick: (e) => C(l)
			}, [u.value.has(l) ? (g(), a("svg", Ke, [...r[3] ||= [o("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : i("", !0)], 10, Ge)])) : i("", !0), (g(!0), a(e, null, v(t.columns, (e) => (g(), a("td", {
				key: e.key,
				class: "px-[12px] py-[10px] text-[13px] text-content-primary"
			}, [y(n.$slots, "cell-" + e.key, {
				row: s,
				value: s[e.key],
				index: l,
				editMode: d.value
			}, () => [c(S(s[e.key]), 1)])]))), 128))], 2))), 128))])])])]),
			o("div", qe, [(g(!0), a(e, null, v(t.rows, (s, l) => (g(), a("div", {
				key: l,
				class: f(["border border-border rounded-[12px] bg-surface p-[14px] transition-colors", u.value.has(l) ? "border-border-selected bg-surface-selected" : ""])
			}, [o("div", Je, [t.selectable ? (g(), a("div", {
				key: 0,
				class: f(["w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors flex-shrink-0 mt-[2px]", u.value.has(l) ? "bg-btn-primary border-border-selected" : "border-border-hover"]),
				onClick: (e) => C(l)
			}, [u.value.has(l) ? (g(), a("svg", Xe, [...r[4] ||= [o("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : i("", !0)], 10, Ye)) : i("", !0), o("div", Ze, [o("div", Qe, [(g(!0), a(e, null, v(t.columns, (e) => (g(), a("div", { key: e.key }, [o("div", $e, S(e.label), 1), o("div", et, [y(n.$slots, "cell-" + e.key, {
				row: s,
				value: s[e.key],
				index: l,
				editMode: d.value
			}, () => [c(S(s[e.key]), 1)])])]))), 128))])])])], 2))), 128))])
		]));
	}
}), nt = ["disabled"], rt = {
	key: 0,
	class: "absolute z-50 mt-1 w-72 bg-bg-primary border border-border rounded-xl shadow-lg p-3"
}, it = { class: "flex items-center justify-between mb-2" }, at = { class: "text-sm font-semibold text-content-primary" }, ot = { class: "grid grid-cols-7 mb-1" }, st = { class: "grid grid-cols-7" }, ct = ["onClick"], lt = /* @__PURE__ */ u({
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
	setup(t, { emit: r }) {
		let c = t, l = r, u = _(!1), d = _(null), p = /* @__PURE__ */ new Date(), y = _(p.getFullYear()), b = _(p.getMonth()), x = [
			"Su",
			"Mo",
			"Tu",
			"We",
			"Th",
			"Fr",
			"Sa"
		], C = [
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
		], w = n(() => {
			if (!c.modelValue) return null;
			let e = c.modelValue.split("-").map(Number), t = e[0] ?? 2026, n = e[1] ?? 1, r = e[2] ?? 1;
			return {
				year: t,
				month: n - 1,
				day: r
			};
		}), T = n(() => {
			if (!c.modelValue) return "";
			let e = w.value;
			return e ? `${C[e.month]} ${e.day}, ${e.year}` : "";
		}), E = n(() => {
			let e = new Date(y.value, b.value, 1).getDay(), t = new Date(y.value, b.value + 1, 0).getDate(), n = new Date(y.value, b.value, 0).getDate(), r = [];
			for (let t = e - 1; t >= 0; t--) {
				let e = b.value - 1, i = e < 0 ? y.value - 1 : y.value;
				r.push({
					day: n - t,
					month: (e + 12) % 12,
					year: i,
					current: !1
				});
			}
			for (let e = 1; e <= t; e++) r.push({
				day: e,
				month: b.value,
				year: y.value,
				current: !0
			});
			let i = 42 - r.length;
			for (let e = 1; e <= i; e++) {
				let t = b.value + 1, n = t > 11 ? y.value + 1 : y.value;
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
			b.value === 0 ? (b.value = 11, y.value--) : b.value--;
		}
		function O() {
			b.value === 11 ? (b.value = 0, y.value++) : b.value++;
		}
		function k(e) {
			let t = String(e.month + 1).padStart(2, "0"), n = String(e.day).padStart(2, "0");
			l("update:modelValue", `${e.year}-${t}-${n}`), u.value = !1;
		}
		function A(e) {
			return w.value ? e.day === w.value.day && e.month === w.value.month && e.year === w.value.year : !1;
		}
		function j(e) {
			return e.day === p.getDate() && e.month === p.getMonth() && e.year === p.getFullYear();
		}
		function M() {
			c.disabled || (u.value = !u.value);
		}
		function N(e) {
			d.value && !d.value.contains(e.target) && (u.value = !1);
		}
		h(() => document.addEventListener("mousedown", N)), m(() => document.removeEventListener("mousedown", N));
		let P = n(() => ({
			compact: "h-8 px-3 text-sm",
			default: "h-10 px-4 text-sm",
			large: "h-12 px-5 text-base"
		})[c.size]);
		return (n, r) => (g(), a("div", {
			ref_key: "containerRef",
			ref: d,
			class: "relative inline-block w-64"
		}, [o("button", {
			type: "button",
			disabled: t.disabled,
			class: f([
				"w-full flex items-center justify-between border-2 rounded-[8px] transition-colors",
				P.value,
				t.disabled ? "opacity-40 cursor-not-allowed bg-surface-input border-transparent" : "bg-surface-input border-transparent hover:bg-surface-input-hover focus:!bg-surface focus:!border-border-selected cursor-pointer"
			]),
			onClick: M
		}, [o("span", { class: f(t.modelValue ? "text-content-primary" : "text-content-tertiary") }, S(T.value || t.placeholder), 3), r[0] ||= s("<svg class=\"w-4 h-4 text-content-secondary ml-2 shrink-0\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>", 1)], 10, nt), u.value ? (g(), a("div", rt, [
			o("div", it, [
				o("button", {
					type: "button",
					class: "w-8 h-8 flex items-center justify-center rounded-lg text-content-primary hover:bg-bg-secondary transition-colors cursor-pointer",
					onClick: D
				}, [...r[1] ||= [o("svg", {
					class: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [o("polyline", { points: "15 18 9 12 15 6" })], -1)]]),
				o("span", at, S(C[b.value]) + " " + S(y.value), 1),
				o("button", {
					type: "button",
					class: "w-8 h-8 flex items-center justify-center rounded-lg text-content-primary hover:bg-bg-secondary transition-colors cursor-pointer",
					onClick: O
				}, [...r[2] ||= [o("svg", {
					class: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [o("polyline", { points: "9 18 15 12 9 6" })], -1)]])
			]),
			o("div", ot, [(g(), a(e, null, v(x, (e) => o("div", {
				key: e,
				class: "w-9 h-9 flex items-center justify-center text-xs font-medium text-content-tertiary"
			}, S(e), 1)), 64))]),
			o("div", st, [(g(!0), a(e, null, v(E.value, (e, t) => (g(), a("div", {
				key: t,
				class: f([
					"w-9 h-9 flex items-center justify-center text-sm cursor-pointer rounded-full transition-colors",
					A(e) ? "bg-black text-white" : e.current ? "text-content-primary hover:bg-bg-secondary" : "text-content-tertiary hover:bg-bg-secondary",
					j(e) && !A(e) ? "font-bold" : ""
				]),
				onClick: (t) => k(e)
			}, S(e.day), 11, ct))), 128))])
		])) : i("", !0)], 512));
	}
}), ut = { class: "fixed inset-0 overflow-hidden" }, dt = { class: "absolute inset-0 overflow-hidden" }, ft = { class: "flex items-center justify-between px-4 py-3 border-b border-border" }, pt = { class: "text-lg font-semibold text-content-primary" }, mt = { class: "flex-1 overflow-y-auto p-4" }, ht = {
	key: 0,
	class: "border-t border-border px-4 py-3"
}, gt = /* @__PURE__ */ u({
	__name: "Drawer",
	props: {
		open: { type: Boolean },
		side: { default: "right" },
		size: { default: "md" },
		title: { default: "" }
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = t, s = {
			sm: "max-w-sm",
			md: "max-w-md",
			lg: "max-w-lg"
		};
		return (t, c) => (g(), r(C(B), {
			show: e.open,
			as: "template"
		}, {
			default: E(() => [l(C(P), {
				class: "relative z-50",
				onClose: c[1] ||= (e) => n("close")
			}, {
				default: E(() => [l(C(z), {
					as: "template",
					enter: "transition-opacity duration-300 ease-out",
					"enter-from": "opacity-0",
					"enter-to": "opacity-100",
					leave: "transition-opacity duration-200 ease-in",
					"leave-from": "opacity-100",
					"leave-to": "opacity-0"
				}, {
					default: E(() => [...c[2] ||= [o("div", { class: "fixed inset-0 bg-black/50" }, null, -1)]]),
					_: 1
				}), o("div", ut, [o("div", dt, [o("div", { class: f(["pointer-events-none fixed inset-y-0 flex", e.side === "right" ? "right-0" : "left-0"]) }, [l(C(z), {
					as: "template",
					enter: "transform transition duration-300 ease-out",
					"enter-from": e.side === "right" ? "translate-x-full" : "-translate-x-full",
					"enter-to": "translate-x-0",
					leave: "transform transition duration-200 ease-in",
					"leave-from": "translate-x-0",
					"leave-to": e.side === "right" ? "translate-x-full" : "-translate-x-full"
				}, {
					default: E(() => [l(C(F), { class: f(["pointer-events-auto w-screen flex flex-col bg-bg-primary shadow-xl", s[e.size]]) }, {
						default: E(() => [
							o("div", ft, [o("h2", pt, S(e.title), 1), o("button", {
								class: "p-1 rounded-lg text-content-tertiary hover:text-content-primary hover:bg-bg-secondary transition-colors cursor-pointer",
								onClick: c[0] ||= (e) => n("close")
							}, [...c[3] ||= [o("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								class: "h-5 w-5",
								viewBox: "0 0 20 20",
								fill: "currentColor"
							}, [o("path", {
								"fill-rule": "evenodd",
								d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
								"clip-rule": "evenodd"
							})], -1)]])]),
							o("div", mt, [y(t.$slots, "default")]),
							t.$slots.footer ? (g(), a("div", ht, [y(t.$slots, "footer")])) : i("", !0)
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
}), _t = { class: "text-sm text-content-secondary" }, vt = { class: "text-xs text-content-tertiary mt-1" }, yt = ["accept", "multiple"], bt = {
	key: 0,
	class: "mt-3 space-y-2"
}, xt = { class: "flex-1 truncate text-content-primary" }, St = { class: "text-content-tertiary text-xs" }, Ct = ["onClick"], wt = /* @__PURE__ */ u({
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
		let r = t, s = n, l = _(!1), u = _([]), d = _(null);
		function p(e) {
			if (e === 0) return "0 B";
			let t = [
				"B",
				"KB",
				"MB",
				"GB"
			], n = Math.floor(Math.log(e) / Math.log(1024));
			return `${(e / 1024 ** n).toFixed(+(n > 0))} ${t[n]}`;
		}
		function m(e) {
			let t = [];
			for (let n of e) {
				if (n.size > r.maxSize) {
					s("error", `File "${n.name}" exceeds maximum size of ${p(r.maxSize)}`);
					continue;
				}
				t.push(n);
			}
			t.length && (r.multiple ? u.value = [...u.value, ...t] : u.value = t[0] ? [t[0]] : [], s("upload", u.value));
		}
		function h(e) {
			l.value = !1, !(r.disabled || !e.dataTransfer?.files.length) && m(Array.from(e.dataTransfer.files));
		}
		function y(e) {
			let t = e.target;
			t.files?.length && (m(Array.from(t.files)), t.value = "");
		}
		function b() {
			r.disabled || d.value?.click();
		}
		function x(e) {
			u.value = u.value.filter((t, n) => n !== e);
		}
		return (n, r) => (g(), a("div", null, [o("div", {
			class: f([
				"border-2 border-dashed rounded-xl p-8 text-center transition-colors",
				l.value ? "border-accent bg-accent-light" : "border-border hover:border-content-tertiary",
				t.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
			]),
			onDragover: r[0] ||= O((e) => !t.disabled && (l.value = !0), ["prevent"]),
			onDragleave: r[1] ||= (e) => l.value = !1,
			onDrop: O(h, ["prevent"]),
			onClick: b
		}, [
			r[3] ||= o("svg", {
				class: "mx-auto w-10 h-10 text-content-tertiary mb-3",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, [o("path", {
				d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12",
				stroke: "currentColor",
				"stroke-width": "1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			})], -1),
			o("p", _t, [c(S(t.label) + " ", 1), r[2] ||= o("span", { class: "text-accent font-medium" }, "browse", -1)]),
			o("p", vt, "Maximum file size: " + S(p(t.maxSize)), 1),
			o("input", {
				ref_key: "fileInput",
				ref: d,
				type: "file",
				accept: t.accept,
				multiple: t.multiple,
				class: "hidden",
				onChange: y
			}, null, 40, yt)
		], 34), u.value.length ? (g(), a("div", bt, [(g(!0), a(e, null, v(u.value, (e, t) => (g(), a("div", {
			key: t,
			class: "flex items-center gap-3 px-3 py-2 bg-bg-secondary rounded-lg text-sm"
		}, [
			r[4] ||= o("svg", {
				class: "w-4 h-4 text-content-tertiary shrink-0",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, [o("path", {
				d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z",
				stroke: "currentColor",
				"stroke-width": "1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}), o("path", {
				d: "M14 2v6h6M16 13H8M16 17H8M10 9H8",
				stroke: "currentColor",
				"stroke-width": "1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			})], -1),
			o("span", xt, S(e.name), 1),
			o("span", St, S(p(e.size)), 1),
			o("button", {
				class: "text-content-tertiary hover:text-negative cursor-pointer",
				onClick: O((e) => x(t), ["stop"])
			}, " ✕ ", 8, Ct)
		]))), 128))])) : i("", !0)]));
	}
}), Tt = {
	key: 0,
	class: "text-[13px] font-semibold text-content-primary mb-[8px] px-[4px]"
}, Et = { class: "flex flex-col" }, Dt = ["onClick"], Ot = {
	key: 0,
	class: "absolute left-0 top-[8px] bottom-[8px] w-[3px] rounded-full bg-[#276EF1]"
}, kt = /* @__PURE__ */ u({
	__name: "FilterList",
	props: {
		title: {},
		modelValue: {},
		items: {}
	},
	emits: ["update:modelValue"],
	setup(t) {
		return (n, r) => (g(), a("div", null, [t.title ? (g(), a("div", Tt, S(t.title), 1)) : i("", !0), o("div", Et, [(g(!0), a(e, null, v(t.items, (e) => (g(), a("button", {
			key: e.value,
			class: f(["relative flex items-center justify-between px-[12px] py-[10px] text-[14px] rounded-[8px] transition-colors text-left", t.modelValue === e.value ? "text-[#276EF1] font-medium bg-surface-selected" : "text-content-secondary hover:bg-surface-input"]),
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [
			t.modelValue === e.value ? (g(), a("div", Ot)) : i("", !0),
			o("span", null, S(e.label), 1),
			e.count == null ? i("", !0) : (g(), a("span", {
				key: 1,
				class: f(["text-[13px]", t.modelValue === e.value ? "text-[#276EF1]" : "text-content-tertiary"])
			}, S(e.count), 3))
		], 10, Dt))), 128))])]));
	}
}), At = { class: "mb-4" }, jt = {
	key: 0,
	class: "block text-sm font-medium text-content-primary mb-1.5"
}, Mt = {
	key: 0,
	class: "text-negative ml-0.5"
}, Nt = {
	key: 1,
	class: "mt-1 text-xs text-negative"
}, Pt = {
	key: 2,
	class: "mt-1 text-xs text-content-tertiary"
}, Ft = /* @__PURE__ */ u({
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
		return (t, n) => (g(), a("div", At, [
			e.label ? (g(), a("label", jt, [c(S(e.label), 1), e.required ? (g(), a("span", Mt, "*")) : i("", !0)])) : i("", !0),
			y(t.$slots, "default"),
			e.error ? (g(), a("p", Nt, S(e.error), 1)) : e.caption ? (g(), a("p", Pt, S(e.caption), 1)) : i("", !0)
		]));
	}
}), It = {
	key: 0,
	class: "pl-scale300 flex items-center text-content-tertiary"
}, Lt = [
	"type",
	"value",
	"placeholder",
	"disabled"
], Rt = ["disabled"], zt = {
	key: 2,
	class: "pr-scale300 flex items-center text-content-tertiary"
}, Bt = /* @__PURE__ */ u({
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
		type: { default: "text" }
	},
	emits: ["update:modelValue"],
	setup(e) {
		let t = e, r = n(() => {
			switch (t.size) {
				case "compact": return "h-[36px] text-[14px]";
				case "large": return "h-[56px] text-[16px]";
				default: return "h-[48px] text-[16px]";
			}
		});
		return (t, n) => (g(), a("div", { class: f([
			"relative flex items-center border-2 rounded-[8px] transition-colors",
			r.value,
			{
				"border-[#e11900] bg-surface": e.error,
				"border-[#048848] bg-surface": e.positive && !e.error,
				"bg-surface-input border-transparent hover:bg-surface-input-hover focus-within:!bg-surface focus-within:!border-border-selected": !e.error && !e.positive,
				"opacity-40 cursor-not-allowed": e.disabled
			}
		]) }, [
			t.$slots.startEnhancer ? (g(), a("div", It, [y(t.$slots, "startEnhancer")])) : i("", !0),
			o("input", {
				type: e.type,
				value: e.modelValue,
				placeholder: e.placeholder,
				disabled: e.disabled,
				class: "flex-1 px-[14px] py-0 w-full bg-transparent outline-none placeholder:text-content-tertiary text-content-primary",
				onInput: n[0] ||= (e) => t.$emit("update:modelValue", e.target.value)
			}, null, 40, Lt),
			e.clearable && e.modelValue ? (g(), a("button", {
				key: 1,
				type: "button",
				class: "pr-1 pl-0 flex items-center justify-center text-content-tertiary hover:text-content-primary transition-colors",
				disabled: e.disabled,
				onClick: n[1] ||= (e) => t.$emit("update:modelValue", "")
			}, [...n[2] ||= [o("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				class: "h-4 w-4",
				viewBox: "0 0 20 20",
				fill: "currentColor"
			}, [o("path", {
				"fill-rule": "evenodd",
				d: "M10 8.586L5.707 4.293a1 1 0 00-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 101.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10l4.293-4.293a1 1 0 00-1.414-1.414L10 8.586z",
				"clip-rule": "evenodd"
			})], -1)]], 8, Rt)) : i("", !0),
			t.$slots.endEnhancer ? (g(), a("div", zt, [y(t.$slots, "endEnhancer")])) : i("", !0)
		], 2));
	}
}), Vt = { class: "bg-bg-primary border border-border rounded-xl p-5 relative overflow-hidden" }, Ht = { class: "flex items-start justify-between" }, Ut = { class: "text-3xl font-bold text-content-primary tracking-tight" }, Wt = { class: "flex items-center gap-1.5 mt-1" }, Gt = { class: "text-sm text-content-secondary" }, Kt = {
	key: 0,
	class: "w-3.5 h-3.5",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2.5"
}, qt = {
	key: 1,
	class: "w-3.5 h-3.5",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2.5"
}, Jt = /* @__PURE__ */ u({
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
		let t = e, r = n(() => ({
			positive: "bg-positive",
			negative: "bg-negative",
			warning: "bg-warning",
			accent: "bg-accent",
			neutral: "bg-border"
		})[t.accentColor]), s = n(() => ({
			positive: "bg-positive",
			negative: "bg-negative",
			warning: "bg-warning",
			accent: "bg-accent",
			neutral: "bg-content-tertiary"
		})[t.accentColor]), l = n(() => t.trendDirection === "up" ? "text-positive" : t.trendDirection === "down" ? "text-negative" : "text-content-tertiary");
		return (t, n) => (g(), a("div", Vt, [o("div", Ht, [o("div", null, [o("div", Ut, S(e.value), 1), o("div", Wt, [e.dot ? (g(), a("span", {
			key: 0,
			class: f(["w-2 h-2 rounded-full", s.value])
		}, null, 2)) : i("", !0), o("span", Gt, S(e.label), 1)])]), e.trend ? (g(), a("div", {
			key: 0,
			class: f(["text-sm font-medium flex items-center gap-0.5", l.value])
		}, [
			e.trendDirection === "up" ? (g(), a("svg", Kt, [...n[0] ||= [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
			}, null, -1)]])) : i("", !0),
			e.trendDirection === "down" ? (g(), a("svg", qt, [...n[1] ||= [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
			}, null, -1)]])) : i("", !0),
			c(" " + S(e.trend), 1)
		], 2)) : i("", !0)]), o("div", { class: f(["absolute bottom-0 left-0 right-0 h-[3px]", r.value]) }, null, 2)]));
	}
}), Yt = {
	key: 0,
	class: "inline-block w-3 h-3 ml-0.5",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, Xt = /* @__PURE__ */ u({
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
		let t = e, s = n(() => [
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
		return (t, n) => (g(), r(x(e.to ? "router-link" : "a"), {
			to: e.to,
			href: e.href,
			target: e.external ? "_blank" : void 0,
			rel: e.external ? "noopener noreferrer" : void 0,
			class: f(s.value)
		}, {
			default: E(() => [y(t.$slots, "default"), e.external ? (g(), a("svg", Yt, [...n[0] ||= [o("path", {
				d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, null, -1)]])) : i("", !0)]),
			_: 3
		}, 8, [
			"to",
			"href",
			"target",
			"rel",
			"class"
		]));
	}
}), Zt = { class: "w-full" }, Qt = { class: "text-sm font-medium text-content-primary" }, $t = {
	key: 0,
	class: "text-xs text-content-tertiary mt-0.5"
}, en = {
	key: 0,
	class: "text-sm text-content-secondary"
}, tn = /* @__PURE__ */ u({
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
		return (n, r) => (g(), a("ul", Zt, [(g(!0), a(e, null, v(t.items, (e, r) => (g(), a("li", {
			key: r,
			class: f([
				"px-4 py-3 flex items-center justify-between",
				t.divided && r < t.items.length - 1 ? "border-b border-border" : "",
				t.hoverable ? "hover:bg-bg-secondary transition-colors cursor-pointer" : ""
			])
		}, [y(n.$slots, "item", {
			item: e,
			index: r
		}, () => [o("div", null, [o("div", Qt, S(e.label), 1), e.description ? (g(), a("div", $t, S(e.description), 1)) : i("", !0)]), e.endContent ? (g(), a("span", en, S(e.endContent), 1)) : i("", !0)])], 2))), 128))]));
	}
}), nn = { class: "relative inline-block text-left" }, rn = {
	key: 0,
	class: "border-t border-border my-1"
}, an = ["onClick"], on = /* @__PURE__ */ u({
	__name: "Menu",
	props: {
		items: {},
		align: { default: "left" }
	},
	emits: ["select"],
	setup(r, { emit: s }) {
		let c = r, u = s, d = _(!1), p = n(() => c.align === "right" ? "right-0" : "left-0");
		function m(e) {
			d.value = !1;
		}
		function h() {
			d.value = !d.value, d.value && setTimeout(() => {
				document.addEventListener("click", m, { once: !0 });
			}, 0);
		}
		function b(e) {
			e.disabled || (u("select", e), d.value = !1);
		}
		return (n, s) => (g(), a("div", nn, [o("div", { onClick: O(h, ["stop"]) }, [y(n.$slots, "trigger", {}, () => [s[1] ||= o("button", { class: "px-4 py-2 text-sm font-medium bg-black text-white rounded-lg" }, " Menu ", -1)])]), l(t, {
			"enter-active-class": "transition duration-100 ease-out",
			"enter-from-class": "opacity-0 scale-95",
			"enter-to-class": "opacity-100 scale-100",
			"leave-active-class": "transition duration-75 ease-in",
			"leave-from-class": "opacity-100",
			"leave-to-class": "opacity-0"
		}, {
			default: E(() => [d.value ? (g(), a("div", {
				key: 0,
				class: f(["absolute z-[9999] mt-1 w-56 bg-surface border border-border rounded-xl shadow-lg py-1 focus:outline-none", p.value]),
				onClick: s[0] ||= O(() => {}, ["stop"])
			}, [(g(!0), a(e, null, v(r.items, (t, n) => (g(), a(e, { key: n }, [t.divider ? (g(), a("div", rn)) : (g(), a("button", {
				key: 1,
				class: f([
					"w-full text-left px-3 py-2 text-sm flex items-center gap-2 transition-colors",
					t.danger ? "text-[#e11900] hover:bg-[#fef2f2]" : "text-content-primary hover:bg-surface-input",
					t.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
				]),
				onClick: (e) => b(t)
			}, S(t.label), 11, an))], 64))), 128))], 2)) : i("", !0)]),
			_: 1
		})]));
	}
}), sn = {
	key: 0,
	class: "rounded-[16px] overflow-hidden border border-border bg-surface"
}, cn = {
	key: 0,
	class: "w-full h-[200px] overflow-hidden"
}, ln = ["src", "alt"], un = { class: "p-[24px]" }, dn = { class: "text-[18px] font-bold text-content-primary leading-[24px]" }, fn = { class: "text-[14px] text-content-secondary mt-[6px] leading-[20px]" }, pn = { class: "flex items-center min-h-[120px]" }, mn = { class: "flex-1 p-[24px]" }, hn = { class: "text-[18px] font-bold leading-[24px]" }, gn = { class: "text-[14px] opacity-85 mt-[4px] leading-[20px]" }, _n = {
	key: 0,
	class: "flex-shrink-0 p-[16px]"
}, vn = ["src", "alt"], yn = /* @__PURE__ */ u({
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
		return (t, n) => e.layout === "vertical" ? (g(), a("div", sn, [e.image ? (g(), a("div", cn, [o("img", {
			src: e.image,
			alt: e.heading,
			class: "w-full h-full object-cover"
		}, null, 8, ln)])) : i("", !0), o("div", un, [
			o("h3", dn, S(e.heading), 1),
			o("p", fn, S(e.description), 1),
			e.buttonLabel ? (g(), a("button", {
				key: 0,
				class: "mt-[16px] px-[16px] py-[10px] text-[14px] font-medium rounded-[8px] bg-btn-primary text-btn-primary-text hover:bg-btn-primary-hover transition-colors",
				onClick: n[0] ||= (e) => t.$emit("action")
			}, S(e.buttonLabel), 1)) : i("", !0)
		])])) : (g(), a("div", {
			key: 1,
			class: "rounded-[16px] overflow-hidden",
			style: p({
				backgroundColor: e.backgroundColor,
				color: e.color
			})
		}, [o("div", pn, [o("div", mn, [
			o("h3", hn, S(e.heading), 1),
			o("p", gn, S(e.description), 1),
			e.buttonLabel ? (g(), a("button", {
				key: 0,
				class: "mt-[16px] px-[16px] py-[10px] text-[14px] font-medium rounded-[8px] bg-surface/20 hover:bg-surface/30 transition-colors",
				onClick: n[1] ||= (e) => t.$emit("action")
			}, S(e.buttonLabel), 1)) : i("", !0)
		]), e.image ? (g(), a("div", _n, [o("img", {
			src: e.image,
			alt: e.heading,
			class: "w-[100px] h-[100px] rounded-[12px] object-cover"
		}, null, 8, vn)])) : i("", !0)])], 4));
	}
}), bn = { class: "fixed inset-0 flex items-center justify-center p-4" }, xn = { class: "flex items-center justify-between px-6 pt-6 pb-0" }, Sn = { class: "px-6 py-4" }, Cn = {
	key: 0,
	class: "px-6 pb-6 pt-0"
}, wn = /* @__PURE__ */ u({
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
		let n = t, s = {
			sm: "max-w-sm",
			md: "max-w-md",
			lg: "max-w-lg",
			xl: "max-w-xl"
		};
		function u() {
			n("close");
		}
		return (t, n) => (g(), r(C(B), {
			show: e.open,
			as: "template"
		}, {
			default: E(() => [l(C(P), {
				open: e.open,
				onClose: n[0] ||= (t) => e.closeable ? u() : void 0,
				class: "relative z-50"
			}, {
				default: E(() => [l(C(z), {
					as: "template",
					enter: "transition duration-200 ease-out",
					"enter-from": "opacity-0",
					"enter-to": "opacity-100",
					leave: "transition duration-150 ease-in",
					"leave-from": "opacity-100",
					"leave-to": "opacity-0"
				}, {
					default: E(() => [...n[1] ||= [o("div", {
						class: "fixed inset-0 bg-black/50",
						"aria-hidden": "true"
					}, null, -1)]]),
					_: 1
				}), o("div", bn, [l(C(z), {
					as: "template",
					enter: "transition duration-200 ease-out",
					"enter-from": "opacity-0 scale-95",
					"enter-to": "opacity-100 scale-100",
					leave: "transition duration-150 ease-in",
					"leave-from": "opacity-100 scale-100",
					"leave-to": "opacity-0 scale-95"
				}, {
					default: E(() => [l(C(F), { class: f(["w-full rounded-xl bg-bg-primary shadow-xl", s[e.size]]) }, {
						default: E(() => [
							o("div", xn, [e.title ? (g(), r(C(I), {
								key: 0,
								class: "text-lg font-semibold text-content-primary"
							}, {
								default: E(() => [c(S(e.title), 1)]),
								_: 1
							})) : i("", !0), e.closeable ? (g(), a("button", {
								key: 1,
								class: "ml-auto p-1 rounded-md text-content-tertiary hover:text-content-primary hover:bg-secondary transition-colors cursor-pointer",
								"aria-label": "Close",
								onClick: u
							}, [...n[2] ||= [o("svg", {
								class: "w-5 h-5",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [o("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								d: "M6 18L18 6M6 6l12 12"
							})], -1)]])) : i("", !0)]),
							o("div", Sn, [y(t.$slots, "default")]),
							t.$slots.footer ? (g(), a("div", Cn, [y(t.$slots, "footer")])) : i("", !0)
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
}), Tn = { class: "flex items-center justify-between h-[52px] px-[12px] sm:px-[24px] border-b border-border bg-surface" }, En = { class: "flex items-center gap-[8px]" }, Dn = {
	key: 0,
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"stroke-linecap": "round"
}, On = {
	key: 1,
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"stroke-linecap": "round"
}, kn = { class: "flex items-center gap-1" }, An = { class: "text-[15px] font-bold text-content-primary tracking-tight" }, jn = {
	key: 0,
	class: "text-[15px] font-normal text-content-primary"
}, Mn = {
	key: 1,
	class: "hidden sm:block ml-2 pl-2 border-l border-border"
}, Nn = { class: "text-xs text-content-secondary italic" }, Pn = { class: "flex items-center gap-[4px]" }, Fn = {
	key: 0,
	class: "hidden sm:flex items-center gap-[2px] mr-[12px]"
}, In = ["onClick"], Ln = {
	key: 0,
	class: "sm:hidden border-b border-border bg-surface"
}, Rn = {
	key: 0,
	class: "px-[16px] pt-[12px] pb-[4px]"
}, zn = { class: "text-[12px] text-content-tertiary" }, Bn = { class: "flex flex-col py-[8px]" }, Vn = ["onClick"], Hn = {
	key: 0,
	class: "border-b border-border bg-surface"
}, Un = { class: "px-[8px] pb-[12px]" }, Wn = { class: "px-[8px] mb-[6px]" }, Gn = { class: "text-[11px] font-semibold text-content-tertiary uppercase tracking-[1px]" }, Kn = { class: "grid grid-cols-4 sm:grid-cols-6 gap-[2px]" }, qn = ["onClick"], Jn = ["stroke"], Yn = ["d"], Xn = { class: "text-[11px] font-medium text-content-primary text-center leading-[13px]" }, Zn = /* @__PURE__ */ u({
	__name: "NavHeader",
	props: {
		brand: { default: "Predium" },
		brandSuffix: { default: "Exchange" },
		subtitle: { default: "" },
		navItems: {},
		modules: {},
		userName: {},
		userInitials: {},
		avatarColor: { default: "#276EF1" }
	},
	emits: [
		"navigate",
		"moduleClick",
		"avatarClick"
	],
	setup(r, { emit: c }) {
		let u = r, d = _(!1), m = _(!1), h = n(() => u.userInitials ? u.userInitials : u.userName ? u.userName.split(" ").map((e) => e[0]).join("").toUpperCase().slice(0, 2) : "U");
		function y() {
			m.value = !m.value, m.value && (d.value = !1);
		}
		function b() {
			d.value = !d.value, d.value && (m.value = !1);
		}
		let x = {
			"New Property": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
			"List Properties": "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
			Payments: "M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
			Sinisters: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01",
			Maintenance: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
			"Ticket Support": "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
			Calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
			Reports: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6m2 0v-4a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
			Settings: "M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
		}, C = [
			"#276EF1",
			"#048848",
			"#7356BF",
			"#E11900",
			"#FFC043",
			"#0D9488",
			"#4F46E5",
			"#F97066"
		];
		function w(e) {
			return e.icon || x[e.label] || "M4 6h16M4 12h16M4 18h16";
		}
		function T(e, t, n) {
			return e.color || C[(t * 4 + n) % C.length] || "#276EF1";
		}
		return (n, c) => (g(), a("div", null, [
			o("header", Tn, [o("div", En, [r.navItems?.length ? (g(), a("button", {
				key: 0,
				class: "sm:hidden w-[36px] h-[36px] flex items-center justify-center rounded-[8px] text-content-primary hover:bg-surface-input transition-colors",
				onClick: b
			}, [d.value ? (g(), a("svg", On, [...c[2] ||= [o("path", { d: "M18 6L6 18M6 6l12 12" }, null, -1)]])) : (g(), a("svg", Dn, [...c[1] ||= [o("path", { d: "M4 6h16M4 12h16M4 18h16" }, null, -1)]]))])) : i("", !0), o("div", kn, [
				o("span", An, S(r.brand), 1),
				r.brandSuffix ? (g(), a("span", jn, S(r.brandSuffix), 1)) : i("", !0),
				r.subtitle ? (g(), a("div", Mn, [o("span", Nn, S(r.subtitle), 1)])) : i("", !0)
			])]), o("div", Pn, [
				r.navItems?.length ? (g(), a("nav", Fn, [(g(!0), a(e, null, v(r.navItems, (e) => (g(), a("button", {
					key: e.label,
					class: f(["px-[12px] py-[6px] text-[14px] rounded-[8px] transition-colors whitespace-nowrap", e.active ? "text-content-primary font-medium" : "text-content-secondary hover:text-content-primary hover:bg-surface-input"]),
					onClick: (t) => n.$emit("navigate", e)
				}, S(e.label), 11, In))), 128))])) : i("", !0),
				o("button", {
					class: f(["w-[36px] h-[36px] flex items-center justify-center rounded-[8px] transition-colors", m.value ? "bg-surface-input text-content-primary" : "text-content-secondary hover:bg-surface-input"]),
					onClick: y
				}, [...c[3] ||= [s("<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><circle cx=\"5\" cy=\"5\" r=\"2\"></circle><circle cx=\"12\" cy=\"5\" r=\"2\"></circle><circle cx=\"19\" cy=\"5\" r=\"2\"></circle><circle cx=\"5\" cy=\"12\" r=\"2\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle><circle cx=\"19\" cy=\"12\" r=\"2\"></circle><circle cx=\"5\" cy=\"19\" r=\"2\"></circle><circle cx=\"12\" cy=\"19\" r=\"2\"></circle><circle cx=\"19\" cy=\"19\" r=\"2\"></circle></svg>", 1)]], 2),
				o("button", {
					class: "w-[36px] h-[36px] rounded-full flex items-center justify-center text-white text-[11px] font-semibold cursor-pointer hover:opacity-90 transition-opacity",
					style: p({ backgroundColor: r.avatarColor }),
					onClick: c[0] ||= (e) => n.$emit("avatarClick")
				}, S(h.value), 5)
			])]),
			l(t, {
				"enter-active-class": "transition duration-200 ease-out",
				"enter-from-class": "opacity-0 -translate-y-2",
				"enter-to-class": "opacity-100 translate-y-0",
				"leave-active-class": "transition duration-150 ease-in",
				"leave-from-class": "opacity-100",
				"leave-to-class": "opacity-0 -translate-y-2"
			}, {
				default: E(() => [d.value && r.navItems?.length ? (g(), a("div", Ln, [r.subtitle ? (g(), a("div", Rn, [o("span", zn, S(r.subtitle), 1)])) : i("", !0), o("nav", Bn, [(g(!0), a(e, null, v(r.navItems, (e) => (g(), a("button", {
					key: e.label,
					class: f(["w-full text-left px-[16px] py-[12px] text-[15px] transition-colors", e.active ? "text-content-primary font-semibold bg-surface-input" : "text-content-secondary hover:bg-surface-input hover:text-content-primary"]),
					onClick: (t) => {
						n.$emit("navigate", e), d.value = !1;
					}
				}, S(e.label), 11, Vn))), 128))])])) : i("", !0)]),
				_: 1
			}),
			l(t, {
				"enter-active-class": "transition duration-200 ease-out",
				"enter-from-class": "opacity-0 -translate-y-2",
				"enter-to-class": "opacity-100 translate-y-0",
				"leave-active-class": "transition duration-150 ease-in",
				"leave-from-class": "opacity-100",
				"leave-to-class": "opacity-0 -translate-y-2"
			}, {
				default: E(() => [m.value && r.modules?.length ? (g(), a("div", Hn, [c[4] ||= o("div", { class: "px-[16px] pt-[16px] pb-[8px]" }, [o("h3", { class: "text-[15px] font-semibold text-content-primary" }, "Modules")], -1), o("div", Un, [(g(!0), a(e, null, v(r.modules, (t, r) => (g(), a("div", {
					key: t.title,
					class: f(r > 0 ? "mt-[12px]" : "")
				}, [o("div", Wn, [o("span", Gn, S(t.title), 1)]), o("div", Kn, [(g(!0), a(e, null, v(t.items, (e, t) => (g(), a("button", {
					key: e.label,
					class: "flex flex-col items-center gap-[4px] p-[10px] rounded-[12px] hover:bg-surface-input active:bg-surface-input-hover transition-colors cursor-pointer group",
					onClick: (t) => {
						m.value = !1, n.$emit("moduleClick", e);
					}
				}, [o("div", {
					class: "w-[36px] h-[36px] rounded-[10px] flex items-center justify-center",
					style: p({ backgroundColor: T(e, r, t) + "14" })
				}, [(g(), a("svg", {
					width: "18",
					height: "18",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: T(e, r, t),
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, [o("path", { d: w(e) }, null, 8, Yn)], 8, Jn))], 4), o("span", Xn, S(e.label), 1)], 8, qn))), 128))])], 2))), 128))])])) : i("", !0)]),
				_: 1
			})
		]));
	}
}), Qn = { class: "flex-shrink-0 mt-0.5" }, $n = {
	key: 0,
	class: "w-5 h-5 text-accent",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, er = {
	key: 1,
	class: "w-5 h-5 text-positive",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, tr = {
	key: 2,
	class: "w-5 h-5 text-warning",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, nr = {
	key: 3,
	class: "w-5 h-5 text-negative",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, rr = { class: "flex-1 min-w-0" }, ir = {
	key: 0,
	class: "font-semibold mb-0.5"
}, ar = /* @__PURE__ */ u({
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
		let r = e, s = t, c = _(!0), l = n(() => {
			switch (r.kind) {
				case "info": return "bg-accent-light border-l-accent text-content-primary";
				case "positive": return "bg-positive-light border-l-positive text-content-primary";
				case "warning": return "bg-warning-light border-l-warning text-content-primary";
				case "negative": return "bg-negative-light border-l-negative text-content-primary";
				default: return "bg-accent-light border-l-accent text-content-primary";
			}
		});
		function u() {
			c.value = !1, s("close");
		}
		return (t, n) => c.value ? (g(), a("div", {
			key: 0,
			class: f(["flex items-start gap-3 px-4 py-3 rounded-lg text-sm border-l-4", l.value])
		}, [
			o("div", Qn, [e.kind === "info" ? (g(), a("svg", $n, [...n[0] ||= [o("path", {
				"fill-rule": "evenodd",
				d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : e.kind === "positive" ? (g(), a("svg", er, [...n[1] ||= [o("path", {
				"fill-rule": "evenodd",
				d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : e.kind === "warning" ? (g(), a("svg", tr, [...n[2] ||= [o("path", {
				"fill-rule": "evenodd",
				d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : e.kind === "negative" ? (g(), a("svg", nr, [...n[3] ||= [o("path", {
				"fill-rule": "evenodd",
				d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : i("", !0)]),
			o("div", rr, [e.title ? (g(), a("p", ir, S(e.title), 1)) : i("", !0), o("div", null, [y(t.$slots, "default")])]),
			e.closeable ? (g(), a("button", {
				key: 0,
				class: "flex-shrink-0 p-0.5 rounded hover:bg-black/5 transition-colors duration-150 cursor-pointer",
				onClick: u
			}, [...n[4] ||= [o("svg", {
				class: "w-4 h-4 text-content-secondary",
				viewBox: "0 0 20 20",
				fill: "currentColor"
			}, [o("path", {
				"fill-rule": "evenodd",
				d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
				"clip-rule": "evenodd"
			})], -1)]])) : i("", !0)
		], 2)) : i("", !0);
	}
}), or = { class: "px-[16px] sm:px-[24px] pt-[16px] sm:pt-[20px] pb-[12px] sm:pb-[16px] bg-surface" }, sr = { class: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-[12px]" }, cr = {
	key: 0,
	class: "flex items-center gap-[6px] text-[13px] sm:text-[14px] mb-[4px] overflow-x-auto whitespace-nowrap"
}, lr = {
	key: 0,
	class: "text-content-tertiary"
}, ur = ["onClick"], dr = {
	key: 2,
	class: "text-content-primary font-medium"
}, fr = { class: "flex flex-wrap items-center gap-[8px] sm:gap-[12px]" }, pr = { class: "text-[20px] sm:text-[24px] font-bold text-content-primary leading-[28px] sm:leading-[32px]" }, mr = {
	key: 1,
	class: "text-[13px] text-content-tertiary mt-[2px]"
}, hr = {
	key: 0,
	class: "flex flex-wrap items-center gap-[8px] sm:mt-[4px]"
}, gr = {
	key: 0,
	class: "relative"
}, _r = ["onClick"], vr = {
	key: 0,
	class: "absolute right-0 top-full mt-[4px] z-50 min-w-[180px] bg-surface border border-border rounded-[12px] shadow-xl overflow-hidden"
}, yr = ["onClick"], br = ["onClick"], xr = /* @__PURE__ */ u({
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
		let r = t, s = _(null);
		function l(e) {
			s.value = s.value === e ? null : e;
		}
		let u = n(() => {
			let e = {
				positive: "bg-positive-light text-positive-text",
				warning: "bg-warning-light text-warning-text",
				negative: "bg-negative-light text-negative-text",
				accent: "bg-accent-light text-accent-text",
				neutral: "bg-surface-input text-content-secondary"
			};
			return e[r.statusColor] ?? e.neutral;
		});
		return (n, r) => (g(), a("div", or, [o("div", sr, [o("div", null, [
			t.breadcrumbs?.length ? (g(), a("div", cr, [(g(!0), a(e, null, v(t.breadcrumbs, (r, o) => (g(), a(e, { key: o }, [o > 0 ? (g(), a("span", lr, "›")) : i("", !0), o < t.breadcrumbs.length - 1 ? (g(), a("span", {
				key: 1,
				class: "text-content-secondary hover:text-content-primary cursor-pointer",
				onClick: (e) => n.$emit("breadcrumbClick", o)
			}, S(r), 9, ur)) : (g(), a("span", dr, S(r), 1))], 64))), 128))])) : i("", !0),
			o("div", fr, [o("h1", pr, S(t.title), 1), t.status ? (g(), a("span", {
				key: 0,
				class: f(["inline-flex items-center px-[10px] py-[2px] rounded-full text-[12px] font-medium", u.value])
			}, S(t.status), 3)) : i("", !0)]),
			t.subtitle ? (g(), a("div", mr, S(t.subtitle), 1)) : i("", !0)
		]), t.actions?.length ? (g(), a("div", hr, [(g(!0), a(e, null, v(t.actions, (t, u) => (g(), a(e, { key: u }, [t.kind === "dropdown" ? (g(), a("div", gr, [o("button", {
			class: "flex items-center gap-[4px] px-[12px] py-[8px] text-[14px] font-medium text-content-primary hover:bg-surface-input rounded-[8px] transition-colors",
			onClick: O((e) => l(u), ["stop"])
		}, [c(S(t.label) + " ", 1), r[0] ||= o("svg", {
			class: "w-[14px] h-[14px] text-content-secondary",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2"
		}, [o("path", { d: "M6 9l6 6 6-6" })], -1)], 8, _r), s.value === u ? (g(), a("div", vr, [(g(!0), a(e, null, v(t.items, (e) => (g(), a("button", {
			key: e,
			class: "w-full text-left px-[16px] py-[10px] text-[14px] text-content-primary hover:bg-surface-input transition-colors",
			onClick: (r) => {
				s.value = null, n.$emit("dropdownSelect", t, e);
			}
		}, S(e), 9, yr))), 128))])) : i("", !0)])) : (g(), a("button", {
			key: 1,
			class: f(["px-[12px] py-[8px] text-[14px] font-medium rounded-[8px] transition-colors", t.kind === "primary" ? "bg-btn-primary text-white hover:bg-btn-primary-hover" : "text-content-primary hover:bg-surface-input"]),
			onClick: (e) => n.$emit("actionClick", t)
		}, S(t.label), 11, br))], 64))), 128))])) : i("", !0)])]));
	}
}), Sr = {
	class: "flex items-center gap-1",
	role: "navigation",
	"aria-label": "Pagination"
}, Cr = ["disabled"], wr = ["onClick"], Tr = ["disabled"], Er = /* @__PURE__ */ u({
	__name: "Pagination",
	props: {
		currentPage: {},
		totalPages: {},
		siblingCount: { default: 1 },
		size: { default: "default" }
	},
	emits: ["update:currentPage"],
	setup(t, { emit: r }) {
		let i = t, s = r, c = n(() => {
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
		});
		function l(e) {
			e < 1 || e > i.totalPages || e === i.currentPage || s("update:currentPage", e);
		}
		let u = n(() => i.size === "compact" ? "w-7 h-7 text-xs" : "w-8 h-8 text-sm");
		return (n, r) => (g(), a("nav", Sr, [
			o("button", {
				type: "button",
				class: f([
					u.value,
					"flex items-center justify-center rounded-lg transition-colors",
					t.currentPage <= 1 ? "text-content-tertiary cursor-not-allowed" : "text-content-primary hover:bg-bg-secondary cursor-pointer"
				]),
				disabled: t.currentPage <= 1,
				onClick: r[0] ||= (e) => l(t.currentPage - 1)
			}, [...r[2] ||= [o("svg", {
				class: "w-4 h-4",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("polyline", { points: "15 18 9 12 15 6" })], -1)]], 10, Cr),
			(g(!0), a(e, null, v(c.value, (n, r) => (g(), a(e, { key: r }, [typeof n == "string" ? (g(), a("span", {
				key: 0,
				class: f([u.value, "flex items-center justify-center text-content-tertiary"])
			}, " … ", 2)) : (g(), a("button", {
				key: 1,
				type: "button",
				class: f([
					u.value,
					"flex items-center justify-center rounded-lg transition-colors cursor-pointer",
					n === t.currentPage ? "bg-black text-white" : "text-content-primary hover:bg-bg-secondary"
				]),
				onClick: (e) => l(n)
			}, S(n), 11, wr))], 64))), 128)),
			o("button", {
				type: "button",
				class: f([
					u.value,
					"flex items-center justify-center rounded-lg transition-colors",
					t.currentPage >= t.totalPages ? "text-content-tertiary cursor-not-allowed" : "text-content-primary hover:bg-bg-secondary cursor-pointer"
				]),
				disabled: t.currentPage >= t.totalPages,
				onClick: r[1] ||= (e) => l(t.currentPage + 1)
			}, [...r[3] ||= [o("svg", {
				class: "w-4 h-4",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("polyline", { points: "9 18 15 12 9 6" })], -1)]], 10, Tr)
		]));
	}
}), Dr = ["value", "disabled"], Or = ["value", "disabled"], kr = /* @__PURE__ */ u({
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
		let r = e, i = t, c = n(() => {
			switch (r.size) {
				case "compact": return "h-8 text-sm";
				case "large": return "h-12 text-base";
				default: return "h-10 text-sm";
			}
		});
		return (t, n) => (g(), a("div", { class: f([
			"flex border-2 rounded-[8px] overflow-hidden transition-colors",
			e.error ? "border-[#e11900] bg-surface" : "",
			!e.error && !e.disabled ? "bg-surface-input border-transparent hover:bg-surface-input-hover focus-within:!bg-surface focus-within:!border-border-selected" : "",
			e.disabled ? "opacity-40 bg-surface-input border-transparent" : ""
		]) }, [o("select", {
			value: e.countryCode,
			disabled: e.disabled,
			class: f(["bg-bg-secondary border-r border-border px-2 text-sm font-medium outline-none cursor-pointer", c.value]),
			onChange: n[0] ||= (e) => i("update:countryCode", e.target.value)
		}, [...n[2] ||= [s("<option value=\"+1\">🇺🇸 +1</option><option value=\"+52\">🇲🇽 +52</option><option value=\"+44\">🇬🇧 +44</option><option value=\"+49\">🇩🇪 +49</option><option value=\"+33\">🇫🇷 +33</option><option value=\"+81\">🇯🇵 +81</option><option value=\"+86\">🇨🇳 +86</option><option value=\"+91\">🇮🇳 +91</option>", 8)]], 42, Dr), o("input", {
			value: e.modelValue,
			disabled: e.disabled,
			type: "tel",
			placeholder: "(555) 123-4567",
			class: f(["flex-1 outline-none px-3 text-sm bg-transparent", c.value]),
			onInput: n[1] ||= (e) => i("update:modelValue", e.target.value)
		}, null, 42, Or)], 2));
	}
}), Ar = { class: "flex gap-2" }, jr = [
	"type",
	"value",
	"disabled",
	"onInput",
	"onKeydown"
], Mr = /* @__PURE__ */ u({
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
		let r = t, i = n, o = _([]);
		function s(e, t) {
			let n = t.target, a = n.value;
			a.length > 1 && (n.value = a.charAt(a.length - 1));
			let s = r.modelValue.split("");
			for (s[e] = n.value; s.length <= e;) s.push("");
			let c = s.join("").slice(0, r.length);
			i("update:modelValue", c), n.value && e < r.length - 1 && d(() => {
				o.value[e + 1]?.focus();
			}), c.length === r.length && !c.includes("") && i("complete", c);
		}
		function c(e, t) {
			if (!t.target.value && e > 0) {
				let t = r.modelValue.split("");
				t[e - 1] = "", i("update:modelValue", t.join("")), d(() => {
					o.value[e - 1]?.focus();
				});
			}
		}
		return (n, r) => (g(), a("div", Ar, [(g(!0), a(e, null, v(t.length, (e) => (g(), a("input", {
			key: e,
			ref_for: !0,
			ref_key: "inputs",
			ref: o,
			type: t.mask ? "password" : "text",
			maxlength: "1",
			inputmode: "numeric",
			value: t.modelValue[e - 1] || "",
			disabled: t.disabled,
			class: f([
				"text-center font-semibold border-2 rounded-[8px] outline-none transition-colors",
				t.size === "compact" ? "w-10 h-10 text-lg" : "w-12 h-12 text-xl",
				t.error ? "border-[#e11900] bg-surface" : "bg-surface-input border-transparent focus:!bg-surface focus:!border-border-selected",
				t.disabled ? "opacity-40 cursor-not-allowed" : ""
			]),
			onInput: (t) => s(e - 1, t),
			onKeydown: D((t) => c(e - 1, t), ["backspace"])
		}, null, 42, jr))), 128))]));
	}
}), Nr = /* @__PURE__ */ u({
	__name: "Popover",
	props: { placement: { default: "bottom-start" } },
	setup(e) {
		let r = e, s = _(!1), c = _(null);
		function u() {
			s.value = !s.value;
		}
		function d() {
			s.value = !1;
		}
		function p(e) {
			c.value && !c.value.contains(e.target) && d();
		}
		h(() => {
			document.addEventListener("click", p);
		}), m(() => {
			document.removeEventListener("click", p);
		});
		let v = n(() => ({
			"bottom-end": "right-0 top-full mt-2",
			"bottom-start": "left-0 top-full mt-2",
			bottom: "left-1/2 -translate-x-1/2 top-full mt-2",
			"top-end": "right-0 bottom-full mb-2",
			"top-start": "left-0 bottom-full mb-2",
			top: "left-1/2 -translate-x-1/2 bottom-full mb-2"
		})[r.placement] ?? "left-0 top-full mt-2");
		return (e, n) => (g(), a("div", {
			ref_key: "popoverRef",
			ref: c,
			class: "relative inline-block"
		}, [o("div", {
			onClick: O(u, ["stop"]),
			class: "inline-block cursor-pointer"
		}, [y(e.$slots, "trigger", {}, () => [n[0] ||= o("button", { class: "px-4 py-2 text-sm font-medium bg-black text-white rounded-lg" }, " Open ", -1)])]), l(t, {
			"enter-active-class": "transition duration-150 ease-out",
			"enter-from-class": "opacity-0 translate-y-1",
			"enter-to-class": "opacity-100 translate-y-0",
			"leave-active-class": "transition duration-100 ease-in",
			"leave-from-class": "opacity-100",
			"leave-to-class": "opacity-0"
		}, {
			default: E(() => [s.value ? (g(), a("div", {
				key: 0,
				class: f(["absolute z-[9999] min-w-[180px] bg-surface border border-border rounded-xl shadow-xl overflow-hidden", v.value])
			}, [y(e.$slots, "default")], 2)) : i("", !0)]),
			_: 3
		})], 512));
	}
}), Pr = { class: "w-full" }, Fr = {
	key: 0,
	class: "text-xs text-content-secondary mt-1 inline-block"
}, Ir = /* @__PURE__ */ u({
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
		let t = e, r = n(() => Math.max(0, Math.min(100, t.value))), s = n(() => ({
			sm: "h-1",
			md: "h-2",
			lg: "h-3"
		})[t.size]), c = n(() => ({
			primary: "bg-content-primary",
			positive: "bg-positive",
			warning: "bg-warning",
			negative: "bg-negative",
			accent: "bg-accent"
		})[t.color]);
		return (t, n) => (g(), a("div", Pr, [o("div", { class: f(["w-full rounded-full bg-bg-tertiary overflow-hidden", s.value]) }, [o("div", {
			class: f([
				"h-full rounded-full transition-all duration-500 ease-out",
				c.value,
				e.animated ? "animate-pulse" : ""
			]),
			style: p({ width: r.value + "%" })
		}, null, 6)], 2), e.showLabel ? (g(), a("span", Fr, S(r.value) + "% ", 1)) : i("", !0)]));
	}
}), Lr = { class: "space-y-0" }, Rr = { class: "flex flex-col items-center" }, zr = {
	key: 0,
	class: "w-4 h-4",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "3"
}, Br = { key: 1 }, Vr = {
	key: 1,
	class: "mt-3"
}, Hr = /* @__PURE__ */ u({
	__name: "ProgressSteps",
	props: {
		steps: {},
		currentStep: { default: 0 }
	},
	setup(t) {
		return (n, r) => (g(), a("div", Lr, [(g(!0), a(e, null, v(t.steps, (e, s) => (g(), a("div", {
			key: s,
			class: "relative flex gap-4"
		}, [o("div", Rr, [o("div", { class: f([
			"w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 border-2 transition-colors",
			s < t.currentStep ? "bg-btn-primary border-btn-primary text-btn-primary-text" : "",
			s === t.currentStep ? "bg-btn-primary border-btn-primary text-btn-primary-text" : "",
			s > t.currentStep ? "bg-surface border-border text-content-tertiary" : ""
		]) }, [s < t.currentStep ? (g(), a("svg", zr, [...r[0] ||= [o("path", { d: "M5 13l4 4L19 7" }, null, -1)]])) : (g(), a("span", Br, S(s + 1), 1))], 2), s < t.steps.length - 1 ? (g(), a("div", {
			key: 0,
			class: f(["w-0.5 flex-1 min-h-[24px]", s < t.currentStep ? "bg-btn-primary" : "bg-border"])
		}, null, 2)) : i("", !0)]), o("div", { class: f(["pb-8 flex-1", s === t.steps.length - 1 ? "pb-0" : ""]) }, [
			o("h4", { class: f(["text-sm font-semibold", s <= t.currentStep ? "text-content-primary" : "text-content-tertiary"]) }, S(e.title), 3),
			e.description ? (g(), a("p", {
				key: 0,
				class: f(["text-xs mt-0.5", s <= t.currentStep ? "text-content-secondary" : "text-content-tertiary"])
			}, S(e.description), 3)) : i("", !0),
			s === t.currentStep ? (g(), a("div", Vr, [y(n.$slots, "step-" + s, {
				step: e,
				index: s,
				isActive: !0,
				isCompleted: !1
			})])) : i("", !0)
		], 2)]))), 128))]));
	}
}), Ur = ["onClick"], Wr = [
	"name",
	"value",
	"checked",
	"disabled"
], Gr = { class: "mt-0.5" }, Kr = {
	key: 0,
	class: "w-2.5 h-2.5 rounded-full bg-content-primary"
}, qr = { class: "text-sm font-medium text-content-primary" }, Jr = {
	key: 0,
	class: "text-xs text-content-tertiary mt-0.5"
}, Yr = /* @__PURE__ */ u({
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
		function s(e) {
			e.disabled || r("update:modelValue", e.value);
		}
		return (n, r) => (g(), a("div", {
			class: f(["flex gap-4", t.orientation === "horizontal" ? "flex-row flex-wrap" : "flex-col"]),
			role: "radiogroup"
		}, [(g(!0), a(e, null, v(t.options, (e) => (g(), a("label", {
			key: e.value,
			class: f(["flex items-start gap-3 group", e.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"]),
			onClick: (t) => s(e)
		}, [
			o("input", {
				type: "radio",
				name: t.name,
				value: e.value,
				checked: t.modelValue === e.value,
				disabled: e.disabled,
				class: "sr-only"
			}, null, 8, Wr),
			o("div", Gr, [o("div", { class: f(["w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors", t.modelValue === e.value ? "border-content-primary" : e.disabled ? "border-border" : "border-content-tertiary group-hover:border-content-secondary"]) }, [t.modelValue === e.value ? (g(), a("div", Kr)) : i("", !0)], 2)]),
			o("div", null, [o("span", qr, S(e.label), 1), e.description ? (g(), a("p", Jr, S(e.description), 1)) : i("", !0)])
		], 10, Ur))), 128))], 2));
	}
}), Xr = { class: "inline-flex items-center gap-0.5" }, Zr = ["onClick", "onMouseenter"], Qr = ["fill"], $r = /* @__PURE__ */ u({
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
	setup(t, { emit: r }) {
		let i = t, s = r, c = _(0), l = n(() => {
			switch (i.size) {
				case "sm": return "w-4 h-4";
				case "lg": return "w-7 h-7";
				default: return "w-5 h-5";
			}
		});
		return (n, r) => (g(), a("div", Xr, [(g(!0), a(e, null, v(t.max, (e) => (g(), a("button", {
			key: e,
			type: "button",
			class: f(["transition-colors", t.readOnly ? "cursor-default" : "cursor-pointer hover:scale-110 transition-transform"]),
			onClick: (n) => !t.readOnly && s("update:modelValue", e),
			onMouseenter: (n) => !t.readOnly && (c.value = e),
			onMouseleave: r[0] ||= (e) => !t.readOnly && (c.value = 0)
		}, [(g(), a("svg", {
			class: f(l.value),
			viewBox: "0 0 24 24",
			fill: (c.value || t.modelValue) >= e ? t.color : "#E2E2E2",
			stroke: "none"
		}, [...r[1] ||= [o("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }, null, -1)]], 10, Qr))], 42, Zr))), 128))]));
	}
}), ei = { class: "flex h-screen overflow-hidden bg-surface" }, ti = { class: "hidden sm:flex" }, ni = { class: "flex-1 flex flex-col min-w-0 overflow-hidden" }, ri = { class: "flex-1 overflow-y-auto" }, ii = {
	key: 0,
	class: "px-[12px] sm:px-[24px] border-b border-border bg-surface sticky top-0 z-10"
}, ai = { class: "flex flex-col lg:flex-row lg:min-h-full" }, oi = { class: "flex-1 min-w-0 p-[12px] sm:p-[16px] md:p-[24px]" }, si = { class: "flex flex-col gap-[20px] sm:gap-[24px] md:gap-[32px]" }, ci = {
	key: 0,
	class: "w-full lg:w-[340px] xl:w-[400px] flex-shrink-0 border-t lg:border-t-0 lg:border-l border-border p-[12px] sm:p-[16px] md:p-[24px]"
}, li = { class: "lg:sticky lg:top-[24px]" }, ui = /* @__PURE__ */ u({
	__name: "ScaffoldDetail",
	setup(e) {
		return (e, t) => (g(), a("div", ei, [o("div", ti, [y(e.$slots, "sidebar")]), o("div", ni, [y(e.$slots, "navHeader"), o("div", ri, [
			y(e.$slots, "pageHeader"),
			e.$slots.tabs ? (g(), a("div", ii, [y(e.$slots, "tabs")])) : i("", !0),
			o("div", ai, [o("div", oi, [o("div", si, [y(e.$slots, "content")])]), e.$slots.rightPanel ? (g(), a("div", ci, [o("div", li, [y(e.$slots, "rightPanel")])])) : i("", !0)])
		])])]));
	}
}), di = ["onClick"], fi = /* @__PURE__ */ u({
	__name: "SegmentControl",
	props: {
		modelValue: {},
		options: {},
		size: { default: "md" }
	},
	emits: ["update:modelValue"],
	setup(t) {
		return (n, r) => (g(), a("div", { class: f(["inline-flex rounded-full bg-surface-input p-[3px]", t.size === "sm" ? "gap-[2px]" : "gap-[3px]"]) }, [(g(!0), a(e, null, v(t.options, (e) => (g(), a("button", {
			key: e.value,
			class: f([
				"rounded-full font-medium transition-all duration-200 whitespace-nowrap",
				t.size === "sm" ? "px-[12px] py-[4px] text-[12px]" : "px-[16px] py-[6px] text-[14px]",
				t.modelValue === e.value ? "bg-btn-primary text-btn-primary-text shadow-sm" : "text-content-secondary hover:text-content-primary"
			]),
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, S(e.label), 11, di))), 128))], 2));
	}
}), pi = { class: "relative" }, mi = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	class: "h-4 w-4 text-content-primary flex-shrink-0",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, hi = /* @__PURE__ */ u({
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
	setup(s) {
		let c = s, u = n(() => {
			switch (c.size) {
				case "compact": return "h-8 text-sm";
				case "large": return "h-12 text-base";
				default: return "h-10 text-sm";
			}
		}), d = n(() => {
			let e = c.options.find((e) => e.value === c.modelValue);
			return e ? e.label : "";
		});
		return (n, c) => (g(), r(C(L), {
			"model-value": s.modelValue,
			disabled: s.disabled,
			"onUpdate:modelValue": c[0] ||= (e) => n.$emit("update:modelValue", e)
		}, {
			default: E(() => [o("div", pi, [l(C(ee), { class: f([
				"flex items-center justify-between w-full border-2 rounded-[8px] px-3 text-left transition-colors",
				u.value,
				{
					"border-[#e11900] bg-surface": s.error,
					"bg-surface-input border-transparent hover:bg-surface-input-hover focus:!bg-surface focus:!border-border-selected": !s.error && !s.disabled,
					"opacity-40 cursor-not-allowed bg-surface-input border-transparent": s.disabled
				}
			]) }, {
				default: E(() => [o("span", { class: f([d.value ? "text-content-primary" : "text-content-tertiary"]) }, S(d.value || s.placeholder), 3), c[1] ||= o("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					class: "h-4 w-4 text-content-tertiary ml-2 flex-shrink-0",
					viewBox: "0 0 20 20",
					fill: "currentColor"
				}, [o("path", {
					"fill-rule": "evenodd",
					d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
					"clip-rule": "evenodd"
				})], -1)]),
				_: 1
			}, 8, ["class"]), l(t, {
				"enter-active-class": "transition duration-100 ease-out",
				"enter-from-class": "opacity-0 -translate-y-1",
				"enter-to-class": "opacity-100 translate-y-0",
				"leave-active-class": "transition duration-75 ease-in",
				"leave-from-class": "opacity-100",
				"leave-to-class": "opacity-0"
			}, {
				default: E(() => [l(C(R), { class: "absolute z-50 mt-1 w-full bg-surface border border-border rounded-lg shadow-lg py-1 max-h-60 overflow-auto focus:outline-none" }, {
					default: E(() => [(g(!0), a(e, null, v(s.options, (e) => (g(), r(C(te), {
						key: e.value,
						value: e.value,
						as: "template"
					}, {
						default: E(({ active: t, selected: n }) => [o("li", { class: f([
							"flex items-center justify-between px-3 py-2 cursor-pointer text-sm text-content-primary",
							t ? "bg-bg-secondary" : "",
							n ? "font-medium" : ""
						]) }, [o("span", null, S(e.label), 1), n ? (g(), a("svg", mi, [...c[2] ||= [o("path", {
							"fill-rule": "evenodd",
							d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
							"clip-rule": "evenodd"
						}, null, -1)]])) : i("", !0)], 2)]),
						_: 2
					}, 1032, ["value"]))), 128))]),
					_: 1
				})]),
				_: 1
			})])]),
			_: 1
		}, 8, ["model-value", "disabled"]));
	}
}), gi = { class: "flex items-center h-[52px] px-[14px] flex-shrink-0" }, _i = {
	key: 0,
	class: "ml-[10px] text-[14px] font-semibold truncate"
}, vi = { class: "flex-1 overflow-y-auto overflow-x-hidden py-[8px] px-[8px]" }, yi = ["onClick"], bi = {
	class: "w-[20px] h-[20px] flex-shrink-0",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, xi = ["d"], Si = {
	key: 0,
	class: "flex-1 text-[14px] text-left truncate"
}, Ci = {
	key: 0,
	class: "ml-[42px] mb-[4px]"
}, wi = ["onClick"], Ti = ["onClick"], Ei = {
	class: "w-[20px] h-[20px] flex-shrink-0",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Di = ["d"], Oi = {
	key: 0,
	class: "text-[14px] truncate"
}, ki = /* @__PURE__ */ u({
	__name: "SidebarNav",
	props: {
		items: {},
		collapsed: {
			type: Boolean,
			default: !1
		},
		brand: { default: "Predium" }
	},
	emits: ["update:collapsed", "navigate"],
	setup(t, { emit: n }) {
		let r = t, s = n, c = _(r.collapsed), l = _(/* @__PURE__ */ new Set());
		r.items.forEach((e) => {
			e.children?.some((e) => e.active) && l.value.add(e.label);
		});
		function u() {
			c.value = !c.value, s("update:collapsed", c.value);
		}
		function d(e) {
			l.value.has(e) ? l.value.delete(e) : l.value.add(e);
		}
		function p(e) {
			s("navigate", e);
		}
		function m(e) {
			return e.active || (e.children?.some((e) => e.active) ?? !1);
		}
		let h = {
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
			return e.icon || h[e.label] || "M4 6h16M4 12h16M4 18h16";
		}
		return (n, r) => (g(), a("nav", { class: f(["flex flex-col h-full bg-sidebar-bg text-sidebar-text transition-all duration-300 ease-in-out flex-shrink-0 overflow-hidden", c.value ? "w-[56px]" : "w-[240px]"]) }, [o("div", gi, [o("button", {
			class: "w-[32px] h-[32px] flex items-center justify-center rounded-[8px] text-white hover:bg-sidebar-hover transition-colors",
			onClick: u
		}, [...r[0] ||= [o("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round"
		}, [o("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]), c.value ? i("", !0) : (g(), a("span", _i, S(t.brand), 1))]), o("div", vi, [(g(!0), a(e, null, v(t.items, (t) => (g(), a(e, { key: t.label }, [t.children?.length ? (g(), a(e, { key: 0 }, [o("button", {
			class: f([
				"flex items-center w-full rounded-[8px] transition-colors gap-[12px] mb-[2px]",
				c.value ? "justify-center px-0 py-[10px]" : "px-[10px] py-[10px]",
				m(t) ? "text-white" : "text-content-tertiary hover:text-white hover:bg-[#1a1a1a]"
			]),
			onClick: (e) => c.value ? u() : d(t.label)
		}, [
			(g(), a("svg", bi, [o("path", { d: y(t) }, null, 8, xi)])),
			c.value ? i("", !0) : (g(), a("span", Si, S(t.label), 1)),
			c.value ? i("", !0) : (g(), a("svg", {
				key: 1,
				class: f(["w-[14px] h-[14px] transition-transform duration-200 flex-shrink-0", l.value.has(t.label) ? "rotate-180" : ""]),
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [...r[1] ||= [o("path", { d: "M6 9l6 6 6-6" }, null, -1)]], 2))
		], 10, yi), !c.value && l.value.has(t.label) ? (g(), a("div", Ci, [(g(!0), a(e, null, v(t.children, (e) => (g(), a("button", {
			key: e.to,
			class: f(["block w-full text-left text-[14px] py-[8px] px-[10px] rounded-[8px] transition-colors mb-[1px]", e.active ? "text-white bg-[#333]" : "text-content-tertiary hover:text-white hover:bg-[#1a1a1a]"]),
			onClick: (t) => p(e.to)
		}, S(e.label), 11, wi))), 128))])) : i("", !0)], 64)) : (g(), a("button", {
			key: 1,
			class: f([
				"flex items-center w-full rounded-[8px] transition-colors gap-[12px] mb-[2px]",
				c.value ? "justify-center px-0 py-[10px]" : "px-[10px] py-[10px]",
				t.active ? "text-white bg-[#333]" : "text-content-tertiary hover:text-white hover:bg-[#1a1a1a]"
			]),
			onClick: (e) => t.to && p(t.to)
		}, [(g(), a("svg", Ei, [o("path", { d: y(t) }, null, 8, Di)])), c.value ? i("", !0) : (g(), a("span", Oi, S(t.label), 1))], 10, Ti))], 64))), 128))])], 2));
	}
}), Ai = { class: "flex h-full w-full overflow-hidden" }, ji = {
	key: 0,
	class: "flex items-center justify-between h-[48px] px-[16px] flex-shrink-0"
}, Mi = { class: "text-[15px] font-semibold text-content-primary truncate" }, Ni = { class: "flex items-center gap-[4px]" }, Pi = { class: "flex-1 overflow-y-auto overflow-x-hidden" }, Fi = {
	key: 0,
	class: "flex-shrink-0 border-r border-border flex flex-col items-center pt-[12px]"
}, Ii = { class: "flex-1 min-w-0 overflow-auto" }, Li = /* @__PURE__ */ u({
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
		let r = e, s = t, c = _(r.collapsed);
		T(() => r.collapsed, (e) => {
			c.value = e;
		});
		function l() {
			c.value = !c.value, s("update:collapsed", c.value);
		}
		let u = n(() => ({
			width: c.value ? "0px" : `${r.width}px`,
			minWidth: c.value ? "0px" : `${r.width}px`
		}));
		return (t, n) => (g(), a("div", Ai, [
			o("div", {
				class: f(["flex flex-col bg-surface overflow-hidden transition-all duration-300 ease-in-out flex-shrink-0", e.bordered ? "border-r border-border" : ""]),
				style: p(u.value)
			}, [e.title || t.$slots.headerActions || e.collapsible ? (g(), a("div", ji, [o("span", Mi, S(e.title), 1), o("div", Ni, [
				y(t.$slots, "headerActions"),
				t.$slots.headerActions === void 0 && t.$slots.add ? (g(), a("button", {
					key: 0,
					class: "w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-content-secondary hover:bg-surface-input transition-colors",
					onClick: n[0] ||= (e) => t.$emit("add")
				}, [...n[1] ||= [o("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round"
				}, [o("path", { d: "M12 5v14M5 12h14" })], -1)]])) : i("", !0),
				e.collapsible ? (g(), a("button", {
					key: 1,
					class: "w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-content-secondary hover:bg-surface-input transition-colors",
					onClick: l
				}, [...n[2] ||= [o("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round"
				}, [o("path", { d: "M15 18l-6-6 6-6" })], -1)]])) : i("", !0)
			])])) : i("", !0), o("div", Pi, [y(t.$slots, "sidebar")])], 6),
			c.value && e.collapsible ? (g(), a("div", Fi, [o("button", {
				class: "w-[32px] h-[32px] flex items-center justify-center rounded-[6px] text-content-secondary hover:bg-surface-input transition-colors",
				onClick: l
			}, [...n[3] ||= [o("svg", {
				width: "16",
				height: "16",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round"
			}, [o("path", { d: "M9 18l6-6-6-6" })], -1)]])])) : i("", !0),
			o("div", Ii, [y(t.$slots, "default")])
		]));
	}
}), Ri = /* @__PURE__ */ u({
	__name: "Separator",
	props: {
		orientation: { default: "horizontal" },
		spacing: { default: "md" }
	},
	setup(e) {
		let t = e, r = n(() => ({
			none: "my-0",
			sm: "my-2",
			md: "my-4",
			lg: "my-6"
		})[t.spacing]), i = n(() => ({
			none: "mx-0",
			sm: "mx-2",
			md: "mx-4",
			lg: "mx-6"
		})[t.spacing]);
		return (t, n) => e.orientation === "horizontal" ? (g(), a("div", {
			key: 0,
			class: f(["border-t border-border", r.value])
		}, null, 2)) : (g(), a("div", {
			key: 1,
			class: f(["border-l border-border self-stretch", i.value])
		}, null, 2));
	}
}), zi = {
	key: 0,
	class: "space-y-2"
}, Bi = /* @__PURE__ */ u({
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
		return (n, r) => t.variant === "text" ? (g(), a("div", zi, [(g(!0), a(e, null, v(t.rows, (e) => (g(), a("div", {
			key: e,
			class: f(["rounded bg-bg-secondary", t.animated ? "animate-pulse" : ""]),
			style: p({
				width: e === t.rows ? "60%" : t.width,
				height: t.height
			})
		}, null, 6))), 128))])) : t.variant === "circle" ? (g(), a("div", {
			key: 1,
			class: f(["rounded-full bg-bg-secondary", t.animated ? "animate-pulse" : ""]),
			style: p({
				width: t.width,
				height: t.width
			})
		}, null, 6)) : (g(), a("div", {
			key: 2,
			class: f(["rounded-lg bg-bg-secondary", t.animated ? "animate-pulse" : ""]),
			style: p({
				width: t.width,
				height: t.height
			})
		}, null, 6));
	}
}), Vi = { class: "w-full" }, Hi = { class: "flex items-center gap-3" }, Ui = [
	"min",
	"max",
	"step",
	"value",
	"disabled"
], Wi = {
	key: 0,
	class: "text-sm font-medium text-content-primary min-w-[3ch] text-right"
}, Gi = /* @__PURE__ */ u({
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
		return (t, n) => (g(), a("div", Vi, [o("div", Hi, [o("input", {
			type: "range",
			min: e.min,
			max: e.max,
			step: e.step,
			value: e.modelValue,
			disabled: e.disabled,
			class: "slider-input w-full h-2 rounded-full appearance-none cursor-pointer bg-bg-tertiary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-content-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-surface [&::-webkit-slider-thumb]:shadow-md disabled:opacity-40 disabled:cursor-not-allowed",
			onInput: n[0] ||= (e) => t.$emit("update:modelValue", Number(e.target.value))
		}, null, 40, Ui), e.showValue ? (g(), a("span", Wi, S(e.modelValue), 1)) : i("", !0)])]));
	}
}), Ki = ["stroke"], qi = ["fill"], Ji = /* @__PURE__ */ u({
	__name: "Spinner",
	props: {
		size: { default: "md" },
		color: { default: "primary" }
	},
	setup(e) {
		let t = e, r = n(() => ({
			xs: "w-4 h-4",
			sm: "w-5 h-5",
			md: "w-6 h-6",
			lg: "w-8 h-8"
		})[t.size]), i = n(() => ({
			primary: "currentColor",
			accent: "#276ef1",
			inverse: "#ffffff"
		})[t.color]);
		return (e, t) => (g(), a("svg", {
			class: f([r.value, "animate-spin"]),
			viewBox: "0 0 24 24",
			fill: "none"
		}, [o("circle", {
			class: "opacity-25",
			cx: "12",
			cy: "12",
			r: "10",
			stroke: i.value,
			"stroke-width": "3"
		}, null, 8, Ki), o("path", {
			class: "opacity-75",
			fill: i.value,
			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
		}, null, 8, qi)], 2));
	}
}), Yi = { class: "flex items-center justify-center" }, Xi = { class: "flex flex-col items-center" }, Zi = {
	key: 0,
	class: "w-4 h-4",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "3"
}, Qi = { key: 1 }, $i = /* @__PURE__ */ u({
	__name: "Stepper",
	props: {
		steps: {},
		activeStep: {}
	},
	setup(t) {
		return (n, r) => (g(), a("div", Yi, [(g(!0), a(e, null, v(t.steps, (n, s) => (g(), a(e, { key: s }, [o("div", Xi, [o("div", { class: f([
			"w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors",
			s < t.activeStep ? "bg-black text-white" : "",
			s === t.activeStep ? "bg-black text-white" : "",
			s > t.activeStep ? "border-2 border-border text-content-tertiary" : ""
		]) }, [s < t.activeStep ? (g(), a("svg", Zi, [...r[0] ||= [o("path", {
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			d: "M5 13l4 4L19 7"
		}, null, -1)]])) : (g(), a("span", Qi, S(s + 1), 1))], 2), o("span", { class: f(["mt-2 text-xs font-medium whitespace-nowrap", s <= t.activeStep ? "text-content-primary" : "text-content-tertiary"]) }, S(n.label), 3)]), s < t.steps.length - 1 ? (g(), a("div", {
			key: 0,
			class: f(["flex-1 h-[2px] mx-3 mt-[-16px]", s < t.activeStep ? "bg-black" : "bg-border"])
		}, null, 2)) : i("", !0)], 64))), 128))]));
	}
}), ea = { class: "w-full border-collapse text-sm" }, ta = /* @__PURE__ */ u({
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
		let r = t, i = n(() => ["text-font100 font-medium text-content-tertiary uppercase tracking-wider px-scale400 py-scale300 border-b-2 border-border bg-bg-primary", r.stickyHeader ? "sticky top-0 z-10" : ""]);
		function s(e) {
			return [
				"border-b border-border",
				r.hoverable ? "hover:bg-bg-secondary" : "",
				r.striped && e % 2 != 0 ? "bg-bg-secondary/50" : ""
			];
		}
		let l = n(() => ["px-scale400 text-font200 text-content-primary", r.compact ? "py-scale200" : "py-scale400"]);
		return (n, r) => (g(), a("div", { class: f(t.stickyHeader ? "" : "overflow-x-auto") }, [o("table", ea, [o("thead", null, [o("tr", null, [(g(!0), a(e, null, v(t.columns, (e) => (g(), a("th", {
			key: e.key,
			class: f([i.value, e.align === "right" ? "text-right" : e.align === "center" ? "text-center" : "text-left"]),
			style: p(e.width ? { width: e.width } : {})
		}, [y(n.$slots, "header-" + e.key, { column: e }, () => [c(S(e.label), 1)])], 6))), 128))])]), o("tbody", null, [(g(!0), a(e, null, v(t.rows, (r, i) => (g(), a("tr", {
			key: i,
			class: f(s(i))
		}, [(g(!0), a(e, null, v(t.columns, (e) => (g(), a("td", {
			key: e.key,
			class: f([l.value, e.align === "right" ? "text-right" : e.align === "center" ? "text-center" : "text-left"])
		}, [y(n.$slots, "cell-" + e.key, {
			row: r,
			value: r[e.key],
			rowIndex: i
		}, () => [c(S(r[e.key]), 1)])], 2))), 128))], 2))), 128))])])], 2));
	}
}), na = ["aria-selected", "onClick"], ra = {
	key: 0,
	class: "ml-1 text-content-tertiary"
}, ia = {
	key: 1,
	class: "absolute bottom-0 left-0 right-0 h-[3px] bg-content-primary rounded-t-full"
}, aa = { class: "mt-4" }, oa = /* @__PURE__ */ u({
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
		return (n, r) => (g(), a("div", null, [o("div", {
			class: f(["flex border-b border-border overflow-x-auto scrollbar-none", t.fill ? "" : "gap-0"]),
			role: "tablist"
		}, [(g(!0), a(e, null, v(t.tabs, (e) => (g(), a("button", {
			key: e.key,
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			class: f([
				"relative px-4 py-2.5 text-sm font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer",
				t.fill ? "flex-1 text-center" : "",
				t.modelValue === e.key ? "text-content-primary" : "text-content-tertiary hover:text-content-secondary"
			]),
			onClick: (t) => n.$emit("update:modelValue", e.key)
		}, [
			c(S(e.label), 1),
			e.count == null ? i("", !0) : (g(), a("span", ra, "(" + S(e.count) + ")", 1)),
			t.modelValue === e.key ? (g(), a("span", ia)) : i("", !0)
		], 10, na))), 128))], 2), o("div", aa, [y(n.$slots, "default")])]));
	}
}), sa = /* @__PURE__ */ u({
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
		let r = e, i = t;
		function o() {
			let e = {
				sm: "px-3 py-1 text-xs",
				md: "px-4 py-1.5 text-sm"
			}, t = r.selected ? "bg-btn-primary text-btn-primary-text border border-btn-primary cursor-pointer" : "bg-surface text-content-primary border border-border hover:bg-surface-hover cursor-pointer", n = [
				"inline-flex items-center rounded-full font-medium transition-colors duration-150",
				e[r.size],
				t
			];
			return r.disabled && n.push("opacity-40 cursor-not-allowed"), n.join(" ");
		}
		let s = n(() => o());
		function c(e) {
			r.disabled || i("click", e);
		}
		return (e, t) => (g(), a("button", {
			class: f(s.value),
			onClick: c
		}, [y(e.$slots, "default")], 2));
	}
}), ca = [
	"value",
	"placeholder",
	"rows",
	"disabled"
], la = /* @__PURE__ */ u({
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
		return (t, n) => (g(), a("textarea", {
			class: f([
				"w-full border-2 rounded-[8px] px-3 py-2.5 text-sm bg-bg-primary outline-none transition-colors duration-150",
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
		}, null, 42, ca));
	}
}), ua = ["disabled"], da = { class: "absolute top-[16px] right-[16px]" }, fa = {
	key: 0,
	class: "w-[20px] h-[20px] rounded-full bg-btn-primary flex items-center justify-center"
}, $ = {
	key: 1,
	class: "w-[20px] h-[20px] rounded-full border-2 border-border group-hover:border-border-hover"
}, pa = {
	key: 0,
	class: "mb-[12px]"
}, ma = { class: "text-[16px] font-semibold text-content-primary leading-[24px]" }, ha = {
	key: 1,
	class: "text-[14px] text-content-secondary mt-[4px] leading-[20px]"
}, ga = /* @__PURE__ */ u({
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
		return (t, n) => (g(), a("button", {
			type: "button",
			disabled: e.disabled,
			class: f([
				"relative flex flex-col w-full text-left rounded-[12px] transition-all duration-150 cursor-pointer group",
				"border-2",
				e.selected ? "border-border-selected bg-surface shadow-sm" : "border-border bg-surface hover:border-border-selected hover:shadow-sm",
				e.disabled ? "opacity-40 cursor-not-allowed hover:border-border hover:shadow-none" : "",
				e.align === "center" ? "items-center text-center" : "items-start"
			]),
			onClick: n[0] ||= (n) => !e.disabled && t.$emit("click")
		}, [o("div", da, [e.selected ? (g(), a("div", fa, [...n[1] ||= [o("svg", {
			class: "w-[12px] h-[12px] text-white",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "3"
		}, [o("path", { d: "M5 13l4 4L19 7" })], -1)]])) : (g(), a("div", $))]), o("div", { class: f(["p-[24px] pt-[20px] w-full", e.align === "center" ? "flex flex-col items-center" : ""]) }, [
			t.$slots.icon ? (g(), a("div", pa, [y(t.$slots, "icon")])) : i("", !0),
			o("div", ma, [y(t.$slots, "default")]),
			t.$slots.description ? (g(), a("div", ha, [y(t.$slots, "description")])) : i("", !0)
		], 2)], 10, ua));
	}
}), _a = ["disabled"], va = {
	key: 1,
	class: "absolute inset-0 bg-btn-primary"
}, ya = { class: "tabular-nums" }, ba = /* @__PURE__ */ u({
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
	setup(t, { expose: r, emit: s }) {
		let c = t, l = s, u = _(c.duration), d = _(!1), h = null, v = n(() => !c.paused && !d.value), y = n(() => {
			let e = Math.floor(u.value / 60), t = u.value % 60;
			return `${e}:${String(t).padStart(2, "0")}`;
		}), b = n(() => c.duration === 0 ? 100 : (c.duration - u.value) / c.duration * 100);
		function x() {
			u.value--, u.value <= 0 && (u.value = 0, d.value = !0, w(), l("click"));
		}
		function C() {
			h || d.value || (h = setInterval(x, 1e3));
		}
		function w() {
			h &&= (clearInterval(h), null);
		}
		function E() {
			w(), u.value = c.duration, d.value = !1;
		}
		return T(() => c.paused, (e) => {
			!e && !d.value ? C() : w();
		}, { immediate: !0 }), T(() => c.duration, () => {
			E();
		}), m(() => w()), r({ reset: E }), (n, r) => (g(), a("button", {
			class: f([
				"relative inline-flex items-center justify-center overflow-hidden rounded-[8px] text-[14px] font-medium",
				"h-[48px] min-w-[140px]",
				d.value || t.disabled ? "bg-bg-tertiary text-content-disabled cursor-not-allowed" : "cursor-pointer"
			]),
			disabled: d.value || t.disabled,
			onClick: r[0] ||= (e) => !d.value && !t.disabled && n.$emit("click")
		}, [
			v.value && !d.value ? (g(), a(e, { key: 0 }, [o("div", {
				class: "absolute inset-y-0 left-0 bg-content-tertiary transition-[width] duration-1000 ease-linear",
				style: p({ width: b.value + "%" })
			}, null, 4), o("div", {
				class: "absolute inset-y-0 right-0 bg-bg-tertiary transition-[width] duration-1000 ease-linear",
				style: p({ width: 100 - b.value + "%" })
			}, null, 4)], 64)) : i("", !0),
			!v.value && !d.value && !t.disabled ? (g(), a("div", va)) : i("", !0),
			o("span", { class: f([
				"relative z-10 flex items-center gap-[4px] px-[16px]",
				d.value || t.disabled ? "text-content-disabled" : "",
				v.value ? "text-content-primary" : "",
				!v.value && !d.value && !t.disabled ? "text-btn-primary-text" : ""
			]) }, [o("span", null, S(t.label), 1), o("span", ya, "(" + S(y.value) + ")", 1)], 2)
		], 10, _a));
	}
}), xa = { class: "flex-1" }, Sa = /* @__PURE__ */ u({
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
	setup(e, { emit: n }) {
		let s = e, c = n, l = _(null);
		function u() {
			d(), s.duration > 0 && s.visible && (l.value = setTimeout(() => {
				c("close");
			}, s.duration));
		}
		function d() {
			l.value &&= (clearTimeout(l.value), null);
		}
		T(() => s.visible, (e) => {
			e ? u() : d();
		}, { immediate: !0 }), T(() => s.duration, () => {
			s.visible && u();
		}), m(() => {
			d();
		});
		let p = {
			info: "bg-bg-inverse text-content-inverse",
			positive: "bg-positive text-white",
			warning: "bg-warning text-black",
			negative: "bg-negative text-white"
		};
		function h() {
			return p[s.kind] ?? p.info ?? "";
		}
		return (n, s) => (g(), r(t, {
			"enter-active-class": "transition duration-300 ease-out",
			"enter-from-class": "translate-y-full opacity-0",
			"enter-to-class": "translate-y-0 opacity-100",
			"leave-active-class": "transition duration-200 ease-in",
			"leave-from-class": "translate-y-0 opacity-100",
			"leave-to-class": "translate-y-full opacity-0"
		}, {
			default: E(() => [e.visible ? (g(), a("div", {
				key: 0,
				class: f(["flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl text-sm min-w-[320px]", h()])
			}, [
				o("span", xa, S(e.message), 1),
				e.action ? (g(), a("button", {
					key: 0,
					class: "font-medium underline cursor-pointer",
					onClick: s[0] ||= (e) => c("action")
				}, S(e.action), 1)) : i("", !0),
				o("button", {
					class: "ml-1 opacity-60 hover:opacity-100 cursor-pointer",
					onClick: s[1] ||= (e) => c("close")
				}, " ✕ ")
			], 2)) : i("", !0)]),
			_: 1
		}));
	}
}), Ca = ["aria-checked", "disabled"], wa = { key: 0 }, Ta = { class: "text-sm font-medium text-content-primary" }, Ea = {
	key: 0,
	class: "text-xs text-content-tertiary"
}, Da = /* @__PURE__ */ u({
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
		return (t, n) => (g(), a("label", { class: f(["flex items-center gap-3", e.disabled ? "cursor-not-allowed" : "cursor-pointer"]) }, [o("button", {
			type: "button",
			role: "switch",
			"aria-checked": e.modelValue,
			disabled: e.disabled,
			class: f([
				"relative inline-flex shrink-0 rounded-full transition-colors duration-200",
				e.modelValue ? "bg-content-primary" : "bg-bg-tertiary",
				e.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
				e.size === "sm" ? "h-5 w-9" : "h-6 w-11"
			]),
			onClick: n[0] ||= (n) => !e.disabled && t.$emit("update:modelValue", !e.modelValue)
		}, [o("span", { class: f([
			"inline-block rounded-full bg-surface shadow transform transition-transform duration-200",
			e.size === "sm" ? "h-4 w-4 mt-0.5 ml-0.5" : "h-5 w-5 mt-0.5 ml-0.5",
			e.modelValue ? e.size === "sm" ? "translate-x-4" : "translate-x-5" : "translate-x-0"
		]) }, null, 2)], 10, Ca), e.label ? (g(), a("div", wa, [o("span", Ta, S(e.label), 1), e.description ? (g(), a("p", Ea, S(e.description), 1)) : i("", !0)])) : i("", !0)], 2));
	}
}), Oa = /* @__PURE__ */ u({
	__name: "Tooltip",
	props: {
		content: {},
		placement: { default: "top" }
	},
	setup(e) {
		let r = e, s = _(!1), u = n(() => {
			switch (r.placement) {
				case "top": return "bottom-full left-1/2 -translate-x-1/2 mb-2";
				case "bottom": return "top-full left-1/2 -translate-x-1/2 mt-2";
				case "left": return "right-full top-1/2 -translate-y-1/2 mr-2";
				case "right": return "left-full top-1/2 -translate-y-1/2 ml-2";
				default: return "bottom-full left-1/2 -translate-x-1/2 mb-2";
			}
		}), d = n(() => {
			switch (r.placement) {
				case "top": return "top-full left-1/2 -translate-x-1/2 -mt-1";
				case "bottom": return "bottom-full left-1/2 -translate-x-1/2 -mb-1";
				case "left": return "top-1/2 left-full -translate-y-1/2 -ml-1";
				case "right": return "top-1/2 right-full -translate-y-1/2 -mr-1";
				default: return "top-full left-1/2 -translate-x-1/2 -mt-1";
			}
		});
		return (n, r) => (g(), a("div", {
			class: "relative inline-flex",
			onMouseenter: r[0] ||= (e) => s.value = !0,
			onMouseleave: r[1] ||= (e) => s.value = !1
		}, [y(n.$slots, "default"), l(t, {
			"enter-active-class": "transition duration-150 ease-out",
			"enter-from-class": "opacity-0 scale-95",
			"enter-to-class": "opacity-100 scale-100",
			"leave-active-class": "transition duration-100 ease-in",
			"leave-from-class": "opacity-100",
			"leave-to-class": "opacity-0"
		}, {
			default: E(() => [s.value ? (g(), a("div", {
				key: 0,
				class: f(["absolute z-50 px-2.5 py-1.5 text-xs font-medium bg-bg-inverse text-content-inverse rounded-md shadow-lg whitespace-nowrap pointer-events-none", u.value])
			}, [c(S(e.content) + " ", 1), o("div", { class: f(["absolute w-2 h-2 bg-bg-inverse rotate-45", d.value]) }, null, 2)], 2)) : i("", !0)]),
			_: 1
		})], 32));
	}
}), ka = ["onClick"], Aa = {
	key: 1,
	class: "w-4"
}, ja = { class: "text-content-primary" }, Ma = /* @__PURE__ */ u({
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
		function s(e) {
			let t = [];
			for (let n of e) n.children?.length && (t.push(n.id), t.push(...s(n.children)));
			return t;
		}
		let c = _(n.defaultExpanded ? new Set(s(n.items)) : /* @__PURE__ */ new Set());
		T(() => n.defaultExpanded, (e) => {
			e ? c.value = new Set(s(n.items)) : c.value = /* @__PURE__ */ new Set();
		});
		function l(e) {
			let t = new Set(c.value);
			t.has(e) ? t.delete(e) : t.add(e), c.value = t;
		}
		return (n, s) => {
			let u = b("TreeView", !0);
			return g(), a("ul", { class: f(["text-sm", t.depth === 0 ? "" : "ml-4"]) }, [(g(!0), a(e, null, v(t.items, (e) => (g(), a("li", { key: e.id }, [o("button", {
				onClick: (t) => l(e.id),
				class: "flex items-center gap-1.5 w-full px-2 py-1.5 rounded hover:bg-bg-secondary transition-colors text-left"
			}, [e.children?.length ? (g(), a("svg", {
				key: 0,
				class: f(["w-4 h-4 text-content-tertiary transition-transform", c.value.has(e.id) ? "rotate-90" : ""]),
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [...s[0] ||= [o("path", { d: "M9 5l7 7-7 7" }, null, -1)]], 2)) : (g(), a("span", Aa)), o("span", ja, S(e.label), 1)], 8, ka), e.children?.length && c.value.has(e.id) ? (g(), r(u, {
				key: 0,
				items: e.children,
				depth: t.depth + 1,
				"default-expanded": t.defaultExpanded
			}, null, 8, [
				"items",
				"depth",
				"default-expanded"
			])) : i("", !0)]))), 128))], 2);
		};
	}
}), Na = /* @__PURE__ */ u({
	__name: "Typography",
	props: {
		variant: { default: "paragraph-medium" },
		as: {},
		color: { default: "primary" }
	},
	setup(e) {
		let t = e, i = {
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
		}, o = n(() => t.as ?? i[t.variant].tag), s = n(() => i[t.variant].classes), c = n(() => a[t.color]);
		return (e, t) => (g(), r(x(o.value), { class: f([s.value, c.value]) }, {
			default: E(() => [y(e.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
}), Pa = { class: "w-full border border-border rounded-[12px] overflow-hidden" }, Fa = ["onClick"], Ia = {
	key: 0,
	class: "text-[12px] text-content-tertiary mt-[2px]"
}, La = {
	key: 1,
	class: "text-[11px] sm:text-[13px] text-content-primary mt-[4px]"
}, Ra = {
	key: 2,
	class: "text-[13px] text-[#7356BF] font-medium mt-[4px]"
}, za = /* @__PURE__ */ u({
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
		let r = t, s = n;
		function c(e) {
			return r.modelValue === e.date;
		}
		return (n, r) => (g(), a("div", Pa, [o("div", {
			class: "grid",
			style: p({ gridTemplateColumns: `repeat(${t.headers.length}, 1fr)` })
		}, [(g(!0), a(e, null, v(t.headers, (e) => (g(), a("div", {
			key: e,
			class: "py-[8px] sm:py-[10px] text-center text-[11px] sm:text-[13px] font-medium text-content-secondary border-b border-border"
		}, S(e), 1))), 128)), (g(!0), a(e, null, v(t.days, (e, t) => (g(), a("div", {
			key: t,
			class: f([
				"relative flex flex-col items-center justify-center py-[10px] sm:py-[16px] min-h-[72px] sm:min-h-[88px] cursor-pointer transition-colors",
				t > 0 ? "border-l border-border" : "",
				e.disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-surface-input"
			]),
			onClick: (t) => !e.disabled && s("update:modelValue", e.date)
		}, [
			o("div", { class: f(["flex items-center justify-center text-[15px] sm:text-[18px] font-semibold", c(e) ? "w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#7356BF] text-white" : "text-content-primary"]) }, S(e.date), 3),
			e.month ? (g(), a("span", Ia, S(e.month), 1)) : i("", !0),
			e.price ? (g(), a("span", La, S(e.price), 1)) : i("", !0),
			e.label ? (g(), a("span", Ra, S(e.label), 1)) : i("", !0)
		], 10, Fa))), 128))], 4)]));
	}
});
//#endregion
export { W as Accordion, K as Avatar, q as Badge, Q as Banner, ae as Breadcrumbs, ce as Button, de as ButtonGroup, me as Card, ye as Checkbox, Ce as Combobox, tt as DataGrid, lt as DatePicker, Ae as DetailSection, gt as Drawer, wt as FileUploader, kt as FilterList, Ft as FormControl, Bt as Input, Jt as KpiCard, Xt as Link, tn as List, on as Menu, yn as MessageCard, wn as Modal, Zn as NavHeader, ar as Notification, xr as PageHeader, Er as Pagination, kr as PhoneInput, Mr as PinCode, Nr as Popover, Ir as ProgressBar, Hr as ProgressSteps, Yr as Radio, $r as Rating, ui as ScaffoldDetail, fi as SegmentControl, hi as Select, Ri as Separator, Li as SidePanel, ki as SidebarNav, Bi as Skeleton, Gi as Slider, Ji as Spinner, $i as Stepper, ta as Table, oa as Tabs, sa as Tag, la as Textarea, ga as Tile, ba as TimedButton, Sa as Toast, Da as Toggle, Oa as Tooltip, Ma as TreeView, Na as Typography, za as WeekPicker };
