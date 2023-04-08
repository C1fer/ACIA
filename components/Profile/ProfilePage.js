import Event_Card from "../Main/EventCard";
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Avatar from "./ProfileAvatar";
import CourseCard from "./Course_Card";
import { useAuth } from "../hooks/loginData";
import { useState } from "react";
import { useRouter } from 'next/router';
import { useEffect } from "react";


const MyProfile = () => {
    const section_format = 'bg-boneWhite last:shadow-lg w-full rounded-sm h-1/2 max-h-1/2 p-4 dark:bg-darkBD2 overflow-hidden'
    const profile = useAuth().useProfileData()
    const supabase = useSupabaseClient();
    const router = useRouter()

    const [courses, setCourses] = useState([
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
        {
            "name": "Asignatura",
            "academic_area": "Area Académica",
        },
    ]);

    async function handlePasswordRecovery() {
        try {
            const { error } = await supabase.auth.resetPasswordForEmail(profile?.correo)
            if (error) throw error;
            alert('Se ha enviado un correo para recuperar la contraseña');
        } catch (error) {
            alert(error.error_description || "No se pudo enviar el correo para la recuperación de contraseña");
        }
    }


    return <>
        <div className='m-6 bg-transparent flex flex-col gap-1 overflow-hidden' >
            <div className="flex justify-between">
                <h2 className="text-[1.5rem] font-bold grow-0">Perfil</h2>
                <button className='items-center text-[18px] font-semibold text-gray mx-4' onClick={() => router.back()}>Volver</button>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='bg-boneWhite last:shadow-lg w-full rounded-sm md:h-[250px] p-4 dark:bg-transparent'>
                    <div class="flex flex-col md:flex-row h-full">
                        <div class="md:w-2/5 grid justify-center content-center">
                            <Avatar />
                        </div>
                        <div class="flex flex-wrap text-mainBlack text-lg font-semibold w-full md:w-3/5 p-4 content-center dark:text-boneWhite">
                            <div class="flex flex-col w-full md:w-1/2 content-center p-2">
                                <span>Nombre de Usuario</span>
                                <span class="text-purBlue">{profile?.nombre ? (profile?.nombre) : ('Username')}</span>
                            </div>
                            <div class="flex flex-col w-full md:w-1/2 content-center p-2">
                                <span>Correo</span>
                                <span class="text-purBlue">{profile?.correo ? (profile?.correo) : ('Mail')}</span>
                            </div>
                            <div class="flex flex-col w-full md:w-1/2 content-center p-2">
                                <span>País</span>
                                <span class="text-purBlue">{profile?.id_pais ? (profile?.Pais.nombre) : ('País')}</span>
                            </div>
                            <div class="flex flex-col w-full md:w-1/2 content-center p-2">
                                <span>Ciudad</span>
                                <span class="text-purBlue">{profile?.id_ciudad ? (profile?.Ciudad?.nombre) : ('Ciudad')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid justify-center content-center ">
                    <button className="text-purBlue font-bold py-4 text-[20px] md:text-[24px] dark:text-purBlue cursor-pointer" onClick={handlePasswordRecovery}>Solicitar cambio de contraseña</button>
                </div>
                {profile?.id_rol === 2 ? (
                    <div className={section_format}>
                        <span className="font-semibold text-[18px] md:text-[24px]">Mis asignaturas</span>
                        <div className="h-full overflow-hidden overflow-y-auto">
                            <div className="flex flex-wrap gap-2 p-2">
                                {courses.map((course, index) => (
                                    <CourseCard key={index} name={course.name} area={course.academic_area} />
                                ))}
                                <div className="w-full h-[40px]" />
                            </div>
                        </div>
                    </div>) : (<></>)}
            </div>

        </div >
    </>
}

export default MyProfile;