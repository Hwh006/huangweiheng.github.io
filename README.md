# huangweiheng.github.io

Personal portfolio site built with React + Vite.

Live site: **https://huangweiheng.github.io**

## Project structure

| Path | Description |
|------|-------------|
| `person_webside/` | Source code (React, Tailwind, WebGL effects) |
| `docs/` | Production build for GitHub Pages (do not edit by hand) |

## Local development

```bash
cd person_webside
npm install
npm run dev
```

Open http://localhost:5174

## Deploy to GitHub Pages

GitHub Pages is configured to publish from the **`main`** branch, **`/docs`** folder.

After changing the site:

```bash
cd person_webside
npm run build:pages
cd ..
git add docs person_webside
git commit -m "Update GitHub Pages build"
git push origin main
```

### Enable Pages (one-time, in GitHub)

1. Open https://github.com/Hwh006/huangweiheng.github.io/settings/pages
2. **Build and deployment** → Source: **Deploy from a branch**
3. Branch: **main**, Folder: **/docs**
4. Save

The site will be available at https://huangweiheng.github.io within a few minutes.

## Notes

- `base` is `/` because this is a **user/organization** site (`username.github.io`), not a project site.
- `404.html` is a copy of `index.html` so client-side routes (`/about`, `/contact`) work on refresh.
- `.nojekyll` disables Jekyll processing so Vite asset paths work correctly.
