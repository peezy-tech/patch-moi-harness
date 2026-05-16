#!/usr/bin/env node
import { greet } from "../src/index.js";

const args = process.argv.slice(2);
const name = args.find((arg) => !arg.startsWith("-")) ?? "world";

console.log(greet(name));
