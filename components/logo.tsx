export function Logo({ icon, className = "w-8 h-8" }: { icon?: boolean; className?: string }) {
  if (icon) {
    return (
      <svg
        className={className}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="15" stroke="#d64000" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="16" cy="16" r="10" stroke="#d64000" strokeWidth="2" strokeDasharray="2 2" />
        <circle cx="16" cy="16" r="5" fill="#d64000" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="15" stroke="#d64000" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="16" cy="16" r="10" stroke="#d64000" strokeWidth="2" strokeDasharray="2 2" />
      <circle cx="16" cy="16" r="5" fill="#d64000" />
    </svg>
  );
}
