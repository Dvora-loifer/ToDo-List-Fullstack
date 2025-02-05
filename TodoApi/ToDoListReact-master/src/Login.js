import React, { useState } from 'react';
import service from './service.js';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await service.login(username, password);
            // window.location.href = '/service'; // הפנה לדף הבית לאחר התחברות מוצלחת
        } catch (error) {
            setError('התחברות נכשלה. ודא שהפרטים נכונים.');
        }
    };

    return (
        <form onSubmit={handleLogin}>
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
            <button type="submit">התחבר</button>
            {error && <p>{error}</p>}
        </form>
    );
}

export default Login;