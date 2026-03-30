// Newsletter archive — newest issue first.
// TO ADD A NEW NEWSLETTER:
// 1. Copy _template.json → rename to YYYY-MM-DD.json → fill in all fields
// 2. Add an import line below (follow the same pattern)
// 3. Add the variable to the `newsletters` array at position 0
// 4. Commit and push — GitHub Actions will deploy automatically

import issue_2026_01_29 from './2026-01-29.json'
import issue_2026_01_15 from './2026-01-15.json'

const newsletters = [
  issue_2026_01_29,
  issue_2026_01_15,
]

export default newsletters
