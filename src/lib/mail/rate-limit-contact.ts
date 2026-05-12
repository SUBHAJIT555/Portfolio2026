const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 10;

const hitsByIp = new Map<string, number[]>();

/**
 * Simple sliding-window limiter (per server instance). Mitigates abuse without Redis.
 */
export function isContactRateLimited(ip: string): boolean {
  const now = Date.now();
  const stamps = (hitsByIp.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (stamps.length >= MAX_REQUESTS) {
    return true;
  }
  stamps.push(now);
  hitsByIp.set(ip, stamps);

  if (hitsByIp.size > 50_000) {
    hitsByIp.clear();
  }

  return false;
}
