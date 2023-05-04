import { useEffect, useState } from "react";
 
import Header from "./header";
import UserData from "./UserData.jsx";
 
import AddEventButton from "./bookbutton";



const API = "https://api.tvmaze.com/search/shows?q=all";

const App = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])
    return <>

        <Header />




        <UserData users={users} />

    </>
}

export default App;

