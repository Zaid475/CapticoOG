import React, { useEffect, useReducer } from 'react';
import { createContext } from 'react';
import api from '../axios/axios';

export const Authcon = createContext();

// Reducer function to handle user login and loading state
function reducer(state, action) {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload };  // Set user and loading false
        case "loading":
            return { ...state };  // Set loading true
        default:
            return state;
    }
}

// Initial state with user as null and loading as true initially
const initialState = { user: null};

const Usecontext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function getUserData() {
           

            try {
                const response = await api.post("/auth/getUserData");
                if (response.data.success) {
                    console.log("User data fetched successfully:", response.data.UserData.name);
                    dispatch({ type: "login", payload: response.data.UserData });  // Update user data and set loading to false
                } else {
                    console.log("Failed to fetch user data.");
                   
                }
            } catch (error) {
                console.log("Error fetching user data:", error);
                
            }
        }

        getUserData();  // Fetch user data on component mount
    }, []);

    return (
        <Authcon.Provider value={{ state, dispatch }}>
            {children}
        </Authcon.Provider>
    );
};

export default Usecontext;