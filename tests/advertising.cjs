const { test } = require("node:test");
const assert = require("node:assert/strict");
const { placementPlan, productionHost } = require("../js/advertising.js");
const words = (n) => Array(n).fill("word").join(" ");
const paragraph = (n) => ({ tag: "P", text: words(n) });

test("previews and other domains cannot request production ads", () => {
  assert.equal(productionHost("tech-blog.maddyzone.com"), true);
  for (const host of [
    "localhost",
    "127.0.0.1",
    "maddyzone.com",
    "tech-blog.maddyzone.com.example.org",
  ])
    assert.equal(productionHost(host), false);
});
test("brief notes and code-heavy snippets do not gain ad slots", () => {
  assert.deepEqual(placementPlan([paragraph(249)]), {
    end: false,
    midAfter: -1,
  });
  assert.deepEqual(
    placementPlan([paragraph(100), { tag: "PRE", text: words(1500) }]),
    { end: false, midAfter: -1 },
  );
});
test("ordinary articles have one end placement; long articles have at most two", () => {
  assert.deepEqual(placementPlan([paragraph(300), paragraph(200)]), {
    end: true,
    midAfter: -1,
  });
  assert.deepEqual(
    placementPlan(Array.from({ length: 12 }, () => paragraph(100))),
    { end: true, midAfter: 5 },
  );
});
test("a midpoint never separates an introduction from code, lists or images", () => {
  const blocks = [
    paragraph(450),
    { tag: "PRE", text: words(500) },
    paragraph(100),
    { tag: "UL", text: words(30) },
    paragraph(100),
    { tag: "P", text: "An example:" },
    { tag: "PRE", text: words(500) },
    paragraph(120),
    paragraph(300),
  ];
  const plan = placementPlan(blocks);
  assert.equal(plan.end, true);
  assert.equal(plan.midAfter, 4);
  assert.equal(blocks[plan.midAfter].tag, "P");
});
test("a long note with no safe paragraph break keeps just the end placement", () => {
  assert.deepEqual(placementPlan([{ tag: "UL", text: words(1200) }]), {
    end: true,
    midAfter: -1,
  });
});
