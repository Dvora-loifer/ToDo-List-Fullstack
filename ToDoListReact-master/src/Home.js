import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>ברוך הבא לדף הבית</h1>
            <p>בבקשה לבחור אפשרות:</p>
            <Link to="/register">הרשמה</Link>
            <br />
            <Link to="/login">התחברות</Link>
        </div>
    );
}

export default Home;