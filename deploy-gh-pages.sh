#!/usr/bin/env bash
# Deploy Angular build to GitHub Pages (Option B: manual deploy)
# Run from repo root: ./deploy-gh-pages.sh

set -e
REPO_URL="https://github.com/rTeamTechies/rteam-website-ui-angular.git"
OUT_DIR="dist/rteam-website/browser"

if [ ! -f "angular.json" ]; then
  echo "Run this script from the repo root (where angular.json is)."
  exit 1
fi

echo "Building Angular app for production..."
npm run build

if [ ! -f "$OUT_DIR/index.html" ]; then
  echo "Error: Build output not found at $OUT_DIR/index.html"
  exit 1
fi

echo "Adding 404.html for SPA routing..."
cp "$OUT_DIR/index.html" "$OUT_DIR/404.html"

echo "Pushing to gh-pages branch..."
cd "$OUT_DIR"
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git branch -M main
git remote add origin "$REPO_URL"
git push -f origin main:gh-pages

echo "Done. Enable Pages in GitHub: Settings → Pages → Source: Deploy from branch → Branch: gh-pages, / (root)"
