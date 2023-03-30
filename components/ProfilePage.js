import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Event_Card from "./EventCard";
import Avatar from "./ProfileAvatar";
import Radial from "./Radial";
import UserCard from "./User_Card";

const MyProfile = () => {
    const [profile, setProfile] = useState(null)
    const supabase = useSupabaseClient();
    const session = useSession();

    const section_format = '"bg-boneWhite last:shadow-lg w-full rounded-sm content-stretch p-4 overflow-y-scroll'
    useEffect(() => {
        supabase.from('Persona')
            .select()
            .eq('auth_id', session.user.id)
            .then(result => {
                if (result.data.length > 0) {
                    setProfile(result.data[0])
                }
            })
            .catch(console.error)
    }, []);

    return <>
        <div className='m-6 bg-transparent flex flex-col gap-1 overflow-hidden'>
            <h2 className="text-[1.5rem] font-bold grow-0">Perfil</h2>
            <div className={section_format}>
                <div className="flex h-full">
                    <div className="w-1/4 grid justify-center content-center">
                        <Avatar />
                    </div>
                    <div className="flex flex-wrap text-mainBlack text-[16px] font-semibold w-3/4 p-4 last:justify-center">
                        <div className="flex flex-col basis-1/2 content-center  p-2">
                            <span>Nombre de Usuario</span>
                            <span className="text-purBlue">{profile?.nombre ? (profile?.nombre) : ('Username')}</span>
                        </div>
                        <div className="flex flex-col basis-1/2 content-center p-2">
                            <span>Correo</span>
                            <span className="text-purBlue">{profile?.correo ? (profile?.correo) : ('Mail')}</span>
                        </div>
                        <div className="flex flex-col basis-1/2 content-center p-2">
                            <span>País</span>
                            <span className="text-purBlue">{profile?.id_pais ? (profile?.id_pais) : ('País')}</span>
                        </div>
                        <div className="flex flex-col basis-1/2 content-center p-2">
                            <span>Ciudad</span>
                            <span className="text-purBlue">{profile?.id_ciudad ? (profile?.id_ciudad) : ('Ciudad')}</span>
                        </div>
                        <a className="text-blue font-bold justify-center py-4" onClick={null}>Solicitar cambio de contraseña</a>
                    </div>
                </div>
            </div>
            {profile?.id_rol === 2 ? (
                <div className={section_format}>
                    <span className="font-semibold text-[18px]">Mis asignaturas</span>
                    <div className="flex flex-wrap gap-2">
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                    </div>
                </div>) : (<></>)}
        </div>
    </>
}

export default MyProfile;