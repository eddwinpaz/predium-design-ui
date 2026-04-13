import { Fragment as e, Teleport as t, Transition as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createStaticVNode as c, createTextVNode as l, createVNode as u, defineComponent as d, h as f, inject as p, isRef as m, nextTick as h, normalizeClass as g, normalizeStyle as _, onBeforeUnmount as v, onMounted as y, openBlock as b, provide as x, readonly as S, ref as C, renderList as w, renderSlot as T, resolveComponent as ee, resolveDynamicComponent as E, shallowRef as te, toDisplayString as D, unref as O, useSlots as k, watch as A, watchEffect as j, withCtx as M, withKeys as ne, withModifiers as N } from "vue";
import { Combobox as re, ComboboxButton as ie, ComboboxInput as ae, ComboboxOption as oe, ComboboxOptions as se, Dialog as ce, DialogPanel as le, DialogTitle as ue, Listbox as de, ListboxButton as fe, ListboxOption as pe, ListboxOptions as me, TransitionChild as P, TransitionRoot as he } from "@headlessui/vue";
//#region src/components/ui/Accordion.vue?vue&type=script&setup=true&lang.ts
var ge = { class: "w-full" }, _e = ["aria-expanded", "onClick"], ve = { class: "px-[14px] pb-[14px] text-[14px] text-content-secondary leading-[22px]" }, ye = /* @__PURE__ */ d({
	__name: "Accordion",
	props: {
		items: {},
		multiple: {
			type: Boolean,
			default: !1
		}
	},
	setup(t) {
		let n = t, r = C(/* @__PURE__ */ new Set());
		A(() => n.items, (e) => {
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
		return (n, r) => (b(), o("div", ge, [(b(!0), o(e, null, w(t.items, (e, t) => (b(), o("div", {
			key: t,
			class: "border-b border-border"
		}, [s("button", {
			type: "button",
			class: "flex items-center justify-between w-full px-[14px] py-[14px] text-left text-[14px] font-medium text-content-primary hover:bg-surface-hover transition-colors",
			"aria-expanded": a(t),
			onClick: (e) => i(t)
		}, [s("span", null, D(e.title), 1), (b(), o("svg", {
			class: g(["w-[16px] h-[16px] text-content-secondary transform transition-transform duration-200 flex-shrink-0", a(t) ? "rotate-180" : ""]),
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 24 24"
		}, [...r[0] ||= [s("path", {
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": "2",
			d: "M19 9l-7 7-7-7"
		}, null, -1)]], 2))], 8, _e), s("div", { class: g(["overflow-hidden transition-all duration-200", a(t) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"]) }, [s("div", ve, D(e.content), 1)], 2)]))), 128))]));
	}
}), be = ["src", "alt"], xe = /* @__PURE__ */ d({
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
		return (t, n) => (b(), o("div", {
			class: g([c.value, "rounded-full flex items-center justify-center font-semibold flex-shrink-0 select-none"]),
			style: _({
				backgroundColor: s.value,
				color: "#fff"
			})
		}, [e.src ? (b(), o("img", {
			key: 0,
			src: e.src,
			alt: e.name,
			class: "w-full h-full rounded-full object-cover"
		}, null, 8, be)) : (b(), o("span", {
			key: 1,
			class: g(l.value)
		}, D(i.value), 3))], 6));
	}
}), Se = /* @__PURE__ */ d({
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
		return (t, n) => (b(), o("span", { class: g(u.value) }, [
			e.dot ? (b(), o("span", {
				key: 0,
				class: g(d.value)
			}, null, 2)) : a("", !0),
			T(t.$slots, "default"),
			e.closeable ? (b(), o("button", {
				key: 1,
				class: "ml-0.5 inline-flex items-center justify-center rounded-full hover:bg-black/10 w-3.5 h-3.5 cursor-pointer",
				onClick: n[0] ||= N((e) => i("close"), ["stop"])
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
}), Ce = {
	class: "w-5 h-5 flex-shrink-0",
	fill: "none",
	viewBox: "0 0 24 24",
	"stroke-width": "1.5",
	stroke: "currentColor"
}, we = ["d"], Te = { class: "flex-1" }, Ee = {
	key: 0,
	class: "font-semibold"
}, De = /* @__PURE__ */ d({
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
		let n = e, i = t, c = C(!0), l = r(() => {
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
		return (t, n) => c.value ? (b(), o("div", {
			key: 0,
			class: g(["flex items-center gap-3 px-4 py-3 text-sm", l.value])
		}, [
			(b(), o("svg", Ce, [s("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: u.value
			}, null, 8, we)])),
			s("div", Te, [e.title ? (b(), o("span", Ee, D(e.title), 1)) : a("", !0), s("span", null, [T(t.$slots, "default")])]),
			e.action ? (b(), o("button", {
				key: 0,
				class: "font-medium underline text-sm",
				onClick: n[0] ||= (e) => i("action")
			}, D(e.action), 1)) : a("", !0),
			e.closeable ? (b(), o("button", {
				key: 1,
				class: "opacity-60 hover:opacity-100 ml-2",
				onClick: n[1] ||= (e) => {
					c.value = !1, i("close");
				}
			}, " ✕ ")) : a("", !0)
		], 2)) : a("", !0);
	}
}), Oe = { class: "flex items-center gap-1.5 text-sm" }, ke = {
	key: 0,
	class: "text-content-tertiary"
}, Ae = ["href"], je = /* @__PURE__ */ d({
	__name: "Breadcrumbs",
	props: {
		items: {},
		separator: { default: "/" }
	},
	setup(t) {
		return (n, r) => (b(), o("nav", Oe, [(b(!0), o(e, null, w(t.items, (n, r) => (b(), o(e, { key: r }, [r > 0 ? (b(), o("span", ke, D(t.separator), 1)) : a("", !0), n.to && r < t.items.length - 1 ? (b(), o("a", {
			key: 1,
			href: n.to,
			class: "text-accent hover:underline cursor-pointer"
		}, D(n.label), 9, Ae)) : (b(), o("span", {
			key: 2,
			class: g(r === t.items.length - 1 ? "text-content-primary font-medium" : "text-content-secondary")
		}, D(n.label), 3))], 64))), 128))]));
	}
}), Me = ["disabled"], Ne = {
	key: 0,
	class: "animate-spin h-4 w-4",
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24"
}, Pe = /* @__PURE__ */ d({
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
		let n = t, i = k();
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
		return (n, r) => (b(), o("button", {
			class: g(c.value),
			disabled: t.disabled
		}, [t.loading ? (b(), o("svg", Ne, [...r[0] ||= [s("circle", {
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
		}, null, -1)]])) : (b(), o(e, { key: 1 }, [
			T(n.$slots, "startIcon"),
			s("span", { class: g({ "mx-1": O(i).startIcon || O(i).endIcon }) }, [T(n.$slots, "default")], 2),
			T(n.$slots, "endIcon")
		], 64))], 10, Me));
	}
}), Fe = { class: "inline-flex rounded-lg border border-border overflow-hidden" }, Ie = ["disabled", "onClick"], Le = /* @__PURE__ */ d({
	__name: "ButtonGroup",
	props: {
		modelValue: {},
		options: {},
		size: { default: "default" }
	},
	emits: ["update:modelValue"],
	setup(t) {
		return (n, r) => (b(), o("div", Fe, [(b(!0), o(e, null, w(t.options, (e, r) => (b(), o("button", {
			key: e.value,
			class: g([
				"px-4 text-sm font-medium transition-colors",
				t.size === "compact" ? "py-1.5" : "py-2",
				t.modelValue === e.value ? "bg-black text-white" : "bg-bg-primary text-content-primary hover:bg-bg-secondary",
				r > 0 ? "border-l border-border" : "",
				e.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
			]),
			disabled: e.disabled,
			onClick: (t) => !e.disabled && n.$emit("update:modelValue", e.value)
		}, D(e.label), 11, Ie))), 128))]));
	}
}), Re = {
	key: 0,
	class: "px-scale600 py-scale400 border-b border-border"
}, ze = {
	key: 1,
	class: "px-scale600 py-scale300 border-t border-border bg-bg-secondary/50"
}, Be = /* @__PURE__ */ d({
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
		return (e, t) => (b(), o("div", { class: g(i.value) }, [
			e.$slots.header ? (b(), o("div", Re, [T(e.$slots, "header")])) : a("", !0),
			s("div", { class: g(n.value) }, [T(e.$slots, "default")], 2),
			e.$slots.footer ? (b(), o("div", ze, [T(e.$slots, "footer")])) : a("", !0)
		], 2));
	}
}), Ve = { class: "flex items-start pt-0.5" }, He = {
	key: 0,
	class: "w-3 h-3 text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, Ue = { class: "text-sm font-medium text-content-primary" }, We = {
	key: 0,
	class: "text-xs text-content-tertiary mt-0.5"
}, Ge = /* @__PURE__ */ d({
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
		return (t, n) => (b(), o("label", { class: g(["flex gap-3 cursor-pointer group", e.disabled ? "opacity-40 cursor-not-allowed" : ""]) }, [s("div", Ve, [s("div", {
			class: g([
				"w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-150",
				e.modelValue ? "bg-black border-black" : "border-border group-hover:border-border-hover",
				e.disabled ? "" : "cursor-pointer"
			]),
			onClick: n[0] ||= N((n) => !e.disabled && t.$emit("update:modelValue", !e.modelValue), ["prevent"])
		}, [e.modelValue ? (b(), o("svg", He, [...n[1] ||= [s("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : a("", !0)], 2)]), s("div", null, [s("span", Ue, D(e.label), 1), e.description ? (b(), o("p", We, D(e.description), 1)) : a("", !0)])], 2));
	}
}), Ke = { class: "relative" }, qe = {
	key: 0,
	class: "px-3 py-2 text-sm text-content-tertiary"
}, Je = {
	key: 0,
	class: "w-4 h-4 text-accent",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, Ye = /* @__PURE__ */ d({
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
		let d = t, f = c, p = C(""), m = r(() => {
			if (p.value === "") return d.options;
			let e = p.value.toLowerCase();
			return d.options.filter((t) => t.label.toLowerCase().includes(e));
		}), h = r(() => {
			switch (d.size) {
				case "compact": return "h-8";
				case "large": return "h-12";
				default: return "h-10";
			}
		});
		function _(e) {
			return d.options.find((t) => t.value === e)?.label ?? "";
		}
		return (r, c) => (b(), i(O(re), {
			modelValue: t.modelValue,
			"onUpdate:modelValue": c[1] ||= (e) => f("update:modelValue", e),
			disabled: t.disabled
		}, {
			default: M(() => [s("div", Ke, [s("div", { class: g([
				"flex items-center border-2 rounded-[8px] transition-colors",
				t.disabled ? "opacity-40 bg-surface-input border-transparent cursor-not-allowed" : "bg-surface-input border-transparent hover:bg-surface-input-hover focus-within:!bg-surface focus-within:!border-border-selected",
				h.value
			]) }, [u(O(ae), {
				placeholder: t.placeholder,
				displayValue: _,
				class: "w-full bg-transparent outline-none px-3 text-sm placeholder:text-content-tertiary text-content-primary",
				onChange: c[0] ||= (e) => p.value = e.target.value
			}, null, 8, ["placeholder"]), u(O(ie), { class: "px-2 text-content-tertiary hover:text-content-secondary" }, {
				default: M(() => [...c[2] ||= [s("svg", {
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
				default: M(() => [u(O(se), { class: "absolute z-50 mt-1 w-full bg-bg-primary border border-border rounded-lg shadow-lg py-1 max-h-60 overflow-auto" }, {
					default: M(() => [m.value.length === 0 ? (b(), o("div", qe, " No results found ")) : a("", !0), (b(!0), o(e, null, w(m.value, (e) => (b(), i(O(oe), {
						key: e.value,
						value: e.value
					}, {
						default: M(({ active: t, selected: n }) => [s("div", { class: g(["px-3 py-2 text-sm cursor-pointer flex items-center justify-between text-content-primary", t ? "bg-bg-secondary" : ""]) }, [l(D(e.label) + " ", 1), n ? (b(), o("svg", Je, [...c[3] ||= [s("path", { d: "M5 13l4 4L19 7" }, null, -1)]])) : a("", !0)], 2)]),
						_: 2
					}, 1032, ["value"]))), 128))]),
					_: 1
				})]),
				_: 1
			})])]),
			_: 1
		}, 8, ["modelValue", "disabled"]));
	}
}), Xe = { class: "flex items-center justify-between mb-[12px]" }, Ze = { class: "text-[15px] font-semibold text-content-primary" }, Qe = { class: "border border-border rounded-[12px] bg-surface" }, $e = { class: "text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] leading-[16px] truncate" }, et = { class: "text-[14px] text-content-primary leading-[20px] mt-[2px] break-words" }, tt = {
	key: 1,
	class: "px-[24px] py-[20px]"
}, nt = /* @__PURE__ */ d({
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
		return (n, r) => (b(), o("div", null, [s("div", Xe, [
			s("h3", Ze, D(t.title), 1),
			t.editable ? (b(), o("button", {
				key: 0,
				class: "px-[12px] py-[8px] text-[14px] font-medium text-content-primary bg-surface-input hover:bg-surface-input-hover rounded-[8px] transition-colors cursor-pointer",
				onClick: r[0] ||= (e) => n.$emit("edit")
			}, " Edit ")) : a("", !0),
			T(n.$slots, "action")
		]), s("div", Qe, [t.fields?.length ? (b(), o("div", {
			key: 0,
			class: g(["grid gap-0 px-[16px] sm:px-[24px] py-[16px] sm:py-[20px]", i.value])
		}, [(b(!0), o(e, null, w(t.fields, (e, t) => (b(), o("div", {
			key: t,
			class: "py-[8px] pr-[16px] min-w-0"
		}, [s("div", $e, D(e.label), 1), s("div", et, D(e.value), 1)]))), 128))], 2)) : a("", !0), n.$slots.default ? (b(), o("div", tt, [T(n.$slots, "default")])) : a("", !0)])]));
	}
}), rt = { class: "flex flex-wrap items-center justify-between gap-[8px] mb-[12px]" }, it = { class: "flex items-center gap-[8px]" }, at = {
	key: 0,
	class: "text-[15px] font-semibold text-content-primary"
}, ot = {
	key: 1,
	class: "text-[12px] font-medium text-content-secondary bg-surface-input px-[8px] py-[2px] rounded-full"
}, st = { class: "flex items-center gap-[6px]" }, ct = ["onClick"], lt = { class: "hidden sm:block border border-border rounded-[12px] bg-surface overflow-hidden" }, ut = { class: "overflow-x-auto" }, dt = { class: "w-full border-collapse" }, ft = { class: "border-b border-border" }, pt = {
	key: 0,
	class: "w-[44px] px-[12px] py-[10px] text-left"
}, mt = {
	key: 0,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, ht = {
	key: 1,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, gt = {
	key: 0,
	class: "w-[44px] px-[12px] py-[10px]"
}, _t = ["onClick"], vt = {
	key: 0,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, yt = { class: "sm:hidden flex flex-col gap-[8px]" }, bt = { class: "flex items-start gap-[10px]" }, xt = ["onClick"], St = {
	key: 0,
	class: "w-[11px] h-[11px] text-white",
	viewBox: "0 0 12 12",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2"
}, Ct = { class: "flex-1 min-w-0" }, wt = { class: "grid grid-cols-2 gap-x-[12px] gap-y-[8px]" }, Tt = { class: "text-[10px] font-medium text-content-tertiary uppercase tracking-[0.5px]" }, Et = { class: "text-[13px] text-content-primary mt-[1px] truncate" }, Dt = /* @__PURE__ */ d({
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
		let i = t, c = n, u = C(/* @__PURE__ */ new Set()), d = C(!1), f = r(() => i.rows.length > 0 && u.value.size === i.rows.length), p = r(() => u.value.size > 0 && u.value.size < i.rows.length), m = r(() => u.value.size > 0);
		function h() {
			f.value ? u.value = /* @__PURE__ */ new Set() : u.value = new Set(i.rows.map((e, t) => t));
		}
		function v(e) {
			let t = new Set(u.value);
			t.has(e) ? t.delete(e) : t.add(e), u.value = t;
		}
		function y(e) {
			c("bulkAction", e, Array.from(u.value)), u.value = /* @__PURE__ */ new Set();
		}
		function x() {
			d.value = !0, c("edit");
		}
		function S() {
			d.value = !1, u.value = /* @__PURE__ */ new Set();
		}
		return (n, r) => (b(), o("div", null, [
			s("div", rt, [s("div", it, [t.title ? (b(), o("h3", at, D(t.title), 1)) : a("", !0), m.value ? (b(), o("span", ot, D(u.value.size) + " selected ", 1)) : a("", !0)]), s("div", st, [m.value ? (b(), o(e, { key: 0 }, [(b(!0), o(e, null, w(t.bulkActions, (e) => (b(), o("button", {
				key: e.key,
				class: g(["px-[8px] py-[4px] text-[12px] font-medium rounded-[6px] transition-colors", e.danger ? "text-white bg-[#e11900] hover:bg-[#c41400]" : "text-content-primary bg-surface-input hover:bg-surface-input-hover"]),
				onClick: (t) => y(e.key)
			}, D(e.label) + " (" + D(u.value.size) + ") ", 11, ct))), 128)), s("button", {
				class: "px-[8px] py-[4px] text-[12px] font-medium text-content-primary hover:underline transition-colors",
				onClick: r[0] ||= (e) => u.value = /* @__PURE__ */ new Set()
			}, " Cancel ")], 64)) : (b(), o(e, { key: 1 }, [
				T(n.$slots, "headerActions"),
				t.editable && !d.value ? (b(), o("button", {
					key: 0,
					class: "hidden",
					onClick: x
				}, " Edit ")) : a("", !0),
				d.value ? (b(), o("button", {
					key: 1,
					class: "px-[10px] sm:px-[12px] py-[6px] sm:py-[8px] text-[13px] sm:text-[14px] font-medium text-white bg-btn-primary hover:bg-btn-primary-hover rounded-[8px] transition-colors",
					onClick: S
				}, " Done ")) : a("", !0)
			], 64))])]),
			s("div", lt, [s("div", ut, [s("table", dt, [s("thead", null, [s("tr", ft, [t.selectable ? (b(), o("th", pt, [s("div", {
				class: g(["w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors", f.value || p.value ? "bg-btn-primary border-border-selected" : "border-border-hover hover:border-border-hover"]),
				onClick: h
			}, [f.value ? (b(), o("svg", mt, [...r[1] ||= [s("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : p.value ? (b(), o("svg", ht, [...r[2] ||= [s("path", { d: "M2 6h8" }, null, -1)]])) : a("", !0)], 2)])) : a("", !0), (b(!0), o(e, null, w(t.columns, (e) => (b(), o("th", {
				key: e.key,
				class: "px-[12px] py-[10px] text-left text-[11px] font-medium text-content-tertiary uppercase tracking-[0.5px] whitespace-nowrap",
				style: _(e.width ? { width: e.width } : {})
			}, D(e.label), 5))), 128))])]), s("tbody", null, [(b(!0), o(e, null, w(t.rows, (i, c) => (b(), o("tr", {
				key: c,
				class: g(["border-b border-border last:border-b-0 transition-colors", u.value.has(c) ? "bg-surface-selected" : "hover:bg-surface-hover"])
			}, [t.selectable ? (b(), o("td", gt, [s("div", {
				class: g(["w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors", u.value.has(c) ? "bg-btn-primary border-border-selected" : "border-border-hover hover:border-border-hover"]),
				onClick: (e) => v(c)
			}, [u.value.has(c) ? (b(), o("svg", vt, [...r[3] ||= [s("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : a("", !0)], 10, _t)])) : a("", !0), (b(!0), o(e, null, w(t.columns, (e) => (b(), o("td", {
				key: e.key,
				class: "px-[12px] py-[10px] text-[13px] text-content-primary"
			}, [T(n.$slots, "cell-" + e.key, {
				row: i,
				value: i[e.key],
				index: c,
				editMode: d.value
			}, () => [l(D(i[e.key]), 1)])]))), 128))], 2))), 128))])])])]),
			s("div", yt, [(b(!0), o(e, null, w(t.rows, (i, c) => (b(), o("div", {
				key: c,
				class: g(["border border-border rounded-[12px] bg-surface p-[14px] transition-colors", u.value.has(c) ? "border-border-selected bg-surface-selected" : ""])
			}, [s("div", bt, [t.selectable ? (b(), o("div", {
				key: 0,
				class: g(["w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors flex-shrink-0 mt-[2px]", u.value.has(c) ? "bg-btn-primary border-border-selected" : "border-border-hover"]),
				onClick: (e) => v(c)
			}, [u.value.has(c) ? (b(), o("svg", St, [...r[4] ||= [s("path", { d: "M2 6l3 3 5-5" }, null, -1)]])) : a("", !0)], 10, xt)) : a("", !0), s("div", Ct, [s("div", wt, [(b(!0), o(e, null, w(t.columns, (e) => (b(), o("div", { key: e.key }, [s("div", Tt, D(e.label), 1), s("div", Et, [T(n.$slots, "cell-" + e.key, {
				row: i,
				value: i[e.key],
				index: c,
				editMode: d.value
			}, () => [l(D(i[e.key]), 1)])])]))), 128))])])])], 2))), 128))])
		]));
	}
}), Ot = ["disabled"], kt = {
	key: 0,
	class: "absolute z-50 mt-1 w-72 bg-bg-primary border border-border rounded-xl shadow-lg p-3"
}, At = { class: "flex items-center justify-between mb-2" }, jt = { class: "text-sm font-semibold text-content-primary" }, Mt = { class: "grid grid-cols-7 mb-1" }, Nt = { class: "grid grid-cols-7" }, Pt = ["onClick"], Ft = /* @__PURE__ */ d({
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
		let i = t, l = n, u = C(!1), d = C(null), f = /* @__PURE__ */ new Date(), p = C(f.getFullYear()), m = C(f.getMonth()), h = [
			"Su",
			"Mo",
			"Tu",
			"We",
			"Th",
			"Fr",
			"Sa"
		], _ = [
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
		], x = r(() => {
			if (!i.modelValue) return null;
			let e = i.modelValue.split("-").map(Number), t = e[0] ?? 2026, n = e[1] ?? 1, r = e[2] ?? 1;
			return {
				year: t,
				month: n - 1,
				day: r
			};
		}), S = r(() => {
			if (!i.modelValue) return "";
			let e = x.value;
			return e ? `${_[e.month]} ${e.day}, ${e.year}` : "";
		}), T = r(() => {
			let e = new Date(p.value, m.value, 1).getDay(), t = new Date(p.value, m.value + 1, 0).getDate(), n = new Date(p.value, m.value, 0).getDate(), r = [];
			for (let t = e - 1; t >= 0; t--) {
				let e = m.value - 1, i = e < 0 ? p.value - 1 : p.value;
				r.push({
					day: n - t,
					month: (e + 12) % 12,
					year: i,
					current: !1
				});
			}
			for (let e = 1; e <= t; e++) r.push({
				day: e,
				month: m.value,
				year: p.value,
				current: !0
			});
			let i = 42 - r.length;
			for (let e = 1; e <= i; e++) {
				let t = m.value + 1, n = t > 11 ? p.value + 1 : p.value;
				r.push({
					day: e,
					month: t % 12,
					year: n,
					current: !1
				});
			}
			return r;
		});
		function ee() {
			m.value === 0 ? (m.value = 11, p.value--) : m.value--;
		}
		function E() {
			m.value === 11 ? (m.value = 0, p.value++) : m.value++;
		}
		function te(e) {
			let t = String(e.month + 1).padStart(2, "0"), n = String(e.day).padStart(2, "0");
			l("update:modelValue", `${e.year}-${t}-${n}`), u.value = !1;
		}
		function O(e) {
			return x.value ? e.day === x.value.day && e.month === x.value.month && e.year === x.value.year : !1;
		}
		function k(e) {
			return e.day === f.getDate() && e.month === f.getMonth() && e.year === f.getFullYear();
		}
		function A() {
			i.disabled || (u.value = !u.value);
		}
		function j(e) {
			d.value && !d.value.contains(e.target) && (u.value = !1);
		}
		y(() => document.addEventListener("mousedown", j)), v(() => document.removeEventListener("mousedown", j));
		let M = r(() => ({
			compact: "h-8 px-3 text-sm",
			default: "h-10 px-4 text-sm",
			large: "h-12 px-5 text-base"
		})[i.size]);
		return (n, r) => (b(), o("div", {
			ref_key: "containerRef",
			ref: d,
			class: "relative inline-block w-full"
		}, [s("button", {
			type: "button",
			disabled: t.disabled,
			class: g([
				"w-full flex items-center justify-between border-2 rounded-[8px] transition-colors",
				M.value,
				t.disabled ? "opacity-40 cursor-not-allowed bg-surface-input border-transparent" : "bg-surface-input border-transparent hover:bg-surface-input-hover focus:!bg-surface focus:!border-border-selected cursor-pointer"
			]),
			onClick: A
		}, [s("span", { class: g(t.modelValue ? "text-content-primary" : "text-content-tertiary") }, D(S.value || t.placeholder), 3), r[0] ||= c("<svg class=\"w-4 h-4 text-content-secondary ml-2 shrink-0\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>", 1)], 10, Ot), u.value ? (b(), o("div", kt, [
			s("div", At, [
				s("button", {
					type: "button",
					class: "w-8 h-8 flex items-center justify-center rounded-lg text-content-primary hover:bg-bg-secondary transition-colors cursor-pointer",
					onClick: ee
				}, [...r[1] ||= [s("svg", {
					class: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [s("polyline", { points: "15 18 9 12 15 6" })], -1)]]),
				s("span", jt, D(_[m.value]) + " " + D(p.value), 1),
				s("button", {
					type: "button",
					class: "w-8 h-8 flex items-center justify-center rounded-lg text-content-primary hover:bg-bg-secondary transition-colors cursor-pointer",
					onClick: E
				}, [...r[2] ||= [s("svg", {
					class: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [s("polyline", { points: "9 18 15 12 9 6" })], -1)]])
			]),
			s("div", Mt, [(b(), o(e, null, w(h, (e) => s("div", {
				key: e,
				class: "w-9 h-9 flex items-center justify-center text-xs font-medium text-content-tertiary"
			}, D(e), 1)), 64))]),
			s("div", Nt, [(b(!0), o(e, null, w(T.value, (e, t) => (b(), o("div", {
				key: t,
				class: g([
					"w-9 h-9 flex items-center justify-center text-sm cursor-pointer rounded-full transition-colors",
					O(e) ? "bg-black text-white" : e.current ? "text-content-primary hover:bg-bg-secondary" : "text-content-tertiary hover:bg-bg-secondary",
					k(e) && !O(e) ? "font-bold" : ""
				]),
				onClick: (t) => te(e)
			}, D(e.day), 11, Pt))), 128))])
		])) : a("", !0)], 512));
	}
}), It = { class: "fixed inset-0 overflow-hidden" }, Lt = { class: "absolute inset-0 overflow-hidden" }, Rt = { class: "flex items-center justify-between px-4 py-3 border-b border-border" }, zt = { class: "text-lg font-semibold text-content-primary" }, Bt = { class: "flex-1 overflow-y-auto p-4" }, Vt = {
	key: 0,
	class: "border-t border-border px-4 py-3"
}, Ht = /* @__PURE__ */ d({
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
		return (t, c) => (b(), i(O(he), {
			show: e.open,
			as: "template"
		}, {
			default: M(() => [u(O(ce), {
				class: "relative z-50",
				onClose: c[1] ||= (e) => n("close")
			}, {
				default: M(() => [u(O(P), {
					as: "template",
					enter: "transition-opacity duration-300 ease-out",
					"enter-from": "opacity-0",
					"enter-to": "opacity-100",
					leave: "transition-opacity duration-200 ease-in",
					"leave-from": "opacity-100",
					"leave-to": "opacity-0"
				}, {
					default: M(() => [...c[2] ||= [s("div", { class: "fixed inset-0 bg-black/50" }, null, -1)]]),
					_: 1
				}), s("div", It, [s("div", Lt, [s("div", { class: g(["pointer-events-none fixed inset-y-0 flex", e.side === "right" ? "right-0" : "left-0"]) }, [u(O(P), {
					as: "template",
					enter: "transform transition duration-300 ease-out",
					"enter-from": e.side === "right" ? "translate-x-full" : "-translate-x-full",
					"enter-to": "translate-x-0",
					leave: "transform transition duration-200 ease-in",
					"leave-from": "translate-x-0",
					"leave-to": e.side === "right" ? "translate-x-full" : "-translate-x-full"
				}, {
					default: M(() => [u(O(le), { class: g(["pointer-events-auto w-screen flex flex-col bg-bg-primary shadow-xl", r[e.size]]) }, {
						default: M(() => [
							s("div", Rt, [s("h2", zt, D(e.title), 1), s("button", {
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
							s("div", Bt, [T(t.$slots, "default")]),
							t.$slots.footer ? (b(), o("div", Vt, [T(t.$slots, "footer")])) : a("", !0)
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
}), Ut = { class: "flex flex-col items-center justify-center text-center py-[48px] sm:py-[64px] px-[24px]" }, Wt = { class: "w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full bg-surface-input flex items-center justify-center mb-[20px] sm:mb-[24px]" }, Gt = {
	class: /* @__PURE__ */ g("w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] text-content-tertiary"),
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Kt = ["d"], qt = { class: "text-[18px] sm:text-[20px] font-semibold text-content-primary leading-[26px]" }, Jt = {
	key: 0,
	class: "text-[13px] sm:text-[14px] text-content-secondary mt-[8px] max-w-[400px] leading-[20px]"
}, Yt = {
	key: 1,
	class: "flex flex-col sm:flex-row items-center gap-[10px] mt-[20px] sm:mt-[24px]"
}, Xt = /* @__PURE__ */ d({
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
		return (n, r) => (b(), o("div", Ut, [
			s("div", Wt, [T(n.$slots, "icon", {}, () => [(b(), o("svg", Gt, [s("path", { d: t[e.icon || "inbox"] }, null, 8, Kt)]))])]),
			s("h3", qt, D(e.title), 1),
			e.description ? (b(), o("p", Jt, D(e.description), 1)) : a("", !0),
			e.actionLabel || e.secondaryActionLabel ? (b(), o("div", Yt, [e.actionLabel ? (b(), o("button", {
				key: 0,
				class: "px-[20px] py-[10px] text-[14px] font-medium bg-btn-primary text-btn-primary-text rounded-[8px] hover:bg-btn-primary-hover transition-colors",
				onClick: r[0] ||= (e) => n.$emit("action")
			}, D(e.actionLabel), 1)) : a("", !0), e.secondaryActionLabel ? (b(), o("button", {
				key: 1,
				class: "px-[20px] py-[10px] text-[14px] font-medium text-content-primary bg-surface-input hover:bg-surface-input-hover rounded-[8px] transition-colors",
				onClick: r[1] ||= (e) => n.$emit("secondaryAction")
			}, D(e.secondaryActionLabel), 1)) : a("", !0)])) : a("", !0)
		]));
	}
}), Zt = { class: "text-sm text-content-secondary" }, Qt = { class: "text-xs text-content-tertiary mt-1" }, $t = ["accept", "multiple"], en = {
	key: 0,
	class: "mt-3 space-y-2"
}, tn = { class: "flex-1 truncate text-content-primary" }, nn = { class: "text-content-tertiary text-xs" }, rn = ["onClick"], an = /* @__PURE__ */ d({
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
		let r = t, i = n, c = C(!1), u = C([]), d = C(null);
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
		function m(e) {
			c.value = !1, !(r.disabled || !e.dataTransfer?.files.length) && p(Array.from(e.dataTransfer.files));
		}
		function h(e) {
			let t = e.target;
			t.files?.length && (p(Array.from(t.files)), t.value = "");
		}
		function _() {
			r.disabled || d.value?.click();
		}
		function v(e) {
			u.value = u.value.filter((t, n) => n !== e);
		}
		return (n, r) => (b(), o("div", null, [s("div", {
			class: g([
				"border-2 border-dashed rounded-xl p-8 text-center transition-colors",
				c.value ? "border-accent bg-accent-light" : "border-border hover:border-content-tertiary",
				t.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
			]),
			onDragover: r[0] ||= N((e) => !t.disabled && (c.value = !0), ["prevent"]),
			onDragleave: r[1] ||= (e) => c.value = !1,
			onDrop: N(m, ["prevent"]),
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
			s("p", Zt, [l(D(t.label) + " ", 1), r[2] ||= s("span", { class: "text-accent font-medium" }, "browse", -1)]),
			s("p", Qt, " Maximum file size: " + D(f(t.maxSize)), 1),
			s("input", {
				ref_key: "fileInput",
				ref: d,
				type: "file",
				accept: t.accept,
				multiple: t.multiple,
				class: "hidden",
				onChange: h
			}, null, 40, $t)
		], 34), u.value.length ? (b(), o("div", en, [(b(!0), o(e, null, w(u.value, (e, t) => (b(), o("div", {
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
			s("span", tn, D(e.name), 1),
			s("span", nn, D(f(e.size)), 1),
			s("button", {
				class: "text-content-tertiary hover:text-negative cursor-pointer",
				onClick: N((e) => v(t), ["stop"])
			}, " ✕ ", 8, rn)
		]))), 128))])) : a("", !0)]));
	}
}), on = {
	key: 0,
	class: "text-[13px] font-semibold text-content-primary mb-[8px] px-[4px]"
}, sn = { class: "flex flex-col" }, cn = ["onClick"], ln = {
	key: 0,
	class: "absolute left-0 top-0 bottom-0 w-[3px] bg-[#276EF1]"
}, un = /* @__PURE__ */ d({
	__name: "FilterList",
	props: {
		title: {},
		modelValue: {},
		items: {}
	},
	emits: ["update:modelValue"],
	setup(t) {
		return (n, r) => (b(), o("div", null, [t.title ? (b(), o("div", on, D(t.title), 1)) : a("", !0), s("div", sn, [(b(!0), o(e, null, w(t.items, (e) => (b(), o("button", {
			key: e.value,
			class: g(["relative flex items-center justify-between px-[12px] py-[10px] text-[14px] transition-colors text-left", t.modelValue === e.value ? "text-[#276EF1] font-medium bg-surface-selected" : "text-content-secondary hover:bg-surface-input"]),
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [
			t.modelValue === e.value ? (b(), o("div", ln)) : a("", !0),
			s("span", null, D(e.label), 1),
			e.count == null ? a("", !0) : (b(), o("span", {
				key: 1,
				class: g(["text-[13px]", t.modelValue === e.value ? "text-[#276EF1]" : "text-content-tertiary"])
			}, D(e.count), 3))
		], 10, cn))), 128))])]));
	}
}), dn = { class: "mb-4" }, fn = {
	key: 0,
	class: "block text-sm font-medium text-content-primary mb-1.5"
}, pn = {
	key: 0,
	class: "text-negative ml-0.5"
}, mn = {
	key: 1,
	class: "mt-1 text-xs text-negative"
}, hn = {
	key: 2,
	class: "mt-1 text-xs text-content-tertiary"
}, gn = /* @__PURE__ */ d({
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
		return (t, n) => (b(), o("div", dn, [
			e.label ? (b(), o("label", fn, [l(D(e.label), 1), e.required ? (b(), o("span", pn, "*")) : a("", !0)])) : a("", !0),
			T(t.$slots, "default"),
			e.error ? (b(), o("p", mn, D(e.error), 1)) : e.caption ? (b(), o("p", hn, D(e.caption), 1)) : a("", !0)
		]));
	}
}), _n = { class: "relative inline-block" }, vn = /* @__PURE__ */ d({
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
		return (t, r) => (b(), o("div", _n, [T(t.$slots, "default"), e.hidden ? a("", !0) : (b(), o("div", {
			key: 0,
			class: "absolute w-[16px] h-[16px] flex items-center justify-center pointer-events-none",
			style: _(i.value)
		}, [s("div", { class: g(["w-[8px] h-[8px] rounded-full", n.value]) }, null, 2)], 4))]));
	}
}), yn = {
	key: 0,
	class: "text-content-secondary font-medium whitespace-nowrap"
}, bn = [
	"type",
	"value",
	"placeholder",
	"disabled"
], xn = ["disabled"], Sn = {
	key: 0,
	class: "text-content-secondary font-medium whitespace-nowrap"
}, Cn = /* @__PURE__ */ d({
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
		return (t, r) => (b(), o("div", { class: g([
			"relative flex items-center border-2 rounded-[8px] transition-colors",
			n.value,
			{
				"border-[#e11900] bg-surface": e.error,
				"border-[#048848] bg-surface": e.positive && !e.error,
				"bg-surface-input border-transparent hover:bg-surface-input-hover focus-within:!bg-surface focus-within:!border-border-selected": !e.error && !e.positive,
				"opacity-40 cursor-not-allowed": e.disabled
			}
		]) }, [
			e.startText || t.$slots.startEnhancer ? (b(), o("div", {
				key: 0,
				class: g(["flex items-center flex-shrink-0 text-content-tertiary", e.startText ? "pl-[14px] pr-[10px]" : "pl-scale300"])
			}, [e.startText ? (b(), o("span", yn, D(e.startText), 1)) : T(t.$slots, "startEnhancer", { key: 1 })], 2)) : a("", !0),
			s("input", {
				type: e.type,
				value: e.modelValue,
				placeholder: e.placeholder,
				disabled: e.disabled,
				class: "flex-1 px-[14px] py-0 w-full bg-transparent outline-none placeholder:text-content-tertiary text-content-primary",
				onInput: r[0] ||= (e) => t.$emit("update:modelValue", e.target.value)
			}, null, 40, bn),
			e.clearable && e.modelValue ? (b(), o("button", {
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
			}, [s("path", { d: "M18 6L6 18M6 6l12 12" })], -1)]], 8, xn)) : a("", !0),
			e.endText || t.$slots.endEnhancer ? (b(), o("div", {
				key: 2,
				class: g(["flex items-center flex-shrink-0 text-content-tertiary", e.endText ? "pr-[14px] pl-[10px]" : "pr-scale300"])
			}, [e.endText ? (b(), o("span", Sn, D(e.endText), 1)) : T(t.$slots, "endEnhancer", { key: 1 })], 2)) : a("", !0)
		], 2));
	}
}), wn = { class: "bg-bg-primary border border-border rounded-xl p-5 relative overflow-hidden" }, Tn = { class: "flex items-start justify-between" }, En = { class: "text-3xl font-bold text-content-primary tracking-tight" }, Dn = { class: "flex items-center gap-1.5 mt-1" }, On = { class: "text-sm text-content-secondary" }, kn = {
	key: 0,
	class: "w-3.5 h-3.5",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2.5"
}, An = {
	key: 1,
	class: "w-3.5 h-3.5",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2.5"
}, jn = /* @__PURE__ */ d({
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
		return (t, r) => (b(), o("div", wn, [s("div", Tn, [s("div", null, [s("div", En, D(e.value), 1), s("div", Dn, [e.dot ? (b(), o("span", {
			key: 0,
			class: g(["w-2 h-2 rounded-full", i.value])
		}, null, 2)) : a("", !0), s("span", On, D(e.label), 1)])]), e.trend ? (b(), o("div", {
			key: 0,
			class: g(["text-sm font-medium flex items-center gap-0.5", c.value])
		}, [
			e.trendDirection === "up" ? (b(), o("svg", kn, [...r[0] ||= [s("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
			}, null, -1)]])) : a("", !0),
			e.trendDirection === "down" ? (b(), o("svg", An, [...r[1] ||= [s("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
			}, null, -1)]])) : a("", !0),
			l(" " + D(e.trend), 1)
		], 2)) : a("", !0)]), s("div", { class: g(["absolute bottom-0 left-0 right-0 h-[3px]", n.value]) }, null, 2)]));
	}
}), Mn = {
	key: 0,
	class: "inline-block w-3 h-3 ml-0.5",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, Nn = /* @__PURE__ */ d({
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
		return (t, r) => (b(), i(E(e.to ? "router-link" : "a"), {
			to: e.to,
			href: e.href,
			target: e.external ? "_blank" : void 0,
			rel: e.external ? "noopener noreferrer" : void 0,
			class: g(n.value)
		}, {
			default: M(() => [T(t.$slots, "default"), e.external ? (b(), o("svg", Mn, [...r[0] ||= [s("path", {
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
}), Pn = { class: "w-full" }, Fn = { class: "text-sm font-medium text-content-primary" }, In = {
	key: 0,
	class: "text-xs text-content-tertiary mt-0.5"
}, Ln = {
	key: 0,
	class: "text-sm text-content-secondary"
}, Rn = /* @__PURE__ */ d({
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
		return (n, r) => (b(), o("ul", Pn, [(b(!0), o(e, null, w(t.items, (e, r) => (b(), o("li", {
			key: r,
			class: g([
				"px-4 py-3 flex items-center justify-between",
				t.divided && r < t.items.length - 1 ? "border-b border-border" : "",
				t.hoverable ? "hover:bg-bg-secondary transition-colors cursor-pointer" : ""
			])
		}, [T(n.$slots, "item", {
			item: e,
			index: r
		}, () => [s("div", null, [s("div", Fn, D(e.label), 1), e.description ? (b(), o("div", In, D(e.description), 1)) : a("", !0)]), e.endContent ? (b(), o("span", Ln, D(e.endContent), 1)) : a("", !0)])], 2))), 128))]));
	}
}), zn = { class: "relative inline-block text-left" }, Bn = {
	key: 0,
	class: "border-t border-border my-1"
}, Vn = ["onClick"], Hn = /* @__PURE__ */ d({
	__name: "Menu",
	props: {
		items: {},
		align: { default: "left" }
	},
	emits: ["select"],
	setup(t, { emit: i }) {
		let c = t, l = i, d = C(!1), f = r(() => c.align === "right" ? "right-0" : "left-0");
		function p(e) {
			d.value = !1;
		}
		function m() {
			d.value = !d.value, d.value && setTimeout(() => {
				document.addEventListener("click", p, { once: !0 });
			}, 0);
		}
		function h(e) {
			e.disabled || (l("select", e), d.value = !1);
		}
		return (r, i) => (b(), o("div", zn, [s("div", { onClick: N(m, ["stop"]) }, [T(r.$slots, "trigger", {}, () => [i[1] ||= s("button", { class: "px-4 py-2 text-sm font-medium bg-btn-primary text-btn-primary-text rounded-lg" }, " Menu ", -1)])]), u(n, {
			"enter-active-class": "transition duration-100 ease-out",
			"enter-from-class": "opacity-0 scale-95",
			"enter-to-class": "opacity-100 scale-100",
			"leave-active-class": "transition duration-75 ease-in",
			"leave-from-class": "opacity-100",
			"leave-to-class": "opacity-0"
		}, {
			default: M(() => [d.value ? (b(), o("div", {
				key: 0,
				class: g(["absolute z-[9999] mt-1 w-56 bg-surface border border-border rounded-xl shadow-lg py-1 focus:outline-none", f.value]),
				onClick: i[0] ||= N(() => {}, ["stop"])
			}, [(b(!0), o(e, null, w(t.items, (t, n) => (b(), o(e, { key: n }, [t.divider ? (b(), o("div", Bn)) : (b(), o("button", {
				key: 1,
				class: g([
					"w-full text-left px-3 py-2 text-sm flex items-center gap-2 transition-colors",
					t.danger ? "text-[#e11900] hover:bg-[#fef2f2]" : "text-content-primary hover:bg-surface-input",
					t.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
				]),
				onClick: (e) => h(t)
			}, D(t.label), 11, Vn))], 64))), 128))], 2)) : a("", !0)]),
			_: 1
		})]));
	}
}), Un = {
	key: 0,
	class: "rounded-[16px] overflow-hidden border border-border bg-surface"
}, Wn = {
	key: 0,
	class: "w-full h-[200px] overflow-hidden"
}, Gn = ["src", "alt"], Kn = { class: "p-[24px]" }, qn = { class: "text-[18px] font-bold text-content-primary leading-[24px]" }, Jn = { class: "text-[14px] text-content-secondary mt-[6px] leading-[20px]" }, Yn = { class: "flex items-center min-h-[120px]" }, Xn = { class: "flex-1 p-[24px]" }, Zn = { class: "text-[18px] font-bold leading-[24px]" }, Qn = { class: "text-[14px] opacity-85 mt-[4px] leading-[20px]" }, $n = {
	key: 0,
	class: "flex-shrink-0 p-[16px]"
}, er = ["src", "alt"], tr = /* @__PURE__ */ d({
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
		return (t, n) => e.layout === "vertical" ? (b(), o("div", Un, [e.image ? (b(), o("div", Wn, [s("img", {
			src: e.image,
			alt: e.heading,
			class: "w-full h-full object-cover"
		}, null, 8, Gn)])) : a("", !0), s("div", Kn, [
			s("h3", qn, D(e.heading), 1),
			s("p", Jn, D(e.description), 1),
			e.buttonLabel ? (b(), o("button", {
				key: 0,
				class: "mt-[16px] px-[16px] py-[10px] text-[14px] font-medium rounded-[8px] bg-btn-primary text-btn-primary-text hover:bg-btn-primary-hover transition-colors",
				onClick: n[0] ||= (e) => t.$emit("action")
			}, D(e.buttonLabel), 1)) : a("", !0)
		])])) : (b(), o("div", {
			key: 1,
			class: "rounded-[16px] overflow-hidden",
			style: _({
				backgroundColor: e.backgroundColor,
				color: e.color
			})
		}, [s("div", Yn, [s("div", Xn, [
			s("h3", Zn, D(e.heading), 1),
			s("p", Qn, D(e.description), 1),
			e.buttonLabel ? (b(), o("button", {
				key: 0,
				class: "mt-[16px] px-[16px] py-[10px] text-[14px] font-medium rounded-[8px] bg-surface/20 hover:bg-surface/30 transition-colors",
				onClick: n[1] ||= (e) => t.$emit("action")
			}, D(e.buttonLabel), 1)) : a("", !0)
		]), e.image ? (b(), o("div", $n, [s("img", {
			src: e.image,
			alt: e.heading,
			class: "w-[100px] h-[100px] rounded-[12px] object-cover"
		}, null, 8, er)])) : a("", !0)])], 4));
	}
}), nr = { class: "fixed inset-0 flex items-center justify-center p-4" }, rr = { class: "flex items-center justify-between px-6 pt-6 pb-0" }, ir = { class: "px-6 py-4" }, ar = {
	key: 0,
	class: "px-6 pb-6 pt-0"
}, or = /* @__PURE__ */ d({
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
		return (t, n) => (b(), i(O(he), {
			show: e.open,
			as: "template"
		}, {
			default: M(() => [u(O(ce), {
				open: e.open,
				onClose: n[0] ||= (t) => e.closeable ? c() : void 0,
				class: "relative z-50"
			}, {
				default: M(() => [u(O(P), {
					as: "template",
					enter: "transition duration-200 ease-out",
					"enter-from": "opacity-0",
					"enter-to": "opacity-100",
					leave: "transition duration-150 ease-in",
					"leave-from": "opacity-100",
					"leave-to": "opacity-0"
				}, {
					default: M(() => [...n[1] ||= [s("div", {
						class: "fixed inset-0 bg-black/50",
						"aria-hidden": "true"
					}, null, -1)]]),
					_: 1
				}), s("div", nr, [u(O(P), {
					as: "template",
					enter: "transition duration-200 ease-out",
					"enter-from": "opacity-0 scale-95",
					"enter-to": "opacity-100 scale-100",
					leave: "transition duration-150 ease-in",
					"leave-from": "opacity-100 scale-100",
					"leave-to": "opacity-0 scale-95"
				}, {
					default: M(() => [u(O(le), { class: g(["w-full rounded-xl bg-bg-primary shadow-xl", r[e.size]]) }, {
						default: M(() => [
							s("div", rr, [e.title ? (b(), i(O(ue), {
								key: 0,
								class: "text-lg font-semibold text-content-primary"
							}, {
								default: M(() => [l(D(e.title), 1)]),
								_: 1
							})) : a("", !0), e.closeable ? (b(), o("button", {
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
							s("div", ir, [T(t.$slots, "default")]),
							t.$slots.footer ? (b(), o("div", ar, [T(t.$slots, "footer")])) : a("", !0)
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
}), sr = { class: "relative z-[9999]" }, cr = { class: "relative z-[9999] flex items-center justify-between h-[52px] px-[12px] sm:px-[24px] border-b border-border bg-surface" }, lr = { class: "flex items-center gap-[8px]" }, ur = { class: "flex items-center gap-1" }, dr = { class: "text-[15px] font-bold text-content-primary tracking-tight" }, fr = {
	key: 0,
	class: "text-[15px] font-normal text-content-primary"
}, pr = {
	key: 1,
	class: "hidden sm:block ml-2 pl-2 border-l border-border"
}, mr = { class: "text-xs text-content-secondary italic" }, hr = { class: "flex items-center gap-[4px]" }, gr = {
	key: 0,
	class: "sm:hidden border-b border-border bg-surface"
}, _r = /* @__PURE__ */ d({
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
		let r = k(), i = C(!1);
		function c() {
			i.value = !i.value;
		}
		return (t, l) => (b(), o("div", sr, [s("header", cr, [s("div", lr, [e.showMenuButton || O(r)["mobile-menu"] ? (b(), o("button", {
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
		}, [s("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]])) : a("", !0), s("div", ur, [
			s("span", dr, D(e.brand), 1),
			e.brandSuffix ? (b(), o("span", fr, D(e.brandSuffix), 1)) : a("", !0),
			e.subtitle ? (b(), o("div", pr, [s("span", mr, D(e.subtitle), 1)])) : a("", !0)
		])]), s("div", hr, [T(t.$slots, "actions")])]), u(n, {
			"enter-active-class": "transition duration-150 ease-out",
			"enter-from-class": "opacity-0 -translate-y-2",
			"enter-to-class": "opacity-100 translate-y-0",
			"leave-active-class": "transition duration-100 ease-in",
			"leave-from-class": "opacity-100",
			"leave-to-class": "opacity-0 -translate-y-2"
		}, {
			default: M(() => [i.value && O(r)["mobile-menu"] ? (b(), o("div", gr, [T(t.$slots, "mobile-menu")])) : a("", !0)]),
			_: 3
		})]));
	}
}), vr = { class: "flex-shrink-0 mt-0.5" }, yr = {
	key: 0,
	class: "w-5 h-5 text-accent",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, br = {
	key: 1,
	class: "w-5 h-5 text-positive",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, xr = {
	key: 2,
	class: "w-5 h-5 text-warning",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, Sr = {
	key: 3,
	class: "w-5 h-5 text-negative",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, Cr = { class: "flex-1 min-w-0" }, wr = {
	key: 0,
	class: "font-semibold mb-0.5"
}, Tr = /* @__PURE__ */ d({
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
		let n = e, i = t, c = C(!0), l = r(() => {
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
		return (t, n) => c.value ? (b(), o("div", {
			key: 0,
			class: g(["flex items-start gap-3 px-4 py-3 rounded-lg text-sm border-l-4", l.value])
		}, [
			s("div", vr, [e.kind === "info" ? (b(), o("svg", yr, [...n[0] ||= [s("path", {
				"fill-rule": "evenodd",
				d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : e.kind === "positive" ? (b(), o("svg", br, [...n[1] ||= [s("path", {
				"fill-rule": "evenodd",
				d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : e.kind === "warning" ? (b(), o("svg", xr, [...n[2] ||= [s("path", {
				"fill-rule": "evenodd",
				d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : e.kind === "negative" ? (b(), o("svg", Sr, [...n[3] ||= [s("path", {
				"fill-rule": "evenodd",
				d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
				"clip-rule": "evenodd"
			}, null, -1)]])) : a("", !0)]),
			s("div", Cr, [e.title ? (b(), o("p", wr, D(e.title), 1)) : a("", !0), s("div", null, [T(t.$slots, "default")])]),
			e.closeable ? (b(), o("button", {
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
}), Er = { class: "px-[16px] sm:px-[24px] pt-[16px] sm:pt-[20px] pb-[12px] sm:pb-[16px] bg-surface" }, Dr = { class: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-[12px]" }, Or = {
	key: 0,
	class: "flex items-center gap-[6px] text-[13px] sm:text-[14px] mb-[4px]"
}, kr = { class: "flex items-baseline flex-wrap gap-[4px] sm:hidden" }, Ar = {
	key: 1,
	class: "text-content-tertiary"
}, jr = {
	key: 2,
	class: "text-content-primary font-medium break-words"
}, Mr = { class: "hidden sm:flex items-center gap-[6px]" }, Nr = {
	key: 0,
	class: "text-content-tertiary"
}, Pr = ["onClick"], Fr = {
	key: 2,
	class: "text-content-primary font-medium"
}, Ir = { class: "flex flex-wrap items-center gap-[8px] sm:gap-[12px]" }, Lr = { class: "text-[20px] sm:text-[24px] font-bold text-content-primary leading-[28px] sm:leading-[32px]" }, Rr = {
	key: 1,
	class: "text-[13px] text-content-tertiary mt-[2px]"
}, zr = {
	key: 0,
	class: "flex flex-wrap items-center gap-[8px] sm:mt-[4px]"
}, Br = {
	key: 0,
	class: "relative"
}, Vr = ["onClick"], Hr = {
	key: 0,
	class: "absolute right-0 top-full mt-[4px] z-50 min-w-[180px] bg-surface border border-border rounded-[12px] shadow-xl overflow-hidden"
}, Ur = ["onClick"], Wr = ["onClick"], Gr = /* @__PURE__ */ d({
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
		let n = t, i = C(null);
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
		return (n, r) => (b(), o("div", Er, [s("div", Dr, [s("div", null, [
			t.breadcrumbs?.length ? (b(), o("div", Or, [s("div", kr, [
				s("span", {
					class: "text-content-secondary hover:text-content-primary cursor-pointer",
					onClick: r[0] ||= (e) => n.$emit("breadcrumbClick", 0)
				}, D(t.breadcrumbs[0]), 1),
				t.breadcrumbs.length > 2 ? (b(), o(e, { key: 0 }, [r[1] ||= s("span", { class: "text-content-tertiary" }, "›", -1), r[2] ||= s("span", { class: "text-content-tertiary" }, "...", -1)], 64)) : a("", !0),
				t.breadcrumbs.length > 1 ? (b(), o("span", Ar, "›")) : a("", !0),
				t.breadcrumbs.length > 1 ? (b(), o("span", jr, D(t.breadcrumbs[t.breadcrumbs.length - 1]), 1)) : a("", !0)
			]), s("div", Mr, [(b(!0), o(e, null, w(t.breadcrumbs, (r, i) => (b(), o(e, { key: i }, [i > 0 ? (b(), o("span", Nr, "›")) : a("", !0), i < t.breadcrumbs.length - 1 ? (b(), o("span", {
				key: 1,
				class: "text-content-secondary hover:text-content-primary cursor-pointer",
				onClick: (e) => n.$emit("breadcrumbClick", i)
			}, D(r), 9, Pr)) : (b(), o("span", Fr, D(r), 1))], 64))), 128))])])) : a("", !0),
			s("div", Ir, [s("h1", Lr, D(t.title), 1), t.status ? (b(), o("span", {
				key: 0,
				class: g(["inline-flex items-center px-[10px] py-[2px] rounded-full text-[12px] font-medium", u.value])
			}, D(t.status), 3)) : a("", !0)]),
			t.subtitle ? (b(), o("div", Rr, D(t.subtitle), 1)) : a("", !0)
		]), t.actions?.length ? (b(), o("div", zr, [(b(!0), o(e, null, w(t.actions, (t, u) => (b(), o(e, { key: u }, [t.kind === "dropdown" ? (b(), o("div", Br, [s("button", {
			class: "flex items-center gap-[4px] px-[12px] py-[8px] text-[14px] font-medium text-content-primary hover:bg-surface-input rounded-[8px] transition-colors",
			onClick: N((e) => c(u), ["stop"])
		}, [l(D(t.label) + " ", 1), r[3] ||= s("svg", {
			class: "w-[14px] h-[14px] text-content-secondary",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2"
		}, [s("path", { d: "M6 9l6 6 6-6" })], -1)], 8, Vr), i.value === u ? (b(), o("div", Hr, [(b(!0), o(e, null, w(t.items, (e) => (b(), o("button", {
			key: e,
			class: "w-full text-left px-[16px] py-[10px] text-[14px] text-content-primary hover:bg-surface-input transition-colors",
			onClick: (r) => {
				i.value = null, n.$emit("dropdownSelect", t, e);
			}
		}, D(e), 9, Ur))), 128))])) : a("", !0)])) : (b(), o("button", {
			key: 1,
			class: g(["px-[12px] py-[8px] text-[14px] font-medium rounded-[8px] transition-colors", t.kind === "primary" ? "bg-btn-primary text-btn-primary-text hover:bg-btn-primary-hover" : "text-content-primary hover:bg-surface-input"]),
			onClick: (e) => n.$emit("actionClick", t)
		}, D(t.label), 11, Wr))], 64))), 128))])) : a("", !0)])]));
	}
}), Kr = { class: "flex flex-wrap items-center justify-between gap-3 py-3" }, qr = { class: "flex items-center gap-2" }, Jr = { class: "relative" }, Yr = {
	key: 0,
	class: "absolute bottom-full left-0 mb-1 z-[100] w-[72px] rounded-[8px] border border-border bg-surface shadow-lg py-[4px]"
}, Xr = ["onClick"], Zr = {
	key: 0,
	class: "text-[13px] text-content-tertiary hidden sm:block"
}, Qr = { class: "font-medium text-content-secondary" }, $r = { class: "font-medium text-content-secondary" }, ei = { class: "font-medium text-content-secondary" }, ti = {
	class: "flex items-center gap-1",
	role: "navigation",
	"aria-label": "Pagination"
}, ni = ["disabled"], ri = ["onClick"], ii = ["disabled"], ai = /* @__PURE__ */ d({
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
		let i = t, c = n, u = C(!1), d = r(() => {
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
		function m(e) {
			e < 1 || e > i.totalPages || e === i.currentPage || c("update:currentPage", e);
		}
		function h(e) {
			u.value = !1, c("update:pageSize", e), c("update:currentPage", 1);
		}
		let _ = r(() => i.size === "compact" ? "w-7 h-7 text-xs" : "w-8 h-8 text-sm");
		return (n, r) => (b(), o(e, null, [s("div", Kr, [
			s("div", qr, [r[5] ||= s("span", { class: "text-[13px] text-content-tertiary whitespace-nowrap" }, "Rows per page", -1), s("div", Jr, [s("button", {
				class: "flex items-center gap-1 px-[10px] py-[5px] text-[13px] font-medium text-content-primary border border-border rounded-[8px] hover:bg-surface-input transition-colors min-w-[56px] justify-between",
				onClick: r[0] ||= (e) => u.value = !u.value
			}, [l(D(t.pageSize) + " ", 1), r[4] ||= s("svg", {
				class: "w-3 h-3 text-content-tertiary",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [s("polyline", { points: "6 9 12 15 18 9" })], -1)]), u.value ? (b(), o("div", Yr, [(b(!0), o(e, null, w(t.pageSizes, (e) => (b(), o("button", {
				key: e,
				class: g(["w-full text-left px-[12px] py-[6px] text-[13px] transition-colors", e === t.pageSize ? "text-content-primary font-medium bg-surface-input" : "text-content-secondary hover:bg-surface-input"]),
				onClick: (t) => h(e)
			}, D(e), 11, Xr))), 128))])) : a("", !0)])]),
			t.totalItems > 0 ? (b(), o("span", Zr, [
				s("span", Qr, D(f.value), 1),
				r[6] ||= l(" – ", -1),
				s("span", $r, D(p.value), 1),
				r[7] ||= l(" of ", -1),
				s("span", ei, D(t.totalItems), 1)
			])) : a("", !0),
			s("nav", ti, [
				s("button", {
					type: "button",
					class: g([
						_.value,
						"flex items-center justify-center rounded-lg transition-colors",
						t.currentPage <= 1 ? "text-content-tertiary cursor-not-allowed" : "text-content-primary hover:bg-bg-secondary cursor-pointer"
					]),
					disabled: t.currentPage <= 1,
					onClick: r[1] ||= (e) => m(t.currentPage - 1)
				}, [...r[8] ||= [s("svg", {
					class: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [s("polyline", { points: "15 18 9 12 15 6" })], -1)]], 10, ni),
				(b(!0), o(e, null, w(d.value, (n, r) => (b(), o(e, { key: r }, [typeof n == "string" ? (b(), o("span", {
					key: 0,
					class: g([_.value, "flex items-center justify-center text-content-tertiary"])
				}, " … ", 2)) : (b(), o("button", {
					key: 1,
					type: "button",
					class: g([
						_.value,
						"flex items-center justify-center rounded-lg transition-colors cursor-pointer",
						n === t.currentPage ? "bg-black text-white" : "text-content-primary hover:bg-bg-secondary"
					]),
					onClick: (e) => m(n)
				}, D(n), 11, ri))], 64))), 128)),
				s("button", {
					type: "button",
					class: g([
						_.value,
						"flex items-center justify-center rounded-lg transition-colors",
						t.currentPage >= t.totalPages ? "text-content-tertiary cursor-not-allowed" : "text-content-primary hover:bg-bg-secondary cursor-pointer"
					]),
					disabled: t.currentPage >= t.totalPages,
					onClick: r[2] ||= (e) => m(t.currentPage + 1)
				}, [...r[9] ||= [s("svg", {
					class: "w-4 h-4",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [s("polyline", { points: "9 18 15 12 9 6" })], -1)]], 10, ii)
			])
		]), u.value ? (b(), o("div", {
			key: 0,
			class: "fixed inset-0 z-[99]",
			onClick: r[3] ||= (e) => u.value = !1
		})) : a("", !0)], 64));
	}
}), oi = ["value", "disabled"], si = ["value", "disabled"], ci = /* @__PURE__ */ d({
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
		return (t, n) => (b(), o("div", { class: g([
			"flex border-2 rounded-[8px] overflow-hidden transition-colors",
			e.error ? "border-[#e11900] bg-surface" : "",
			!e.error && !e.disabled ? "bg-surface-input border-transparent hover:bg-surface-input-hover focus-within:!bg-surface focus-within:!border-border-selected" : "",
			e.disabled ? "opacity-40 bg-surface-input border-transparent" : ""
		]) }, [s("select", {
			value: e.countryCode,
			disabled: e.disabled,
			class: g(["bg-bg-secondary border-r border-border px-2 text-sm font-medium outline-none cursor-pointer", a.value]),
			onChange: n[0] ||= (e) => i("update:countryCode", e.target.value)
		}, [...n[2] ||= [c("<option value=\"+1\">🇺🇸 +1</option><option value=\"+52\">🇲🇽 +52</option><option value=\"+44\">🇬🇧 +44</option><option value=\"+49\">🇩🇪 +49</option><option value=\"+33\">🇫🇷 +33</option><option value=\"+81\">🇯🇵 +81</option><option value=\"+86\">🇨🇳 +86</option><option value=\"+91\">🇮🇳 +91</option>", 8)]], 42, oi), s("input", {
			value: e.modelValue,
			disabled: e.disabled,
			type: "tel",
			placeholder: "(555) 123-4567",
			class: g(["flex-1 outline-none px-3 text-sm bg-transparent", a.value]),
			onInput: n[1] ||= (e) => i("update:modelValue", e.target.value)
		}, null, 42, si)], 2));
	}
}), li = { class: "flex gap-2" }, ui = [
	"type",
	"value",
	"disabled",
	"onInput",
	"onKeydown"
], di = /* @__PURE__ */ d({
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
		let r = t, i = n, a = C([]);
		function s(e, t) {
			let n = t.target, o = n.value;
			o.length > 1 && (n.value = o.charAt(o.length - 1));
			let s = r.modelValue.split("");
			for (s[e] = n.value; s.length <= e;) s.push("");
			let c = s.join("").slice(0, r.length);
			i("update:modelValue", c), n.value && e < r.length - 1 && h(() => {
				a.value[e + 1]?.focus();
			}), c.length === r.length && !c.includes("") && i("complete", c);
		}
		function c(e, t) {
			if (!t.target.value && e > 0) {
				let t = r.modelValue.split("");
				t[e - 1] = "", i("update:modelValue", t.join("")), h(() => {
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
			h(() => {
				a.value[n]?.focus();
			}), t.length === r.length && i("complete", t);
		}
		return (n, r) => (b(), o("div", li, [(b(!0), o(e, null, w(t.length, (e) => (b(), o("input", {
			key: e,
			ref_for: !0,
			ref_key: "inputs",
			ref: a,
			type: t.mask ? "password" : "text",
			maxlength: "1",
			inputmode: "numeric",
			value: t.modelValue[e - 1] || "",
			disabled: t.disabled,
			class: g([
				"text-center font-semibold border-2 rounded-[8px] outline-none transition-colors",
				t.size === "compact" ? "w-10 h-10 text-lg" : "w-12 h-12 text-xl",
				t.error ? "border-[#e11900] bg-surface" : "bg-surface-input border-transparent focus:!bg-surface focus:!border-border-selected",
				t.disabled ? "opacity-40 cursor-not-allowed" : ""
			]),
			onInput: (t) => s(e - 1, t),
			onKeydown: ne((t) => c(e - 1, t), ["backspace"]),
			onPaste: l
		}, null, 42, ui))), 128))]));
	}
}), fi = /* @__PURE__ */ d({
	__name: "Popover",
	props: { placement: { default: "bottom-start" } },
	setup(e) {
		let t = e, i = C(!1), c = C(null);
		function l() {
			i.value = !i.value;
		}
		function d() {
			i.value = !1;
		}
		function f(e) {
			c.value && !c.value.contains(e.target) && d();
		}
		y(() => {
			document.addEventListener("click", f);
		}), v(() => {
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
		return (e, t) => (b(), o("div", {
			ref_key: "popoverRef",
			ref: c,
			class: "relative inline-block"
		}, [s("div", {
			onClick: N(l, ["stop"]),
			class: "inline-block cursor-pointer"
		}, [T(e.$slots, "trigger", {}, () => [t[0] ||= s("button", { class: "px-4 py-2 text-sm font-medium bg-black text-white rounded-lg" }, " Open ", -1)])]), u(n, {
			"enter-active-class": "transition duration-150 ease-out",
			"enter-from-class": "opacity-0 translate-y-1",
			"enter-to-class": "opacity-100 translate-y-0",
			"leave-active-class": "transition duration-100 ease-in",
			"leave-from-class": "opacity-100",
			"leave-to-class": "opacity-0"
		}, {
			default: M(() => [i.value ? (b(), o("div", {
				key: 0,
				class: g(["absolute z-[9999] min-w-[180px] bg-surface border border-border rounded-xl shadow-xl overflow-hidden", p.value])
			}, [T(e.$slots, "default")], 2)) : a("", !0)]),
			_: 3
		})], 512));
	}
}), pi = { class: "w-full" }, mi = {
	key: 0,
	class: "text-xs text-content-secondary mt-1 inline-block"
}, hi = /* @__PURE__ */ d({
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
		return (t, r) => (b(), o("div", pi, [s("div", { class: g(["w-full rounded-full bg-bg-tertiary overflow-hidden", i.value]) }, [s("div", {
			class: g([
				"h-full rounded-full transition-all duration-500 ease-out",
				c.value,
				e.animated ? "animate-pulse" : ""
			]),
			style: _({ width: n.value + "%" })
		}, null, 6)], 2), e.showLabel ? (b(), o("span", mi, D(n.value) + "% ", 1)) : a("", !0)]));
	}
}), gi = { class: "space-y-0" }, _i = { class: "flex flex-col items-center" }, vi = {
	key: 0,
	class: "w-4 h-4",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "3"
}, yi = { key: 1 }, bi = {
	key: 1,
	class: "mt-3"
}, xi = /* @__PURE__ */ d({
	__name: "ProgressSteps",
	props: {
		steps: {},
		currentStep: { default: 0 }
	},
	setup(t) {
		return (n, r) => (b(), o("div", gi, [(b(!0), o(e, null, w(t.steps, (e, i) => (b(), o("div", {
			key: i,
			class: "relative flex gap-4"
		}, [s("div", _i, [s("div", { class: g([
			"w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 border-2 transition-colors",
			i < t.currentStep ? "bg-btn-primary border-btn-primary text-btn-primary-text" : "",
			i === t.currentStep ? "bg-btn-primary border-btn-primary text-btn-primary-text" : "",
			i > t.currentStep ? "bg-surface border-border text-content-tertiary" : ""
		]) }, [i < t.currentStep ? (b(), o("svg", vi, [...r[0] ||= [s("path", { d: "M5 13l4 4L19 7" }, null, -1)]])) : (b(), o("span", yi, D(i + 1), 1))], 2), i < t.steps.length - 1 ? (b(), o("div", {
			key: 0,
			class: g(["w-0.5 flex-1 min-h-[24px]", i < t.currentStep ? "bg-btn-primary" : "bg-border"])
		}, null, 2)) : a("", !0)]), s("div", { class: g(["pb-8 flex-1", i === t.steps.length - 1 ? "pb-0" : ""]) }, [
			s("h4", { class: g(["text-sm font-semibold", i <= t.currentStep ? "text-content-primary" : "text-content-tertiary"]) }, D(e.title), 3),
			e.description ? (b(), o("p", {
				key: 0,
				class: g(["text-xs mt-0.5", i <= t.currentStep ? "text-content-secondary" : "text-content-tertiary"])
			}, D(e.description), 3)) : a("", !0),
			i === t.currentStep ? (b(), o("div", bi, [T(n.$slots, "step-" + i, {
				step: e,
				index: i,
				isActive: !0,
				isCompleted: !1
			})])) : a("", !0)
		], 2)]))), 128))]));
	}
}), Si = ["onClick"], Ci = [
	"name",
	"value",
	"checked",
	"disabled"
], wi = { class: "mt-0.5" }, Ti = {
	key: 0,
	class: "w-2.5 h-2.5 rounded-full bg-content-primary"
}, Ei = { class: "text-sm font-medium text-content-primary" }, Di = {
	key: 0,
	class: "text-xs text-content-tertiary mt-0.5"
}, Oi = /* @__PURE__ */ d({
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
		return (n, r) => (b(), o("div", {
			class: g(["flex gap-4", t.orientation === "horizontal" ? "flex-row flex-wrap" : "flex-col"]),
			role: "radiogroup"
		}, [(b(!0), o(e, null, w(t.options, (e) => (b(), o("label", {
			key: e.value,
			class: g(["flex items-start gap-3 group", e.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"]),
			onClick: (t) => i(e)
		}, [
			s("input", {
				type: "radio",
				name: t.name,
				value: e.value,
				checked: t.modelValue === e.value,
				disabled: e.disabled,
				class: "sr-only"
			}, null, 8, Ci),
			s("div", wi, [s("div", { class: g(["w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors", t.modelValue === e.value ? "border-content-primary" : e.disabled ? "border-border" : "border-content-tertiary group-hover:border-content-secondary"]) }, [t.modelValue === e.value ? (b(), o("div", Ti)) : a("", !0)], 2)]),
			s("div", null, [s("span", Ei, D(e.label), 1), e.description ? (b(), o("p", Di, D(e.description), 1)) : a("", !0)])
		], 10, Si))), 128))], 2));
	}
}), ki = { class: "inline-flex items-center gap-0.5" }, Ai = ["onClick", "onMouseenter"], ji = ["fill"], Mi = /* @__PURE__ */ d({
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
		let i = t, a = n, c = C(0), l = r(() => {
			switch (i.size) {
				case "sm": return "w-4 h-4";
				case "lg": return "w-7 h-7";
				default: return "w-5 h-5";
			}
		});
		return (n, r) => (b(), o("div", ki, [(b(!0), o(e, null, w(t.max, (e) => (b(), o("button", {
			key: e,
			type: "button",
			class: g(["transition-colors", t.readOnly ? "cursor-default" : "cursor-pointer hover:scale-110 transition-transform"]),
			onClick: (n) => !t.readOnly && a("update:modelValue", e),
			onMouseenter: (n) => !t.readOnly && (c.value = e),
			onMouseleave: r[0] ||= (e) => !t.readOnly && (c.value = 0)
		}, [(b(), o("svg", {
			class: g(l.value),
			viewBox: "0 0 24 24",
			fill: (c.value || t.modelValue) >= e ? t.color : "#E2E2E2",
			stroke: "none"
		}, [...r[1] ||= [s("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }, null, -1)]], 10, ji))], 42, Ai))), 128))]));
	}
}), Ni = { class: "flex h-screen overflow-hidden bg-surface" }, Pi = { class: "hidden lg:flex" }, Fi = {
	key: 0,
	class: "lg:hidden fixed inset-y-0 left-0 z-[10001] flex [&_nav]:!w-[240px]"
}, Ii = { class: "flex-1 flex flex-col min-w-0 overflow-hidden" }, Li = { class: "flex-1 overflow-y-auto" }, Ri = {
	key: 0,
	class: "bg-surface sticky top-0 z-10"
}, zi = { class: "px-[12px] sm:px-[16px] md:px-[24px]" }, Bi = { class: "flex flex-col lg:flex-row lg:min-h-full" }, Vi = { class: "flex-1 min-w-0 p-[12px] sm:p-[16px] md:p-[24px]" }, Hi = { class: "flex flex-col gap-[20px] sm:gap-[24px] md:gap-[32px]" }, Ui = {
	key: 0,
	class: "w-full lg:w-[340px] xl:w-[400px] flex-shrink-0 border-t lg:border-t-0 lg:border-l border-border p-[12px] sm:p-[16px] md:p-[24px]"
}, Wi = { class: "lg:sticky lg:top-[24px]" }, Gi = /* @__PURE__ */ d({
	__name: "ScaffoldDetail",
	setup(e, { expose: t }) {
		let r = C(!1);
		function i() {
			r.value = !0;
		}
		function c() {
			r.value = !1;
		}
		return t({
			openMobileSidebar: i,
			closeMobileSidebar: c
		}), (e, t) => (b(), o("div", Ni, [
			s("div", Pi, [T(e.$slots, "sidebar")]),
			u(n, {
				"enter-active-class": "transition duration-300 ease-out",
				"enter-from-class": "-translate-x-full",
				"enter-to-class": "translate-x-0",
				"leave-active-class": "transition duration-200 ease-in",
				"leave-from-class": "translate-x-0",
				"leave-to-class": "-translate-x-full"
			}, {
				default: M(() => [r.value ? (b(), o("div", Fi, [T(e.$slots, "sidebar")])) : a("", !0)]),
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
				default: M(() => [r.value ? (b(), o("div", {
					key: 0,
					class: "lg:hidden fixed inset-0 z-[10000] bg-black/40",
					onClick: c
				})) : a("", !0)]),
				_: 1
			}),
			s("div", Ii, [T(e.$slots, "navHeader", { openSidebar: i }), s("div", Li, [
				T(e.$slots, "pageHeader"),
				e.$slots.tabs ? (b(), o("div", Ri, [s("div", zi, [T(e.$slots, "tabs")])])) : a("", !0),
				s("div", Bi, [s("div", Vi, [s("div", Hi, [T(e.$slots, "content")])]), e.$slots.rightPanel ? (b(), o("div", Ui, [s("div", Wi, [T(e.$slots, "rightPanel")])])) : a("", !0)])
			])])
		]));
	}
}), Ki = ["onClick"], qi = { class: "inline-flex items-center gap-[6px]" }, Ji = {
	key: 0,
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Yi = ["d"], Xi = { class: "flex flex-col gap-[3px] sm:hidden w-full" }, Zi = ["onClick"], Qi = { class: "inline-flex items-center gap-[6px]" }, $i = {
	key: 0,
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, ea = ["d"], ta = {
	key: 1,
	class: "inline-flex flex-wrap gap-[8px]"
}, na = ["onClick"], ra = {
	key: 0,
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, ia = ["d"], aa = /* @__PURE__ */ d({
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
		let n = t, i = C(null), c = C({}), u = r(() => n.options.findIndex((e) => e.value === n.modelValue));
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
		return y(() => {
			h(d), i.value && (f = new ResizeObserver(() => {
				d();
			}), f.observe(i.value));
		}), v(() => {
			f?.disconnect();
		}), A(() => n.modelValue, () => {
			h(d);
		}), A(() => n.options, () => {
			h(d);
		}, { deep: !0 }), (n, r) => t.variant === "filled" ? (b(), o("div", {
			key: 0,
			class: g(["segment-control flex flex-col sm:inline-flex sm:flex-row bg-surface-input p-[3px]", t.rounded ? "rounded-[12px] sm:rounded-full" : "rounded-[8px]"])
		}, [s("div", {
			ref_key: "trackRef",
			ref: i,
			class: "relative hidden sm:inline-flex gap-[3px]"
		}, [s("div", {
			class: g(["absolute top-0 left-0 bg-btn-primary shadow-sm transition-all duration-300 ease-out pointer-events-none", t.rounded ? "rounded-full" : "rounded-[6px]"]),
			style: _(c.value)
		}, null, 6), (b(!0), o(e, null, w(t.options, (e) => (b(), o("button", {
			key: e.value,
			"data-segment-btn": "",
			class: g([
				"relative z-[1] font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer",
				t.rounded ? "rounded-full" : "rounded-[6px]",
				t.size === "compact" ? "px-[10px] py-[4px] text-[12px]" : t.size === "large" ? "px-[20px] py-[10px] text-[14px]" : "px-[16px] py-[6px] text-[14px]",
				t.modelValue === e.value ? "text-btn-primary-text" : "text-content-secondary hover:text-content-primary"
			]),
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [s("span", qi, [e.icon ? (b(), o("svg", Ji, [s("path", { d: e.icon }, null, 8, Yi)])) : a("", !0), l(" " + D(e.label), 1)])], 10, Ki))), 128))], 512), s("div", Xi, [(b(!0), o(e, null, w(t.options, (e) => (b(), o("button", {
			key: "m-" + e.value,
			class: g([
				"w-full text-left font-medium transition-colors duration-200 cursor-pointer",
				t.rounded ? "rounded-[10px]" : "rounded-[6px]",
				t.size === "compact" ? "px-[10px] py-[6px] text-[12px]" : t.size === "large" ? "px-[16px] py-[10px] text-[14px]" : "px-[14px] py-[8px] text-[14px]",
				t.modelValue === e.value ? "bg-btn-primary text-btn-primary-text shadow-sm" : "text-content-secondary hover:text-content-primary"
			]),
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [s("span", Qi, [e.icon ? (b(), o("svg", $i, [s("path", { d: e.icon }, null, 8, ea)])) : a("", !0), l(" " + D(e.label), 1)])], 10, Zi))), 128))])], 2)) : (b(), o("div", ta, [(b(!0), o(e, null, w(t.options, (e) => (b(), o("button", {
			key: e.value,
			class: g([
				"inline-flex items-center gap-[6px] font-medium transition-all duration-150 whitespace-nowrap cursor-pointer border-2",
				t.rounded ? "rounded-full" : "rounded-[8px]",
				t.size === "compact" ? "px-[10px] py-[4px] text-[12px]" : t.size === "large" ? "px-[16px] py-[10px] text-[14px]" : "px-[14px] py-[6px] text-[14px]",
				t.modelValue === e.value ? "border-content-primary bg-surface text-content-primary" : "border-border bg-surface text-content-secondary hover:border-content-primary hover:text-content-primary"
			]),
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [e.icon ? (b(), o("svg", ra, [s("path", { d: e.icon }, null, 8, ia)])) : a("", !0), l(" " + D(e.label), 1)], 10, na))), 128))]));
	}
}), oa = { class: "relative" }, sa = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	class: "h-4 w-4 text-content-primary flex-shrink-0",
	viewBox: "0 0 20 20",
	fill: "currentColor"
}, ca = /* @__PURE__ */ d({
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
		return (r, c) => (b(), i(O(de), {
			"model-value": t.modelValue,
			disabled: t.disabled,
			"onUpdate:modelValue": c[0] ||= (e) => r.$emit("update:modelValue", e)
		}, {
			default: M(() => [s("div", oa, [u(O(fe), { class: g([
				"flex items-center justify-between w-full border-2 rounded-[8px] px-[14px] text-left transition-colors",
				l.value,
				{
					"border-[#e11900] bg-surface": t.error,
					"bg-surface-input border-transparent hover:bg-surface-input-hover focus:!bg-surface focus:!border-border-selected": !t.error && !t.disabled,
					"opacity-40 cursor-not-allowed bg-surface-input border-transparent": t.disabled
				}
			]) }, {
				default: M(() => [s("span", { class: g([d.value ? "text-content-primary" : "text-content-tertiary", "truncate"]) }, D(d.value || t.placeholder), 3), c[1] ||= s("svg", {
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
				default: M(() => [u(O(me), { class: "absolute z-50 mt-1 w-full bg-surface border border-border rounded-lg shadow-lg py-1 max-h-60 overflow-auto focus:outline-none" }, {
					default: M(() => [(b(!0), o(e, null, w(t.options, (e) => (b(), i(O(pe), {
						key: e.value,
						value: e.value,
						as: "template"
					}, {
						default: M(({ active: t, selected: n }) => [s("li", { class: g([
							"flex items-center justify-between px-3 py-2 cursor-pointer text-sm text-content-primary",
							t ? "bg-bg-secondary" : "",
							n ? "font-medium" : ""
						]) }, [s("span", null, D(e.label), 1), n ? (b(), o("svg", sa, [...c[2] ||= [s("path", {
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
}), la = { class: "flex items-center h-[52px] px-[14px] flex-shrink-0" }, ua = {
	key: 0,
	class: "ml-[10px] text-[14px] font-semibold truncate"
}, da = { class: "flex-1 overflow-y-auto overflow-x-hidden py-[8px] px-[8px]" }, fa = ["onClick"], pa = {
	class: "w-[20px] h-[20px] flex-shrink-0",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, ma = ["d"], ha = {
	key: 0,
	class: "flex-1 text-[14px] text-left truncate"
}, ga = {
	key: 0,
	class: "ml-[42px] mb-[4px]"
}, _a = ["onClick"], va = ["onClick"], ya = {
	class: "w-[20px] h-[20px] flex-shrink-0",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, ba = ["d"], xa = {
	key: 0,
	class: "text-[14px] truncate"
}, Sa = /* @__PURE__ */ d({
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
		let i = t, c = r(() => i.variant === "light"), l = n, u = C(i.collapsed), d = C(/* @__PURE__ */ new Set());
		i.items.forEach((e) => {
			e.children?.some((e) => e.active) && d.value.add(e.label);
		});
		function f() {
			u.value = !u.value, l("update:collapsed", u.value);
		}
		function p(e) {
			d.value.has(e) ? d.value.delete(e) : d.value.add(e);
		}
		function m(e) {
			l("navigate", e);
		}
		function h(e) {
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
		function v(e) {
			return e.icon || _[e.label] || "M4 6h16M4 12h16M4 18h16";
		}
		return (n, r) => (b(), o("nav", { class: g([
			"flex flex-col h-full transition-all duration-300 ease-in-out flex-shrink-0 overflow-hidden",
			u.value ? "w-[56px]" : "w-[240px]",
			c.value ? "bg-surface text-content-primary border-r border-border" : "bg-sidebar-bg text-sidebar-text"
		]) }, [s("div", la, [s("button", {
			class: g(["w-[32px] h-[32px] flex items-center justify-center rounded-[8px] transition-colors", c.value ? "text-content-primary hover:bg-surface-input" : "text-white hover:bg-sidebar-hover"]),
			onClick: f
		}, [...r[0] ||= [s("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round"
		}, [s("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]], 2), u.value ? a("", !0) : (b(), o("span", ua, D(t.brand), 1))]), s("div", da, [(b(!0), o(e, null, w(t.items, (t) => (b(), o(e, { key: t.label }, [t.children?.length ? (b(), o(e, { key: 0 }, [s("button", {
			class: g([
				"flex items-center w-full rounded-[8px] transition-colors gap-[12px] mb-[2px]",
				u.value ? "justify-center px-0 py-[10px]" : "px-[10px] py-[10px]",
				h(t) ? c.value ? "text-content-primary" : "text-white" : c.value ? "text-content-tertiary hover:text-content-primary hover:bg-surface-input" : "text-content-tertiary hover:text-white hover:bg-[#1a1a1a]"
			]),
			onClick: (e) => u.value ? f() : p(t.label)
		}, [
			(b(), o("svg", pa, [s("path", { d: v(t) }, null, 8, ma)])),
			u.value ? a("", !0) : (b(), o("span", ha, D(t.label), 1)),
			u.value ? a("", !0) : (b(), o("svg", {
				key: 1,
				class: g(["w-[14px] h-[14px] transition-transform duration-200 flex-shrink-0", d.value.has(t.label) ? "rotate-180" : ""]),
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [...r[1] ||= [s("path", { d: "M6 9l6 6 6-6" }, null, -1)]], 2))
		], 10, fa), !u.value && d.value.has(t.label) ? (b(), o("div", ga, [(b(!0), o(e, null, w(t.children, (e) => (b(), o("button", {
			key: e.to,
			class: g(["block w-full text-left text-[14px] py-[8px] px-[10px] rounded-[8px] transition-colors mb-[1px]", e.active ? c.value ? "text-content-primary bg-surface-input" : "text-white bg-[#333]" : c.value ? "text-content-tertiary hover:text-content-primary hover:bg-surface-input" : "text-content-tertiary hover:text-white hover:bg-[#1a1a1a]"]),
			onClick: (t) => m(e.to)
		}, D(e.label), 11, _a))), 128))])) : a("", !0)], 64)) : (b(), o("button", {
			key: 1,
			class: g([
				"flex items-center w-full rounded-[8px] transition-colors gap-[12px] mb-[2px]",
				u.value ? "justify-center px-0 py-[10px]" : "px-[10px] py-[10px]",
				t.active ? c.value ? "text-content-primary bg-surface-input" : "text-white bg-[#333]" : c.value ? "text-content-tertiary hover:text-content-primary hover:bg-surface-input" : "text-content-tertiary hover:text-white hover:bg-[#1a1a1a]"
			]),
			onClick: (e) => t.to && m(t.to)
		}, [(b(), o("svg", ya, [s("path", { d: v(t) }, null, 8, ba)])), u.value ? a("", !0) : (b(), o("span", xa, D(t.label), 1))], 10, va))], 64))), 128))])], 2));
	}
}), Ca = { class: "flex h-full w-full overflow-hidden" }, wa = {
	key: 0,
	class: "flex items-center justify-between h-[48px] px-[16px] flex-shrink-0"
}, Ta = { class: "text-[15px] font-semibold text-content-primary truncate" }, Ea = { class: "flex items-center gap-[4px]" }, Da = { class: "flex-1 overflow-y-auto overflow-x-hidden" }, Oa = {
	key: 0,
	class: "flex-shrink-0 border-r border-border flex flex-col items-center pt-[12px]"
}, ka = { class: "flex-1 min-w-0 overflow-auto" }, Aa = /* @__PURE__ */ d({
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
		let n = e, i = t, c = C(n.collapsed);
		A(() => n.collapsed, (e) => {
			c.value = e;
		});
		function l() {
			c.value = !c.value, i("update:collapsed", c.value);
		}
		let u = r(() => ({
			width: c.value ? "0px" : `${n.width}px`,
			minWidth: c.value ? "0px" : `${n.width}px`
		}));
		return (t, n) => (b(), o("div", Ca, [
			s("div", {
				class: g(["flex flex-col bg-surface overflow-hidden transition-all duration-300 ease-in-out flex-shrink-0", e.bordered ? "border-r border-border" : ""]),
				style: _(u.value)
			}, [e.title || t.$slots.headerActions || e.collapsible ? (b(), o("div", wa, [s("span", Ta, D(e.title), 1), s("div", Ea, [
				T(t.$slots, "headerActions"),
				t.$slots.headerActions === void 0 && t.$slots.add ? (b(), o("button", {
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
				e.collapsible ? (b(), o("button", {
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
			])])) : a("", !0), s("div", Da, [T(t.$slots, "sidebar")])], 6),
			c.value && e.collapsible ? (b(), o("div", Oa, [s("button", {
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
			s("div", ka, [T(t.$slots, "default")])
		]));
	}
}), ja = /* @__PURE__ */ d({
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
		return (t, r) => e.orientation === "horizontal" ? (b(), o("div", {
			key: 0,
			class: g(["border-t border-border", n.value])
		}, null, 2)) : (b(), o("div", {
			key: 1,
			class: g(["border-l border-border self-stretch", i.value])
		}, null, 2));
	}
}), Ma = {
	key: 0,
	class: "space-y-2"
}, Na = /* @__PURE__ */ d({
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
		return (n, r) => t.variant === "text" ? (b(), o("div", Ma, [(b(!0), o(e, null, w(t.rows, (e) => (b(), o("div", {
			key: e,
			class: g(["rounded bg-bg-secondary", t.animated ? "animate-pulse" : ""]),
			style: _({
				width: e === t.rows ? "60%" : t.width,
				height: t.height
			})
		}, null, 6))), 128))])) : t.variant === "circle" ? (b(), o("div", {
			key: 1,
			class: g(["rounded-full bg-bg-secondary", t.animated ? "animate-pulse" : ""]),
			style: _({
				width: t.width,
				height: t.width
			})
		}, null, 6)) : (b(), o("div", {
			key: 2,
			class: g(["rounded-lg bg-bg-secondary", t.animated ? "animate-pulse" : ""]),
			style: _({
				width: t.width,
				height: t.height
			})
		}, null, 6));
	}
}), Pa = { class: "w-full" }, Fa = { class: "flex items-center gap-3" }, Ia = [
	"min",
	"max",
	"step",
	"value",
	"disabled"
], La = {
	key: 0,
	class: "text-sm font-medium text-content-primary min-w-[3ch] text-right"
}, Ra = /* @__PURE__ */ d({
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
		return (t, n) => (b(), o("div", Pa, [s("div", Fa, [s("input", {
			type: "range",
			min: e.min,
			max: e.max,
			step: e.step,
			value: e.modelValue,
			disabled: e.disabled,
			class: "slider-input w-full h-2 rounded-full appearance-none cursor-pointer bg-bg-tertiary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-content-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-surface [&::-webkit-slider-thumb]:shadow-md disabled:opacity-40 disabled:cursor-not-allowed",
			onInput: n[0] ||= (e) => t.$emit("update:modelValue", Number(e.target.value))
		}, null, 40, Ia), e.showValue ? (b(), o("span", La, D(e.modelValue), 1)) : a("", !0)])]));
	}
}), za = ["stroke"], Ba = ["fill"], Va = /* @__PURE__ */ d({
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
		return (e, t) => (b(), o("svg", {
			class: g([n.value, "animate-spin"]),
			viewBox: "0 0 24 24",
			fill: "none"
		}, [s("circle", {
			class: "opacity-25",
			cx: "12",
			cy: "12",
			r: "10",
			stroke: i.value,
			"stroke-width": "3"
		}, null, 8, za), s("path", {
			class: "opacity-75",
			fill: i.value,
			d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
		}, null, 8, Ba)], 2));
	}
}), Ha = { class: "inline-flex items-center bg-[rgb(40,40,40)] text-white rounded-[12px] min-w-[320px] max-w-[540px] w-full sm:w-auto shadow-xl" }, Ua = {
	key: 0,
	class: "flex items-center pl-[16px] flex-shrink-0"
}, Wa = {
	key: 1,
	class: "flex-shrink-0"
}, Ga = /* @__PURE__ */ d({
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
		return (t, n) => (b(), o("div", Ha, [
			e.progress ? (b(), o("span", Ua, [u(Va, {
				size: "sm",
				color: "inverse"
			})])) : a("", !0),
			s("p", { class: g(c.value) }, D(e.message), 3),
			e.actionText ? (b(), o("div", Wa, [s("button", {
				class: "h-[48px] px-[16px] text-[16px] font-medium text-white bg-transparent rounded-full cursor-pointer hover:bg-white/10 transition-colors",
				onClick: n[0] ||= (e) => i("actionClick")
			}, D(e.actionText), 1)])) : a("", !0)
		]));
	}
}), Ka = 0, qa = Symbol("snackbar"), Ja = {
	short: 1500,
	medium: 3e3,
	long: 5e3,
	infinite: 0
};
function Ya() {
	let e = C([]), t = C(null), n = null;
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
		let a = Ja[i.duration ?? "medium"] ?? 3e3;
		a > 0 && (n = setTimeout(() => {
			o();
		}, a));
	}
	function a(r) {
		let i = {
			...r,
			id: ++Ka
		};
		if (t.value) e.value.push(i);
		else {
			t.value = i;
			let e = Ja[i.duration ?? "medium"] ?? 3e3;
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
		current: S(t),
		enqueue: a,
		dequeue: o
	};
	return x(qa, s), s;
}
function Xa() {
	let e = p(qa);
	if (!e) throw Error("useSnackbar() must be used inside a <SnackbarProvider>");
	return e;
}
//#endregion
//#region src/components/ui/SnackbarProvider.vue?vue&type=script&setup=true&lang.ts
var Za = {
	key: 0,
	class: "pointer-events-auto w-full sm:w-auto"
}, Qa = /* @__PURE__ */ d({
	__name: "SnackbarProvider",
	props: { placement: { default: "top" } },
	setup(c) {
		let l = c, { current: d, dequeue: f } = Ya();
		function p() {
			d.value?.onAction && d.value.onAction(), f();
		}
		let m = r(() => {
			let e = "fixed z-[10000] flex pointer-events-none px-[16px] sm:px-[24px]";
			return {
				top: `${e} top-[16px] left-0 right-0 justify-center`,
				topLeft: `${e} top-[16px] left-0 right-0 justify-start`,
				topRight: `${e} top-[16px] left-0 right-0 justify-end`,
				bottom: `${e} bottom-[16px] left-0 right-0 justify-center`,
				bottomLeft: `${e} bottom-[16px] left-0 right-0 justify-start`,
				bottomRight: `${e} bottom-[16px] left-0 right-0 justify-end`
			}[l.placement];
		}), h = r(() => l.placement.startsWith("top"));
		return (r, c) => (b(), o(e, null, [T(r.$slots, "default"), (b(), i(t, { to: "body" }, [s("div", { class: g(m.value) }, [u(n, {
			"enter-active-class": "transition duration-300 ease-out",
			"enter-from-class": h.value ? "-translate-y-4 opacity-0" : "translate-y-4 opacity-0",
			"enter-to-class": "translate-y-0 opacity-100",
			"leave-active-class": "transition duration-200 ease-in",
			"leave-from-class": "translate-y-0 opacity-100",
			"leave-to-class": h.value ? "-translate-y-4 opacity-0" : "translate-y-4 opacity-0"
		}, {
			default: M(() => [O(d) ? (b(), o("div", Za, [u(Ga, {
				message: O(d).message,
				"action-text": O(d).actionText,
				progress: O(d).progress,
				onActionClick: p
			}, null, 8, [
				"message",
				"action-text",
				"progress"
			])])) : a("", !0)]),
			_: 1
		}, 8, ["enter-from-class", "leave-to-class"])], 2)]))], 64));
	}
}), $a = { class: "overflow-x-auto scrollbar-none" }, eo = { class: "px-[40px] sm:px-[50px]" }, to = { class: "min-w-max mx-auto" }, no = { class: "flex items-center" }, ro = {
	key: 0,
	class: "w-[14px] h-[14px]",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "3"
}, io = { key: 1 }, ao = { class: "flex items-start" }, oo = { class: "flex-shrink-0 w-[28px] sm:w-[32px] flex justify-center" }, so = {
	key: 0,
	class: "flex-1 min-w-[40px] sm:min-w-[60px]"
}, co = /* @__PURE__ */ d({
	__name: "Stepper",
	props: {
		steps: {},
		activeStep: {}
	},
	setup(t) {
		return (n, r) => (b(), o("div", $a, [s("div", eo, [s("div", to, [s("div", no, [(b(!0), o(e, null, w(t.steps, (n, i) => (b(), o(e, { key: "c" + i }, [s("div", { class: g(["flex items-center justify-center flex-shrink-0 w-[28px] sm:w-[32px] h-[28px] sm:h-[32px] rounded-full text-[12px] sm:text-[13px] font-semibold transition-colors", i <= t.activeStep ? "bg-btn-primary text-btn-primary-text" : "border-2 border-border text-content-tertiary"]) }, [i < t.activeStep ? (b(), o("svg", ro, [...r[0] ||= [s("path", {
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			d: "M5 13l4 4L19 7"
		}, null, -1)]])) : (b(), o("span", io, D(i + 1), 1))], 2), i < t.steps.length - 1 ? (b(), o("div", {
			key: 0,
			class: g(["flex-1 h-[2px] min-w-[40px] sm:min-w-[60px]", i < t.activeStep ? "bg-btn-primary" : "bg-border"])
		}, null, 2)) : a("", !0)], 64))), 128))]), s("div", ao, [(b(!0), o(e, null, w(t.steps, (n, r) => (b(), o(e, { key: "l" + r }, [s("div", oo, [s("span", {
			class: g(["mt-[6px] text-[11px] sm:text-[12px] font-medium whitespace-nowrap text-center", r <= t.activeStep ? "text-content-primary" : "text-content-tertiary"]),
			style: {
				"margin-left": "-50px",
				"margin-right": "-50px"
			}
		}, D(n.label), 3)]), r < t.steps.length - 1 ? (b(), o("div", so)) : a("", !0)], 64))), 128))])])])]));
	}
});
//#endregion
//#region node_modules/@tanstack/table-core/build/lib/index.mjs
function F(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function I(e, t) {
	return (n) => {
		t.setState((t) => ({
			...t,
			[e]: F(n, t[e])
		}));
	};
}
function L(e) {
	return e instanceof Function;
}
function lo(e) {
	return Array.isArray(e) && e.every((e) => typeof e == "number");
}
function uo(e, t) {
	let n = [], r = (e) => {
		e.forEach((e) => {
			n.push(e);
			let i = t(e);
			i != null && i.length && r(i);
		});
	};
	return r(e), n;
}
function R(e, t, n) {
	let r = [], i;
	return (a) => {
		let o;
		n.key && n.debug && (o = Date.now());
		let s = e(a);
		if (!(s.length !== r.length || s.some((e, t) => r[t] !== e))) return i;
		r = s;
		let c;
		if (n.key && n.debug && (c = Date.now()), i = t(...s), n == null || n.onChange == null || n.onChange(i), n.key && n.debug && n != null && n.debug()) {
			let e = Math.round((Date.now() - o) * 100) / 100, t = Math.round((Date.now() - c) * 100) / 100, r = t / 16, i = (e, t) => {
				for (e = String(e); e.length < t;) e = " " + e;
				return e;
			};
			console.info(`%c⏱ ${i(t, 5)} /${i(e, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`, n?.key);
		}
		return i;
	};
}
function z(e, t, n, r) {
	return {
		debug: () => e?.debugAll ?? e[t],
		key: process.env.NODE_ENV === "development" && n,
		onChange: r
	};
}
function fo(e, t, n, r) {
	let i = {
		id: `${t.id}_${n.id}`,
		row: t,
		column: n,
		getValue: () => t.getValue(r),
		renderValue: () => i.getValue() ?? e.options.renderFallbackValue,
		getContext: R(() => [
			e,
			n,
			t,
			i
		], (e, t, n, r) => ({
			table: e,
			column: t,
			row: n,
			cell: r,
			getValue: r.getValue,
			renderValue: r.renderValue
		}), z(e.options, "debugCells", "cell.getContext"))
	};
	return e._features.forEach((r) => {
		r.createCell == null || r.createCell(i, n, t, e);
	}, {}), i;
}
function po(e, t, n, r) {
	let i = {
		...e._getDefaultColumnDef(),
		...t
	}, a = i.accessorKey, o = i.id ?? (a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) ?? (typeof i.header == "string" ? i.header : void 0), s;
	if (i.accessorFn ? s = i.accessorFn : a && (s = a.includes(".") ? (e) => {
		let t = e;
		for (let e of a.split(".")) t = t?.[e], process.env.NODE_ENV !== "production" && t === void 0 && console.warn(`"${e}" in deeply nested key "${a}" returned undefined.`);
		return t;
	} : (e) => e[i.accessorKey]), !o) throw process.env.NODE_ENV === "production" ? Error() : Error(i.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header");
	let c = {
		id: `${String(o)}`,
		accessorFn: s,
		parent: r,
		depth: n,
		columnDef: i,
		columns: [],
		getFlatColumns: R(() => [!0], () => [c, ...c.columns?.flatMap((e) => e.getFlatColumns())], z(e.options, "debugColumns", "column.getFlatColumns")),
		getLeafColumns: R(() => [e._getOrderColumnsFn()], (e) => {
			var t;
			return (t = c.columns) != null && t.length ? e(c.columns.flatMap((e) => e.getLeafColumns())) : [c];
		}, z(e.options, "debugColumns", "column.getLeafColumns"))
	};
	for (let t of e._features) t.createColumn == null || t.createColumn(c, e);
	return c;
}
var B = "debugHeaders";
function mo(e, t, n) {
	let r = {
		id: n.id ?? t.id,
		column: t,
		index: n.index,
		isPlaceholder: !!n.isPlaceholder,
		placeholderId: n.placeholderId,
		depth: n.depth,
		subHeaders: [],
		colSpan: 0,
		rowSpan: 0,
		headerGroup: null,
		getLeafHeaders: () => {
			let e = [], t = (n) => {
				n.subHeaders && n.subHeaders.length && n.subHeaders.map(t), e.push(n);
			};
			return t(r), e;
		},
		getContext: () => ({
			table: e,
			header: r,
			column: t
		})
	};
	return e._features.forEach((t) => {
		t.createHeader == null || t.createHeader(r, e);
	}), r;
}
var ho = { createTable: (e) => {
	e.getHeaderGroups = R(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left,
		e.getState().columnPinning.right
	], (t, n, r, i) => {
		let a = r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], o = i?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], s = n.filter((e) => !(r != null && r.includes(e.id)) && !(i != null && i.includes(e.id)));
		return V(t, [
			...a,
			...s,
			...o
		], e);
	}, z(e.options, B, "getHeaderGroups")), e.getCenterHeaderGroups = R(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left,
		e.getState().columnPinning.right
	], (t, n, r, i) => (n = n.filter((e) => !(r != null && r.includes(e.id)) && !(i != null && i.includes(e.id))), V(t, n, e, "center")), z(e.options, B, "getCenterHeaderGroups")), e.getLeftHeaderGroups = R(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left
	], (t, n, r) => V(t, r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], e, "left"), z(e.options, B, "getLeftHeaderGroups")), e.getRightHeaderGroups = R(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.right
	], (t, n, r) => V(t, r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], e, "right"), z(e.options, B, "getRightHeaderGroups")), e.getFooterGroups = R(() => [e.getHeaderGroups()], (e) => [...e].reverse(), z(e.options, B, "getFooterGroups")), e.getLeftFooterGroups = R(() => [e.getLeftHeaderGroups()], (e) => [...e].reverse(), z(e.options, B, "getLeftFooterGroups")), e.getCenterFooterGroups = R(() => [e.getCenterHeaderGroups()], (e) => [...e].reverse(), z(e.options, B, "getCenterFooterGroups")), e.getRightFooterGroups = R(() => [e.getRightHeaderGroups()], (e) => [...e].reverse(), z(e.options, B, "getRightFooterGroups")), e.getFlatHeaders = R(() => [e.getHeaderGroups()], (e) => e.map((e) => e.headers).flat(), z(e.options, B, "getFlatHeaders")), e.getLeftFlatHeaders = R(() => [e.getLeftHeaderGroups()], (e) => e.map((e) => e.headers).flat(), z(e.options, B, "getLeftFlatHeaders")), e.getCenterFlatHeaders = R(() => [e.getCenterHeaderGroups()], (e) => e.map((e) => e.headers).flat(), z(e.options, B, "getCenterFlatHeaders")), e.getRightFlatHeaders = R(() => [e.getRightHeaderGroups()], (e) => e.map((e) => e.headers).flat(), z(e.options, B, "getRightFlatHeaders")), e.getCenterLeafHeaders = R(() => [e.getCenterFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), z(e.options, B, "getCenterLeafHeaders")), e.getLeftLeafHeaders = R(() => [e.getLeftFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), z(e.options, B, "getLeftLeafHeaders")), e.getRightLeafHeaders = R(() => [e.getRightFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), z(e.options, B, "getRightLeafHeaders")), e.getLeafHeaders = R(() => [
		e.getLeftHeaderGroups(),
		e.getCenterHeaderGroups(),
		e.getRightHeaderGroups()
	], (e, t, n) => [
		...e[0]?.headers ?? [],
		...t[0]?.headers ?? [],
		...n[0]?.headers ?? []
	].map((e) => e.getLeafHeaders()).flat(), z(e.options, B, "getLeafHeaders"));
} };
function V(e, t, n, r) {
	let i = 0, a = function(e, t) {
		t === void 0 && (t = 1), i = Math.max(i, t), e.filter((e) => e.getIsVisible()).forEach((e) => {
			var n;
			(n = e.columns) != null && n.length && a(e.columns, t + 1);
		}, 0);
	};
	a(e);
	let o = [], s = (e, t) => {
		let i = {
			depth: t,
			id: [r, `${t}`].filter(Boolean).join("_"),
			headers: []
		}, a = [];
		e.forEach((e) => {
			let o = [...a].reverse()[0], s = e.column.depth === i.depth, c, l = !1;
			if (s && e.column.parent ? c = e.column.parent : (c = e.column, l = !0), o && o?.column === c) o.subHeaders.push(e);
			else {
				let i = mo(n, c, {
					id: [
						r,
						t,
						c.id,
						e?.id
					].filter(Boolean).join("_"),
					isPlaceholder: l,
					placeholderId: l ? `${a.filter((e) => e.column === c).length}` : void 0,
					depth: t,
					index: a.length
				});
				i.subHeaders.push(e), a.push(i);
			}
			i.headers.push(e), e.headerGroup = i;
		}), o.push(i), t > 0 && s(a, t - 1);
	};
	s(t.map((e, t) => mo(n, e, {
		depth: i,
		index: t
	})), i - 1), o.reverse();
	let c = (e) => e.filter((e) => e.column.getIsVisible()).map((e) => {
		let t = 0, n = 0, r = [0];
		e.subHeaders && e.subHeaders.length ? (r = [], c(e.subHeaders).forEach((e) => {
			let { colSpan: n, rowSpan: i } = e;
			t += n, r.push(i);
		})) : t = 1;
		let i = Math.min(...r);
		return n += i, e.colSpan = t, e.rowSpan = n, {
			colSpan: t,
			rowSpan: n
		};
	});
	return c(o[0]?.headers ?? []), o;
}
var H = (e, t, n, r, i, a, o) => {
	let s = {
		id: t,
		index: r,
		original: n,
		depth: i,
		parentId: o,
		_valuesCache: {},
		_uniqueValuesCache: {},
		getValue: (t) => {
			if (s._valuesCache.hasOwnProperty(t)) return s._valuesCache[t];
			let n = e.getColumn(t);
			if (n != null && n.accessorFn) return s._valuesCache[t] = n.accessorFn(s.original, r), s._valuesCache[t];
		},
		getUniqueValues: (t) => {
			if (s._uniqueValuesCache.hasOwnProperty(t)) return s._uniqueValuesCache[t];
			let n = e.getColumn(t);
			if (n != null && n.accessorFn) return n.columnDef.getUniqueValues ? (s._uniqueValuesCache[t] = n.columnDef.getUniqueValues(s.original, r), s._uniqueValuesCache[t]) : (s._uniqueValuesCache[t] = [s.getValue(t)], s._uniqueValuesCache[t]);
		},
		renderValue: (t) => s.getValue(t) ?? e.options.renderFallbackValue,
		subRows: a ?? [],
		getLeafRows: () => uo(s.subRows, (e) => e.subRows),
		getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
		getParentRows: () => {
			let e = [], t = s;
			for (;;) {
				let n = t.getParentRow();
				if (!n) break;
				e.push(n), t = n;
			}
			return e.reverse();
		},
		getAllCells: R(() => [e.getAllLeafColumns()], (t) => t.map((t) => fo(e, s, t, t.id)), z(e.options, "debugRows", "getAllCells")),
		_getAllCellsByColumnId: R(() => [s.getAllCells()], (e) => e.reduce((e, t) => (e[t.column.id] = t, e), {}), z(e.options, "debugRows", "getAllCellsByColumnId"))
	};
	for (let t = 0; t < e._features.length; t++) {
		let n = e._features[t];
		n == null || n.createRow == null || n.createRow(s, e);
	}
	return s;
}, go = { createColumn: (e, t) => {
	e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
		if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
	};
} }, _o = (e, t, n) => {
	var r, i;
	let a = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
	return !!(!((i = e.getValue(t)) == null || (i = i.toString()) == null || (i = i.toLowerCase()) == null) && i.includes(a));
};
_o.autoRemove = (e) => G(e);
var vo = (e, t, n) => {
	var r;
	return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
vo.autoRemove = (e) => G(e);
var yo = (e, t, n) => {
	var r;
	return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === n?.toLowerCase();
};
yo.autoRemove = (e) => G(e);
var bo = (e, t, n) => e.getValue(t)?.includes(n);
bo.autoRemove = (e) => G(e);
var xo = (e, t, n) => !n.some((n) => {
	var r;
	return !((r = e.getValue(t)) != null && r.includes(n));
});
xo.autoRemove = (e) => G(e) || !(e != null && e.length);
var So = (e, t, n) => n.some((n) => e.getValue(t)?.includes(n));
So.autoRemove = (e) => G(e) || !(e != null && e.length);
var Co = (e, t, n) => e.getValue(t) === n;
Co.autoRemove = (e) => G(e);
var wo = (e, t, n) => e.getValue(t) == n;
wo.autoRemove = (e) => G(e);
var U = (e, t, n) => {
	let [r, i] = n, a = e.getValue(t);
	return a >= r && a <= i;
};
U.resolveFilterValue = (e) => {
	let [t, n] = e, r = typeof t == "number" ? t : parseFloat(t), i = typeof n == "number" ? n : parseFloat(n), a = t === null || Number.isNaN(r) ? -Infinity : r, o = n === null || Number.isNaN(i) ? Infinity : i;
	if (a > o) {
		let e = a;
		a = o, o = e;
	}
	return [a, o];
}, U.autoRemove = (e) => G(e) || G(e[0]) && G(e[1]);
var W = {
	includesString: _o,
	includesStringSensitive: vo,
	equalsString: yo,
	arrIncludes: bo,
	arrIncludesAll: xo,
	arrIncludesSome: So,
	equals: Co,
	weakEquals: wo,
	inNumberRange: U
};
function G(e) {
	return e == null || e === "";
}
var To = {
	getDefaultColumnDef: () => ({ filterFn: "auto" }),
	getInitialState: (e) => ({
		columnFilters: [],
		...e
	}),
	getDefaultOptions: (e) => ({
		onColumnFiltersChange: I("columnFilters", e),
		filterFromLeafRows: !1,
		maxLeafRowFilterDepth: 100
	}),
	createColumn: (e, t) => {
		e.getAutoFilterFn = () => {
			let n = t.getCoreRowModel().flatRows[0]?.getValue(e.id);
			return typeof n == "string" ? W.includesString : typeof n == "number" ? W.inNumberRange : typeof n == "boolean" || typeof n == "object" && n ? W.equals : Array.isArray(n) ? W.arrIncludes : W.weakEquals;
		}, e.getFilterFn = () => L(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : t.options.filterFns?.[e.columnDef.filterFn] ?? W[e.columnDef.filterFn], e.getCanFilter = () => (e.columnDef.enableColumnFilter ?? !0) && (t.options.enableColumnFilters ?? !0) && (t.options.enableFilters ?? !0) && !!e.accessorFn, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
			var n;
			return (n = t.getState().columnFilters) == null || (n = n.find((t) => t.id === e.id)) == null ? void 0 : n.value;
		}, e.getFilterIndex = () => t.getState().columnFilters?.findIndex((t) => t.id === e.id) ?? -1, e.setFilterValue = (n) => {
			t.setColumnFilters((t) => {
				let r = e.getFilterFn(), i = t?.find((t) => t.id === e.id), a = F(n, i ? i.value : void 0);
				if (Eo(r, a, e)) return t?.filter((t) => t.id !== e.id) ?? [];
				let o = {
					id: e.id,
					value: a
				};
				return i ? t?.map((t) => t.id === e.id ? o : t) ?? [] : t != null && t.length ? [...t, o] : [o];
			});
		};
	},
	createRow: (e, t) => {
		e.columnFilters = {}, e.columnFiltersMeta = {};
	},
	createTable: (e) => {
		e.setColumnFilters = (t) => {
			let n = e.getAllLeafColumns();
			e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange((e) => F(t, e)?.filter((e) => {
				let t = n.find((t) => t.id === e.id);
				return !(t && Eo(t.getFilterFn(), e.value, t));
			}));
		}, e.resetColumnFilters = (t) => {
			e.setColumnFilters(t ? [] : e.initialState?.columnFilters ?? []);
		}, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
	}
};
function Eo(e, t, n) {
	return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || t === void 0 || typeof t == "string" && !t;
}
var Do = {
	sum: (e, t, n) => n.reduce((t, n) => {
		let r = n.getValue(e);
		return t + (typeof r == "number" ? r : 0);
	}, 0),
	min: (e, t, n) => {
		let r;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r > n || r === void 0 && n >= n) && (r = n);
		}), r;
	},
	max: (e, t, n) => {
		let r;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r < n || r === void 0 && n >= n) && (r = n);
		}), r;
	},
	extent: (e, t, n) => {
		let r, i;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r === void 0 ? n >= n && (r = i = n) : (r > n && (r = n), i < n && (i = n)));
		}), [r, i];
	},
	mean: (e, t) => {
		let n = 0, r = 0;
		if (t.forEach((t) => {
			let i = t.getValue(e);
			i != null && (i = +i) >= i && (++n, r += i);
		}), n) return r / n;
	},
	median: (e, t) => {
		if (!t.length) return;
		let n = t.map((t) => t.getValue(e));
		if (!lo(n)) return;
		if (n.length === 1) return n[0];
		let r = Math.floor(n.length / 2), i = n.sort((e, t) => e - t);
		return n.length % 2 == 0 ? (i[r - 1] + i[r]) / 2 : i[r];
	},
	unique: (e, t) => Array.from(new Set(t.map((t) => t.getValue(e))).values()),
	uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
	count: (e, t) => t.length
}, Oo = {
	getDefaultColumnDef: () => ({
		aggregatedCell: (e) => {
			var t;
			return ((t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) ?? null;
		},
		aggregationFn: "auto"
	}),
	getInitialState: (e) => ({
		grouping: [],
		...e
	}),
	getDefaultOptions: (e) => ({
		onGroupingChange: I("grouping", e),
		groupedColumnMode: "reorder"
	}),
	createColumn: (e, t) => {
		e.toggleGrouping = () => {
			t.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((t) => t !== e.id) : [...t ?? [], e.id]);
		}, e.getCanGroup = () => (e.columnDef.enableGrouping ?? !0) && (t.options.enableGrouping ?? !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue), e.getIsGrouped = () => t.getState().grouping?.includes(e.id), e.getGroupedIndex = () => t.getState().grouping?.indexOf(e.id), e.getToggleGroupingHandler = () => {
			let t = e.getCanGroup();
			return () => {
				t && e.toggleGrouping();
			};
		}, e.getAutoAggregationFn = () => {
			let n = t.getCoreRowModel().flatRows[0]?.getValue(e.id);
			if (typeof n == "number") return Do.sum;
			if (Object.prototype.toString.call(n) === "[object Date]") return Do.extent;
		}, e.getAggregationFn = () => {
			if (!e) throw Error();
			return L(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : t.options.aggregationFns?.[e.columnDef.aggregationFn] ?? Do[e.columnDef.aggregationFn];
		};
	},
	createTable: (e) => {
		e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
			e.setGrouping(t ? [] : e.initialState?.grouping ?? []);
		}, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
	},
	createRow: (e, t) => {
		e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
			if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
			let r = t.getColumn(n);
			return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
		}, e._groupingValuesCache = {};
	},
	createCell: (e, t, n, r) => {
		e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
			var t;
			return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((t = n.subRows) != null && t.length);
		};
	}
};
function ko(e, t, n) {
	if (!(t != null && t.length) || !n) return e;
	let r = e.filter((e) => !t.includes(e.id));
	return n === "remove" ? r : [...t.map((t) => e.find((e) => e.id === t)).filter(Boolean), ...r];
}
var Ao = {
	getInitialState: (e) => ({
		columnOrder: [],
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnOrderChange: I("columnOrder", e) }),
	createColumn: (e, t) => {
		e.getIndex = R((e) => [J(t, e)], (t) => t.findIndex((t) => t.id === e.id), z(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => J(t, n)[0]?.id === e.id, e.getIsLastColumn = (n) => {
			let r = J(t, n);
			return r[r.length - 1]?.id === e.id;
		};
	},
	createTable: (e) => {
		e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
			e.setColumnOrder(t ? [] : e.initialState.columnOrder ?? []);
		}, e._getOrderColumnsFn = R(() => [
			e.getState().columnOrder,
			e.getState().grouping,
			e.options.groupedColumnMode
		], (e, t, n) => (r) => {
			let i = [];
			if (!(e != null && e.length)) i = r;
			else {
				let t = [...e], n = [...r];
				for (; n.length && t.length;) {
					let e = t.shift(), r = n.findIndex((t) => t.id === e);
					r > -1 && i.push(n.splice(r, 1)[0]);
				}
				i = [...i, ...n];
			}
			return ko(i, t, n);
		}, z(e.options, "debugTable", "_getOrderColumnsFn"));
	}
}, jo = () => ({
	left: [],
	right: []
}), Mo = {
	getInitialState: (e) => ({
		columnPinning: jo(),
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnPinningChange: I("columnPinning", e) }),
	createColumn: (e, t) => {
		e.pin = (n) => {
			let r = e.getLeafColumns().map((e) => e.id).filter(Boolean);
			t.setColumnPinning((e) => n === "right" ? {
				left: (e?.left ?? []).filter((e) => !(r != null && r.includes(e))),
				right: [...(e?.right ?? []).filter((e) => !(r != null && r.includes(e))), ...r]
			} : n === "left" ? {
				left: [...(e?.left ?? []).filter((e) => !(r != null && r.includes(e))), ...r],
				right: (e?.right ?? []).filter((e) => !(r != null && r.includes(e)))
			} : {
				left: (e?.left ?? []).filter((e) => !(r != null && r.includes(e))),
				right: (e?.right ?? []).filter((e) => !(r != null && r.includes(e)))
			});
		}, e.getCanPin = () => e.getLeafColumns().some((e) => (e.columnDef.enablePinning ?? !0) && (t.options.enableColumnPinning ?? t.options.enablePinning ?? !0)), e.getIsPinned = () => {
			let n = e.getLeafColumns().map((e) => e.id), { left: r, right: i } = t.getState().columnPinning, a = n.some((e) => r?.includes(e)), o = n.some((e) => i?.includes(e));
			return a ? "left" : o ? "right" : !1;
		}, e.getPinnedIndex = () => {
			var n;
			let r = e.getIsPinned();
			return r ? ((n = t.getState().columnPinning) == null || (n = n[r]) == null ? void 0 : n.indexOf(e.id)) ?? -1 : 0;
		};
	},
	createRow: (e, t) => {
		e.getCenterVisibleCells = R(() => [
			e._getAllVisibleCells(),
			t.getState().columnPinning.left,
			t.getState().columnPinning.right
		], (e, t, n) => {
			let r = [...t ?? [], ...n ?? []];
			return e.filter((e) => !r.includes(e.column.id));
		}, z(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = R(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (e, t) => (t ?? []).map((t) => e.find((e) => e.column.id === t)).filter(Boolean).map((e) => ({
			...e,
			position: "left"
		})), z(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = R(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (e, t) => (t ?? []).map((t) => e.find((e) => e.column.id === t)).filter(Boolean).map((e) => ({
			...e,
			position: "right"
		})), z(t.options, "debugRows", "getRightVisibleCells"));
	},
	createTable: (e) => {
		e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => e.setColumnPinning(t ? jo() : e.initialState?.columnPinning ?? jo()), e.getIsSomeColumnsPinned = (t) => {
			let n = e.getState().columnPinning;
			return t ? !!n[t]?.length : !!(n.left?.length || n.right?.length);
		}, e.getLeftLeafColumns = R(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (e, t) => (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean), z(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = R(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (e, t) => (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean), z(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = R(() => [
			e.getAllLeafColumns(),
			e.getState().columnPinning.left,
			e.getState().columnPinning.right
		], (e, t, n) => {
			let r = [...t ?? [], ...n ?? []];
			return e.filter((e) => !r.includes(e.id));
		}, z(e.options, "debugColumns", "getCenterLeafColumns"));
	}
};
function No(e) {
	return e || (typeof document < "u" ? document : null);
}
var K = {
	size: 150,
	minSize: 20,
	maxSize: 2 ** 53 - 1
}, Po = () => ({
	startOffset: null,
	startSize: null,
	deltaOffset: null,
	deltaPercentage: null,
	isResizingColumn: !1,
	columnSizingStart: []
}), Fo = {
	getDefaultColumnDef: () => K,
	getInitialState: (e) => ({
		columnSizing: {},
		columnSizingInfo: Po(),
		...e
	}),
	getDefaultOptions: (e) => ({
		columnResizeMode: "onEnd",
		columnResizeDirection: "ltr",
		onColumnSizingChange: I("columnSizing", e),
		onColumnSizingInfoChange: I("columnSizingInfo", e)
	}),
	createColumn: (e, t) => {
		e.getSize = () => {
			let n = t.getState().columnSizing[e.id];
			return Math.min(Math.max(e.columnDef.minSize ?? K.minSize, n ?? e.columnDef.size ?? K.size), e.columnDef.maxSize ?? K.maxSize);
		}, e.getStart = R((e) => [
			e,
			J(t, e),
			t.getState().columnSizing
		], (t, n) => n.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0), z(t.options, "debugColumns", "getStart")), e.getAfter = R((e) => [
			e,
			J(t, e),
			t.getState().columnSizing
		], (t, n) => n.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0), z(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
			t.setColumnSizing((t) => {
				let { [e.id]: n, ...r } = t;
				return r;
			});
		}, e.getCanResize = () => (e.columnDef.enableResizing ?? !0) && (t.options.enableColumnResizing ?? !0), e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
	},
	createHeader: (e, t) => {
		e.getSize = () => {
			let t = 0, n = (e) => {
				e.subHeaders.length ? e.subHeaders.forEach(n) : t += e.column.getSize() ?? 0;
			};
			return n(e), t;
		}, e.getStart = () => {
			if (e.index > 0) {
				let t = e.headerGroup.headers[e.index - 1];
				return t.getStart() + t.getSize();
			}
			return 0;
		}, e.getResizeHandler = (n) => {
			let r = t.getColumn(e.column.id), i = r?.getCanResize();
			return (a) => {
				if (!r || !i || (a.persist == null || a.persist(), Lo(a) && a.touches && a.touches.length > 1)) return;
				let o = e.getSize(), s = e ? e.getLeafHeaders().map((e) => [e.column.id, e.column.getSize()]) : [[r.id, r.getSize()]], c = Lo(a) ? Math.round(a.touches[0].clientX) : a.clientX, l = {}, u = (e, n) => {
					typeof n == "number" && (t.setColumnSizingInfo((e) => {
						let r = t.options.columnResizeDirection === "rtl" ? -1 : 1, i = (n - (e?.startOffset ?? 0)) * r, a = Math.max(i / (e?.startSize ?? 0), -.999999);
						return e.columnSizingStart.forEach((e) => {
							let [t, n] = e;
							l[t] = Math.round(Math.max(n + n * a, 0) * 100) / 100;
						}), {
							...e,
							deltaOffset: i,
							deltaPercentage: a
						};
					}), (t.options.columnResizeMode === "onChange" || e === "end") && t.setColumnSizing((e) => ({
						...e,
						...l
					})));
				}, d = (e) => u("move", e), f = (e) => {
					u("end", e), t.setColumnSizingInfo((e) => ({
						...e,
						isResizingColumn: !1,
						startOffset: null,
						startSize: null,
						deltaOffset: null,
						deltaPercentage: null,
						columnSizingStart: []
					}));
				}, p = No(n), m = {
					moveHandler: (e) => d(e.clientX),
					upHandler: (e) => {
						p?.removeEventListener("mousemove", m.moveHandler), p?.removeEventListener("mouseup", m.upHandler), f(e.clientX);
					}
				}, h = {
					moveHandler: (e) => (e.cancelable && (e.preventDefault(), e.stopPropagation()), d(e.touches[0].clientX), !1),
					upHandler: (e) => {
						p?.removeEventListener("touchmove", h.moveHandler), p?.removeEventListener("touchend", h.upHandler), e.cancelable && (e.preventDefault(), e.stopPropagation()), f(e.touches[0]?.clientX);
					}
				}, g = Io() ? { passive: !1 } : !1;
				Lo(a) ? (p?.addEventListener("touchmove", h.moveHandler, g), p?.addEventListener("touchend", h.upHandler, g)) : (p?.addEventListener("mousemove", m.moveHandler, g), p?.addEventListener("mouseup", m.upHandler, g)), t.setColumnSizingInfo((e) => ({
					...e,
					startOffset: c,
					startSize: o,
					deltaOffset: 0,
					deltaPercentage: 0,
					columnSizingStart: s,
					isResizingColumn: r.id
				}));
			};
		};
	},
	createTable: (e) => {
		e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
			e.setColumnSizing(t ? {} : e.initialState.columnSizing ?? {});
		}, e.resetHeaderSizeInfo = (t) => {
			e.setColumnSizingInfo(t ? Po() : e.initialState.columnSizingInfo ?? Po());
		}, e.getTotalSize = () => e.getHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getLeftTotalSize = () => e.getLeftHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getCenterTotalSize = () => e.getCenterHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getRightTotalSize = () => e.getRightHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0;
	}
}, q = null;
function Io() {
	if (typeof q == "boolean") return q;
	let e = !1;
	try {
		let t = { get passive() {
			return e = !0, !1;
		} }, n = () => {};
		window.addEventListener("test", n, t), window.removeEventListener("test", n);
	} catch {
		e = !1;
	}
	return q = e, q;
}
function Lo(e) {
	return e.type === "touchstart";
}
var Ro = {
	getInitialState: (e) => ({
		columnVisibility: {},
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnVisibilityChange: I("columnVisibility", e) }),
	createColumn: (e, t) => {
		e.toggleVisibility = (n) => {
			e.getCanHide() && t.setColumnVisibility((t) => ({
				...t,
				[e.id]: n ?? !e.getIsVisible()
			}));
		}, e.getIsVisible = () => {
			let n = e.columns;
			return (n.length ? n.some((e) => e.getIsVisible()) : t.getState().columnVisibility?.[e.id]) ?? !0;
		}, e.getCanHide = () => (e.columnDef.enableHiding ?? !0) && (t.options.enableHiding ?? !0), e.getToggleVisibilityHandler = () => (t) => {
			e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
		};
	},
	createRow: (e, t) => {
		e._getAllVisibleCells = R(() => [e.getAllCells(), t.getState().columnVisibility], (e) => e.filter((e) => e.column.getIsVisible()), z(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = R(() => [
			e.getLeftVisibleCells(),
			e.getCenterVisibleCells(),
			e.getRightVisibleCells()
		], (e, t, n) => [
			...e,
			...t,
			...n
		], z(t.options, "debugRows", "getVisibleCells"));
	},
	createTable: (e) => {
		let t = (t, n) => R(() => [n(), n().filter((e) => e.getIsVisible()).map((e) => e.id).join("_")], (e) => e.filter((e) => e.getIsVisible == null ? void 0 : e.getIsVisible()), z(e.options, "debugColumns", t));
		e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
			e.setColumnVisibility(t ? {} : e.initialState.columnVisibility ?? {});
		}, e.toggleAllColumnsVisible = (t) => {
			t ??= !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((e, n) => ({
				...e,
				[n.id]: t || !(n.getCanHide != null && n.getCanHide())
			}), {}));
		}, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((e) => !(e.getIsVisible != null && e.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((e) => e.getIsVisible == null ? void 0 : e.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
			e.toggleAllColumnsVisible(t.target?.checked);
		};
	}
};
function J(e, t) {
	return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
var zo = { createTable: (e) => {
	e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
		if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
	};
} }, Bo = {
	getInitialState: (e) => ({
		globalFilter: void 0,
		...e
	}),
	getDefaultOptions: (e) => ({
		onGlobalFilterChange: I("globalFilter", e),
		globalFilterFn: "auto",
		getColumnCanGlobalFilter: (t) => {
			var n;
			let r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
			return typeof r == "string" || typeof r == "number";
		}
	}),
	createColumn: (e, t) => {
		e.getCanGlobalFilter = () => (e.columnDef.enableGlobalFilter ?? !0) && (t.options.enableGlobalFilter ?? !0) && (t.options.enableFilters ?? !0) && ((t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) ?? !0) && !!e.accessorFn;
	},
	createTable: (e) => {
		e.getGlobalAutoFilterFn = () => W.includesString, e.getGlobalFilterFn = () => {
			let { globalFilterFn: t } = e.options;
			return L(t) ? t : t === "auto" ? e.getGlobalAutoFilterFn() : e.options.filterFns?.[t] ?? W[t];
		}, e.setGlobalFilter = (t) => {
			e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
		}, e.resetGlobalFilter = (t) => {
			e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
		};
	}
}, Vo = {
	getInitialState: (e) => ({
		expanded: {},
		...e
	}),
	getDefaultOptions: (e) => ({
		onExpandedChange: I("expanded", e),
		paginateExpandedRows: !0
	}),
	createTable: (e) => {
		let t = !1, n = !1;
		e._autoResetExpanded = () => {
			if (!t) {
				e._queue(() => {
					t = !0;
				});
				return;
			}
			if (e.options.autoResetAll ?? e.options.autoResetExpanded ?? !e.options.manualExpanding) {
				if (n) return;
				n = !0, e._queue(() => {
					e.resetExpanded(), n = !1;
				});
			}
		}, e.setExpanded = (t) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(t), e.toggleAllRowsExpanded = (t) => {
			t ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
		}, e.resetExpanded = (t) => {
			e.setExpanded(t ? {} : e.initialState?.expanded ?? {});
		}, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((e) => e.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (t) => {
			t.persist == null || t.persist(), e.toggleAllRowsExpanded();
		}, e.getIsSomeRowsExpanded = () => {
			let t = e.getState().expanded;
			return t === !0 || Object.values(t).some(Boolean);
		}, e.getIsAllRowsExpanded = () => {
			let t = e.getState().expanded;
			return typeof t == "boolean" ? t === !0 : !(!Object.keys(t).length || e.getRowModel().flatRows.some((e) => !e.getIsExpanded()));
		}, e.getExpandedDepth = () => {
			let t = 0;
			return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((e) => {
				let n = e.split(".");
				t = Math.max(t, n.length);
			}), t;
		}, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
	},
	createRow: (e, t) => {
		e.toggleExpanded = (n) => {
			t.setExpanded((r) => {
				let i = r === !0 ? !0 : !!(r != null && r[e.id]), a = {};
				if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
					a[e] = !0;
				}) : a = r, n ??= !i, !i && n) return {
					...a,
					[e.id]: !0
				};
				if (i && !n) {
					let { [e.id]: t, ...n } = a;
					return n;
				}
				return r;
			});
		}, e.getIsExpanded = () => {
			let n = t.getState().expanded;
			return !!((t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) ?? (n === !0 || n?.[e.id]));
		}, e.getCanExpand = () => {
			var n;
			return (t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) ?? ((t.options.enableExpanding ?? !0) && !!((n = e.subRows) != null && n.length));
		}, e.getIsAllParentsExpanded = () => {
			let n = !0, r = e;
			for (; n && r.parentId;) r = t.getRow(r.parentId, !0), n = r.getIsExpanded();
			return n;
		}, e.getToggleExpandedHandler = () => {
			let t = e.getCanExpand();
			return () => {
				t && e.toggleExpanded();
			};
		};
	}
}, Ho = 0, Uo = 10, Wo = () => ({
	pageIndex: Ho,
	pageSize: Uo
}), Go = {
	getInitialState: (e) => ({
		...e,
		pagination: {
			...Wo(),
			...e?.pagination
		}
	}),
	getDefaultOptions: (e) => ({ onPaginationChange: I("pagination", e) }),
	createTable: (e) => {
		let t = !1, n = !1;
		e._autoResetPageIndex = () => {
			if (!t) {
				e._queue(() => {
					t = !0;
				});
				return;
			}
			if (e.options.autoResetAll ?? e.options.autoResetPageIndex ?? !e.options.manualPagination) {
				if (n) return;
				n = !0, e._queue(() => {
					e.resetPageIndex(), n = !1;
				});
			}
		}, e.setPagination = (t) => e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange((e) => F(t, e)), e.resetPagination = (t) => {
			e.setPagination(t ? Wo() : e.initialState.pagination ?? Wo());
		}, e.setPageIndex = (t) => {
			e.setPagination((n) => {
				let r = F(t, n.pageIndex), i = e.options.pageCount === void 0 || e.options.pageCount === -1 ? 2 ** 53 - 1 : e.options.pageCount - 1;
				return r = Math.max(0, Math.min(r, i)), {
					...n,
					pageIndex: r
				};
			});
		}, e.resetPageIndex = (t) => {
			var n;
			e.setPageIndex(t ? Ho : ((n = e.initialState) == null || (n = n.pagination) == null ? void 0 : n.pageIndex) ?? Ho);
		}, e.resetPageSize = (t) => {
			var n;
			e.setPageSize(t ? Uo : ((n = e.initialState) == null || (n = n.pagination) == null ? void 0 : n.pageSize) ?? Uo);
		}, e.setPageSize = (t) => {
			e.setPagination((e) => {
				let n = Math.max(1, F(t, e.pageSize)), r = e.pageSize * e.pageIndex, i = Math.floor(r / n);
				return {
					...e,
					pageIndex: i,
					pageSize: n
				};
			});
		}, e.setPageCount = (t) => e.setPagination((n) => {
			let r = F(t, e.options.pageCount ?? -1);
			return typeof r == "number" && (r = Math.max(-1, r)), {
				...n,
				pageCount: r
			};
		}), e.getPageOptions = R(() => [e.getPageCount()], (e) => {
			let t = [];
			return e && e > 0 && (t = [...Array(e)].fill(null).map((e, t) => t)), t;
		}, z(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
			let { pageIndex: t } = e.getState().pagination, n = e.getPageCount();
			return n === -1 ? !0 : n === 0 ? !1 : t < n - 1;
		}, e.previousPage = () => e.setPageIndex((e) => e - 1), e.nextPage = () => e.setPageIndex((e) => e + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => e.options.pageCount ?? Math.ceil(e.getRowCount() / e.getState().pagination.pageSize), e.getRowCount = () => e.options.rowCount ?? e.getPrePaginationRowModel().rows.length;
	}
}, Ko = () => ({
	top: [],
	bottom: []
}), qo = {
	getInitialState: (e) => ({
		rowPinning: Ko(),
		...e
	}),
	getDefaultOptions: (e) => ({ onRowPinningChange: I("rowPinning", e) }),
	createRow: (e, t) => {
		e.pin = (n, r, i) => {
			let a = r ? e.getLeafRows().map((e) => {
				let { id: t } = e;
				return t;
			}) : [], o = i ? e.getParentRows().map((e) => {
				let { id: t } = e;
				return t;
			}) : [], s = new Set([
				...o,
				e.id,
				...a
			]);
			t.setRowPinning((e) => n === "bottom" ? {
				top: (e?.top ?? []).filter((e) => !(s != null && s.has(e))),
				bottom: [...(e?.bottom ?? []).filter((e) => !(s != null && s.has(e))), ...Array.from(s)]
			} : n === "top" ? {
				top: [...(e?.top ?? []).filter((e) => !(s != null && s.has(e))), ...Array.from(s)],
				bottom: (e?.bottom ?? []).filter((e) => !(s != null && s.has(e)))
			} : {
				top: (e?.top ?? []).filter((e) => !(s != null && s.has(e))),
				bottom: (e?.bottom ?? []).filter((e) => !(s != null && s.has(e)))
			});
		}, e.getCanPin = () => {
			let { enableRowPinning: n, enablePinning: r } = t.options;
			return typeof n == "function" ? n(e) : n ?? r ?? !0;
		}, e.getIsPinned = () => {
			let n = [e.id], { top: r, bottom: i } = t.getState().rowPinning, a = n.some((e) => r?.includes(e)), o = n.some((e) => i?.includes(e));
			return a ? "top" : o ? "bottom" : !1;
		}, e.getPinnedIndex = () => {
			let n = e.getIsPinned();
			return n ? ((n === "top" ? t.getTopRows() : t.getBottomRows())?.map((e) => {
				let { id: t } = e;
				return t;
			}))?.indexOf(e.id) ?? -1 : -1;
		};
	},
	createTable: (e) => {
		e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => e.setRowPinning(t ? Ko() : e.initialState?.rowPinning ?? Ko()), e.getIsSomeRowsPinned = (t) => {
			let n = e.getState().rowPinning;
			return t ? !!n[t]?.length : !!(n.top?.length || n.bottom?.length);
		}, e._getPinnedRows = (t, n, r) => (e.options.keepPinnedRows ?? !0 ? (n ?? []).map((t) => {
			let n = e.getRow(t, !0);
			return n.getIsAllParentsExpanded() ? n : null;
		}) : (n ?? []).map((e) => t.find((t) => t.id === e))).filter(Boolean).map((e) => ({
			...e,
			position: r
		})), e.getTopRows = R(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), z(e.options, "debugRows", "getTopRows")), e.getBottomRows = R(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), z(e.options, "debugRows", "getBottomRows")), e.getCenterRows = R(() => [
			e.getRowModel().rows,
			e.getState().rowPinning.top,
			e.getState().rowPinning.bottom
		], (e, t, n) => {
			let r = new Set([...t ?? [], ...n ?? []]);
			return e.filter((e) => !r.has(e.id));
		}, z(e.options, "debugRows", "getCenterRows"));
	}
}, Jo = {
	getInitialState: (e) => ({
		rowSelection: {},
		...e
	}),
	getDefaultOptions: (e) => ({
		onRowSelectionChange: I("rowSelection", e),
		enableRowSelection: !0,
		enableMultiRowSelection: !0,
		enableSubRowSelection: !0
	}),
	createTable: (e) => {
		e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => e.setRowSelection(t ? {} : e.initialState.rowSelection ?? {}), e.toggleAllRowsSelected = (t) => {
			e.setRowSelection((n) => {
				t = t === void 0 ? !e.getIsAllRowsSelected() : t;
				let r = { ...n }, i = e.getPreGroupedRowModel().flatRows;
				return t ? i.forEach((e) => {
					e.getCanSelect() && (r[e.id] = !0);
				}) : i.forEach((e) => {
					delete r[e.id];
				}), r;
			});
		}, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
			let r = t === void 0 ? !e.getIsAllPageRowsSelected() : t, i = { ...n };
			return e.getRowModel().rows.forEach((t) => {
				Y(i, t.id, r, !0, e);
			}), i;
		}), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = R(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Yo(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, z(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = R(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Yo(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, z(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = R(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Yo(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, z(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
			let t = e.getFilteredRowModel().flatRows, { rowSelection: n } = e.getState(), r = !!(t.length && Object.keys(n).length);
			return r && t.some((e) => e.getCanSelect() && !n[e.id]) && (r = !1), r;
		}, e.getIsAllPageRowsSelected = () => {
			let t = e.getPaginationRowModel().flatRows.filter((e) => e.getCanSelect()), { rowSelection: n } = e.getState(), r = !!t.length;
			return r && t.some((e) => !n[e.id]) && (r = !1), r;
		}, e.getIsSomeRowsSelected = () => {
			let t = Object.keys(e.getState().rowSelection ?? {}).length;
			return t > 0 && t < e.getFilteredRowModel().flatRows.length;
		}, e.getIsSomePageRowsSelected = () => {
			let t = e.getPaginationRowModel().flatRows;
			return e.getIsAllPageRowsSelected() ? !1 : t.filter((e) => e.getCanSelect()).some((e) => e.getIsSelected() || e.getIsSomeSelected());
		}, e.getToggleAllRowsSelectedHandler = () => (t) => {
			e.toggleAllRowsSelected(t.target.checked);
		}, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
			e.toggleAllPageRowsSelected(t.target.checked);
		};
	},
	createRow: (e, t) => {
		e.toggleSelected = (n, r) => {
			let i = e.getIsSelected();
			t.setRowSelection((a) => {
				if (n = n === void 0 ? !i : n, e.getCanSelect() && i === n) return a;
				let o = { ...a };
				return Y(o, e.id, n, r?.selectChildren ?? !0, t), o;
			});
		}, e.getIsSelected = () => {
			let { rowSelection: n } = t.getState();
			return Xo(e, n);
		}, e.getIsSomeSelected = () => {
			let { rowSelection: n } = t.getState();
			return Zo(e, n) === "some";
		}, e.getIsAllSubRowsSelected = () => {
			let { rowSelection: n } = t.getState();
			return Zo(e, n) === "all";
		}, e.getCanSelect = () => typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : t.options.enableRowSelection ?? !0, e.getCanSelectSubRows = () => typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : t.options.enableSubRowSelection ?? !0, e.getCanMultiSelect = () => typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : t.options.enableMultiRowSelection ?? !0, e.getToggleSelectedHandler = () => {
			let t = e.getCanSelect();
			return (n) => {
				t && e.toggleSelected(n.target?.checked);
			};
		};
	}
}, Y = (e, t, n, r, i) => {
	var a;
	let o = i.getRow(t, !0);
	n ? (o.getCanMultiSelect() || Object.keys(e).forEach((t) => delete e[t]), o.getCanSelect() && (e[t] = !0)) : delete e[t], r && (a = o.subRows) != null && a.length && o.getCanSelectSubRows() && o.subRows.forEach((t) => Y(e, t.id, n, r, i));
};
function Yo(e, t) {
	let n = e.getState().rowSelection, r = [], i = {}, a = function(e, t) {
		return e.map((e) => {
			var t;
			let o = Xo(e, n);
			if (o && (r.push(e), i[e.id] = e), (t = e.subRows) != null && t.length && (e = {
				...e,
				subRows: a(e.subRows)
			}), o) return e;
		}).filter(Boolean);
	};
	return {
		rows: a(t.rows),
		flatRows: r,
		rowsById: i
	};
}
function Xo(e, t) {
	return t[e.id] ?? !1;
}
function Zo(e, t, n) {
	var r;
	if (!((r = e.subRows) != null && r.length)) return !1;
	let i = !0, a = !1;
	return e.subRows.forEach((e) => {
		if (!(a && !i) && (e.getCanSelect() && (Xo(e, t) ? a = !0 : i = !1), e.subRows && e.subRows.length)) {
			let n = Zo(e, t);
			n === "all" ? a = !0 : (n === "some" && (a = !0), i = !1);
		}
	}), i ? "all" : a ? "some" : !1;
}
var Qo = /([0-9]+)/gm, $o = (e, t, n) => os(X(e.getValue(n)).toLowerCase(), X(t.getValue(n)).toLowerCase()), es = (e, t, n) => os(X(e.getValue(n)), X(t.getValue(n))), ts = (e, t, n) => as(X(e.getValue(n)).toLowerCase(), X(t.getValue(n)).toLowerCase()), ns = (e, t, n) => as(X(e.getValue(n)), X(t.getValue(n))), rs = (e, t, n) => {
	let r = e.getValue(n), i = t.getValue(n);
	return r > i ? 1 : r < i ? -1 : 0;
}, is = (e, t, n) => as(e.getValue(n), t.getValue(n));
function as(e, t) {
	return e === t ? 0 : e > t ? 1 : -1;
}
function X(e) {
	return typeof e == "number" ? isNaN(e) || e === Infinity || e === -Infinity ? "" : String(e) : typeof e == "string" ? e : "";
}
function os(e, t) {
	let n = e.split(Qo).filter(Boolean), r = t.split(Qo).filter(Boolean);
	for (; n.length && r.length;) {
		let e = n.shift(), t = r.shift(), i = parseInt(e, 10), a = parseInt(t, 10), o = [i, a].sort();
		if (isNaN(o[0])) {
			if (e > t) return 1;
			if (t > e) return -1;
			continue;
		}
		if (isNaN(o[1])) return isNaN(i) ? -1 : 1;
		if (i > a) return 1;
		if (a > i) return -1;
	}
	return n.length - r.length;
}
var Z = {
	alphanumeric: $o,
	alphanumericCaseSensitive: es,
	text: ts,
	textCaseSensitive: ns,
	datetime: rs,
	basic: is
}, ss = [
	ho,
	Ro,
	Ao,
	Mo,
	go,
	To,
	zo,
	Bo,
	{
		getInitialState: (e) => ({
			sorting: [],
			...e
		}),
		getDefaultColumnDef: () => ({
			sortingFn: "auto",
			sortUndefined: 1
		}),
		getDefaultOptions: (e) => ({
			onSortingChange: I("sorting", e),
			isMultiSortEvent: (e) => e.shiftKey
		}),
		createColumn: (e, t) => {
			e.getAutoSortingFn = () => {
				let n = t.getFilteredRowModel().flatRows.slice(10), r = !1;
				for (let t of n) {
					let n = t?.getValue(e.id);
					if (Object.prototype.toString.call(n) === "[object Date]") return Z.datetime;
					if (typeof n == "string" && (r = !0, n.split(Qo).length > 1)) return Z.alphanumeric;
				}
				return r ? Z.text : Z.basic;
			}, e.getAutoSortDir = () => typeof t.getFilteredRowModel().flatRows[0]?.getValue(e.id) == "string" ? "asc" : "desc", e.getSortingFn = () => {
				if (!e) throw Error();
				return L(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : t.options.sortingFns?.[e.columnDef.sortingFn] ?? Z[e.columnDef.sortingFn];
			}, e.toggleSorting = (n, r) => {
				let i = e.getNextSortingOrder(), a = n != null;
				t.setSorting((o) => {
					let s = o?.find((t) => t.id === e.id), c = o?.findIndex((t) => t.id === e.id), l = [], u, d = a ? n : i === "desc";
					return u = o != null && o.length && e.getCanMultiSort() && r ? s ? "toggle" : "add" : o != null && o.length && c !== o.length - 1 ? "replace" : s ? "toggle" : "replace", u === "toggle" && (a || i || (u = "remove")), u === "add" ? (l = [...o, {
						id: e.id,
						desc: d
					}], l.splice(0, l.length - (t.options.maxMultiSortColCount ?? 2 ** 53 - 1))) : l = u === "toggle" ? o.map((t) => t.id === e.id ? {
						...t,
						desc: d
					} : t) : u === "remove" ? o.filter((t) => t.id !== e.id) : [{
						id: e.id,
						desc: d
					}], l;
				});
			}, e.getFirstSortDir = () => e.columnDef.sortDescFirst ?? t.options.sortDescFirst ?? e.getAutoSortDir() === "desc" ? "desc" : "asc", e.getNextSortingOrder = (n) => {
				let r = e.getFirstSortDir(), i = e.getIsSorted();
				return i ? i !== r && (t.options.enableSortingRemoval ?? !0) && (!n || (t.options.enableMultiRemove ?? !0)) ? !1 : i === "desc" ? "asc" : "desc" : r;
			}, e.getCanSort = () => (e.columnDef.enableSorting ?? !0) && (t.options.enableSorting ?? !0) && !!e.accessorFn, e.getCanMultiSort = () => e.columnDef.enableMultiSort ?? t.options.enableMultiSort ?? !!e.accessorFn, e.getIsSorted = () => {
				let n = t.getState().sorting?.find((t) => t.id === e.id);
				return n ? n.desc ? "desc" : "asc" : !1;
			}, e.getSortIndex = () => t.getState().sorting?.findIndex((t) => t.id === e.id) ?? -1, e.clearSorting = () => {
				t.setSorting((t) => t != null && t.length ? t.filter((t) => t.id !== e.id) : []);
			}, e.getToggleSortingHandler = () => {
				let n = e.getCanSort();
				return (r) => {
					n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : !1));
				};
			};
		},
		createTable: (e) => {
			e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
				e.setSorting(t ? [] : e.initialState?.sorting ?? []);
			}, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
		}
	},
	Oo,
	Vo,
	Go,
	qo,
	Jo,
	Fo
];
function cs(e) {
	process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
	let t = [...ss, ...e._features ?? []], n = { _features: t }, r = n._features.reduce((e, t) => Object.assign(e, t.getDefaultOptions == null ? void 0 : t.getDefaultOptions(n)), {}), i = (e) => n.options.mergeOptions ? n.options.mergeOptions(r, e) : {
		...r,
		...e
	}, a = { ...e.initialState ?? {} };
	n._features.forEach((e) => {
		a = (e.getInitialState == null ? void 0 : e.getInitialState(a)) ?? a;
	});
	let o = [], s = !1, c = {
		_features: t,
		options: {
			...r,
			...e
		},
		initialState: a,
		_queue: (e) => {
			o.push(e), s || (s = !0, Promise.resolve().then(() => {
				for (; o.length;) o.shift()();
				s = !1;
			}).catch((e) => setTimeout(() => {
				throw e;
			})));
		},
		reset: () => {
			n.setState(n.initialState);
		},
		setOptions: (e) => {
			n.options = i(F(e, n.options));
		},
		getState: () => n.options.state,
		setState: (e) => {
			n.options.onStateChange == null || n.options.onStateChange(e);
		},
		_getRowId: (e, t, r) => (n.options.getRowId == null ? void 0 : n.options.getRowId(e, t, r)) ?? `${r ? [r.id, t].join(".") : t}`,
		getCoreRowModel: () => (n._getCoreRowModel ||= n.options.getCoreRowModel(n), n._getCoreRowModel()),
		getRowModel: () => n.getPaginationRowModel(),
		getRow: (e, t) => {
			let r = (t ? n.getPrePaginationRowModel() : n.getRowModel()).rowsById[e];
			if (!r && (r = n.getCoreRowModel().rowsById[e], !r)) throw process.env.NODE_ENV === "production" ? Error() : Error(`getRow could not find row with ID: ${e}`);
			return r;
		},
		_getDefaultColumnDef: R(() => [n.options.defaultColumn], (e) => (e ??= {}, {
			header: (e) => {
				let t = e.header.column.columnDef;
				return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null;
			},
			cell: (e) => {
				var t;
				return ((t = e.renderValue()) == null || t.toString == null ? void 0 : t.toString()) ?? null;
			},
			...n._features.reduce((e, t) => Object.assign(e, t.getDefaultColumnDef == null ? void 0 : t.getDefaultColumnDef()), {}),
			...e
		}), z(e, "debugColumns", "_getDefaultColumnDef")),
		_getColumnDefs: () => n.options.columns,
		getAllColumns: R(() => [n._getColumnDefs()], (e) => {
			let t = function(e, r, i) {
				return i === void 0 && (i = 0), e.map((e) => {
					let a = po(n, e, i, r), o = e;
					return a.columns = o.columns ? t(o.columns, a, i + 1) : [], a;
				});
			};
			return t(e);
		}, z(e, "debugColumns", "getAllColumns")),
		getAllFlatColumns: R(() => [n.getAllColumns()], (e) => e.flatMap((e) => e.getFlatColumns()), z(e, "debugColumns", "getAllFlatColumns")),
		_getAllFlatColumnsById: R(() => [n.getAllFlatColumns()], (e) => e.reduce((e, t) => (e[t.id] = t, e), {}), z(e, "debugColumns", "getAllFlatColumnsById")),
		getAllLeafColumns: R(() => [n.getAllColumns(), n._getOrderColumnsFn()], (e, t) => t(e.flatMap((e) => e.getLeafColumns())), z(e, "debugColumns", "getAllLeafColumns")),
		getColumn: (e) => {
			let t = n._getAllFlatColumnsById()[e];
			return process.env.NODE_ENV !== "production" && !t && console.error(`[Table] Column with id '${e}' does not exist.`), t;
		}
	};
	Object.assign(n, c);
	for (let e = 0; e < n._features.length; e++) {
		let t = n._features[e];
		t == null || t.createTable == null || t.createTable(n);
	}
	return n;
}
function ls() {
	return (e) => R(() => [e.options.data], (t) => {
		let n = {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, r = function(t, i, a) {
			i === void 0 && (i = 0);
			let o = [];
			for (let c = 0; c < t.length; c++) {
				let l = H(e, e._getRowId(t[c], c, a), t[c], c, i, void 0, a?.id);
				if (n.flatRows.push(l), n.rowsById[l.id] = l, o.push(l), e.options.getSubRows) {
					var s;
					l.originalSubRows = e.options.getSubRows(t[c], c), (s = l.originalSubRows) != null && s.length && (l.subRows = r(l.originalSubRows, i + 1, l));
				}
			}
			return o;
		};
		return n.rows = r(t), n;
	}, z(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function us(e, t, n) {
	return n.options.filterFromLeafRows ? ds(e, t, n) : fs(e, t, n);
}
function ds(e, t, n) {
	let r = [], i = {}, a = n.options.maxLeafRowFilterDepth ?? 100, o = function(e, s) {
		s === void 0 && (s = 0);
		let c = [];
		for (let u = 0; u < e.length; u++) {
			var l;
			let d = e[u], f = H(n, d.id, d.original, d.index, d.depth, void 0, d.parentId);
			if (f.columnFilters = d.columnFilters, (l = d.subRows) != null && l.length && s < a) {
				if (f.subRows = o(d.subRows, s + 1), d = f, t(d) && !f.subRows.length) {
					c.push(d), i[d.id] = d, r.push(d);
					continue;
				}
				if (t(d) || f.subRows.length) {
					c.push(d), i[d.id] = d, r.push(d);
					continue;
				}
			} else d = f, t(d) && (c.push(d), i[d.id] = d, r.push(d));
		}
		return c;
	};
	return {
		rows: o(e),
		flatRows: r,
		rowsById: i
	};
}
function fs(e, t, n) {
	let r = [], i = {}, a = n.options.maxLeafRowFilterDepth ?? 100, o = function(e, s) {
		s === void 0 && (s = 0);
		let c = [];
		for (let u = 0; u < e.length; u++) {
			let d = e[u];
			if (t(d)) {
				var l;
				if ((l = d.subRows) != null && l.length && s < a) {
					let e = H(n, d.id, d.original, d.index, d.depth, void 0, d.parentId);
					e.subRows = o(d.subRows, s + 1), d = e;
				}
				c.push(d), r.push(d), i[d.id] = d;
			}
		}
		return c;
	};
	return {
		rows: o(e),
		flatRows: r,
		rowsById: i
	};
}
function ps() {
	return (e) => R(() => [
		e.getPreFilteredRowModel(),
		e.getState().columnFilters,
		e.getState().globalFilter
	], (t, n, r) => {
		if (!t.rows.length || !(n != null && n.length) && !r) {
			for (let e = 0; e < t.flatRows.length; e++) t.flatRows[e].columnFilters = {}, t.flatRows[e].columnFiltersMeta = {};
			return t;
		}
		let i = [], a = [];
		(n ?? []).forEach((t) => {
			let n = e.getColumn(t.id);
			if (!n) return;
			let r = n.getFilterFn();
			if (!r) {
				process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${n.id}.`);
				return;
			}
			i.push({
				id: t.id,
				filterFn: r,
				resolvedValue: (r.resolveFilterValue == null ? void 0 : r.resolveFilterValue(t.value)) ?? t.value
			});
		});
		let o = (n ?? []).map((e) => e.id), s = e.getGlobalFilterFn(), c = e.getAllLeafColumns().filter((e) => e.getCanGlobalFilter());
		r && s && c.length && (o.push("__global__"), c.forEach((e) => {
			a.push({
				id: e.id,
				filterFn: s,
				resolvedValue: (s.resolveFilterValue == null ? void 0 : s.resolveFilterValue(r)) ?? r
			});
		}));
		let l, u;
		for (let e = 0; e < t.flatRows.length; e++) {
			let n = t.flatRows[e];
			if (n.columnFilters = {}, i.length) for (let e = 0; e < i.length; e++) {
				l = i[e];
				let t = l.id;
				n.columnFilters[t] = l.filterFn(n, t, l.resolvedValue, (e) => {
					n.columnFiltersMeta[t] = e;
				});
			}
			if (a.length) {
				for (let e = 0; e < a.length; e++) {
					u = a[e];
					let t = u.id;
					if (u.filterFn(n, t, u.resolvedValue, (e) => {
						n.columnFiltersMeta[t] = e;
					})) {
						n.columnFilters.__global__ = !0;
						break;
					}
				}
				n.columnFilters.__global__ !== !0 && (n.columnFilters.__global__ = !1);
			}
		}
		return us(t.rows, (e) => {
			for (let t = 0; t < o.length; t++) if (e.columnFilters[o[t]] === !1) return !1;
			return !0;
		}, e);
	}, z(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function ms() {
	return (e) => R(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
		if (!n.rows.length || !(t != null && t.length)) return n;
		let r = e.getState().sorting, i = [], a = r.filter((t) => e.getColumn(t.id)?.getCanSort()), o = {};
		a.forEach((t) => {
			let n = e.getColumn(t.id);
			n && (o[t.id] = {
				sortUndefined: n.columnDef.sortUndefined,
				invertSorting: n.columnDef.invertSorting,
				sortingFn: n.getSortingFn()
			});
		});
		let s = (e) => {
			let t = e.map((e) => ({ ...e }));
			return t.sort((e, t) => {
				for (let n = 0; n < a.length; n += 1) {
					let r = a[n], i = o[r.id], s = i.sortUndefined, c = r?.desc ?? !1, l = 0;
					if (s) {
						let n = e.getValue(r.id), i = t.getValue(r.id), a = n === void 0, o = i === void 0;
						if (a || o) {
							if (s === "first") return a ? -1 : 1;
							if (s === "last") return a ? 1 : -1;
							l = a && o ? 0 : a ? s : -s;
						}
					}
					if (l === 0 && (l = i.sortingFn(e, t, r.id)), l !== 0) return c && (l *= -1), i.invertSorting && (l *= -1), l;
				}
				return e.index - t.index;
			}), t.forEach((e) => {
				var t;
				i.push(e), (t = e.subRows) != null && t.length && (e.subRows = s(e.subRows));
			}), t;
		};
		return {
			rows: s(n.rows),
			flatRows: i,
			rowsById: n.rowsById
		};
	}, z(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
//#endregion
//#region node_modules/@tanstack/vue-table/build/lib/index.mjs
function Q() {
	return !0;
}
var hs = Symbol("merge-proxy"), gs = {
	get(e, t, n) {
		return t === hs ? n : e.get(t);
	},
	has(e, t) {
		return e.has(t);
	},
	set: Q,
	deleteProperty: Q,
	getOwnPropertyDescriptor(e, t) {
		return {
			configurable: !0,
			enumerable: !0,
			get() {
				return e.get(t);
			},
			set: Q,
			deleteProperty: Q
		};
	},
	ownKeys(e) {
		return e.keys();
	}
};
function _s(e) {
	return "value" in e ? e.value : e;
}
function $() {
	var e = [...arguments];
	return new Proxy({
		get(t) {
			for (let n = e.length - 1; n >= 0; n--) {
				let r = _s(e[n])[t];
				if (r !== void 0) return r;
			}
		},
		has(t) {
			for (let n = e.length - 1; n >= 0; n--) if (t in _s(e[n])) return !0;
			return !1;
		},
		keys() {
			let t = [];
			for (let n = 0; n < e.length; n++) t.push(...Object.keys(_s(e[n])));
			return [...Array.from(new Set(t))];
		}
	}, gs);
}
var vs = d({
	props: ["render", "props"],
	setup: (e) => () => typeof e.render == "function" || typeof e.render == "object" ? f(e.render, e.props) : e.render
});
function ys(e) {
	return $(e, { data: O(e.data) });
}
function bs(e) {
	let t = m(e.data), n = cs($({
		state: {},
		onStateChange: () => {},
		renderFallbackValue: null,
		mergeOptions(e, n) {
			return t ? {
				...e,
				...n
			} : $(e, n);
		}
	}, t ? ys(e) : e));
	if (t) {
		let t = te(e.data);
		A(t, () => {
			n.setState((e) => ({
				...e,
				data: t.value
			}));
		}, { immediate: !0 });
	}
	let r = C(n.initialState);
	return j(() => {
		n.setOptions((n) => {
			let i = new Proxy({}, { get: (e, t) => r.value[t] });
			return $(n, t ? ys(e) : e, {
				state: $(i, e.state ?? {}),
				onStateChange: (t) => {
					t instanceof Function ? r.value = t(r.value) : r.value = t, e.onStateChange == null || e.onStateChange(t);
				}
			});
		});
	}), n;
}
//#endregion
//#region src/components/ui/Table.vue?vue&type=script&setup=true&lang.ts
var xs = {
	key: 0,
	class: "flex items-center justify-between gap-[8px] mb-[8px]"
}, Ss = {
	key: 0,
	class: "relative flex-1 max-w-[320px]"
}, Cs = ["value", "placeholder"], ws = { key: 1 }, Ts = {
	key: 2,
	class: "relative"
}, Es = {
	key: 0,
	class: "absolute right-0 top-[36px] z-50 min-w-[180px] rounded-[10px] border border-border bg-surface shadow-lg py-[4px]"
}, Ds = ["checked", "onChange"], Os = { class: "w-full border-collapse text-sm" }, ks = ["onClick"], As = {
	key: 0,
	class: "inline-flex text-[10px] opacity-60"
}, js = {
	key: 0,
	width: "12",
	height: "12",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Ms = {
	key: 1,
	width: "12",
	height: "12",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Ns = {
	key: 2,
	width: "12",
	height: "12",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"stroke-linecap": "round",
	"stroke-linejoin": "round",
	class: "opacity-40"
}, Ps = { key: 1 }, Fs = ["colspan"], Is = { class: "flex flex-col items-center gap-[8px]" }, Ls = { class: "text-[14px] font-medium text-content-secondary" }, Rs = { class: "text-[12px] text-content-tertiary" }, zs = ["onClick"], Bs = /* @__PURE__ */ d({
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
		},
		sortable: {
			type: Boolean,
			default: !0
		},
		multiSort: {
			type: Boolean,
			default: !1
		},
		columnToggle: {
			type: Boolean,
			default: !1
		},
		searchable: {
			type: Boolean,
			default: !1
		},
		searchPlaceholder: { default: "Search..." },
		columnToggleLabel: { default: "Columns" },
		loading: {
			type: Boolean,
			default: !1
		},
		loadingRows: { default: 5 },
		emptyTitle: { default: "No data" },
		emptyDescription: { default: "There are no records to display." },
		clickableRows: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["rowClick"],
	setup(t, { emit: i }) {
		let d = t, f = i;
		k();
		let p = C([]), m = C({}), h = C(""), v = C(!1), y = r(() => d.columns.map((e) => ({
			id: e.key,
			accessorKey: e.key,
			header: e.label,
			enableSorting: e.sortable !== !1 && d.sortable,
			meta: {
				align: e.align,
				width: e.width
			}
		}))), x = bs({
			get data() {
				return d.rows;
			},
			get columns() {
				return y.value;
			},
			state: {
				get sorting() {
					return p.value;
				},
				get columnVisibility() {
					return m.value;
				},
				get globalFilter() {
					return h.value;
				}
			},
			enableMultiSort: d.multiSort,
			onSortingChange: (e) => {
				p.value = typeof e == "function" ? e(p.value) : e;
			},
			onColumnVisibilityChange: (e) => {
				m.value = typeof e == "function" ? e(m.value) : e;
			},
			onGlobalFilterChange: (e) => {
				h.value = typeof e == "function" ? e(h.value) : e;
			},
			getCoreRowModel: ls(),
			getSortedRowModel: ms(),
			getFilteredRowModel: ps()
		}), S = r(() => x.getRowModel().rows), ee = r(() => !d.loading && S.value.length === 0), E = r(() => x.getAllLeafColumns().filter((e) => e.getIsVisible()).length), te = r(() => ["text-font100 font-medium text-content-tertiary uppercase tracking-wider px-scale400 py-scale300 border-b-2 border-border bg-bg-primary", d.stickyHeader ? "sticky top-0 z-10" : ""]), A = r(() => ["px-scale400 text-font200 text-content-primary", d.compact ? "py-scale200" : "py-scale400"]);
		function j(e) {
			return [
				"border-b border-border",
				d.hoverable ? "hover:bg-bg-secondary" : "",
				d.striped && e % 2 != 0 ? "bg-bg-secondary/50" : "",
				d.clickableRows ? "cursor-pointer" : ""
			];
		}
		function ne(e) {
			return e === "right" ? "text-right" : e === "center" ? "text-center" : "text-left";
		}
		function re(e, t) {
			d.clickableRows && f("rowClick", e, t);
		}
		return (r, i) => (b(), o("div", null, [
			t.searchable || t.columnToggle ? (b(), o("div", xs, [t.searchable ? (b(), o("div", Ss, [
				i[5] ||= s("svg", {
					class: "absolute left-[10px] top-1/2 -translate-y-1/2 text-content-tertiary pointer-events-none",
					width: "14",
					height: "14",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, [s("circle", {
					cx: "11",
					cy: "11",
					r: "8"
				}), s("path", { d: "M21 21l-4.35-4.35" })], -1),
				s("input", {
					value: h.value,
					placeholder: t.searchPlaceholder,
					class: "w-full h-[34px] pl-[32px] pr-[10px] text-[13px] text-content-primary bg-surface border border-border rounded-[8px] outline-none placeholder:text-content-tertiary focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors",
					onInput: i[0] ||= (e) => h.value = e.target.value
				}, null, 40, Cs),
				h.value ? (b(), o("button", {
					key: 0,
					class: "absolute right-[8px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] flex items-center justify-center rounded-full text-content-tertiary hover:text-content-primary hover:bg-surface-input transition-colors",
					onClick: i[1] ||= (e) => h.value = ""
				}, [...i[4] ||= [s("svg", {
					width: "12",
					height: "12",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2.5",
					"stroke-linecap": "round"
				}, [s("path", { d: "M18 6L6 18M6 6l12 12" })], -1)]])) : a("", !0)
			])) : (b(), o("div", ws)), t.columnToggle ? (b(), o("div", Ts, [
				s("button", {
					class: "inline-flex items-center gap-[6px] px-[10px] py-[6px] text-[12px] font-medium text-content-secondary border border-border rounded-[8px] hover:bg-surface-input transition-colors",
					onClick: i[2] ||= N((e) => v.value = !v.value, ["stop"])
				}, [i[6] ||= c("<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"></rect></svg>", 1), l(" " + D(t.columnToggleLabel), 1)]),
				u(n, {
					"enter-active-class": "transition duration-100 ease-out",
					"enter-from-class": "opacity-0 scale-95",
					"enter-to-class": "opacity-100 scale-100",
					"leave-active-class": "transition duration-75 ease-in",
					"leave-from-class": "opacity-100",
					"leave-to-class": "opacity-0 scale-95"
				}, {
					default: M(() => [v.value ? (b(), o("div", Es, [(b(!0), o(e, null, w(O(x).getAllLeafColumns(), (e) => (b(), o("label", {
						key: e.id,
						class: "flex items-center gap-[8px] px-[12px] py-[6px] text-[13px] text-content-primary hover:bg-surface-input cursor-pointer select-none"
					}, [s("input", {
						type: "checkbox",
						checked: e.getIsVisible(),
						class: "accent-accent w-[14px] h-[14px] rounded",
						onChange: (t) => e.toggleVisibility()
					}, null, 40, Ds), l(" " + D(e.columnDef.header), 1)]))), 128))])) : a("", !0)]),
					_: 1
				}),
				v.value ? (b(), o("div", {
					key: 0,
					class: "fixed inset-0 z-40",
					onClick: i[3] ||= (e) => v.value = !1
				})) : a("", !0)
			])) : a("", !0)])) : a("", !0),
			s("div", { class: g(t.stickyHeader ? "" : "overflow-x-auto") }, [s("table", Os, [s("thead", null, [(b(!0), o(e, null, w(O(x).getHeaderGroups(), (n) => (b(), o("tr", { key: n.id }, [(b(!0), o(e, null, w(n.headers, (e) => (b(), o("th", {
				key: e.id,
				class: g([
					te.value,
					ne(e.column.columnDef.meta?.align),
					e.column.getCanSort() ? "cursor-pointer select-none hover:text-content-primary" : ""
				]),
				style: _(e.column.columnDef.meta?.width ? { width: e.column.columnDef.meta.width } : {}),
				onClick: (t) => e.column.getToggleSortingHandler()?.(t)
			}, [s("div", { class: g(["inline-flex items-center gap-[4px]", e.column.columnDef.meta?.align === "right" ? "flex-row-reverse" : ""]) }, [T(r.$slots, "header-" + e.column.id, { column: t.columns.find((t) => t.key === e.column.id) || {
				key: e.column.id,
				label: ""
			} }, () => [u(O(vs), {
				render: e.column.columnDef.header,
				props: e.getContext()
			}, null, 8, ["render", "props"])]), e.column.getCanSort() ? (b(), o("span", As, [e.column.getIsSorted() === "asc" ? (b(), o("svg", js, [...i[7] ||= [s("path", { d: "M12 19V5M5 12l7-7 7 7" }, null, -1)]])) : e.column.getIsSorted() === "desc" ? (b(), o("svg", Ms, [...i[8] ||= [s("path", { d: "M12 5v14M19 12l-7 7-7-7" }, null, -1)]])) : (b(), o("svg", Ns, [...i[9] ||= [s("path", { d: "M7 15l5 5 5-5M7 9l5-5 5 5" }, null, -1)]]))])) : a("", !0)], 2)], 14, ks))), 128))]))), 128))]), s("tbody", null, [t.loading ? (b(!0), o(e, { key: 0 }, w(t.loadingRows, (t) => (b(), o("tr", {
				key: "skel-" + t,
				class: "border-b border-border"
			}, [(b(!0), o(e, null, w(O(x).getVisibleLeafColumns(), (e) => (b(), o("td", {
				key: "skel-" + e.id,
				class: g(A.value)
			}, [s("div", {
				class: "h-[14px] rounded-[4px] bg-surface-input animate-pulse",
				style: _({ width: 40 + (t * 17 + e.id.length * 13) % 40 + "%" })
			}, null, 4)], 2))), 128))]))), 128)) : ee.value ? (b(), o("tr", Ps, [s("td", {
				colspan: E.value,
				class: "py-[48px] text-center"
			}, [T(r.$slots, "empty", {}, () => [s("div", Is, [
				i[10] ||= c("<svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"text-content-tertiary\"><path d=\"M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline><line x1=\"9\" y1=\"13\" x2=\"15\" y2=\"13\"></line><line x1=\"9\" y1=\"17\" x2=\"15\" y2=\"17\"></line></svg>", 1),
				s("span", Ls, D(t.emptyTitle), 1),
				s("span", Rs, D(t.emptyDescription), 1)
			])])], 8, Fs)])) : (b(!0), o(e, { key: 2 }, w(S.value, (t, n) => (b(), o("tr", {
				key: t.id,
				class: g(j(n)),
				onClick: (e) => re(t.original, n)
			}, [(b(!0), o(e, null, w(t.getVisibleCells(), (e) => (b(), o("td", {
				key: e.id,
				class: g([A.value, ne(e.column.columnDef.meta?.align)])
			}, [T(r.$slots, "cell-" + e.column.id, {
				row: t.original,
				value: e.getValue(),
				rowIndex: n
			}, () => [u(O(vs), {
				render: e.column.columnDef.cell,
				props: e.getContext()
			}, null, 8, ["render", "props"])])], 2))), 128))], 10, zs))), 128))])])], 2),
			T(r.$slots, "footer")
		]));
	}
}), Vs = ["aria-selected", "onClick"], Hs = {
	key: 0,
	class: "ml-1 text-content-tertiary"
}, Us = {
	key: 1,
	class: "absolute bottom-0 left-0 right-0 h-[3px] bg-content-primary"
}, Ws = { class: "mt-4" }, Gs = /* @__PURE__ */ d({
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
		return (n, r) => (b(), o("div", null, [s("div", {
			class: g(["flex border-b border-border overflow-x-auto scrollbar-none", t.fill ? "" : "gap-0"]),
			role: "tablist"
		}, [(b(!0), o(e, null, w(t.tabs, (e) => (b(), o("button", {
			key: e.key,
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			class: g([
				"relative px-4 py-2.5 text-sm font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer",
				t.fill ? "flex-1 text-center" : "",
				t.modelValue === e.key ? "text-content-primary" : "text-content-tertiary hover:text-content-secondary"
			]),
			onClick: (t) => n.$emit("update:modelValue", e.key)
		}, [
			l(D(e.label), 1),
			e.count == null ? a("", !0) : (b(), o("span", Hs, "(" + D(e.count) + ")", 1)),
			t.modelValue === e.key ? (b(), o("span", Us)) : a("", !0)
		], 10, Vs))), 128))], 2), s("div", Ws, [T(n.$slots, "default")])]));
	}
}), Ks = /* @__PURE__ */ d({
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
		return (e, t) => (b(), o("button", {
			class: g(s.value),
			onClick: c
		}, [T(e.$slots, "default")], 2));
	}
}), qs = [
	"value",
	"placeholder",
	"rows",
	"disabled"
], Js = /* @__PURE__ */ d({
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
		return (t, n) => (b(), o("textarea", {
			class: g([
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
		}, null, 42, qs));
	}
}), Ys = ["aria-checked", "aria-label"], Xs = /* @__PURE__ */ d({
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
		return (t, n) => (b(), o("button", {
			type: "button",
			role: "switch",
			"aria-checked": a.value,
			"aria-label": a.value ? "Switch to light mode" : "Switch to dark mode",
			class: g([
				"relative inline-flex shrink-0 rounded-full transition-colors duration-300 border-2 cursor-pointer",
				a.value ? "bg-[#f0f0f0] border-[#f0f0f0]" : "bg-[#1a1a1a] border-[#1a1a1a]",
				e.size === "sm" ? "h-[26px] w-[50px]" : "h-[30px] w-[56px]"
			]),
			onClick: c
		}, [s("span", { class: g([
			"inline-flex items-center justify-center rounded-full shadow transition-all duration-300",
			a.value ? "bg-[#1a1a1a] translate-x-[24px]" : "bg-white translate-x-0",
			e.size === "sm" ? "h-[18px] w-[18px] mt-[2px] ml-[2px]" : "h-[22px] w-[22px] mt-[2px] ml-[2px]",
			a.value && e.size === "sm" ? "translate-x-[24px]" : "",
			a.value && e.size === "md" ? "translate-x-[26px]" : ""
		]) }, [a.value ? (b(), o("svg", {
			key: 1,
			class: g(e.size === "sm" ? "w-[11px] h-[11px]" : "w-[13px] h-[13px]"),
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "#f0f0f0",
			"stroke-width": "2.5",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, [...n[1] ||= [s("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)]], 2)) : (b(), o("svg", {
			key: 0,
			class: g(e.size === "sm" ? "w-[11px] h-[11px]" : "w-[13px] h-[13px]"),
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "#1a1a1a",
			"stroke-width": "2.5",
			"stroke-linecap": "round"
		}, [...n[0] ||= [s("circle", {
			cx: "12",
			cy: "12",
			r: "5"
		}, null, -1), s("path", { d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" }, null, -1)]], 2))], 2)], 10, Ys));
	}
}), Zs = ["disabled"], Qs = { class: "absolute top-[10px] sm:top-[16px] right-[10px] sm:right-[16px]" }, $s = {
	key: 0,
	class: "w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full bg-btn-primary flex items-center justify-center"
}, ec = {
	key: 1,
	class: "w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full border-2 border-border group-hover:border-border-hover"
}, tc = {
	key: 0,
	class: "mb-[12px]"
}, nc = { class: "text-[14px] sm:text-[16px] font-semibold text-content-primary leading-[20px] sm:leading-[24px] pr-[20px]" }, rc = {
	key: 1,
	class: "text-[12px] sm:text-[14px] text-content-secondary mt-[4px] leading-[18px] sm:leading-[20px]"
}, ic = /* @__PURE__ */ d({
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
		return (t, n) => (b(), o("button", {
			type: "button",
			disabled: e.disabled,
			class: g([
				"relative flex flex-col w-full text-left rounded-[12px] transition-all duration-150 cursor-pointer group",
				"border-2",
				e.selected ? "border-border-selected bg-surface shadow-sm" : "border-border bg-surface hover:border-border-selected hover:shadow-sm",
				e.disabled ? "opacity-40 cursor-not-allowed hover:border-border hover:shadow-none" : "",
				e.align === "center" ? "items-center text-center" : "items-start"
			]),
			onClick: n[0] ||= (n) => !e.disabled && t.$emit("click")
		}, [s("div", Qs, [e.selected ? (b(), o("div", $s, [...n[1] ||= [s("svg", {
			class: "w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] text-btn-primary-text",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "3"
		}, [s("path", { d: "M5 13l4 4L19 7" })], -1)]])) : (b(), o("div", ec))]), s("div", { class: g(["p-[14px] sm:p-[20px] md:p-[24px] w-full", e.align === "center" ? "flex flex-col items-center" : ""]) }, [
			t.$slots.icon ? (b(), o("div", tc, [T(t.$slots, "icon")])) : a("", !0),
			s("div", nc, [T(t.$slots, "default")]),
			t.$slots.description ? (b(), o("div", rc, [T(t.$slots, "description")])) : a("", !0)
		], 2)], 10, Zs));
	}
}), ac = ["disabled"], oc = {
	key: 1,
	class: "absolute inset-0 bg-btn-primary"
}, sc = { class: "tabular-nums" }, cc = /* @__PURE__ */ d({
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
		let c = t, l = i, u = C(c.duration), d = C(!1), f = null, p = r(() => !c.paused && !d.value), m = r(() => {
			let e = Math.floor(u.value / 60), t = u.value % 60;
			return `${e}:${String(t).padStart(2, "0")}`;
		}), h = r(() => c.duration === 0 ? 100 : (c.duration - u.value) / c.duration * 100);
		function y() {
			u.value--, u.value <= 0 && (u.value = 0, d.value = !0, S(), l("click"));
		}
		function x() {
			f || d.value || (f = setInterval(y, 1e3));
		}
		function S() {
			f &&= (clearInterval(f), null);
		}
		function w() {
			S(), u.value = c.duration, d.value = !1;
		}
		return A(() => c.paused, (e) => {
			!e && !d.value ? x() : S();
		}, { immediate: !0 }), A(() => c.duration, () => {
			w();
		}), v(() => S()), n({ reset: w }), (n, r) => (b(), o("button", {
			class: g([
				"relative inline-flex items-center justify-center overflow-hidden rounded-[8px] text-[14px] font-medium",
				"h-[48px] min-w-[140px]",
				d.value || t.disabled ? "bg-bg-tertiary text-content-disabled cursor-not-allowed" : "cursor-pointer"
			]),
			disabled: d.value || t.disabled,
			onClick: r[0] ||= (e) => !d.value && !t.disabled && n.$emit("click")
		}, [
			p.value && !d.value ? (b(), o(e, { key: 0 }, [s("div", {
				class: "absolute inset-y-0 left-0 bg-content-tertiary transition-[width] duration-1000 ease-linear",
				style: _({ width: h.value + "%" })
			}, null, 4), s("div", {
				class: "absolute inset-y-0 right-0 bg-bg-tertiary transition-[width] duration-1000 ease-linear",
				style: _({ width: 100 - h.value + "%" })
			}, null, 4)], 64)) : a("", !0),
			!p.value && !d.value && !t.disabled ? (b(), o("div", oc)) : a("", !0),
			s("span", { class: g([
				"relative z-10 flex items-center gap-[4px] px-[16px]",
				d.value || t.disabled ? "text-content-disabled" : "",
				p.value ? "text-content-primary" : "",
				!p.value && !d.value && !t.disabled ? "text-btn-primary-text" : ""
			]) }, [s("span", null, D(t.label), 1), s("span", sc, "(" + D(m.value) + ")", 1)], 2)
		], 10, ac));
	}
}), lc = { class: "flex-1" }, uc = /* @__PURE__ */ d({
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
		let r = e, c = t, l = C(null);
		function u() {
			d(), r.duration > 0 && r.visible && (l.value = setTimeout(() => {
				c("close");
			}, r.duration));
		}
		function d() {
			l.value &&= (clearTimeout(l.value), null);
		}
		A(() => r.visible, (e) => {
			e ? u() : d();
		}, { immediate: !0 }), A(() => r.duration, () => {
			r.visible && u();
		}), v(() => {
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
		return (t, r) => (b(), i(n, {
			"enter-active-class": "transition duration-300 ease-out",
			"enter-from-class": "translate-y-full opacity-0",
			"enter-to-class": "translate-y-0 opacity-100",
			"leave-active-class": "transition duration-200 ease-in",
			"leave-from-class": "translate-y-0 opacity-100",
			"leave-to-class": "translate-y-full opacity-0"
		}, {
			default: M(() => [e.visible ? (b(), o("div", {
				key: 0,
				class: g(["flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl text-sm min-w-[320px]", p()])
			}, [
				s("span", lc, D(e.message), 1),
				e.action ? (b(), o("button", {
					key: 0,
					class: "font-medium underline cursor-pointer",
					onClick: r[0] ||= (e) => c("action")
				}, D(e.action), 1)) : a("", !0),
				s("button", {
					class: "ml-1 opacity-60 hover:opacity-100 cursor-pointer",
					onClick: r[1] ||= (e) => c("close")
				}, " ✕ ")
			], 2)) : a("", !0)]),
			_: 1
		}));
	}
}), dc = ["aria-checked", "disabled"], fc = { key: 0 }, pc = { class: "text-sm font-medium text-content-primary" }, mc = {
	key: 0,
	class: "text-xs text-content-tertiary"
}, hc = /* @__PURE__ */ d({
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
		return (t, n) => (b(), o("label", { class: g(["flex items-center gap-3", e.disabled ? "cursor-not-allowed" : "cursor-pointer"]) }, [s("button", {
			type: "button",
			role: "switch",
			"aria-checked": e.modelValue,
			disabled: e.disabled,
			class: g([
				"relative inline-flex shrink-0 rounded-full transition-colors duration-200 border-2",
				e.modelValue ? "bg-content-primary border-content-primary" : "bg-bg-tertiary border-content-tertiary",
				e.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
				e.size === "sm" ? "h-[22px] w-[40px]" : "h-[26px] w-[48px]"
			]),
			onClick: n[0] ||= (n) => !e.disabled && t.$emit("update:modelValue", !e.modelValue)
		}, [s("span", { class: g([
			"inline-block rounded-full shadow-sm transition-all duration-200",
			e.modelValue ? "bg-btn-primary-text" : "bg-content-secondary",
			e.size === "sm" ? "h-[14px] w-[14px] mt-[2px] ml-[2px]" : "h-[18px] w-[18px] mt-[2px] ml-[2px]",
			e.modelValue ? e.size === "sm" ? "translate-x-[18px]" : "translate-x-[22px]" : "translate-x-0"
		]) }, null, 2)], 10, dc), e.label ? (b(), o("div", fc, [s("span", pc, D(e.label), 1), e.description ? (b(), o("p", mc, D(e.description), 1)) : a("", !0)])) : a("", !0)], 2));
	}
}), gc = /* @__PURE__ */ d({
	__name: "Tooltip",
	props: {
		content: {},
		placement: { default: "top" }
	},
	setup(e) {
		let t = e, i = C(!1), c = r(() => {
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
		return (t, r) => (b(), o("div", {
			class: "relative inline-flex",
			onMouseenter: r[0] ||= (e) => i.value = !0,
			onMouseleave: r[1] ||= (e) => i.value = !1
		}, [T(t.$slots, "default"), u(n, {
			"enter-active-class": "transition duration-150 ease-out",
			"enter-from-class": "opacity-0 scale-95",
			"enter-to-class": "opacity-100 scale-100",
			"leave-active-class": "transition duration-100 ease-in",
			"leave-from-class": "opacity-100",
			"leave-to-class": "opacity-0"
		}, {
			default: M(() => [i.value ? (b(), o("div", {
				key: 0,
				class: g(["absolute z-50 px-2.5 py-1.5 text-xs font-medium bg-bg-inverse text-content-inverse rounded-md shadow-lg whitespace-nowrap pointer-events-none", c.value])
			}, [l(D(e.content) + " ", 1), s("div", { class: g(["absolute w-2 h-2 bg-bg-inverse rotate-45", d.value]) }, null, 2)], 2)) : a("", !0)]),
			_: 1
		})], 32));
	}
}), _c = ["onClick"], vc = {
	key: 1,
	class: "w-4"
}, yc = { class: "text-content-primary" }, bc = /* @__PURE__ */ d({
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
		let c = C(n.defaultExpanded ? new Set(r(n.items)) : /* @__PURE__ */ new Set());
		A(() => n.defaultExpanded, (e) => {
			e ? c.value = new Set(r(n.items)) : c.value = /* @__PURE__ */ new Set();
		});
		function l(e) {
			let t = new Set(c.value);
			t.has(e) ? t.delete(e) : t.add(e), c.value = t;
		}
		return (n, r) => {
			let u = ee("TreeView", !0);
			return b(), o("ul", { class: g(["text-sm", t.depth === 0 ? "" : "ml-4"]) }, [(b(!0), o(e, null, w(t.items, (e) => (b(), o("li", { key: e.id }, [s("button", {
				onClick: (t) => l(e.id),
				class: "flex items-center gap-1.5 w-full px-2 py-1.5 rounded hover:bg-bg-secondary transition-colors text-left"
			}, [e.children?.length ? (b(), o("svg", {
				key: 0,
				class: g(["w-4 h-4 text-content-tertiary transition-transform", c.value.has(e.id) ? "rotate-90" : ""]),
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [...r[0] ||= [s("path", { d: "M9 5l7 7-7 7" }, null, -1)]], 2)) : (b(), o("span", vc)), s("span", yc, D(e.label), 1)], 8, _c), e.children?.length && c.value.has(e.id) ? (b(), i(u, {
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
}), xc = /* @__PURE__ */ d({
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
		return (e, t) => (b(), i(E(o.value), { class: g([s.value, c.value]) }, {
			default: M(() => [T(e.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
}), Sc = { class: "w-full border border-border rounded-[12px] overflow-hidden" }, Cc = ["onClick"], wc = {
	key: 0,
	class: "text-[12px] text-content-tertiary mt-[2px]"
}, Tc = {
	key: 1,
	class: "text-[11px] sm:text-[13px] text-content-primary mt-[4px]"
}, Ec = {
	key: 2,
	class: "text-[13px] text-content-primary font-medium mt-[4px]"
}, Dc = /* @__PURE__ */ ((e, t) => {
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
		let l = C(null);
		return A(() => r.modelValue, (e) => {
			e != null && (l.value = e, setTimeout(() => {
				l.value = null;
			}, 300));
		}), (n, r) => (b(), o("div", Sc, [s("div", {
			class: "grid",
			style: _({ gridTemplateColumns: `repeat(${t.headers.length}, 1fr)` })
		}, [(b(!0), o(e, null, w(t.headers, (e) => (b(), o("div", {
			key: e,
			class: "py-[8px] sm:py-[10px] text-center text-[11px] sm:text-[13px] font-medium text-content-secondary border-b border-border"
		}, D(e), 1))), 128)), (b(!0), o(e, null, w(t.days, (e, t) => (b(), o("div", {
			key: t,
			class: g([
				"relative flex flex-col items-center justify-center py-[10px] sm:py-[16px] min-h-[72px] sm:min-h-[88px] cursor-pointer transition-colors",
				t > 0 ? "border-l border-border" : "",
				e.disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-surface-input"
			]),
			onClick: (t) => !e.disabled && i("update:modelValue", e.date)
		}, [
			s("div", { class: g([
				"flex items-center justify-center text-[15px] sm:text-[18px] font-semibold transition-all duration-300 ease-out",
				c(e) ? "w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full bg-black text-white" : "text-content-primary scale-100",
				l.value === e.date ? "animate-[pop_0.3s_ease-out]" : ""
			]) }, D(e.date), 3),
			e.month ? (b(), o("span", wc, D(e.month), 1)) : a("", !0),
			e.price ? (b(), o("span", Tc, D(e.price), 1)) : a("", !0),
			e.label ? (b(), o("span", Ec, D(e.label), 1)) : a("", !0)
		], 10, Cc))), 128))], 4)]));
	}
}), [["__scopeId", "data-v-a1e68a05"]]);
//#endregion
export { ye as Accordion, xe as Avatar, Se as Badge, De as Banner, je as Breadcrumbs, Pe as Button, Le as ButtonGroup, Be as Card, Ge as Checkbox, Ye as Combobox, Dt as DataGrid, Ft as DatePicker, nt as DetailSection, Ht as Drawer, Xt as EmptyState, an as FileUploader, un as FilterList, gn as FormControl, vn as HintDot, Cn as Input, jn as KpiCard, Nn as Link, Rn as List, Hn as Menu, tr as MessageCard, or as Modal, _r as NavHeader, Tr as Notification, Gr as PageHeader, ai as Pagination, ci as PhoneInput, di as PinCode, fi as Popover, hi as ProgressBar, xi as ProgressSteps, Oi as Radio, Mi as Rating, Gi as ScaffoldDetail, aa as SegmentControl, ca as Select, ja as Separator, Aa as SidePanel, Sa as SidebarNav, Na as Skeleton, Ra as Slider, Ga as SnackbarElement, Qa as SnackbarProvider, Va as Spinner, co as Stepper, Bs as Table, Gs as Tabs, Ks as Tag, Js as Textarea, Xs as ThemeToggle, ic as Tile, cc as TimedButton, uc as Toast, hc as Toggle, gc as Tooltip, bc as TreeView, xc as Typography, Dc as WeekPicker, Xa as useSnackbar };
