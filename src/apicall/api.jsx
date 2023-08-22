
import axios from 'axios';

//!RegisterAPI


export async function registerUser(name, email, password) {
    try {
        const response = await axios.post('http://localhost:8000/api/v1/register', {
            name,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}


//!LoginAPI

export async function loginUser(email, password) {
    try {
        const response = await axios.post('http://localhost:8000/api/v1/login', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}