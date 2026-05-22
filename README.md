# Alkebuleum.org

Official website for the Alkebuleum Foundation — Africa's sovereign trust infrastructure.

Built with React + Vite, deployed to GitHub Pages via GitHub Actions.

---

## Development

```bash
npm install
npm run dev
```

## Deployment

Pushing to the `main` branch on GitHub triggers the Actions workflow which builds and deploys to GitHub Pages automatically.

**Always push to `main`:**

```bash
git push
# or explicitly:
git push origin main
```

> **Important:** The remote also has a `master` branch, but the GitHub Actions deploy workflow only watches `main`. Pushing to `master` will NOT trigger a deployment. The local `main` branch is configured to track `origin/main`, so a plain `git push` is all that's needed.

## Project structure

```
public/          Static files copied as-is to the build output
src/             React source (components, pages, styles)
.github/         GitHub Actions deploy workflow
CouncilHub/      Council Hub page sources (copy to public/ before deploying)
```
