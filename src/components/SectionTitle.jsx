function SectionTitle({ title, subtitle }) {
  return (
    <>
      <style>{`
        @keyframes stFadeUp {
          0%   { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes stGlow {
          0%, 100% {
            text-shadow: 0 0 6px rgba(34,211,238,0.45), 0 0 14px rgba(34,211,238,0.2);
          }
          50% {
            text-shadow: 0 0 12px rgba(34,211,238,0.8), 0 0 26px rgba(34,211,238,0.4);
          }
        }
        @keyframes stMarkerPulse {
          0%, 100% { opacity: 0.4; transform: translateY(-50%) scale(1); }
          50%      { opacity: 1;   transform: translateY(-50%) scale(1.3); }
        }
        @keyframes stShimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes stLineGrow {
          0%   { width: 0%; opacity: 0; }
          100% { width: 64px; opacity: 1; }
        }
        @keyframes stScan {
          0%   { transform: translateX(-160%); }
          100% { transform: translateX(160%); }
        }

        .st-wrap {
          position: relative;
        }
        .st-wrap::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -2px;
          transform: translateX(-50%);
          height: 2px;
          width: 64px;
          border-radius: 2px;
          background: linear-gradient(90deg, transparent, #22d3ee, #818cf8, transparent);
          animation: stLineGrow 0.9s ease-out 0.3s forwards;
          opacity: 0;
        }
        .st-wrap::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -2px;
          width: 24px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffffff, transparent);
          filter: blur(1px);
          animation: stScan 3.2s ease-in-out 1.4s infinite;
          pointer-events: none;
        }

        .st-eyebrow {
          position: relative;
          display: inline-block;
          font-family: ui-monospace, 'JetBrains Mono', monospace;
          opacity: 0;
          animation: stFadeUp 0.6s ease-out forwards, stGlow 2.6s ease-in-out 0.6s infinite;
        }
        .st-eyebrow::before {
          content: "";
          position: absolute;
          left: -18px;
          top: 50%;
          width: 6px;
          height: 6px;
          background: #22d3ee;
          box-shadow: 0 0 8px #22d3ee;
          border-radius: 1px;
          transform: translateY(-50%) rotate(45deg);
          animation: stMarkerPulse 1.8s ease-in-out infinite;
        }

        .st-heading {
          opacity: 0;
          background: linear-gradient(90deg, #ffffff 20%, #a5f3fc 40%, #ffffff 60%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation:
            stFadeUp 0.7s ease-out 0.15s forwards,
            stShimmer 5s linear 1s infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .st-wrap::after, .st-wrap::before, .st-eyebrow, .st-eyebrow::before, .st-heading {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <div className="st-wrap text-center mb-16">
        <p className="st-eyebrow text-sky-400 font-semibold uppercase tracking-[0.3em] mb-3">
          {subtitle}
        </p>

        <h2 className="st-heading text-5xl font-bold text-white">
          {title}
        </h2>
      </div>
    </>
  );
}

export default SectionTitle;