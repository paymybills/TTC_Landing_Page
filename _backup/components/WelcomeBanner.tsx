export function WelcomeBanner() {
  return (
    <div className="rounded-2xl bg-[rgba(124,58,237,0.15)] backdrop-blur-lg border border-[rgba(139,92,246,0.3)] p-6 shadow-[0_8px_32px_rgba(139,92,246,0.2)]">
      <div className="flex items-center gap-4">
        <span className="text-4xl">👋</span>
        <div>
          <h2 className="text-xl bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
            Welcome to the future of mathematics and computing
          </h2>
          <p className="text-purple-200 mt-1 opacity-80">
            Explore our domains, join events, and stay updated with the latest in ML, Quant, and Game Theory
          </p>
        </div>
      </div>
    </div>
  );
}
