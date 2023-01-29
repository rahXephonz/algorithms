export function fibonacci(position: number): number {
  if (position < 3) {
    return 1;
  }
  return fibonacci(position - 1) + fibonacci(position - 2);
}
