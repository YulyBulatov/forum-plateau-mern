import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get('/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map(cat => (
                    <li key={cat._id}>
                        <Link to={`/topics/${cat._id}`}>{cat.titre}</Link>
                        </li>
                ))}
            </ul>
        </div>
    );
}
