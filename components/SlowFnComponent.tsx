export default function SlowFnComponent() {
  let i = 0;
  while (i < 1_000_000_000) {
    i++;
  }

  return <div>Slow Fn component</div>;
}
