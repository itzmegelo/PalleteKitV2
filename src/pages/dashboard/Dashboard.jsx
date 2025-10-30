import React from 'react'
import { useUser } from "../../context/UserContext";

export default function Dashboard() {
   const { user } = useUser();

   return (
     <div className="p-6">
       <h1 className="text-2xl font-bold">Welcome, {user?.email}</h1>
     </div>
   );
}
