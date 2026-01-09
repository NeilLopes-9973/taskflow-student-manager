# 🔐 Firebase Token Setup for GitHub Actions

## ⚡ Quick Setup Instructions

### **Step 1: Install Firebase CLI**
```bash
# Install globally
npm install -g firebase-tools

# Check installation
firebase --version
```

### **Step 2: Login to Firebase**
```bash
# This will open a browser for authentication
firebase login
```

### **Step 3: Generate CI Token**
```bash
# Generate token for CI/CD
firebase login:ci
```

**Expected Output:**
```
✔ Success! Use this token to authenticate on a CI server:
1/abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

### **Step 4: Add Token to GitHub Secrets**

1. **Go to GitHub Repository Settings:**
   - URL: https://github.com/NeilLopes-9973/taskflow-student-manager/settings/secrets/actions

2. **Add New Secret:**
   - Name: `FIREBASE_TOKEN`
   - Value: `1/abc123def456ghi789jkl012mno345pqr678stu901vwx234yz` (your actual token)

3. **Save the secret**

### **Step 5: Deploy!**

**Option A: Automatic Deployment (Recommended)**
- Push any changes to GitHub
- GitHub Actions will automatically deploy to Firebase
- Your app will be live at: `https://taskflow-cbcd3.web.app`

**Option B: Manual Deployment**
```bash
npm run deploy
```

## 🔧 Troubleshooting

### **PowerShell Execution Policy Issue**
If you see this error:
```
firebase : File cannot be loaded because running scripts is disabled
```

**Solution:**
```powershell
# Temporary fix (for current session)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

# Then run firebase commands
firebase --version
firebase login
firebase login:ci
```

### **Alternative: Use Web Interface**
If CLI doesn't work, you can also:

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Select Project**: `taskflow-cbcd3`
3. **Go to Project Settings** → **Service Accounts**
4. **Generate new private key**
5. **Use the JSON file content** for deployment

## 🚀 Deployment Verification

After setting up the token:

1. **Check GitHub Actions**: https://github.com/NeilLopes-9973/taskflow-student-manager/actions
2. **Wait for workflow to complete**
3. **Visit your app**: https://taskflow-cbcd3.web.app

## 📊 Expected Results

✅ **GitHub Actions will pass**  
✅ **Firebase deployment will succeed**  
✅ **Your app will be live**  
✅ **Automatic deployments on future pushes**  

---

**Once you add the Firebase token to GitHub secrets, your CI/CD pipeline will work perfectly!** 🎉
