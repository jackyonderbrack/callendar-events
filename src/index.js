import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

const supabase = createClient(
  "https://ipxxgrgagfvttzjshijr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlweHhncmdhZ2Z2dHR6anNoaWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI4MjQ1NDAsImV4cCI6MTk4ODQwMDU0MH0.NscIwewSEstUbrybEAfdN3FpWq7BkqoMLvRM0C3Z4AA"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* SessionContextProvider -> Now our application gets access to supabase */}
    <SessionContextProvider supabaseClient={supabase}>

      <App />
      
    </SessionContextProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
