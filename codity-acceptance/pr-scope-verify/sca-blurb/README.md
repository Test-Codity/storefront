DO NOT MERGE. Acceptance fixture for classic Dependency vulnerability scanning comments.

**Expect**
1. Comment `@codity review`
2. Classic `## Dependency vulnerability scanning — JavaScript` with Metric table
3. Numbered vulns: CVE / Fixed in / Type / short blurb
4. **No** Proof of concept, Impact headings, or code fences in the dependency comment
5. **No** License Compliance on this review

Lockfile-only fixture under `codity-acceptance/pr-scope-verify/sca-blurb/`.

