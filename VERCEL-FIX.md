# 🔧 Vercel Blank Screen Fix

## 🚨 **Problem Identified**
Your Vercel deployment shows a blank screen because:
1. ❌ Base URL configured for GitHub Pages instead of Vercel
2. ❌ Firebase environment variables not set on Vercel
3. ❌ Possible runtime errors in production

## ✅ **Fixes Applied**

### **1. Base URL Fixed**
- Changed from `/taskflow-student-manager/` to `/` for Vercel compatibility

### **2. Environment Variables Needed**
Add these to Vercel:

**Go to**: https://vercel.com/NeilLopes-9973/taskflow-student-manager/settings/environment-variables

Add these variables:
```
VITE_FIREBASE_API_KEY=AIzaSyCnlDslpUt-0_EKLyUFBr8w2d-aZ_5sEco
VITE_FIREBASE_AUTH_DOMAIN=taskflow-cbcd3.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=taskflow-cbcd3
VITE_FIREBASE_STORAGE_BUCKET=taskflow-cbcd3.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=356672582400
VITE_FIREBASE_APP_ID=1:356672582400:web:0610238bd9e60e57a839e5
```

## 🚀 **Quick Fix Steps**

### **Step 1: Add Environment Variables**
1. Go to: https://vercel.com/NeilLopes-9973/taskflow-student-manager/settings/environment-variables
2. Add all 6 Firebase environment variables above
3. Make sure they're set for **Production**, **Preview**, and **Development**

### **Step 2: Redeploy**
1. Go to: https://vercel.com/NeilLopes-9973/taskflow-student-manager
2. Click **"Redeploy"** or push a new commit

### **Step 3: Check Console**
1. Visit your Vercel app
2. Open browser console (F12)
3. Look for any Firebase initialization errors

## 🔍 **Debugging Steps**

### **If Still Blank:**

1. **Check Network Tab**:
   - Are JavaScript files loading?
   - Any 404 errors?

2. **Check Console Tab**:
   - Any Firebase errors?
   - Any "import.meta.env" undefined errors?

3. **Check Elements Tab**:
   - Is the root div present?
   - Is React mounting?

## 📱 **Alternative: Local Build Test**

Test locally with production settings:
```bash
# Build and preview locally
npm run build
npm run preview
```

Then visit: http://localhost:4173

## 🎯 **Expected Results**

After fixes:
- ✅ App loads properly on Vercel
- ✅ Firebase authentication works
- ✅ No console errors
- ✅ Responsive design displays

---

**Add the environment variables to Vercel and redeploy - this should fix the blank screen!** 🚀
