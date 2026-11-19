DO NOT MERGE. Acceptance fixture for PR-scoped dependency scanning.

**How to test**
1. Comment `@codity review`
2. Expect classic Dependency vulnerability scanning for introduced axios/lodash (and transitive follow-redirects)
3. Expect **no** License Compliance section on this review
4. Results should also appear under Security → Dependencies & Licenses → PR dependency scans

Lockfile-only fixture under `codity-acceptance/pr-scope-verify/introduced-vulns/`.
