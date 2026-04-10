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
				primary: "bg-black text-white hover:bg-[#333] active:bg-[#1a1a1a]",
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
				s.disabled ? "opacity-40 bg-[#f6f6f6] border-transparent cursor-not-allowed" : "bg-[#f6f6f6] border-transparent hover:bg-[#eee] focus-within:!bg-white focus-within:!border-[#000]",
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
}), we = { class: "flex items-center justify-between mb-[12px]" }, Te = { class: "text-[15px] font-semibold text-[#000]" }, Ee = { class: "border border-[#e2e2e2] rounded-[12px] bg-white" }, De = { class: "text-[11px] font-medium text-[#999] uppercase tracking-[0.5px] leading-[16px]" }, Oe = { class: "text-[14px] text-[#000] leading-[20px] mt-[2px]" }, ke = {
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
				class: "px-[12px] py-[8px] text-[14px] font-medium text-[#000] bg-[#f6f6f6] hover:bg-[#eee] rounded-[8px] transition-colors cursor-pointer",
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
}), je = { class: "flex items-center justify-between mb-[12px]" }, Me = {
	key: 0,
	class: "text-[15px] font-semibold text-[#000]"
}, Ne = { class: "flex items-center gap-[8px]" }, Pe = { class: "border border-[#e2e2e2] rounded-[12px] bg-white overflow-hidden" }, Fe = { class: "overflow-x-auto" }, Ie = { class: "w-full border-collapse" }, Le = { class: "border-b border-[#e2e2e2]" }, Re = {
	key: 0,
	class: "w-[44px] px-[12px] py-[10px] text-left"
}, ze = {
	key: 0,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, Be = {
	key: 1,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, Ve = {
	key: 0,
	class: "w-[44px] px-[12px] py-[10px]"
}, He = ["onClick"], Ue = {
	key: 0,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, We = /* @__PURE__ */ u({
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
		}
	},
	emits: ["edit", "delete"],
	setup(t, { emit: r }) {
		let s = t, l = r, u = _(/* @__PURE__ */ new Set()), d = n(() => s.rows.length > 0 && u.value.size === s.rows.length), m = n(() => u.value.size > 0 && u.value.size < s.rows.length);
		function h() {
			d.value ? u.value = /* @__PURE__ */ new Set() : u.value = new Set(s.rows.map((e, t) => t));
		}
		function b(e) {
			let t = new Set(u.value);
			t.has(e) ? t.delete(e) : t.add(e), u.value = t;
		}
		function x() {
			l("delete", Array.from(u.value)), u.value = /* @__PURE__ */ new Set();
		}
		return (n, r) => (g(), a("div", null, [o("div", je, [t.title ? (g(), a("h3", Me, S(t.title), 1)) : i("", !0), o("div", Ne, [u.value.size > 0 ? (g(), a("button", {
			key: 0,
			class: "px-[12px] py-[8px] text-[13px] font-medium text-white bg-[#e11900] hover:bg-[#c41400] rounded-[8px] transition-colors",
			onClick: x
		}, " Delete " + S(u.value.size === t.rows.length ? "all" : u.value.size) + " " + S(u.value.size === 1 ? "item" : "items"), 1)) : i("", !0), t.editable ? (g(), a("button", {
			key: 1,
			class: "px-[12px] py-[8px] text-[14px] font-medium text-[#000] bg-[#f6f6f6] hover:bg-[#eee] rounded-[8px] transition-colors",
			onClick: r[0] ||= (e) => n.$emit("edit")
		}, " Edit ")) : i("", !0)])]), o("div", Pe, [o("div", Fe, [o("table", Ie, [o("thead", null, [o("tr", Le, [t.selectable ? (g(), a("th", Re, [o("div", {
			class: f(["w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors", d.value || m.value ? "bg-[#000] border-[#000]" : "border-[#ccc] hover:border-[#999]"]),
			onClick: h
		}, [d.value ? (g(), a("svg", ze, [...r[1] ||= [o("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : m.value ? (g(), a("svg", Be, [...r[2] ||= [o("path", { d: "M2 6h8" }, null, -1)]])) : i("", !0)], 2)])) : i("", !0), (g(!0), a(e, null, v(t.columns, (e) => (g(), a("th", {
			key: e.key,
			class: "px-[12px] py-[10px] text-left text-[11px] font-medium text-[#999] uppercase tracking-[0.5px]",
			style: p(e.width ? { width: e.width } : {})
		}, S(e.label), 5))), 128))])]), o("tbody", null, [(g(!0), a(e, null, v(t.rows, (s, l) => (g(), a("tr", {
			key: l,
			class: f(["border-b border-[#e2e2e2] last:border-b-0 transition-colors", u.value.has(l) ? "bg-[#f8f8ff]" : "hover:bg-[#fafafa]"])
		}, [t.selectable ? (g(), a("td", Ve, [o("div", {
			class: f(["w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors", u.value.has(l) ? "bg-[#000] border-[#000]" : "border-[#ccc] hover:border-[#999]"]),
			onClick: (e) => b(l)
		}, [u.value.has(l) ? (g(), a("svg", Ue, [...r[3] ||= [o("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : i("", !0)], 10, He)])) : i("", !0), (g(!0), a(e, null, v(t.columns, (e) => (g(), a("td", {
			key: e.key,
			class: "px-[12px] py-[10px] text-[13px] text-[#000]"
		}, [y(n.$slots, "cell-" + e.key, {
			row: s,
			value: s[e.key],
			index: l
		}, () => [c(S(s[e.key]), 1)])]))), 128))], 2))), 128))])])])])]));
	}
}), Ge = ["disabled"], Ke = {
	key: 0,
	class: "absolute z-50 mt-1 w-72 bg-bg-primary border border-border rounded-xl shadow-lg p-3"
}, qe = { class: "flex items-center justify-between mb-2" }, Je = { class: "text-sm font-semibold text-content-primary" }, Ye = { class: "grid grid-cols-7 mb-1" }, Xe = { class: "grid grid-cols-7" }, Ze = ["onClick"], Qe = /* @__PURE__ */ u({
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
				t.disabled ? "opacity-40 cursor-not-allowed bg-[#f6f6f6] border-transparent" : "bg-[#f6f6f6] border-transparent hover:bg-[#eee] focus:!bg-white focus:!border-[#000] cursor-pointer"
			]),
			onClick: M
		}, [o("span", { class: f(t.modelValue ? "text-content-primary" : "text-content-tertiary") }, S(T.value || t.placeholder), 3), r[0] ||= s("<svg class=\"w-4 h-4 text-content-secondary ml-2 shrink-0\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>", 1)], 10, Ge), u.value ? (g(), a("div", Ke, [
			o("div", qe, [
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
				o("span", Je, S(C[b.value]) + " " + S(y.value), 1),
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
			o("div", Ye, [(g(), a(e, null, v(x, (e) => o("div", {
				key: e,
				class: "w-9 h-9 flex items-center justify-center text-xs font-medium text-content-tertiary"
			}, S(e), 1)), 64))]),
			o("div", Xe, [(g(!0), a(e, null, v(E.value, (e, t) => (g(), a("div", {
				key: t,
				class: f([
					"w-9 h-9 flex items-center justify-center text-sm cursor-pointer rounded-full transition-colors",
					A(e) ? "bg-black text-white" : e.current ? "text-content-primary hover:bg-bg-secondary" : "text-content-tertiary hover:bg-bg-secondary",
					j(e) && !A(e) ? "font-bold" : ""
				]),
				onClick: (t) => k(e)
			}, S(e.day), 11, Ze))), 128))])
		])) : i("", !0)], 512));
	}
}), $e = { class: "fixed inset-0 overflow-hidden" }, et = { class: "absolute inset-0 overflow-hidden" }, tt = { class: "flex items-center justify-between px-4 py-3 border-b border-border" }, nt = { class: "text-lg font-semibold text-content-primary" }, rt = { class: "flex-1 overflow-y-auto p-4" }, it = {
	key: 0,
	class: "border-t border-border px-4 py-3"
}, at = /* @__PURE__ */ u({
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
				}), o("div", $e, [o("div", et, [o("div", { class: f(["pointer-events-none fixed inset-y-0 flex", e.side === "right" ? "right-0" : "left-0"]) }, [l(C(z), {
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
							o("div", tt, [o("h2", nt, S(e.title), 1), o("button", {
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
							o("div", rt, [y(t.$slots, "default")]),
							t.$slots.footer ? (g(), a("div", it, [y(t.$slots, "footer")])) : i("", !0)
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
}), ot = { class: "text-sm text-content-secondary" }, st = { class: "text-xs text-content-tertiary mt-1" }, ct = ["accept", "multiple"], lt = {
	key: 0,
	class: "mt-3 space-y-2"
}, ut = { class: "flex-1 truncate text-content-primary" }, dt = { class: "text-content-tertiary text-xs" }, ft = ["onClick"], pt = /* @__PURE__ */ u({
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
			o("p", ot, [c(S(t.label) + " ", 1), r[2] ||= o("span", { class: "text-accent font-medium" }, "browse", -1)]),
			o("p", st, "Maximum file size: " + S(p(t.maxSize)), 1),
			o("input", {
				ref_key: "fileInput",
				ref: d,
				type: "file",
				accept: t.accept,
				multiple: t.multiple,
				class: "hidden",
				onChange: y
			}, null, 40, ct)
		], 34), u.value.length ? (g(), a("div", lt, [(g(!0), a(e, null, v(u.value, (e, t) => (g(), a("div", {
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
			o("span", ut, S(e.name), 1),
			o("span", dt, S(p(e.size)), 1),
			o("button", {
				class: "text-content-tertiary hover:text-negative cursor-pointer",
				onClick: O((e) => x(t), ["stop"])
			}, " ✕ ", 8, ft)
		]))), 128))])) : i("", !0)]));
	}
}), mt = {
	key: 0,
	class: "text-[13px] font-semibold text-[#000] mb-[8px] px-[4px]"
}, ht = { class: "flex flex-col" }, gt = ["onClick"], _t = {
	key: 0,
	class: "absolute left-0 top-[8px] bottom-[8px] w-[3px] rounded-full bg-[#276EF1]"
}, vt = /* @__PURE__ */ u({
	__name: "FilterList",
	props: {
		title: {},
		modelValue: {},
		items: {}
	},
	emits: ["update:modelValue"],
	setup(t) {
		return (n, r) => (g(), a("div", null, [t.title ? (g(), a("div", mt, S(t.title), 1)) : i("", !0), o("div", ht, [(g(!0), a(e, null, v(t.items, (e) => (g(), a("button", {
			key: e.value,
			class: f(["relative flex items-center justify-between px-[12px] py-[10px] text-[14px] rounded-[8px] transition-colors text-left", t.modelValue === e.value ? "text-[#276EF1] font-medium bg-[#F0F4FF]" : "text-[#545454] hover:bg-[#f6f6f6]"]),
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [
			t.modelValue === e.value ? (g(), a("div", _t)) : i("", !0),
			o("span", null, S(e.label), 1),
			e.count == null ? i("", !0) : (g(), a("span", {
				key: 1,
				class: f(["text-[13px]", t.modelValue === e.value ? "text-[#276EF1]" : "text-[#999]"])
			}, S(e.count), 3))
		], 10, gt))), 128))])]));
	}
}), yt = { class: "mb-4" }, bt = {
	key: 0,
	class: "block text-sm font-medium text-content-primary mb-1.5"
}, xt = {
	key: 0,
	class: "text-negative ml-0.5"
}, St = {
	key: 1,
	class: "mt-1 text-xs text-negative"
}, Ct = {
	key: 2,
	class: "mt-1 text-xs text-content-tertiary"
}, wt = /* @__PURE__ */ u({
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
		return (t, n) => (g(), a("div", yt, [
			e.label ? (g(), a("label", bt, [c(S(e.label), 1), e.required ? (g(), a("span", xt, "*")) : i("", !0)])) : i("", !0),
			y(t.$slots, "default"),
			e.error ? (g(), a("p", St, S(e.error), 1)) : e.caption ? (g(), a("p", Ct, S(e.caption), 1)) : i("", !0)
		]));
	}
}), Tt = {
	key: 0,
	class: "pl-scale300 flex items-center text-content-tertiary"
}, Et = [
	"type",
	"value",
	"placeholder",
	"disabled"
], Dt = ["disabled"], Ot = {
	key: 2,
	class: "pr-scale300 flex items-center text-content-tertiary"
}, kt = /* @__PURE__ */ u({
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
				"border-[#e11900] bg-white": e.error,
				"border-[#048848] bg-white": e.positive && !e.error,
				"bg-[#f6f6f6] border-transparent hover:bg-[#eeeeee] focus-within:!bg-white focus-within:!border-[#000]": !e.error && !e.positive,
				"opacity-40 cursor-not-allowed": e.disabled
			}
		]) }, [
			t.$slots.startEnhancer ? (g(), a("div", Tt, [y(t.$slots, "startEnhancer")])) : i("", !0),
			o("input", {
				type: e.type,
				value: e.modelValue,
				placeholder: e.placeholder,
				disabled: e.disabled,
				class: "flex-1 px-[14px] py-0 w-full bg-transparent outline-none placeholder:text-content-tertiary text-content-primary",
				onInput: n[0] ||= (e) => t.$emit("update:modelValue", e.target.value)
			}, null, 40, Et),
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
			})], -1)]], 8, Dt)) : i("", !0),
			t.$slots.endEnhancer ? (g(), a("div", Ot, [y(t.$slots, "endEnhancer")])) : i("", !0)
		], 2));
	}
}), At = { class: "bg-bg-primary border border-border rounded-xl p-5 relative overflow-hidden" }, jt = { class: "flex items-start justify-between" }, Mt = { class: "text-3xl font-bold text-content-primary tracking-tight" }, Nt = { class: "flex items-center gap-1.5 mt-1" }, Pt = { class: "text-sm text-content-secondary" }, Ft = {
	key: 0,
	class: "w-3.5 h-3.5",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2.5"
}, It = {
	key: 1,
	class: "w-3.5 h-3.5",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2.5"
}, Lt = /* @__PURE__ */ u({
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
		return (t, n) => (g(), a("div", At, [o("div", jt, [o("div", null, [o("div", Mt, S(e.value), 1), o("div", Nt, [e.dot ? (g(), a("span", {
			key: 0,
			class: f(["w-2 h-2 rounded-full", s.value])
		}, null, 2)) : i("", !0), o("span", Pt, S(e.label), 1)])]), e.trend ? (g(), a("div", {
			key: 0,
			class: f(["text-sm font-medium flex items-center gap-0.5", l.value])
		}, [
			e.trendDirection === "up" ? (g(), a("svg", Ft, [...n[0] ||= [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
			}, null, -1)]])) : i("", !0),
			e.trendDirection === "down" ? (g(), a("svg", It, [...n[1] ||= [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
			}, null, -1)]])) : i("", !0),
			c(" " + S(e.trend), 1)
		], 2)) : i("", !0)]), o("div", { class: f(["absolute bottom-0 left-0 right-0 h-[3px]", r.value]) }, null, 2)]));
	}
}), Rt = {
	key: 0,
	class: "inline-block w-3 h-3 ml-0.5",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, zt = /* @__PURE__ */ u({
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
			default: E(() => [y(t.$slots, "default"), e.external ? (g(), a("svg", Rt, [...n[0] ||= [o("path", {
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
}), Bt = { class: "w-full" }, Vt = { class: "text-sm font-medium text-content-primary" }, Ht = {
	key: 0,
	class: "text-xs text-content-tertiary mt-0.5"
}, Ut = {
	key: 0,
	class: "text-sm text-content-secondary"
}, Wt = /* @__PURE__ */ u({
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
		return (n, r) => (g(), a("ul", Bt, [(g(!0), a(e, null, v(t.items, (e, r) => (g(), a("li", {
			key: r,
			class: f([
				"px-4 py-3 flex items-center justify-between",
				t.divided && r < t.items.length - 1 ? "border-b border-border" : "",
				t.hoverable ? "hover:bg-bg-secondary transition-colors cursor-pointer" : ""
			])
		}, [y(n.$slots, "item", {
			item: e,
			index: r
		}, () => [o("div", null, [o("div", Vt, S(e.label), 1), e.description ? (g(), a("div", Ht, S(e.description), 1)) : i("", !0)]), e.endContent ? (g(), a("span", Ut, S(e.endContent), 1)) : i("", !0)])], 2))), 128))]));
	}
}), Gt = { class: "relative inline-block text-left" }, Kt = {
	key: 0,
	class: "border-t border-[#e2e2e2] my-1"
}, qt = ["onClick"], Jt = /* @__PURE__ */ u({
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
		return (n, s) => (g(), a("div", Gt, [o("div", { onClick: O(h, ["stop"]) }, [y(n.$slots, "trigger", {}, () => [s[1] ||= o("button", { class: "px-4 py-2 text-sm font-medium bg-black text-white rounded-lg" }, " Menu ", -1)])]), l(t, {
			"enter-active-class": "transition duration-100 ease-out",
			"enter-from-class": "opacity-0 scale-95",
			"enter-to-class": "opacity-100 scale-100",
			"leave-active-class": "transition duration-75 ease-in",
			"leave-from-class": "opacity-100",
			"leave-to-class": "opacity-0"
		}, {
			default: E(() => [d.value ? (g(), a("div", {
				key: 0,
				class: f(["absolute z-[9999] mt-1 w-56 bg-white border border-[#e2e2e2] rounded-xl shadow-lg py-1 focus:outline-none", p.value]),
				onClick: s[0] ||= O(() => {}, ["stop"])
			}, [(g(!0), a(e, null, v(r.items, (t, n) => (g(), a(e, { key: n }, [t.divider ? (g(), a("div", Kt)) : (g(), a("button", {
				key: 1,
				class: f([
					"w-full text-left px-3 py-2 text-sm flex items-center gap-2 transition-colors",
					t.danger ? "text-[#e11900] hover:bg-[#fef2f2]" : "text-[#000] hover:bg-[#f6f6f6]",
					t.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
				]),
				onClick: (e) => b(t)
			}, S(t.label), 11, qt))], 64))), 128))], 2)) : i("", !0)]),
			_: 1
		})]));
	}
}), Yt = {
	key: 0,
	class: "rounded-[16px] overflow-hidden border border-[#e2e2e2] bg-white"
}, Xt = {
	key: 0,
	class: "w-full h-[200px] overflow-hidden"
}, Zt = ["src", "alt"], Qt = { class: "p-[24px]" }, $t = { class: "text-[18px] font-bold text-[#000] leading-[24px]" }, en = { class: "text-[14px] text-[#545454] mt-[6px] leading-[20px]" }, tn = { class: "flex items-center min-h-[120px]" }, nn = { class: "flex-1 p-[24px]" }, rn = { class: "text-[18px] font-bold leading-[24px]" }, an = { class: "text-[14px] opacity-85 mt-[4px] leading-[20px]" }, on = {
	key: 0,
	class: "flex-shrink-0 p-[16px]"
}, sn = ["src", "alt"], cn = /* @__PURE__ */ u({
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
		return (t, n) => e.layout === "vertical" ? (g(), a("div", Yt, [e.image ? (g(), a("div", Xt, [o("img", {
			src: e.image,
			alt: e.heading,
			class: "w-full h-full object-cover"
		}, null, 8, Zt)])) : i("", !0), o("div", Qt, [
			o("h3", $t, S(e.heading), 1),
			o("p", en, S(e.description), 1),
			e.buttonLabel ? (g(), a("button", {
				key: 0,
				class: "mt-[16px] px-[16px] py-[10px] text-[14px] font-medium rounded-[8px] bg-[#000] text-white hover:bg-[#333] transition-colors",
				onClick: n[0] ||= (e) => t.$emit("action")
			}, S(e.buttonLabel), 1)) : i("", !0)
		])])) : (g(), a("div", {
			key: 1,
			class: "rounded-[16px] overflow-hidden",
			style: p({
				backgroundColor: e.backgroundColor,
				color: e.color
			})
		}, [o("div", tn, [o("div", nn, [
			o("h3", rn, S(e.heading), 1),
			o("p", an, S(e.description), 1),
			e.buttonLabel ? (g(), a("button", {
				key: 0,
				class: "mt-[16px] px-[16px] py-[10px] text-[14px] font-medium rounded-[8px] bg-white/20 hover:bg-white/30 transition-colors",
				onClick: n[1] ||= (e) => t.$emit("action")
			}, S(e.buttonLabel), 1)) : i("", !0)
		]), e.image ? (g(), a("div", on, [o("img", {
			src: e.image,
			alt: e.heading,
			class: "w-[100px] h-[100px] rounded-[12px] object-cover"
		}, null, 8, sn)])) : i("", !0)])], 4));
	}
}), ln = { class: "fixed inset-0 flex items-center justify-center p-4" }, un = { class: "flex items-center justify-between px-6 pt-6 pb-0" }, dn = { class: "px-6 py-4" }, fn = {
	key: 0,
	class: "px-6 pb-6 pt-0"
}, pn = /* @__PURE__ */ u({
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
				}), o("div", ln, [l(C(z), {
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
							o("div", un, [e.title ? (g(), r(C(I), {
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
							o("div", dn, [y(t.$slots, "default")]),
							t.$slots.footer ? (g(), a("div", fn, [y(t.$slots, "footer")])) : i("", !0)
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
}), mn = { class: "flex items-center justify-between h-[52px] px-[12px] sm:px-[24px] border-b border-[#e2e2e2] bg-white" }, hn = { class: "flex items-center gap-[8px]" }, gn = {
	key: 0,
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"stroke-linecap": "round"
}, _n = {
	key: 1,
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"stroke-linecap": "round"
}, vn = { class: "flex items-center gap-1" }, yn = { class: "text-[15px] font-bold text-[#000] tracking-tight" }, bn = {
	key: 0,
	class: "text-[15px] font-normal text-[#000]"
}, xn = {
	key: 1,
	class: "hidden sm:block ml-2 pl-2 border-l border-[#e2e2e2]"
}, Sn = { class: "text-xs text-[#545454] italic" }, Cn = { class: "flex items-center gap-[4px]" }, wn = {
	key: 0,
	class: "hidden sm:flex items-center gap-[2px] mr-[12px]"
}, Tn = ["onClick"], En = {
	key: 0,
	class: "sm:hidden border-b border-[#e2e2e2] bg-white"
}, Dn = {
	key: 0,
	class: "px-[16px] pt-[12px] pb-[4px]"
}, On = { class: "text-[12px] text-[#999]" }, kn = { class: "flex flex-col py-[8px]" }, An = ["onClick"], jn = {
	key: 0,
	class: "border-b border-[#e2e2e2] bg-white"
}, Mn = { class: "px-[8px] pb-[12px]" }, Nn = { class: "px-[8px] mb-[6px]" }, Pn = { class: "text-[11px] font-semibold text-[#999] uppercase tracking-[1px]" }, Fn = { class: "grid grid-cols-4 sm:grid-cols-6 gap-[2px]" }, In = ["onClick"], Ln = ["stroke"], Rn = ["d"], zn = { class: "text-[11px] font-medium text-[#000] text-center leading-[13px]" }, Bn = /* @__PURE__ */ u({
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
			o("header", mn, [o("div", hn, [r.navItems?.length ? (g(), a("button", {
				key: 0,
				class: "sm:hidden w-[36px] h-[36px] flex items-center justify-center rounded-[8px] text-[#000] hover:bg-[#f6f6f6] transition-colors",
				onClick: b
			}, [d.value ? (g(), a("svg", _n, [...c[2] ||= [o("path", { d: "M18 6L6 18M6 6l12 12" }, null, -1)]])) : (g(), a("svg", gn, [...c[1] ||= [o("path", { d: "M4 6h16M4 12h16M4 18h16" }, null, -1)]]))])) : i("", !0), o("div", vn, [
				o("span", yn, S(r.brand), 1),
				r.brandSuffix ? (g(), a("span", bn, S(r.brandSuffix), 1)) : i("", !0),
				r.subtitle ? (g(), a("div", xn, [o("span", Sn, S(r.subtitle), 1)])) : i("", !0)
			])]), o("div", Cn, [
				r.navItems?.length ? (g(), a("nav", wn, [(g(!0), a(e, null, v(r.navItems, (e) => (g(), a("button", {
					key: e.label,
					class: f(["px-[12px] py-[6px] text-[14px] rounded-[8px] transition-colors whitespace-nowrap", e.active ? "text-[#000] font-medium" : "text-[#545454] hover:text-[#000] hover:bg-[#f6f6f6]"]),
					onClick: (t) => n.$emit("navigate", e)
				}, S(e.label), 11, Tn))), 128))])) : i("", !0),
				o("button", {
					class: f(["w-[36px] h-[36px] flex items-center justify-center rounded-[8px] transition-colors", m.value ? "bg-[#f6f6f6] text-[#000]" : "text-[#545454] hover:bg-[#f6f6f6]"]),
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
				default: E(() => [d.value && r.navItems?.length ? (g(), a("div", En, [r.subtitle ? (g(), a("div", Dn, [o("span", On, S(r.subtitle), 1)])) : i("", !0), o("nav", kn, [(g(!0), a(e, null, v(r.navItems, (e) => (g(), a("button", {
					key: e.label,
					class: f(["w-full text-left px-[16px] py-[12px] text-[15px] transition-colors", e.active ? "text-[#000] font-semibold bg-[#f6f6f6]" : "text-[#545454] hover:bg-[#f6f6f6] hover:text-[#000]"]),
					onClick: (t) => {
						n.$emit("navigate", e), d.value = !1;
					}
				}, S(e.label), 11, An))), 128))])])) : i("", !0)]),
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
				default: E(() => [m.value && r.modules?.length ? (g(), a("div", jn, [c[4] ||= o("div", { class: "px-[16px] pt-[16px] pb-[8px]" }, [o("h3", { class: "text-[15px] font-semibold text-[#000]" }, "Modules")], -1), o("div", Mn, [(g(!0), a(e, null, v(r.modules, (t, r) => (g(), a("div", {
					key: t.title,
					class: f(r > 0 ? "mt-[12px]" : "")
				}, [o("div", Nn, [o("span", Pn, S(t.title), 1)]), o("div", Fn, [(g(!0), a(e, null, v(t.items, (e, t) => (g(), a("button", {
					key: e.label,
					class: "flex flex-col items-center gap-[4px] p-[10px] rounded-[12px] hover:bg-[#f6f6f6] active:bg-[#eee] transition-colors cursor-pointer group",
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
				}, [o("path", { d: w(e) }, null, 8, Rn)], 8, Ln))], 4), o("span", zn, S(e.label), 1)], 8, In))), 128))])], 2))), 128))])])) : i("", !0)]),
				_: 1
			})
		]));
	}
}), Vn = { class: "flex-shrink-0 mt-0.5" }, Hn = {
	key: 0,
	class: "w-5 h-5 text-accent",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, Un = {
	key: 1,
	class: "w-5 h-5 text-positive",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, Wn = {
	key: 2,
	class: "w-5 h-5 text-warning",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, Gn = {
	key: 3,
	class: "w-5 h-5 text-negative",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, Kn = { class: "flex-1 min-w-0" }, qn = {
	key: 0,
	class: "font-semibold mb-0.5"
}, Jn = /* @__PURE__ */ u({
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
			o("div", Vn, [e.kind === "info" ? (g(), a("svg", Hn, [...n[0] ||= [o("path", {
				"fill-rule": "evenodd",
				d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : e.kind === "positive" ? (g(), a("svg", Un, [...n[1] ||= [o("path", {
				"fill-rule": "evenodd",
				d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : e.kind === "warning" ? (g(), a("svg", Wn, [...n[2] ||= [o("path", {
				"fill-rule": "evenodd",
				d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : e.kind === "negative" ? (g(), a("svg", Gn, [...n[3] ||= [o("path", {
				"fill-rule": "evenodd",
				d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : i("", !0)]),
			o("div", Kn, [e.title ? (g(), a("p", qn, S(e.title), 1)) : i("", !0), o("div", null, [y(t.$slots, "default")])]),
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
}), Yn = { class: "px-[16px] sm:px-[24px] pt-[16px] sm:pt-[20px] pb-[12px] sm:pb-[16px] bg-white" }, Xn = { class: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-[12px]" }, Zn = {
	key: 0,
	class: "flex items-center gap-[6px] text-[13px] sm:text-[14px] mb-[4px] overflow-x-auto whitespace-nowrap"
}, Qn = {
	key: 0,
	class: "text-[#999]"
}, $n = ["onClick"], er = {
	key: 2,
	class: "text-[#000] font-medium"
}, tr = { class: "flex flex-wrap items-center gap-[8px] sm:gap-[12px]" }, nr = { class: "text-[20px] sm:text-[24px] font-bold text-[#000] leading-[28px] sm:leading-[32px]" }, rr = {
	key: 1,
	class: "text-[13px] text-[#999] mt-[2px]"
}, ir = {
	key: 0,
	class: "flex flex-wrap items-center gap-[8px] sm:mt-[4px]"
}, ar = {
	key: 0,
	class: "relative"
}, or = ["onClick"], sr = {
	key: 0,
	class: "absolute right-0 top-full mt-[4px] z-50 min-w-[180px] bg-white border border-[#e2e2e2] rounded-[12px] shadow-xl overflow-hidden"
}, cr = ["onClick"], lr = ["onClick"], ur = /* @__PURE__ */ u({
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
				positive: "bg-[#e6f4ea] text-[#1e7d34]",
				warning: "bg-[#fef3c7] text-[#92400e]",
				negative: "bg-[#fef2f2] text-[#991b1b]",
				accent: "bg-[#eaf0fd] text-[#1e40af]",
				neutral: "bg-[#f6f6f6] text-[#545454]"
			};
			return e[r.statusColor] ?? e.neutral;
		});
		return (n, r) => (g(), a("div", Yn, [o("div", Xn, [o("div", null, [
			t.breadcrumbs?.length ? (g(), a("div", Zn, [(g(!0), a(e, null, v(t.breadcrumbs, (r, o) => (g(), a(e, { key: o }, [o > 0 ? (g(), a("span", Qn, "›")) : i("", !0), o < t.breadcrumbs.length - 1 ? (g(), a("span", {
				key: 1,
				class: "text-[#545454] hover:text-[#000] cursor-pointer",
				onClick: (e) => n.$emit("breadcrumbClick", o)
			}, S(r), 9, $n)) : (g(), a("span", er, S(r), 1))], 64))), 128))])) : i("", !0),
			o("div", tr, [o("h1", nr, S(t.title), 1), t.status ? (g(), a("span", {
				key: 0,
				class: f(["inline-flex items-center px-[10px] py-[2px] rounded-full text-[12px] font-medium", u.value])
			}, S(t.status), 3)) : i("", !0)]),
			t.subtitle ? (g(), a("div", rr, S(t.subtitle), 1)) : i("", !0)
		]), t.actions?.length ? (g(), a("div", ir, [(g(!0), a(e, null, v(t.actions, (t, u) => (g(), a(e, { key: u }, [t.kind === "dropdown" ? (g(), a("div", ar, [o("button", {
			class: "flex items-center gap-[4px] px-[12px] py-[8px] text-[14px] font-medium text-[#000] hover:bg-[#f6f6f6] rounded-[8px] transition-colors",
			onClick: O((e) => l(u), ["stop"])
		}, [c(S(t.label) + " ", 1), r[0] ||= o("svg", {
			class: "w-[14px] h-[14px] text-[#545454]",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2"
		}, [o("path", { d: "M6 9l6 6 6-6" })], -1)], 8, or), s.value === u ? (g(), a("div", sr, [(g(!0), a(e, null, v(t.items, (e) => (g(), a("button", {
			key: e,
			class: "w-full text-left px-[16px] py-[10px] text-[14px] text-[#000] hover:bg-[#f6f6f6] transition-colors",
			onClick: (r) => {
				s.value = null, n.$emit("dropdownSelect", t, e);
			}
		}, S(e), 9, cr))), 128))])) : i("", !0)])) : (g(), a("button", {
			key: 1,
			class: f(["px-[12px] py-[8px] text-[14px] font-medium rounded-[8px] transition-colors", t.kind === "primary" ? "bg-[#000] text-white hover:bg-[#333]" : "text-[#000] hover:bg-[#f6f6f6]"]),
			onClick: (e) => n.$emit("actionClick", t)
		}, S(t.label), 11, lr))], 64))), 128))])) : i("", !0)])]));
	}
}), dr = {
	class: "flex items-center gap-1",
	role: "navigation",
	"aria-label": "Pagination"
}, fr = ["disabled"], pr = ["onClick"], mr = ["disabled"], hr = /* @__PURE__ */ u({
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
		return (n, r) => (g(), a("nav", dr, [
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
			}, [o("polyline", { points: "15 18 9 12 15 6" })], -1)]], 10, fr),
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
			}, S(n), 11, pr))], 64))), 128)),
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
			}, [o("polyline", { points: "9 18 15 12 9 6" })], -1)]], 10, mr)
		]));
	}
}), gr = ["value", "disabled"], _r = ["value", "disabled"], vr = /* @__PURE__ */ u({
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
			e.error ? "border-[#e11900] bg-white" : "",
			!e.error && !e.disabled ? "bg-[#f6f6f6] border-transparent hover:bg-[#eee] focus-within:!bg-white focus-within:!border-[#000]" : "",
			e.disabled ? "opacity-40 bg-[#f6f6f6] border-transparent" : ""
		]) }, [o("select", {
			value: e.countryCode,
			disabled: e.disabled,
			class: f(["bg-bg-secondary border-r border-border px-2 text-sm font-medium outline-none cursor-pointer", c.value]),
			onChange: n[0] ||= (e) => i("update:countryCode", e.target.value)
		}, [...n[2] ||= [s("<option value=\"+1\">🇺🇸 +1</option><option value=\"+52\">🇲🇽 +52</option><option value=\"+44\">🇬🇧 +44</option><option value=\"+49\">🇩🇪 +49</option><option value=\"+33\">🇫🇷 +33</option><option value=\"+81\">🇯🇵 +81</option><option value=\"+86\">🇨🇳 +86</option><option value=\"+91\">🇮🇳 +91</option>", 8)]], 42, gr), o("input", {
			value: e.modelValue,
			disabled: e.disabled,
			type: "tel",
			placeholder: "(555) 123-4567",
			class: f(["flex-1 outline-none px-3 text-sm bg-transparent", c.value]),
			onInput: n[1] ||= (e) => i("update:modelValue", e.target.value)
		}, null, 42, _r)], 2));
	}
}), yr = { class: "flex gap-2" }, br = [
	"type",
	"value",
	"disabled",
	"onInput",
	"onKeydown"
], xr = /* @__PURE__ */ u({
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
		return (n, r) => (g(), a("div", yr, [(g(!0), a(e, null, v(t.length, (e) => (g(), a("input", {
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
				t.error ? "border-[#e11900] bg-white" : "bg-[#f6f6f6] border-transparent focus:!bg-white focus:!border-[#000]",
				t.disabled ? "opacity-40 cursor-not-allowed" : ""
			]),
			onInput: (t) => s(e - 1, t),
			onKeydown: D((t) => c(e - 1, t), ["backspace"])
		}, null, 42, br))), 128))]));
	}
}), Sr = /* @__PURE__ */ u({
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
				class: f(["absolute z-[9999] min-w-[180px] bg-white border border-[#e2e2e2] rounded-xl shadow-xl overflow-hidden", v.value])
			}, [y(e.$slots, "default")], 2)) : i("", !0)]),
			_: 3
		})], 512));
	}
}), Cr = { class: "w-full" }, wr = {
	key: 0,
	class: "text-xs text-content-secondary mt-1 inline-block"
}, Tr = /* @__PURE__ */ u({
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
			primary: "bg-black",
			positive: "bg-positive",
			warning: "bg-warning",
			negative: "bg-negative",
			accent: "bg-accent"
		})[t.color]);
		return (t, n) => (g(), a("div", Cr, [o("div", { class: f(["w-full rounded-full bg-bg-secondary overflow-hidden", s.value]) }, [o("div", {
			class: f([
				"h-full rounded-full transition-all duration-500 ease-out",
				c.value,
				e.animated ? "animate-pulse" : ""
			]),
			style: p({ width: r.value + "%" })
		}, null, 6)], 2), e.showLabel ? (g(), a("span", wr, S(r.value) + "% ", 1)) : i("", !0)]));
	}
}), Er = { class: "space-y-0" }, Dr = { class: "flex flex-col items-center" }, Or = {
	key: 0,
	class: "w-4 h-4",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "3"
}, kr = { key: 1 }, Ar = {
	key: 1,
	class: "mt-3"
}, jr = /* @__PURE__ */ u({
	__name: "ProgressSteps",
	props: {
		steps: {},
		currentStep: { default: 0 }
	},
	setup(t) {
		return (n, r) => (g(), a("div", Er, [(g(!0), a(e, null, v(t.steps, (e, s) => (g(), a("div", {
			key: s,
			class: "relative flex gap-4"
		}, [o("div", Dr, [o("div", { class: f([
			"w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 border-2 transition-colors",
			s < t.currentStep ? "bg-[#000] border-[#000] text-white" : "",
			s === t.currentStep ? "bg-[#000] border-[#000] text-white" : "",
			s > t.currentStep ? "bg-white border-[#e2e2e2] text-[#999]" : ""
		]) }, [s < t.currentStep ? (g(), a("svg", Or, [...r[0] ||= [o("path", { d: "M5 13l4 4L19 7" }, null, -1)]])) : (g(), a("span", kr, S(s + 1), 1))], 2), s < t.steps.length - 1 ? (g(), a("div", {
			key: 0,
			class: f(["w-0.5 flex-1 min-h-[24px]", s < t.currentStep ? "bg-[#000]" : "bg-[#e2e2e2]"])
		}, null, 2)) : i("", !0)]), o("div", { class: f(["pb-8 flex-1", s === t.steps.length - 1 ? "pb-0" : ""]) }, [
			o("h4", { class: f(["text-sm font-semibold", s <= t.currentStep ? "text-[#000]" : "text-[#999]"]) }, S(e.title), 3),
			e.description ? (g(), a("p", {
				key: 0,
				class: f(["text-xs mt-0.5", s <= t.currentStep ? "text-[#545454]" : "text-[#999]"])
			}, S(e.description), 3)) : i("", !0),
			s === t.currentStep ? (g(), a("div", Ar, [y(n.$slots, "step-" + s, {
				step: e,
				index: s,
				isActive: !0,
				isCompleted: !1
			})])) : i("", !0)
		], 2)]))), 128))]));
	}
}), Mr = ["onClick"], Nr = [
	"name",
	"value",
	"checked",
	"disabled"
], Pr = { class: "mt-0.5" }, Fr = {
	key: 0,
	class: "w-2.5 h-2.5 rounded-full bg-black"
}, Ir = { class: "text-sm font-medium text-content-primary" }, Lr = {
	key: 0,
	class: "text-xs text-content-tertiary mt-0.5"
}, Rr = /* @__PURE__ */ u({
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
			}, null, 8, Nr),
			o("div", Pr, [o("div", { class: f(["w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors", t.modelValue === e.value ? "border-black" : e.disabled ? "border-border" : "border-border group-hover:border-border-hover"]) }, [t.modelValue === e.value ? (g(), a("div", Fr)) : i("", !0)], 2)]),
			o("div", null, [o("span", Ir, S(e.label), 1), e.description ? (g(), a("p", Lr, S(e.description), 1)) : i("", !0)])
		], 10, Mr))), 128))], 2));
	}
}), zr = { class: "inline-flex items-center gap-0.5" }, Br = ["onClick", "onMouseenter"], Vr = ["fill"], Hr = /* @__PURE__ */ u({
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
		return (n, r) => (g(), a("div", zr, [(g(!0), a(e, null, v(t.max, (e) => (g(), a("button", {
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
		}, [...r[1] ||= [o("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }, null, -1)]], 10, Vr))], 42, Br))), 128))]));
	}
}), Ur = ["onClick"], Wr = /* @__PURE__ */ u({
	__name: "SegmentControl",
	props: {
		modelValue: {},
		options: {},
		size: { default: "md" }
	},
	emits: ["update:modelValue"],
	setup(t) {
		return (n, r) => (g(), a("div", { class: f(["inline-flex rounded-full bg-[#f0f0f0] p-[3px]", t.size === "sm" ? "gap-[2px]" : "gap-[3px]"]) }, [(g(!0), a(e, null, v(t.options, (e) => (g(), a("button", {
			key: e.value,
			class: f([
				"rounded-full font-medium transition-all duration-200 whitespace-nowrap",
				t.size === "sm" ? "px-[12px] py-[4px] text-[12px]" : "px-[16px] py-[6px] text-[14px]",
				t.modelValue === e.value ? "bg-white text-[#000] shadow-sm" : "text-[#545454] hover:text-[#000]"
			]),
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, S(e.label), 11, Ur))), 128))], 2));
	}
}), Gr = { class: "relative" }, Kr = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	class: "h-4 w-4 text-content-primary flex-shrink-0",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, qr = /* @__PURE__ */ u({
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
			default: E(() => [o("div", Gr, [l(C(ee), { class: f([
				"flex items-center justify-between w-full border-2 rounded-[8px] px-3 text-left transition-colors",
				u.value,
				{
					"border-[#e11900] bg-white": s.error,
					"bg-[#f6f6f6] border-transparent hover:bg-[#eee] focus:!bg-white focus:!border-[#000]": !s.error && !s.disabled,
					"opacity-40 cursor-not-allowed bg-[#f6f6f6] border-transparent": s.disabled
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
				default: E(() => [l(C(R), { class: "absolute z-50 mt-1 w-full bg-white border border-border rounded-lg shadow-lg py-1 max-h-60 overflow-auto focus:outline-none" }, {
					default: E(() => [(g(!0), a(e, null, v(s.options, (e) => (g(), r(C(te), {
						key: e.value,
						value: e.value,
						as: "template"
					}, {
						default: E(({ active: t, selected: n }) => [o("li", { class: f([
							"flex items-center justify-between px-3 py-2 cursor-pointer text-sm text-content-primary",
							t ? "bg-bg-secondary" : "",
							n ? "font-medium" : ""
						]) }, [o("span", null, S(e.label), 1), n ? (g(), a("svg", Kr, [...c[2] ||= [o("path", {
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
}), Jr = { class: "flex items-center h-[52px] px-[14px] flex-shrink-0" }, Yr = {
	key: 0,
	class: "ml-[10px] text-[14px] font-semibold truncate"
}, Xr = { class: "flex-1 overflow-y-auto overflow-x-hidden py-[8px] px-[8px]" }, Zr = ["onClick"], Qr = {
	class: "w-[20px] h-[20px] flex-shrink-0",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, $r = ["d"], ei = {
	key: 0,
	class: "flex-1 text-[14px] text-left truncate"
}, ti = {
	key: 0,
	class: "ml-[42px] mb-[4px]"
}, ni = ["onClick"], ri = ["onClick"], ii = {
	class: "w-[20px] h-[20px] flex-shrink-0",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, ai = ["d"], oi = {
	key: 0,
	class: "text-[14px] truncate"
}, si = /* @__PURE__ */ u({
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
		return (n, r) => (g(), a("nav", { class: f(["flex flex-col h-full bg-[#000] text-white transition-all duration-300 ease-in-out flex-shrink-0 overflow-hidden", c.value ? "w-[56px]" : "w-[240px]"]) }, [o("div", Jr, [o("button", {
			class: "w-[32px] h-[32px] flex items-center justify-center rounded-[8px] text-white hover:bg-[#333] transition-colors",
			onClick: u
		}, [...r[0] ||= [o("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round"
		}, [o("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]), c.value ? i("", !0) : (g(), a("span", Yr, S(t.brand), 1))]), o("div", Xr, [(g(!0), a(e, null, v(t.items, (t) => (g(), a(e, { key: t.label }, [t.children?.length ? (g(), a(e, { key: 0 }, [o("button", {
			class: f([
				"flex items-center w-full rounded-[8px] transition-colors gap-[12px] mb-[2px]",
				c.value ? "justify-center px-0 py-[10px]" : "px-[10px] py-[10px]",
				m(t) ? "text-white" : "text-[#999] hover:text-white hover:bg-[#1a1a1a]"
			]),
			onClick: (e) => c.value ? u() : d(t.label)
		}, [
			(g(), a("svg", Qr, [o("path", { d: y(t) }, null, 8, $r)])),
			c.value ? i("", !0) : (g(), a("span", ei, S(t.label), 1)),
			c.value ? i("", !0) : (g(), a("svg", {
				key: 1,
				class: f(["w-[14px] h-[14px] transition-transform duration-200 flex-shrink-0", l.value.has(t.label) ? "rotate-180" : ""]),
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [...r[1] ||= [o("path", { d: "M6 9l6 6 6-6" }, null, -1)]], 2))
		], 10, Zr), !c.value && l.value.has(t.label) ? (g(), a("div", ti, [(g(!0), a(e, null, v(t.children, (e) => (g(), a("button", {
			key: e.to,
			class: f(["block w-full text-left text-[14px] py-[8px] px-[10px] rounded-[8px] transition-colors mb-[1px]", e.active ? "text-white bg-[#333]" : "text-[#999] hover:text-white hover:bg-[#1a1a1a]"]),
			onClick: (t) => p(e.to)
		}, S(e.label), 11, ni))), 128))])) : i("", !0)], 64)) : (g(), a("button", {
			key: 1,
			class: f([
				"flex items-center w-full rounded-[8px] transition-colors gap-[12px] mb-[2px]",
				c.value ? "justify-center px-0 py-[10px]" : "px-[10px] py-[10px]",
				t.active ? "text-white bg-[#333]" : "text-[#999] hover:text-white hover:bg-[#1a1a1a]"
			]),
			onClick: (e) => t.to && p(t.to)
		}, [(g(), a("svg", ii, [o("path", { d: y(t) }, null, 8, ai)])), c.value ? i("", !0) : (g(), a("span", oi, S(t.label), 1))], 10, ri))], 64))), 128))])], 2));
	}
}), ci = { class: "flex h-full w-full overflow-hidden" }, li = {
	key: 0,
	class: "flex items-center justify-between h-[48px] px-[16px] flex-shrink-0"
}, ui = { class: "text-[15px] font-semibold text-[#000] truncate" }, di = { class: "flex items-center gap-[4px]" }, fi = { class: "flex-1 overflow-y-auto overflow-x-hidden" }, pi = {
	key: 0,
	class: "flex-shrink-0 border-r border-[#e2e2e2] flex flex-col items-center pt-[12px]"
}, mi = { class: "flex-1 min-w-0 overflow-auto" }, hi = /* @__PURE__ */ u({
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
		return (t, n) => (g(), a("div", ci, [
			o("div", {
				class: f(["flex flex-col bg-white overflow-hidden transition-all duration-300 ease-in-out flex-shrink-0", e.bordered ? "border-r border-[#e2e2e2]" : ""]),
				style: p(u.value)
			}, [e.title || t.$slots.headerActions || e.collapsible ? (g(), a("div", li, [o("span", ui, S(e.title), 1), o("div", di, [
				y(t.$slots, "headerActions"),
				t.$slots.headerActions === void 0 && t.$slots.add ? (g(), a("button", {
					key: 0,
					class: "w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-[#545454] hover:bg-[#f6f6f6] transition-colors",
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
					class: "w-[28px] h-[28px] flex items-center justify-center rounded-[6px] text-[#545454] hover:bg-[#f6f6f6] transition-colors",
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
			])])) : i("", !0), o("div", fi, [y(t.$slots, "sidebar")])], 6),
			c.value && e.collapsible ? (g(), a("div", pi, [o("button", {
				class: "w-[32px] h-[32px] flex items-center justify-center rounded-[6px] text-[#545454] hover:bg-[#f6f6f6] transition-colors",
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
			o("div", mi, [y(t.$slots, "default")])
		]));
	}
}), gi = /* @__PURE__ */ u({
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
}), _i = {
	key: 0,
	class: "space-y-2"
}, vi = /* @__PURE__ */ u({
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
		return (n, r) => t.variant === "text" ? (g(), a("div", _i, [(g(!0), a(e, null, v(t.rows, (e) => (g(), a("div", {
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
}), yi = { class: "w-full" }, bi = { class: "flex items-center gap-3" }, xi = [
	"min",
	"max",
	"step",
	"value",
	"disabled"
], Si = {
	key: 0,
	class: "text-sm font-medium text-content-primary min-w-[3ch] text-right"
}, Ci = /* @__PURE__ */ u({
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
		return (t, n) => (g(), a("div", yi, [o("div", bi, [o("input", {
			type: "range",
			min: e.min,
			max: e.max,
			step: e.step,
			value: e.modelValue,
			disabled: e.disabled,
			class: "slider-input w-full h-2 rounded-full appearance-none cursor-pointer bg-bg-secondary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md disabled:opacity-40 disabled:cursor-not-allowed",
			onInput: n[0] ||= (e) => t.$emit("update:modelValue", Number(e.target.value))
		}, null, 40, xi), e.showValue ? (g(), a("span", Si, S(e.modelValue), 1)) : i("", !0)])]));
	}
}), wi = ["stroke"], Ti = ["fill"], Ei = /* @__PURE__ */ u({
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
			primary: "#000000",
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
		}, null, 8, wi), o("path", {
			class: "opacity-75",
			fill: i.value,
			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
		}, null, 8, Ti)], 2));
	}
}), Di = { class: "flex items-center justify-center" }, Oi = { class: "flex flex-col items-center" }, ki = {
	key: 0,
	class: "w-4 h-4",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "3"
}, Ai = { key: 1 }, ji = /* @__PURE__ */ u({
	__name: "Stepper",
	props: {
		steps: {},
		activeStep: {}
	},
	setup(t) {
		return (n, r) => (g(), a("div", Di, [(g(!0), a(e, null, v(t.steps, (n, s) => (g(), a(e, { key: s }, [o("div", Oi, [o("div", { class: f([
			"w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors",
			s < t.activeStep ? "bg-black text-white" : "",
			s === t.activeStep ? "bg-black text-white" : "",
			s > t.activeStep ? "border-2 border-border text-content-tertiary" : ""
		]) }, [s < t.activeStep ? (g(), a("svg", ki, [...r[0] ||= [o("path", {
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			d: "M5 13l4 4L19 7"
		}, null, -1)]])) : (g(), a("span", Ai, S(s + 1), 1))], 2), o("span", { class: f(["mt-2 text-xs font-medium whitespace-nowrap", s <= t.activeStep ? "text-content-primary" : "text-content-tertiary"]) }, S(n.label), 3)]), s < t.steps.length - 1 ? (g(), a("div", {
			key: 0,
			class: f(["flex-1 h-[2px] mx-3 mt-[-16px]", s < t.activeStep ? "bg-black" : "bg-border"])
		}, null, 2)) : i("", !0)], 64))), 128))]));
	}
}), Mi = { class: "w-full border-collapse text-sm" }, Ni = /* @__PURE__ */ u({
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
		return (n, r) => (g(), a("div", { class: f(t.stickyHeader ? "" : "overflow-x-auto") }, [o("table", Mi, [o("thead", null, [o("tr", null, [(g(!0), a(e, null, v(t.columns, (e) => (g(), a("th", {
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
}), Pi = ["aria-selected", "onClick"], Fi = {
	key: 0,
	class: "ml-1 text-content-tertiary"
}, Ii = {
	key: 1,
	class: "absolute bottom-0 left-0 right-0 h-[3px] bg-black rounded-t-full"
}, Li = { class: "mt-4" }, Ri = /* @__PURE__ */ u({
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
			e.count == null ? i("", !0) : (g(), a("span", Fi, "(" + S(e.count) + ")", 1)),
			t.modelValue === e.key ? (g(), a("span", Ii)) : i("", !0)
		], 10, Pi))), 128))], 2), o("div", Li, [y(n.$slots, "default")])]));
	}
}), zi = /* @__PURE__ */ u({
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
			}, t = r.selected ? "bg-black text-white border border-black cursor-pointer" : "bg-white text-black border border-border hover:bg-bg-secondary cursor-pointer", n = [
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
}), Bi = [
	"value",
	"placeholder",
	"rows",
	"disabled"
], Vi = /* @__PURE__ */ u({
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
				e.error ? "border-negative" : "border-transparent bg-[#f6f6f6] hover:bg-[#eee] focus:!bg-white focus:!border-[#000]",
				e.disabled ? "opacity-40 cursor-not-allowed bg-bg-secondary" : "",
				e.resize === "none" ? "resize-none" : e.resize === "vertical" ? "resize-y" : "resize"
			]),
			value: e.modelValue,
			placeholder: e.placeholder,
			rows: e.rows,
			disabled: e.disabled,
			onInput: n[0] ||= (e) => t.$emit("update:modelValue", e.target.value)
		}, null, 42, Bi));
	}
}), Hi = ["disabled"], Ui = { class: "absolute top-[16px] right-[16px]" }, Wi = {
	key: 0,
	class: "w-[20px] h-[20px] rounded-full bg-[#000] flex items-center justify-center"
}, Gi = {
	key: 1,
	class: "w-[20px] h-[20px] rounded-full border-2 border-[#e2e2e2] group-hover:border-[#999]"
}, $ = {
	key: 0,
	class: "mb-[12px]"
}, Ki = { class: "text-[16px] font-semibold text-[#000] leading-[24px]" }, qi = {
	key: 1,
	class: "text-[14px] text-[#545454] mt-[4px] leading-[20px]"
}, Ji = /* @__PURE__ */ u({
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
				e.selected ? "border-[#000] bg-white shadow-sm" : "border-[#e2e2e2] bg-white hover:border-[#000] hover:shadow-sm",
				e.disabled ? "opacity-40 cursor-not-allowed hover:border-[#e2e2e2] hover:shadow-none" : "",
				e.align === "center" ? "items-center text-center" : "items-start"
			]),
			onClick: n[0] ||= (n) => !e.disabled && t.$emit("click")
		}, [o("div", Ui, [e.selected ? (g(), a("div", Wi, [...n[1] ||= [o("svg", {
			class: "w-[12px] h-[12px] text-white",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "3"
		}, [o("path", { d: "M5 13l4 4L19 7" })], -1)]])) : (g(), a("div", Gi))]), o("div", { class: f(["p-[24px] pt-[20px] w-full", e.align === "center" ? "flex flex-col items-center" : ""]) }, [
			t.$slots.icon ? (g(), a("div", $, [y(t.$slots, "icon")])) : i("", !0),
			o("div", Ki, [y(t.$slots, "default")]),
			t.$slots.description ? (g(), a("div", qi, [y(t.$slots, "description")])) : i("", !0)
		], 2)], 10, Hi));
	}
}), Yi = ["disabled"], Xi = {
	key: 1,
	class: "absolute inset-0 bg-[#000]"
}, Zi = { class: "tabular-nums" }, Qi = /* @__PURE__ */ u({
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
				d.value || t.disabled ? "bg-[#eee] text-[#bbb] cursor-not-allowed" : "cursor-pointer"
			]),
			disabled: d.value || t.disabled,
			onClick: r[0] ||= (e) => !d.value && !t.disabled && n.$emit("click")
		}, [
			v.value && !d.value ? (g(), a(e, { key: 0 }, [o("div", {
				class: "absolute inset-y-0 left-0 bg-[#000] transition-[width] duration-1000 ease-linear",
				style: p({ width: b.value + "%" })
			}, null, 4), o("div", {
				class: "absolute inset-y-0 right-0 bg-[#e0e0e0] transition-[width] duration-1000 ease-linear",
				style: p({ width: 100 - b.value + "%" })
			}, null, 4)], 64)) : i("", !0),
			!v.value && !d.value && !t.disabled ? (g(), a("div", Xi)) : i("", !0),
			o("span", { class: f(["relative z-10 flex items-center gap-[4px] px-[16px]", d.value || t.disabled ? "text-[#bbb]" : "text-white"]) }, [o("span", null, S(t.label), 1), o("span", Zi, "(" + S(y.value) + ")", 1)], 2)
		], 10, Yi));
	}
}), $i = { class: "flex-1" }, ea = /* @__PURE__ */ u({
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
				o("span", $i, S(e.message), 1),
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
}), ta = ["aria-checked", "disabled"], na = { key: 0 }, ra = { class: "text-sm font-medium text-content-primary" }, ia = {
	key: 0,
	class: "text-xs text-content-tertiary"
}, aa = /* @__PURE__ */ u({
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
				e.modelValue ? "bg-black" : "bg-border",
				e.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
				e.size === "sm" ? "h-5 w-9" : "h-6 w-11"
			]),
			onClick: n[0] ||= (n) => !e.disabled && t.$emit("update:modelValue", !e.modelValue)
		}, [o("span", { class: f([
			"inline-block rounded-full bg-white shadow transform transition-transform duration-200",
			e.size === "sm" ? "h-4 w-4 mt-0.5 ml-0.5" : "h-5 w-5 mt-0.5 ml-0.5",
			e.modelValue ? e.size === "sm" ? "translate-x-4" : "translate-x-5" : "translate-x-0"
		]) }, null, 2)], 10, ta), e.label ? (g(), a("div", na, [o("span", ra, S(e.label), 1), e.description ? (g(), a("p", ia, S(e.description), 1)) : i("", !0)])) : i("", !0)], 2));
	}
}), oa = /* @__PURE__ */ u({
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
}), sa = ["onClick"], ca = {
	key: 1,
	class: "w-4"
}, la = { class: "text-content-primary" }, ua = /* @__PURE__ */ u({
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
			}, [...s[0] ||= [o("path", { d: "M9 5l7 7-7 7" }, null, -1)]], 2)) : (g(), a("span", ca)), o("span", la, S(e.label), 1)], 8, sa), e.children?.length && c.value.has(e.id) ? (g(), r(u, {
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
}), da = /* @__PURE__ */ u({
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
}), fa = { class: "w-full border border-[#e2e2e2] rounded-[12px] overflow-hidden" }, pa = ["onClick"], ma = {
	key: 0,
	class: "text-[12px] text-[#999] mt-[2px]"
}, ha = {
	key: 1,
	class: "text-[11px] sm:text-[13px] text-[#000] mt-[4px]"
}, ga = {
	key: 2,
	class: "text-[13px] text-[#7356BF] font-medium mt-[4px]"
}, _a = /* @__PURE__ */ u({
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
		return (n, r) => (g(), a("div", fa, [o("div", {
			class: "grid",
			style: p({ gridTemplateColumns: `repeat(${t.headers.length}, 1fr)` })
		}, [(g(!0), a(e, null, v(t.headers, (e) => (g(), a("div", {
			key: e,
			class: "py-[8px] sm:py-[10px] text-center text-[11px] sm:text-[13px] font-medium text-[#545454] border-b border-[#e2e2e2]"
		}, S(e), 1))), 128)), (g(!0), a(e, null, v(t.days, (e, t) => (g(), a("div", {
			key: t,
			class: f([
				"relative flex flex-col items-center justify-center py-[10px] sm:py-[16px] min-h-[72px] sm:min-h-[88px] cursor-pointer transition-colors",
				t > 0 ? "border-l border-[#e2e2e2]" : "",
				e.disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-[#f6f6f6]"
			]),
			onClick: (t) => !e.disabled && s("update:modelValue", e.date)
		}, [
			o("div", { class: f(["flex items-center justify-center text-[15px] sm:text-[18px] font-semibold", c(e) ? "w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#7356BF] text-white" : "text-[#000]"]) }, S(e.date), 3),
			e.month ? (g(), a("span", ma, S(e.month), 1)) : i("", !0),
			e.price ? (g(), a("span", ha, S(e.price), 1)) : i("", !0),
			e.label ? (g(), a("span", ga, S(e.label), 1)) : i("", !0)
		], 10, pa))), 128))], 4)]));
	}
});
//#endregion
export { W as Accordion, K as Avatar, q as Badge, Q as Banner, ae as Breadcrumbs, ce as Button, de as ButtonGroup, me as Card, ye as Checkbox, Ce as Combobox, We as DataGrid, Qe as DatePicker, Ae as DetailSection, at as Drawer, pt as FileUploader, vt as FilterList, wt as FormControl, kt as Input, Lt as KpiCard, zt as Link, Wt as List, Jt as Menu, cn as MessageCard, pn as Modal, Bn as NavHeader, Jn as Notification, ur as PageHeader, hr as Pagination, vr as PhoneInput, xr as PinCode, Sr as Popover, Tr as ProgressBar, jr as ProgressSteps, Rr as Radio, Hr as Rating, Wr as SegmentControl, qr as Select, gi as Separator, hi as SidePanel, si as SidebarNav, vi as Skeleton, Ci as Slider, Ei as Spinner, ji as Stepper, Ni as Table, Ri as Tabs, zi as Tag, Vi as Textarea, Ji as Tile, Qi as TimedButton, ea as Toast, aa as Toggle, oa as Tooltip, ua as TreeView, da as Typography, _a as WeekPicker };
