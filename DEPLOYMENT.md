# Deployment Guide - Vercel

This guide will help you deploy your Angular Counter App to Vercel.

## Prerequisites

- Vercel account (free at [vercel.com](https://vercel.com))
- GitHub account (recommended for easy integration)
- Git installed locally

## Deployment Methods

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from project directory:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set project name
   - Accept suggested settings
   - Wait for deployment to complete

### Method 2: Using GitHub Integration (Easiest for Auto-Deployment)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Visit [vercel.com/new](https://vercel.com/new)**

3. **Import your GitHub repository:**
   - Click "Import Project"
   - Select your repository
   - Vercel will auto-detect it's an Angular project
   - Click "Deploy"

### Method 3: Manual Deployment (Advanced)

1. **Build the production bundle:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy the `dist/counter-app` folder to Vercel**

## Environment Setup

The included `vercel.json` is pre-configured with:
- Node.js 18.x runtime
- Production build output path: `dist/counter-app`
- SPA routing (all routes serve `index.html`)

## Important Configuration Files

- **vercel.json** - Vercel deployment configuration
- **.vercelignore** - Files to exclude from deployment
- **package.json** - Build scripts and dependencies

## Post-Deployment

Once deployed, you can:
- View your app at the Vercel-provided URL
- Enable custom domain (Vercel settings)
- Configure environment variables if needed
- Set up automated deployments from GitHub

## Troubleshooting

### Build Fails
- Ensure `npm install` completes successfully
- Check that all dependencies are in package.json
- Verify Node version is 18.x or higher

### App Shows Blank Page
- Clear browser cache (Ctrl+Shift+Del)
- Check browser console for errors (F12)
- Verify routing configuration in vercel.json

### Slow Performance
- Angular bundles are optimized in production mode ✓
- Consider enabling "Vercel Analytics" for insights

## More Information

- [Vercel Angular Documentation](https://vercel.com/docs/frameworks/angular)
- [Angular Production Build](https://angular.io/guide/build)
- [Vercel Deployment Documentation](https://vercel.com/docs)

---

Your app is ready for deployment! Choose Method 1 or 2 above to get started.
