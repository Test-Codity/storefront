DO NOT MERGE. Acceptance fixture for opt-in license scanning.

**How to test**
1. Comment `@codity review` — expect **no** License Compliance section
2. Comment `@codity license` — expect license findings for tinymce@7.5.1 (GPL-2.0-or-later)
3. Or run Security → Dependencies & Licenses → Branch dependency scan on this branch

Lockfile-only fixture under `codity-acceptance/pr-scope-verify/restrictive-license/`.
