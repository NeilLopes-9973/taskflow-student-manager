# 🚀 Quick GitHub Secrets Setup

## ⚡ Step-by-Step Instructions

### **Step 1: Open GitHub Secrets Page**
Click this link: https://github.com/NeilLopes-9973/taskflow-student-manager/settings/secrets/actions

### **Step 2: Add FIREBASE_SERVICE_ACCOUNT Secret**

1. Click **"New repository secret"**
2. **Name**: `FIREBASE_SERVICE_ACCOUNT`
3. **Secret**: Paste your entire service account JSON here
   (Copy the JSON you provided earlier - don't include it in code)

4. Click **"Add secret"**

### **Step 3: Trigger Deployment**

1. **Push any change** to trigger GitHub Actions
2. **Or manually trigger** the workflow

### **Step 4: Monitor Deployment**

Watch your deployment at: https://github.com/NeilLopes-9973/taskflow-student-manager/actions

### **Step 5: Visit Your Live App**

Once deployed: https://taskflow-cbcd3.web.app

---

## 🎯 **That's It!**

Just add the service account JSON as `FIREBASE_SERVICE_ACCOUNT` and your TaskFlow will deploy automatically! 🚀

## 🔐 **Security Note**
Never commit service account credentials to your repository. Always use GitHub secrets for sensitive data.
