'use client';

import { useEffect, useRef } from 'react';

/**
 * Animated C-alpha trace of a small three-helix-bundle protein that
 * repeatedly collapses from a random coil into its native fold.
 * Residues are coloured with AlphaFold's pLDDT confidence palette.
 */

type Vec3 = [number, number, number];

const PLDDT = {
  veryHigh: [79, 140, 255],
  confident: [101, 203, 243],
  low: [255, 219, 19],
  veryLow: [255, 125, 69],
} as const;

const BG: Vec3 = [7, 10, 18];

// Secondary-structure layout: [kind, length]
const LAYOUT: Array<['tail' | 'helix' | 'loop', number]> = [
  ['tail', 4],
  ['helix', 15],
  ['loop', 5],
  ['helix', 15],
  ['loop', 5],
  ['helix', 15],
  ['tail', 4],
];

const HELIX_RADIUS = 2.3;
const HELIX_RISE = 1.5;
const HELIX_TURN = (100 * Math.PI) / 180;
const BOND = 3.8;
const SUBDIV = 5;

const add = (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const scale = (a: Vec3, s: number): Vec3 => [a[0] * s, a[1] * s, a[2] * s];
const len = (a: Vec3) => Math.hypot(a[0], a[1], a[2]);
const norm = (a: Vec3): Vec3 => scale(a, 1 / (len(a) || 1));
const lerp = (a: Vec3, b: Vec3, t: number): Vec3 => add(a, scale(sub(b, a), t));
const cross = (a: Vec3, b: Vec3): Vec3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];

interface Residue {
  kind: 'tail' | 'helix' | 'loop';
  segment: number;
  color: readonly number[];
}

function buildResidues(): Residue[] {
  const residues: Residue[] = [];
  LAYOUT.forEach(([kind, n], segment) => {
    for (let k = 0; k < n; k++) {
      let color: readonly number[] = PLDDT.veryLow;
      if (kind === 'helix') color = k < 2 || k >= n - 2 ? PLDDT.confident : PLDDT.veryHigh;
      if (kind === 'loop') color = PLDDT.low;
      residues.push({ kind, segment, color });
    }
  });
  return residues;
}

function centre(points: Vec3[]): Vec3[] {
  const c = scale(points.reduce(add, [0, 0, 0] as Vec3), 1 / points.length);
  return points.map((p) => sub(p, c));
}

function helixPoints(origin: Vec3, dir: Vec3, n: number, phase: number): Vec3[] {
  const d = norm(dir);
  const helper: Vec3 = Math.abs(d[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
  const u = norm(cross(d, helper));
  const v = cross(d, u);
  const length = (n - 1) * HELIX_RISE;
  const start = sub(origin, scale(d, length / 2));
  return Array.from({ length: n }, (_, k) => {
    const a = phase + k * HELIX_TURN;
    return add(
      add(start, scale(d, k * HELIX_RISE)),
      add(scale(u, Math.cos(a) * HELIX_RADIUS), scale(v, Math.sin(a) * HELIX_RADIUS)),
    );
  });
}

function bezier(a: Vec3, ctrl: Vec3, b: Vec3, t: number): Vec3 {
  return lerp(lerp(a, ctrl, t), lerp(ctrl, b, t), t);
}

/** Native state: an antiparallel three-helix bundle joined by short arcing loops. */
function buildNative(residues: Residue[]): Vec3[] {
  const spacing = 9.5;
  const axes: Array<{ origin: Vec3; dir: Vec3 }> = [
    { origin: [0, 0, 0], dir: [0, 1, 0] },
    { origin: [spacing, 0, 0], dir: [0, -1, 0] },
    { origin: [spacing / 2, 0, spacing * 0.87], dir: [0, 1, 0] },
  ];

  const helices: Vec3[][] = [];
  let h = 0;
  LAYOUT.forEach(([kind, n]) => {
    if (kind === 'helix') {
      helices.push(helixPoints(axes[h].origin, axes[h].dir, n, h * 1.3));
      h++;
    }
  });

  const out: Vec3[] = [];
  h = 0;
  LAYOUT.forEach(([kind, n], seg) => {
    if (kind === 'helix') {
      out.push(...helices[h]);
      h++;
    } else if (kind === 'loop') {
      const a = helices[h - 1][helices[h - 1].length - 1];
      const b = helices[h][0];
      const ctrl = add(lerp(a, b, 0.5), scale(axes[h - 1].dir, 5));
      for (let k = 1; k <= n; k++) out.push(bezier(a, ctrl, b, k / (n + 1)));
    } else if (seg === 0) {
      const first = helices[0][0];
      const d = scale(axes[0].dir, -1);
      for (let k = n; k >= 1; k--) out.push(add(first, add(scale(d, k * 3.2), [-k * 0.9, 0, -k * 0.6])));
    } else {
      const last = helices[h - 1][helices[h - 1].length - 1];
      const d = axes[h - 1].dir;
      for (let k = 1; k <= n; k++) out.push(add(last, add(scale(d, k * 3.2), [k * 0.8, 0, k * 0.9])));
    }
  });

  return centre(out.slice(0, residues.length));
}

/** A self-avoiding-ish persistent random walk. */
function buildCoil(n: number): Vec3[] {
  const pts: Vec3[] = [[0, 0, 0]];
  let dir: Vec3 = norm([Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]);
  for (let i = 1; i < n; i++) {
    const r: Vec3 = [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5];
    dir = norm(add(scale(dir, 0.75), scale(norm(r), 0.85)));
    pts.push(add(pts[i - 1], scale(dir, BOND)));
  }
  // Keep the unfolded chain inside the viewport.
  const c = centre(pts);
  const maxR = Math.max(...c.map(len));
  const limit = 26;
  return maxR > limit ? c.map((p) => scale(p, limit / maxR)) : c;
}

/** Folding intermediate: helices formed locally, but positioned along the coil. */
function buildIntermediate(residues: Residue[], coil: Vec3[], native: Vec3[]): Vec3[] {
  const out = coil.map((p) => [...p] as Vec3);
  let i = 0;
  LAYOUT.forEach(([kind, n], seg) => {
    if (kind === 'helix') {
      const segCoil = coil.slice(i, i + n);
      const mid = scale(segCoil.reduce(add, [0, 0, 0] as Vec3), 1 / n);
      const dir = sub(segCoil[n - 1], segCoil[0]);
      const ideal = helixPoints(mid, dir, n, seg);
      // Shrink toward the native helix size so neighbours don't overstretch.
      for (let k = 0; k < n; k++) out[i + k] = lerp(ideal[k], native[i + k], 0.15);
    }
    i += n;
  });
  // Relax loops and tails toward their neighbours.
  for (let pass = 0; pass < 6; pass++) {
    for (let r = 1; r < out.length - 1; r++) {
      if (residues[r].kind === 'helix') continue;
      out[r] = lerp(out[r], scale(add(out[r - 1], out[r + 1]), 0.5), 0.5);
    }
  }
  return out;
}

const smooth = (t: number) => {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
};

// Cycle timing (seconds)
const T_COIL = 1.2;
const T_SECONDARY = 2.2;
const T_TERTIARY = 2.8;
const T_HOLD = 4.5;
const T_UNFOLD = 1.8;
const T_CYCLE = T_COIL + T_SECONDARY + T_TERTIARY + T_HOLD + T_UNFOLD;

interface ProteinFoldProps {
  className?: string;
}

const ProteinFold = ({ className = "relative" }: ProteinFoldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const rmsdRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const residues = buildResidues();
    const N = residues.length;
    const native = buildNative(residues);
    let coil = buildCoil(N);
    let mid = buildIntermediate(residues, coil, native);
    let nextCoil = buildCoil(N);
    let cycleIndex = 0;

    const seeds = residues.map(() => Math.random() * Math.PI * 2);

    let width = 0;
    let height = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Interaction: drag to rotate.
    let yaw = 0.6;
    let pitch = -0.35;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    const idleSpin = 0.22;
    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      yaw += (e.clientX - lastX) * 0.008;
      pitch = Math.max(-1.3, Math.min(1.3, pitch + (e.clientY - lastY) * 0.008));
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onUp = () => {
      dragging = false;
    };
    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointercancel', onUp);

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    const positions = (t: number): { pts: Vec3[]; folded: number; label: string } => {
      const cycle = Math.floor(t / T_CYCLE);
      if (cycle !== cycleIndex) {
        // The previous cycle unfolded into nextCoil, so start from there.
        coil = nextCoil;
        mid = buildIntermediate(residues, coil, native);
        nextCoil = buildCoil(N);
        cycleIndex = cycle;
      }
      const local = t - cycle * T_CYCLE;
      const pts: Vec3[] = new Array(N);

      if (local < T_COIL) {
        for (let i = 0; i < N; i++) pts[i] = coil[i];
        return { pts, folded: 0, label: 'random coil' };
      }
      if (local < T_COIL + T_SECONDARY) {
        const p = (local - T_COIL) / T_SECONDARY;
        for (let i = 0; i < N; i++) {
          const delay = residues[i].kind === 'helix' ? 0 : 0.25;
          pts[i] = lerp(coil[i], mid[i], smooth((p - delay) / (1 - delay)));
        }
        return { pts, folded: 0.35 * smooth(p), label: 'secondary structure' };
      }
      if (local < T_COIL + T_SECONDARY + T_TERTIARY) {
        const p = (local - T_COIL - T_SECONDARY) / T_TERTIARY;
        for (let i = 0; i < N; i++) {
          const delay = (Math.abs(i - N / 2) / (N / 2)) * 0.3;
          pts[i] = lerp(mid[i], native[i], smooth((p - delay) / (1 - delay)));
        }
        return { pts, folded: 0.35 + 0.65 * smooth(p), label: 'tertiary packing' };
      }
      if (local < T_COIL + T_SECONDARY + T_TERTIARY + T_HOLD) {
        for (let i = 0; i < N; i++) pts[i] = native[i];
        return { pts, folded: 1, label: 'native state' };
      }
      const p = (local - T_COIL - T_SECONDARY - T_TERTIARY - T_HOLD) / T_UNFOLD;
      for (let i = 0; i < N; i++) pts[i] = lerp(native[i], nextCoil[i], smooth(p));
      return { pts, folded: 1 - smooth(p), label: 'denaturing' };
    };

    const start = performance.now();
    let last = start;
    let lastStatus = 0;
    let raf = 0;

    const render = (now: number) => {
      raf = requestAnimationFrame(render);
      if (!visible && !reduceMotion) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const t = reduceMotion ? T_COIL + T_SECONDARY + T_TERTIARY + 0.1 : (now - start) / 1000;
      const { pts, folded, label } = positions(t);
      if (!dragging && !reduceMotion) yaw += idleSpin * dt;

      // Thermal motion, damped as the chain folds.
      const jitter = 0.08 + (1 - folded) * 0.55;
      const time = now / 1000;
      const live: Vec3[] = pts.map((p, i) => [
        p[0] + Math.sin(time * 1.7 + seeds[i]) * jitter,
        p[1] + Math.cos(time * 1.3 + seeds[i] * 1.7) * jitter,
        p[2] + Math.sin(time * 1.1 + seeds[i] * 2.3) * jitter,
      ]);

      // Rotate + project
      const cy = Math.cos(yaw), sy = Math.sin(yaw);
      const cp = Math.cos(pitch), sp = Math.sin(pitch);
      const size = Math.min(width, height);
      const camera = 90;
      const unit = size / 58;
      const project = ([x, y, z]: Vec3) => {
        const x1 = x * cy + z * sy;
        const z1 = -x * sy + z * cy;
        const y2 = y * cp - z1 * sp;
        const z2 = y * sp + z1 * cp;
        const s = camera / (camera + z2);
        return { x: width / 2 + x1 * s * unit, y: height / 2 - y2 * s * unit, z: z2, s };
      };
      const proj = live.map(project);

      ctx.clearRect(0, 0, width, height);

      const fog = (c: readonly number[], z: number, alpha = 1) => {
        const f = Math.min(0.75, Math.max(0, (z + 18) / 50));
        const r = Math.round(c[0] * (1 - f) + BG[0] * f);
        const g = Math.round(c[1] * (1 - f) + BG[1] * f);
        const b = Math.round(c[2] * (1 - f) + BG[2] * f);
        return `rgba(${r},${g},${b},${alpha})`;
      };

      // Inter-residue contacts appear as the fold forms (a live "contact map").
      if (folded > 0.4) {
        const a = (folded - 0.4) / 0.6;
        ctx.lineWidth = 1;
        for (let i = 0; i < N; i++) {
          for (let j = i + 4; j < N; j++) {
            if (residues[i].segment === residues[j].segment) continue;
            const d = len(sub(live[i], live[j]));
            if (d < 8) {
              ctx.strokeStyle = `rgba(167,139,250,${0.22 * a * (1 - d / 8)})`;
              ctx.beginPath();
              ctx.moveTo(proj[i].x, proj[i].y);
              ctx.lineTo(proj[j].x, proj[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // Backbone: a Catmull-Rom spline through the C-alpha atoms, drawn as a
      // shaded tube and painter-sorted back to front.
      const curve: { x: number; y: number; z: number; s: number; c: number[] }[] = [];
      for (let i = 0; i < N - 1; i++) {
        const p0 = live[Math.max(0, i - 1)];
        const p1 = live[i];
        const p2 = live[i + 1];
        const p3 = live[Math.min(N - 1, i + 2)];
        const c1 = residues[i].color;
        const c2 = residues[i + 1].color;
        for (let k = 0; k < SUBDIV; k++) {
          const t = k / SUBDIV;
          const t2 = t * t;
          const t3 = t2 * t;
          const pt = [0, 1, 2].map(
            (d) =>
              0.5 *
              (2 * p1[d] +
                (-p0[d] + p2[d]) * t +
                (2 * p0[d] - 5 * p1[d] + 4 * p2[d] - p3[d]) * t2 +
                (-p0[d] + 3 * p1[d] - 3 * p2[d] + p3[d]) * t3),
          ) as Vec3;
          curve.push({ ...project(pt), c: c1.map((v, j) => v + (c2[j] - v) * t) });
        }
      }
      curve.push({ ...proj[N - 1], c: [...residues[N - 1].color] });

      // One run per residue, overlapping its neighbour by one sub-segment so
      // butt-capped joints stay seamless after depth sorting.
      const runs = Array.from({ length: N - 1 }, (_, i) => {
        const from = i * SUBDIV;
        const to = Math.min(curve.length - 1, from + SUBDIV + 1);
        let z = 0;
        let sc = 0;
        for (let k = from; k <= to; k++) {
          z += curve[k].z;
          sc += curve[k].s;
        }
        const n = to - from + 1;
        return { from, to, z: z / n, s: sc / n, c: curve[from].c };
      }).sort((a, b) => b.z - a.z);

      ctx.lineCap = 'butt';
      ctx.lineJoin = 'round';
      const passes: Array<[number, (c: number[]) => number[], number, number]> = [
        // [width factor, colour, alpha, highlight offset]
        [1.5, (c) => c.map((v) => v * 0.3), 1, 0],
        [1.0, (c) => c, 1, 0],
        [0.28, () => [255, 255, 255], 0.35, -0.2],
      ];
      for (const run of runs) {
        const w = unit * 1.25 * run.s;
        for (const [wf, col, alpha, off] of passes) {
          ctx.strokeStyle = fog(col(run.c), run.z, alpha);
          ctx.lineWidth = w * wf;
          ctx.beginPath();
          ctx.moveTo(curve[run.from].x + w * off, curve[run.from].y + w * off);
          for (let k = run.from + 1; k <= run.to; k++) ctx.lineTo(curve[k].x + w * off, curve[k].y + w * off);
          ctx.stroke();
        }
      }

      if (now - lastStatus > 120) {
        lastStatus = now;
        let sq = 0;
        for (let i = 0; i < N; i++) {
          const d = sub(pts[i], native[i]);
          sq += d[0] * d[0] + d[1] * d[1] + d[2] * d[2];
        }
        if (statusRef.current) statusRef.current.textContent = label;
        if (rmsdRef.current) rmsdRef.current.textContent = Math.sqrt(sq / N).toFixed(1);
      }
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('pointercancel', onUp);
    };
  }, []);

  return (
    <div className={className}>
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-grab touch-none active:cursor-grabbing"
        aria-label="Animated protein folding from a random coil into a three-helix bundle"
        role="img"
      />
      <div className="pointer-events-none absolute left-4 top-4 font-mono text-[11px] uppercase tracking-widest text-muted">
        <div>
          state: <span ref={statusRef} className="text-teal">random coil</span>
        </div>
        <div>
          rmsd: <span ref={rmsdRef} className="text-ink">--</span> Å
        </div>
      </div>
    </div>
  );
};

export default ProteinFold;
