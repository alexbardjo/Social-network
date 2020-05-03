import React from "react";
import styles from './users.module.css';


let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers (
            [ {id: 1,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmEQzTqrZwy_tN2QsC-XkOwh7wuVlolpDMoxR5qBwJBzQrPiGg&usqp=CAU',
                followed: false, fullName: 'Alexandr', status: 'I am a star',
                location: {city:'Krivoy Rog', country: 'Ukraine'}},
                {id: 2, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8ByYzeUFXM_E_GFi4XU3m5hGJAZTrLpgu6WWquIZSLsddsCvf&usqp=CAU', followed: true, fullName: 'Vladislav', status: 'I am a boss', location: {city:'Kiev', country: 'Ukraine'}},
                {id: 3, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmEQzTqrZwy_tN2QsC-XkOwh7wuVlolpDMoxR5qBwJBzQrPiGg&usqp=CAU', followed: true, fullName: 'Ivan', status: 'I am a rock', location: {city:'Moscow', country: 'Russia'}},
                {id: 4, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8ByYzeUFXM_E_GFi4XU3m5hGJAZTrLpgu6WWquIZSLsddsCvf&usqp=CAU', followed: false, fullName: 'Dmitriy', status: 'I am a rock too', location: {city:'Minsk', country: 'Balarus'}},
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;