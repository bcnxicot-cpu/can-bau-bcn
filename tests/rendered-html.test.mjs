import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile } from "node:fs/promises";

const html = await readFile(new URL("../.next/server/app/index.html", import.meta.url), "utf8");

test("renders the main commercial proposition", () => {
  assert.match(html, /Que entre tranquilo/);
  assert.match(html, /Un perro cada vez/);
  assert.match(html, /Precios claros/i);
});

test("includes direct contact and real business links", () => {
  assert.match(html, /34693994512/);
  assert.match(html, /hola@canbauycris\.com/);
  assert.match(html, /Carrer de Girona 101/);
});

test("includes meaningful accessible image descriptions", () => {
  assert.match(html, /Cris trabajando con un perro/);
  assert.match(html, /Tres perros ilustrados/);
});
