import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import Question from './components/Question.tsx';
import Final from './components/Final.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/question" element={<Question />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
