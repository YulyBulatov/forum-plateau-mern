import { useState } from 'react';
import api from '../api/api';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/register', { username, email, password });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type='submit'>Register</button>
            </form>
            <p>{message}</p>
        </div>
    );
}