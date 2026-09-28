const NODES = [
  { x: 18, y: 42, r: 2.2, delay: "0s" },
  { x: 32, y: 22, r: 1.6, delay: "0.4s" },
  { x: 48, y: 38, r: 2.8, delay: "0.8s" },
  { x: 62, y: 16, r: 1.4, delay: "1.1s" },
  { x: 74, y: 48, r: 2.0, delay: "0.2s" },
  { x: 88, y: 28, r: 1.8, delay: "1.6s" },
  { x: 40, y: 68, r: 1.5, delay: "0.9s" },
  { x: 58, y: 78, r: 2.4, delay: "1.3s" },
  { x: 78, y: 72, r: 1.4, delay: "0.6s" },
] as const;

const LINES: Array<[number, number]> = [
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
  [5, 8],
];

export function Constellation() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full text-primary"
      aria-hidden="true"
      fill="none"
    >
      {LINES.map(([a, b], i) => (
        <line
          key={`${a}-${b}`}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="currentColor"
          strokeOpacity={0.28}
          strokeWidth={0.35}
          pathLength={1}
          className="line-draw"
          style={{ animationDelay: `${i * 120}ms` }}
        />
      ))}
      {NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="currentColor"
          className="node-pulse"
          style={{ animationDelay: n.delay }}
        />
      ))}
    </svg>
  );
}
