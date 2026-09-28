import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ArrowUpRight, r as ArrowDown } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ci4l574u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 ease-[var(--ease-out-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-fg",
			outline: "border border-border-strong bg-transparent text-fg hover:border-fg hover:bg-surface",
			ghost: "text-muted hover:text-fg"
		},
		size: {
			default: "h-11 rounded-md px-5 text-sm",
			lg: "h-12 rounded-lg px-6 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var NODES = [
	{
		x: 18,
		y: 42,
		r: 2.2,
		delay: "0s"
	},
	{
		x: 32,
		y: 22,
		r: 1.6,
		delay: "0.4s"
	},
	{
		x: 48,
		y: 38,
		r: 2.8,
		delay: "0.8s"
	},
	{
		x: 62,
		y: 16,
		r: 1.4,
		delay: "1.1s"
	},
	{
		x: 74,
		y: 48,
		r: 2,
		delay: "0.2s"
	},
	{
		x: 88,
		y: 28,
		r: 1.8,
		delay: "1.6s"
	},
	{
		x: 40,
		y: 68,
		r: 1.5,
		delay: "0.9s"
	},
	{
		x: 58,
		y: 78,
		r: 2.4,
		delay: "1.3s"
	},
	{
		x: 78,
		y: 72,
		r: 1.4,
		delay: "0.6s"
	}
];
var LINES = [
	[0, 1],
	[1, 2],
	[2, 3],
	[2, 4],
	[3, 5],
	[0, 6],
	[2, 6],
	[6, 7],
	[4, 7],
	[4, 5],
	[7, 8],
	[5, 8]
];
function Constellation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full text-primary",
		"aria-hidden": "true",
		fill: "none",
		children: [LINES.map(([a, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: NODES[a].x,
			y1: NODES[a].y,
			x2: NODES[b].x,
			y2: NODES[b].y,
			stroke: "currentColor",
			strokeOpacity: .28,
			strokeWidth: .35,
			pathLength: 1,
			className: "line-draw",
			style: { animationDelay: `${i * 120}ms` }
		}, `${a}-${b}`)), NODES.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: n.x,
			cy: n.y,
			r: n.r,
			fill: "currentColor",
			className: "node-pulse",
			style: { animationDelay: n.delay }
		}, i))]
	});
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		fill: "none",
		"aria-hidden": "true",
		className: cn("shrink-0", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "9",
				y1: "24",
				x2: "16",
				y2: "7",
				stroke: "currentColor",
				strokeWidth: "1.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "23",
				y1: "24",
				x2: "16",
				y2: "7",
				stroke: "currentColor",
				strokeWidth: "1.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "11.4",
				y1: "18",
				x2: "20.6",
				y2: "18",
				stroke: "currentColor",
				strokeWidth: "1.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "7",
				r: "2.15",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "9",
				cy: "24",
				r: "1.7",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "23",
				cy: "24",
				r: "1.7",
				fill: "currentColor"
			})
		]
	});
}
function Logo({ className, markClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: cn("size-6 text-primary", markClassName) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[13px] font-medium tracking-[0.22em] uppercase",
			children: "Algoristic"
		})]
	});
}
var EMAIL = "hello@algoristic.my.id";
var WHATSAPP_HREF = `https://wa.me/?text=${encodeURIComponent("Halo Algoristic, saya ingin berbicara lebih lanjut.")}`;
var PILLARS = [
	{
		index: "01",
		title: "Membangun",
		body: "AI tidak dimulai dari model. Ia dimulai dari pertanyaan yang belum dirumuskan dengan tepat."
	},
	{
		index: "02",
		title: "Menghubungkan",
		body: "Ide yang terpisah jarang menjadi solusi. Kami merakitnya sampai pola itu kelihatan."
	},
	{
		index: "03",
		title: "Mengomunikasikan",
		body: "Teknologi yang tidak bisa dijelaskan tidak akan dipakai. Kami membuatnya bisa diikuti."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-bg text-fg min-h-dvh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-20 border-b border-border bg-bg/80 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#atas",
						className: "text-fg hover:text-fg/90 transition-colors duration-150",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex items-center gap-6 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#arah",
								className: "hover:text-fg transition-colors duration-150",
								children: "Arah"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#dalam",
								className: "hover:text-fg transition-colors duration-150",
								children: "Lebih dalam"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#hubungi",
								className: "hover:text-fg transition-colors duration-150",
								children: "Hubungi"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "atas",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative min-h-dvh overflow-hidden pt-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-y-0 right-[-8%] hidden w-[58%] opacity-70 md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Constellation, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-6xl flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted mb-8 text-[11px] tracking-[0.28em] uppercase",
									children: "algoristic.my.id"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-serif max-w-3xl text-[2.65rem] leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl",
									children: "Ide tidak hidup sendiri."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 max-w-md text-base leading-relaxed text-muted sm:text-lg",
									children: "Kami membangun dan memanfaatkan AI dengan menghubungkan berbagai gagasan — lalu mengomunikasikan solusinya, tanpa membuatnya terdengar lebih rumit."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#arah",
											children: ["Telusuri arah kerja", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										size: "lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#hubungi",
											children: "Bicara dengan kami"
										})
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "arah",
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid max-w-6xl gap-0 px-5 sm:px-8 lg:grid-cols-3",
							children: PILLARS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: `border-border py-14 lg:py-20 ${i < PILLARS.length - 1 ? "lg:border-r lg:pr-10" : "lg:pl-10"} ${i === 1 ? "lg:px-10" : ""} ${i > 0 ? "border-t lg:border-t-0" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] tracking-[0.2em] text-subtle",
										children: item.index
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-serif mt-6 text-3xl tracking-[-0.02em] sm:text-4xl",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-sm text-[15px] leading-relaxed text-muted",
										children: item.body
									})
								]
							}, item.index))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "dalam",
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] tracking-[0.28em] text-muted uppercase",
									children: "Yang belum kami sebut"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif mt-5 max-w-xl text-4xl leading-[1.1] tracking-[-0.03em] sm:text-5xl",
									children: "Produk kami tidak dimulai dari daftar fitur."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 max-w-lg text-[15px] leading-relaxed text-muted",
									children: "Setiap karya Algoristic adalah jembatan: antara ide yang masih mentah, kecerdasan yang bisa dijalankan, dan bahasa yang bisa dipahami orang di luar ruangan."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-lg text-[15px] leading-relaxed text-muted",
									children: "Itu sebabnya halaman ini tidak menumpuk janji. Yang kami tunjukkan dulu adalah cara berpikirnya — sisanya dibuka ketika percakapan sudah tepat."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "flex flex-col justify-between border border-border bg-surface p-7 sm:p-9 rounded-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-2xl leading-snug italic text-fg",
									children: "“AI tanpa jembatan hanya menjadi kebisingan.”"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-12 space-y-4 text-sm text-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "border-t border-border pt-4",
											children: "Studio untuk merakit ide menjadi sistem."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "border-t border-border pt-4",
											children: "Bahasa untuk membawa sistem itu ke orang yang memakainya."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "border-t border-border pt-4",
											children: "Ruang untuk yang ingin melihat lebih dekat — bukan sekadar menggulir."
										})
									]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "hubungi",
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] tracking-[0.28em] text-muted uppercase",
										children: "Langkah berikutnya"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-serif mt-5 text-4xl tracking-[-0.03em] sm:text-5xl",
										children: "Kalau ini terasa dekat, buka percakapan."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-[15px] leading-relaxed text-muted",
										children: "Ceritakan ide yang sedang Anda pegang. Kami akan menjawab dengan kejelasan — bukan dengan presentasi yang lebih panjang."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex w-full max-w-sm flex-col items-stretch gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: WHATSAPP_HREF,
											target: "_blank",
											rel: "noopener noreferrer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, {}),
												"WhatsApp",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										size: "lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `mailto:${EMAIL}`,
											children: [EMAIL, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-subtle",
										children: "WhatsApp lebih cepat. Surat juga diterima."
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "text-fg" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "algoristic.my.id" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: WHATSAPP_HREF,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-fg transition-colors duration-150",
							children: "WhatsApp"
						})
					]
				})
			})
		]
	});
}
function WhatsAppIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: "size-4",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
	});
}
//#endregion
export { Home as component };
