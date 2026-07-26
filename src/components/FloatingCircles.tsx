export default function FloatingCircles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Small decorative floating circles tailored for light/white backgrounds */}
      <div className="absolute top-[12%] left-[8%] w-3 h-3 rounded-full bg-[#C9A96E] opacity-50 animate-pulse shadow-[0_0_10px_rgba(201,169,110,0.5)]" />
      <div className="absolute top-[20%] right-[12%] w-2 h-2 rounded-full bg-[#0A1628] opacity-30 shadow-[0_0_8px_rgba(10,22,40,0.2)]" />
      <div className="absolute top-[35%] left-[18%] w-4 h-4 rounded-full border border-[#C9A96E]/60 bg-[#C9A96E]/15 animate-bounce shadow-[0_0_12px_rgba(201,169,110,0.3)]" style={{ animationDuration: '5s' }} />
      <div className="absolute top-[45%] right-[20%] w-3 h-3 rounded-full bg-[#C9A96E] opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[60%] left-[25%] w-2.5 h-2.5 rounded-full bg-[#0A1628] opacity-25" />
      <div className="absolute top-[70%] right-[15%] w-5 h-5 rounded-full border-2 border-[#C9A96E]/40 opacity-50" />
      <div className="absolute top-[82%] left-[10%] w-2 h-2 rounded-full bg-[#C9A96E] opacity-60 animate-ping" style={{ animationDuration: '6s' }} />
      <div className="absolute top-[88%] right-[28%] w-3.5 h-3.5 rounded-full bg-[#C9A96E]/40 shadow-[0_0_10px_rgba(201,169,110,0.3)]" />
      <div className="absolute top-[28%] left-[55%] w-2 h-2 rounded-full bg-[#C9A96E]/50" />
      <div className="absolute top-[75%] left-[60%] w-4 h-4 rounded-full bg-[#0A1628]/10 border border-[#0A1628]/20" />
    </div>
  );
}
