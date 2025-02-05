import React, { useState } from 'react';
import service from './service.js';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await service.registerUser(username, password);
            window.location.href = '/Login'; // הפנה לדף התחברות
        } catch (error) {
            setError('שגיאה בהרשמה');
        }
    };

    return (
        <form onSubmit={handleSignUp}>
            <div>
                <label>שם משתמש:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div>
                <label>סיסמה:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <button type="submit">הרשמה</button>
            {error && <p>{error}</p>}
        </form>
    );
}

export default SignUp;