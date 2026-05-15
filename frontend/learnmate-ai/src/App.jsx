import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import DocumentListPage from './pages/Documents/DocumentListPage';
import FlashcardPage from './pages/Flashcards/FlashcardPage';
import FlashcardsListPage from './pages/Flashcards/FlashcardsListPage';
import QuizResultPage from './pages/Quizzes/QuizResultPage';
import ProfilePage from './pages/Profile/ProfilePage';

const App = () => {
  const isAuthenticated = false;
  const loading = false;

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            isAuthenticated ? (
              <Navigate to='/dashboard' replace />
            ) : (
              <Navigate to='/login' replace />
            )
          }
        />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute/>}>
        <Route path='/dashboard' element={<DashboardPage/>} />
        <Route path='/documents' element={<DocumentListPage/>}/>
        <Route path='/documents/:id' element={<DocumentDetailPage/>}/>
        <Route path='/flashcards' element={<FlashcardsListPage/>}/>
        <Route path='/documents/:id/flashcards' element={<QuizResultPage/>}/>
        <Route path='quizzes/:id/flashcards' element={<QuizResultPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        </Route>

        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;