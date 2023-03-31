import { SupabaseClient, useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Navbar from '@/components/Navbar';
import { useAuth } from '@/components/hooks/loginData';
import SelectionPage from '@/components/CourseSelection';
import ProfileBT from '@/components/Profile_bt';

const Profile = () => {
    const session = useSession();
    const { useCheckAuth } = useAuth()

    useCheckAuth();

    return (
        <div className='pl-[260px] flex w-screen h-screen bg-boneWhite'>
            <Navbar />
            <div className='grid w-full h-screen'>
                {<ProfileBT />}

                {<SelectionPage />}
            </div>
        </div>
    )
}

export default Profile