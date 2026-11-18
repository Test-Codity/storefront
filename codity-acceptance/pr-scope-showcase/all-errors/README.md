# DO NOT MERGE — Codity showcase: all introduced dependency errors

Manual review trigger for Atharva: comment `@codity review` yourself.

## Expected (local codity-atharva / new scope)

- Classic GitHub comment: `## Dependency vulnerability scanning — JavaScript`
- Introduced-only wording (not full-repo debt dump)
- Multiple introduced vulnerable packages from this lockfile:
  - axios@0.21.1 (+ transitive follow-redirects@1.14.7)
  - lodash@4.17.20
  - minimist@1.2.5
  - node-fetch@2.6.6
  - tinymce@7.5.1
  - ws@7.4.5
- **No** `License Compliance` section on the PR
- **No** second partial-coverage comment for `package.json` (lockfile only)

## Do not

- Install / execute these packages in production
- Merge this PR
