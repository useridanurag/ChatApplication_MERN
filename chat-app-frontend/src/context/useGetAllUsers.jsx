import React, { useState,useEffect } from 'react'
import Cookies from "js-cookie";
import axios from "axios";
const useGetAllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const token=Cookies.get("jwt");
                const response=await axios.get("/api/user/all_users",{
                    credentials:"include",
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                setAllUsers(response.data.users);
                setLoading(false);
            } catch (error) {
                console.log("Error in useGetAllUsers : " + error);
            }
        }
        getUsers();
    }, [])
return [allUsers,loading];

}

export default useGetAllUsers