import { HiCode } from 'react-icons/hi'

/** Codified Labs wordmark: the existing code glyph set in a layered tile. */
export default function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute inset-0 translate-x-[3px] translate-y-[3px] rounded-xl bg-iris-500/50 transition-transform duration-300 group-hover:translate-x-[4px] group-hover:translate-y-[4px]"
        />
        <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
          <HiCode aria-hidden="true" className="h-5 w-5 text-white" />
        </span>
      </span>
      <span
        className={`font-display text-lg font-semibold tracking-tight ${tone === 'dark' ? 'text-white' : 'text-slate-950'}`}
      >
        Codified Labs
      </span>
    </span>
  )
}
