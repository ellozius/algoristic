import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <line x1="9" y1="24" x2="16" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="23" y1="24" x2="16" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="11.4" y1="18" x2="20.6" y2="18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="16" cy="7" r="2.15" fill="currentColor" />
      <circle cx="9" cy="24" r="1.7" fill="currentColor" />
      <circle cx="23" cy="24" r="1.7" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("size-6 text-primary", markClassName)} />
      <span className="text-[13px] font-medium tracking-[0.22em] uppercase">Algoristic</span>
    </span>
  );
}
