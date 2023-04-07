import Box_UserInfo from './Box_UserInfo';
import UserCard from './User_Card';
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


//Agregar función para recuper la data del usuario.

const UserList = ({ name, email }) => {

    const section_format = 'bg-boneWhite w-full rounded-sm h-1/2 max-h-1/2  overflow-hidden'

    const [users, setUsers] = useState([
        {
            "name": "Usuario",
            "email": "persona@gmail.com",
        },
        {
            "name": "Usuario",
            "email": "persona@gmail.com",
        },
        {
            "name": "Usuario",
            "email": "persona@gmail.com",
        },
        {
            "name": "Usuario",
            "email": "persona@gmail.com",
        },
        {
            "name": "Usuario",
            "email": "persona@gmail.com",
        },
        {
            "name": "Usuario",
            "email": "persona@gmail.com",
        },
    ]);


    return<>
            <div className='m-6 bg-transparent flex flex-col gap-5 overflow-hidden'>

                <h2 className="text-[1.5rem] font-bold grow-0">Administrar Usuarios</h2> 

                <div className='space-x-3'>
                    <span className = "text-black font-bold">Buscar Usuario </span>
                    <SearchBar/>
                    <span/>
                    <Popup trigger={<button className="bg-purBlue text-white font-bold py-2 px-4 rounded">Crear Usuario</button>} closeOnDocumentClick={false} modal>
                        <Box_UserInfo/>
                  </Popup>                
                </div>

                <div className={section_format}>
                    <div className="flex flex-wrap gap-2 ">
                        {users.map((user, index) => (
                            <UserCard key={index} name={user.name} email={user.email} />
                        ))}
                    </div>
                </div>

            </div>
     </>

    
}

export default UserList