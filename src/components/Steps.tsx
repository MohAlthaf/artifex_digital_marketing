interface Step {
  number: string;
  title: string;
  desc: string;
}

interface StepsProps {
  steps: Step[];
  className?: string;
}

export default function Steps({ steps, className = "" }: StepsProps) {
  return (
    <ol className={`space-y-6 ${className}`} aria-label="Process steps">
      {steps.map((step, idx) => (
        <li key={step.number} className="flex gap-5 items-start group">
          {/* Number badge */}
          <div className="flex flex-col items-center shrink-0">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white text-sm font-bold shadow-[var(--shadow-card)] group-hover:shadow-[var(--shadow-md)] transition-shadow">
              {step.number}
            </span>
            {idx < steps.length - 1 && (
              <span
                className="w-px flex-1 mt-2 bg-border min-h-[2rem]"
                aria-hidden="true"
              />
            )}
          </div>
          {/* Content */}
          <div className="pb-2">
            <h3 className="font-semibold text-[1rem] text-text mb-1.5 leading-snug">
              {step.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {step.desc}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
