"use client";

import React, { useEffect, useState } from 'react';
import style from './user.module.css'
const Users = () => {
    const [users, setUsers] =useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=> setUsers(data));
    },[])
    return (
        <div>
            <h1 className={style.header_text}>Total Users: {users.length}</h1>
            {
                users.map((user)=><div key={user.id}
                    className="card mx-auto w-[50%] my-5 bg-slate-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{user.name}</h2>
                        <p>{user.email}</p>
                        <div className="card-actions justify-end">
                           
                        </div>

                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Users;