# Deploy guide — GitHub + Vercel

## 1. Clean up the broken `.git` folder (one time)

A previous `git init` left a corrupted `.git` directory. Delete it before re-initializing.

**PowerShell (run from the portfolio folder):**

```powershell
Remove-Item -Recurse -Force .git
```

## 2. Initialize git and make the first commit

```powershell
cd "E:\ClaudeCode\Professional Cybersecurity Portfolio"

git init -b main
git config user.name  "Prashanth Mudigonda"
git config user.email "mudigondaprashanth@gmail.com"

git add .
git commit -m "Initial commit: cybersecurity portfolio"
```

## 3. Create the GitHub repo and push

**Option A — GitHub CLI (easiest, if you have `gh` installed):**

```powershell
gh auth login        # only if you haven't already
gh repo create Portfolio --public --source=. --remote=origin --push
```

**Option B — Web UI:**

1. Go to https://github.com/new
2. Repository name: `Portfolio`
3. Owner: `prashanth-7861`
4. Visibility: Public (required for the free Vercel tier to import easily)
5. Do **not** initialize with README, .gitignore, or license (we already have them)
6. Click **Create repository**
7. Then in PowerShell:

```powershell
git remote add origin https://github.com/prashanth-7861/Portfolio.git
git branch -M main
git push -u origin main
```

## 4. Deploy on Vercel

1. Go to https://vercel.com/new
2. Sign in with GitHub if you haven't
3. Click **Import** next to the `Portfolio` repo
4. **Project Name:** `prashanth-portfolio`  ← this controls the URL
5. **Framework Preset:** Other (it's a static site)
6. **Root Directory:** `./` (default)
7. **Build & Output Settings:** leave defaults — no build command needed
8. Click **Deploy**

The site will be live at `https://prashanth-portfolio.vercel.app` once the first deploy finishes (~30 seconds).

## 5. Future updates

Any push to `main` triggers an automatic deploy:

```powershell
git add .
git commit -m "your message"
git push
```

## Notes

- `vercel.json` rewrites `/` → `/portfolio.html`, so the root URL serves the main page directly.
- `resume.html` is reachable at `https://prashanth-portfolio.vercel.app/resume.html`.
- If `prashanth-portfolio` is taken on Vercel, pick a variant (e.g. `prashanth-mudigonda-portfolio`) and set up a custom domain later in Project Settings → Domains.
