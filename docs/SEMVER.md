## SemVer (Semantic Versioning)

fyr: [semver](https://semver.org/)

[major].[minor].[patch]

- major: Major release (there are lot possibility of breaking changes)
- minor: Backward compatablity/enhancements/perf updates etc.,
- patch: bug fixes
  
---

- per-version 
  - [major].[minor].[patch]-alpha
  - [major].[minor].[patch]-[major].[minor].[patch]

---

- versioning symbols

    - ranges: `<`, `>`, `<=`, `>=`, `=`
    - caret: `^` accepts only [minor].[patch] changes
    - tlide: `~` accepts only [patch] changes

---