export const packageName = "@peezy.tech/patch-moi-harness";

export function greet(name = "world") {
  return `hello, ${name}`;
}

export function buildInfo() {
  return {
    packageName,
    channel: "upstream",
  };
}
