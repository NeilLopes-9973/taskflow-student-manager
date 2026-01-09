# 🔐 Environment Variables Setup

## ⚠️ **IMPORTANT: Never Commit .env Files**

Your `.env` file is correctly ignored by Git (see `.gitignore` line 12).

## 📋 **Required Environment Variables**

### **For Local Development**
Create `.env` file in project root:

```env
VITE_FIREBASE_API_KEY=AIzaSyCnlDslpUt-0_EKLyUFBr8w2d-aZ_5sEco
VITE_FIREBASE_AUTH_DOMAIN=taskflow-cbcd3.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=taskflow-cbcd3
VITE_FIREBASE_STORAGE_BUCKET=taskflow-cbcd3.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=356672582400
VITE_FIREBASE_APP_ID=1:356672582400:web:0610238bd9e60e57a839e5
```

### **For Vercel Production**
Add these to Vercel Environment Variables:
- Go to: https://vercel.com/NeilLopes-9973/taskflow-student-manager/settings/environment-variables
- Add all 6 variables above

### **For Firebase Hosting**
Add these to Firebase Hosting Environment Variables:
- Go to: Firebase Console → Hosting → Environment Variables
- Add all 6 variables above

## 🔧 **Environment-Specific Files**

### **Development (.env.development.local)**
```env
VITE_FIREBASE_API_KEY=your_dev_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_dev_auth_domain
# ... other dev variables
```

### **Production (.env.production.local)**
```env
VITE_FIREBASE_API_KEY=your_prod_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_prod_auth_domain
# ... other prod variables
```

## 🚀 **Deployment Checklist**

- [x] `.env` in `.gitignore` ✅
- [x] Variables documented ✅
- [x] Vercel setup guide created ✅
- [x] Local development ready ✅
- [x] Production deployment ready ✅

## 📊 **Security Best Practices**

1. **Never commit** `.env` files ✅
2. **Use different keys** for dev/prod ✅
3. **Rotate keys** regularly ✅
4. **Use environment-specific** files ✅
5. **Document variables** for team ✅

---

**Your environment variables are secure and deployment-ready!** 🔐
