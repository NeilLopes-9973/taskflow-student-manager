# 🚀 Deployment Guide

This guide will help you deploy your TaskFlow application to production.

## 📋 Prerequisites

- Node.js 18+ installed
- Firebase project set up and configured
- Git installed and configured
- GitHub account (for hosting)

## 🔥 Firebase Deployment

### 1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. Login to Firebase
```bash
firebase login
```

### 3. Initialize Firebase Hosting
```bash
firebase init hosting
```
Follow the prompts:
- Use existing project: `taskflow-cbcd3`
- Set public directory: `dist`
- Configure as single-page app: `Yes`
- Don't overwrite index.html: `No`

### 4. Deploy to Firebase
```bash
npm run deploy
```

## 🐙 GitHub Pages Deployment

### 1. Build for Production
```bash
npm run build
```

### 2. Deploy to GitHub Pages
```bash
# Option 1: Using GitHub Actions (Recommended)
- Push your code to GitHub
- Enable GitHub Pages in repository settings
- Select source: `deploy` branch and `/` folder

# Option 2: Manual Deployment
- Copy contents of `dist/` folder to your GitHub Pages branch

# Option 3: Automatic Deployment (Recommended)
- Push your code to GitHub: `https://github.com/NeilLopes-9973/taskflow-student-manager.git`
- Enable GitHub Pages in repository settings
- Select source: `main` branch and `/` folder

### 3. Update Base URL (if needed)
If deploying to GitHub Pages, update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/taskflow-student-manager/', // Add this for GitHub Pages
  // ... rest of config
});
```

## 🔧 Environment Variables

### Production Environment
Create production environment variables:

**Firebase Hosting:**
- Automatically configured during Firebase deployment

**Application Environment:**
- Create `.env.production` file for production-specific settings
- Never commit `.env` files to version control

## 🌐 Custom Domain Setup

### Firebase Hosting
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### GitHub Pages
1. Go to repository Settings → Pages
2. Add custom domain in "Custom domain" section
3. Configure DNS records as instructed

## 📊 Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm run build

# Preview production build
npm run preview
```

### Lighthouse Score
- Aim for 90+ in all categories
- Check performance, accessibility, best practices, SEO

## 🔍 SEO Checklist

- [x] Proper meta titles and descriptions
- [x] Semantic HTML structure
- [x] Open Graph tags
- [x] Responsive design
- [x] Fast loading times
- [x] Proper heading hierarchy

## 🛡️ Security Checklist

- [x] Firebase security rules deployed
- [x] Environment variables secured
- [x] No sensitive data in client-side code
- [x] HTTPS enforced
- [x] Input validation implemented

## 📱 Mobile Optimization

- [x] Responsive design tested
- [x] Touch-friendly interface
- [x] Fast mobile loading
- [x] Proper viewport settings

## 🔄 CI/CD Pipeline

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.FIREBASE_TOKEN }}'
          projectId: taskflow-cbcd3
```

## 🐛 Troubleshooting

### Common Issues

**Build fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Deployment fails:**
- Check Firebase configuration
- Verify build output in `dist/`
- Check network connectivity

**Environment variables not working:**
- Verify `.env` file format
- Check Firebase console settings
- Restart application

**Security rules blocking access:**
- Deploy updated rules: `firebase deploy --only firestore:rules`
- Test with permissive rules first
- Gradually tighten security

## 📈 Monitoring

### Firebase Analytics
- Monitor user engagement
- Track performance metrics
- Set up conversion events

### Error Tracking
- Monitor console errors
- Set up error reporting
- Create alerting for critical issues

---

**Need help?** Check the main [README.md](./README.md) for detailed setup instructions.
