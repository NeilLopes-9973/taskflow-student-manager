# TaskFlow – Student Task Manager (Firebase Version)

A modern, responsive student task management application built with React and Firebase. This version has been completely refactored to use Firebase for authentication and data storage instead of Supabase.

## 🚀 Features

- **Firebase Authentication**: Secure email/password signup and login
- **Real-time Firestore Database**: Tasks sync instantly across devices
- **Task Management**: Create, read, update, and delete tasks
- **Task Filtering**: Filter by all, pending, or completed tasks
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Beautiful teal/blue theme with smooth animations
- **Dashboard Analytics**: Real-time task counts and statistics
- **Route Protection**: Only authenticated users can access the dashboard

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **UI Framework**: TailwindCSS + shadcn/ui components
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📋 Prerequisites

Before you begin, ensure you have the following:

- Node.js (v18 or higher)
- npm or yarn
- A Firebase project

## 🔥 Firebase Setup

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Follow the setup instructions

2. **Enable Authentication**
   - In your Firebase project, go to Authentication
   - Click "Get started"
   - Enable "Email/Password" sign-in method
   - Save your settings

3. **Create Firestore Database**
   - Go to Firestore Database
   - Click "Create database"
   - Choose "Start in test mode" (we'll add security rules)
   - Select a location for your database

4. **Get Firebase Configuration**
   - Go to Project Settings (⚙️ icon)
   - Under "Your apps", click the web icon (`</>`)
   - Copy the firebaseConfig object

5. **Set Up Security Rules**
   - Go to Firestore Database → Rules
   - Replace the existing rules with the content from `firestore.rules` file:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId}/tasks/{taskId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
       match /{document=**} {
         allow read, write: if false;
       }
     }
   }
   ```
   - Click "Publish"

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd student-task-hub-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy the `.env` file and update it with your Firebase configuration:
   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY="your-api-key-here"
   VITE_FIREBASE_AUTH_DOMAIN="your-project-id.firebaseapp.com"
   VITE_FIREBASE_PROJECT_ID="your-project-id"
   VITE_FIREBASE_STORAGE_BUCKET="your-project-id.appspot.com"
   VITE_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
   VITE_FIREBASE_APP_ID="your-app-id"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Sign up for a new account
   - Start managing your tasks!

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── TaskCard.tsx    # Individual task display
│   ├── TaskForm.tsx    # Task creation/editing form
│   ├── TaskList.tsx    # List of tasks
│   └── ...
├── context/            # React Context providers
│   ├── AuthContext.tsx # Firebase authentication state
│   └── TaskContext.tsx # Task management state
├── hooks/              # Custom React hooks
│   ├── useTasks.ts     # Firestore task operations
│   └── ...
├── integrations/       # Third-party service integrations
│   └── firebase/       # Firebase configuration
│       ├── client.ts   # Firebase app initialization
│       └── types.ts    # TypeScript type definitions
├── pages/              # Page components
│   ├── Auth.tsx        # Login/Signup page
│   ├── Dashboard.tsx   # Main dashboard
│   ├── AddTask.tsx     # Add new task
│   └── EditTask.tsx    # Edit existing task
└── ...
```

## 🔐 Security Features

- **Firebase Authentication**: Secure user authentication with JWT tokens
- **Firestore Security Rules**: Users can only access their own tasks
- **Environment Variables**: Sensitive configuration is stored in environment variables
- **Input Validation**: Form validation using Zod schemas

## 📱 Data Structure

Tasks are stored in Firestore using the following structure:

```
users/{userId}/tasks/{taskId}
├── userId: string
├── title: string
├── description: string
├── deadline: string
├── status: 'pending' | 'completed'
├── createdAt: Timestamp
└── updatedAt: Timestamp
```

## 🎯 Usage

1. **Sign Up**: Create a new account with your email and password
2. **Login**: Access your dashboard with your credentials
3. **Add Tasks**: Click "Create New Task" to add tasks to your schedule
4. **Manage Tasks**: 
   - Mark tasks as complete/pending
   - Edit task details
   - Delete unwanted tasks
   - Filter tasks by status
5. **Real-time Updates**: Changes sync instantly across all your devices

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Firebase Hosting
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Initialize Firebase Hosting:
   ```bash
   firebase init hosting
   ```
3. Deploy:
   ```bash
   firebase deploy
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

1. **Firebase Configuration Error**
   - Ensure all environment variables are correctly set
   - Check that your Firebase project is properly configured

2. **Authentication Issues**
   - Make sure Email/Password sign-in is enabled in Firebase Console
   - Check your security rules if you can't access data

3. **Build Errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check your Node.js version (v18+ recommended)

### Getting Help

- Check the [Firebase Documentation](https://firebase.google.com/docs)
- Review the console logs for specific error messages
- Ensure all Firebase services are enabled in your project

## 🔄 Migration from Supabase

This project was successfully migrated from Supabase to Firebase with the following changes:

- ✅ Authentication: Supabase Auth → Firebase Auth
- ✅ Database: Supabase PostgreSQL → Firebase Firestore
- ✅ Real-time Updates: Supabase Realtime → Firestore Realtime Listeners
- ✅ Security: Supabase RLS → Firestore Security Rules
- ✅ Dependencies: Removed all Supabase packages
- ✅ Configuration: Environment variables updated for Firebase

The migration maintains all existing functionality while providing a more scalable and cost-effective solution.
