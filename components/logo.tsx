export function Logo({ icon }: { icon?: boolean }) {
  if (icon) {
    return (
      <svg
        width="32"
        height="32"
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
      width="32"
      height="32"
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
