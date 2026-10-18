import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function ArrowIcon({ size = 18, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M4 12h16M13 5l7 7-7 7"/></svg>;
}
export function ArrowUpRightIcon({ size = 18, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M6 18 18 6M7 6h11v11"/></svg>;
}
export function SparkleIcon({ size = 22, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="m12 2 1.8 7.1L21 12l-7.2 2.9L12 22l-1.8-7.1L3 12l7.2-2.9L12 2Z"/></svg>;
}
export function CloseIcon({ size = 20, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="m5 5 14 14M19 5 5 19"/></svg>;
}
export function MenuIcon({ size = 25, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M3 7h18M3 12h18M3 17h18"/></svg>;
}
export function ChevronIcon({ size = 18, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="m6 9 6 6 6-6"/></svg>;
}
