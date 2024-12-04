export default function createFrame(names: string[]): string {
  const longestName = Math.max(...names.map((name) => name.length))
  const framedNames = names.map((name) => {
    return `* ${name}${" ".repeat(longestName - name.length)} *`;
  });
  const bar = "*".repeat(longestName + 4);
  return [bar, ...framedNames, bar].join("\n");
}