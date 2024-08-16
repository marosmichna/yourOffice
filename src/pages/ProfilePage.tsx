import EditProfileForm from '@/components/Forms/EditProfileForm'
import ProfilePageHeader from '@/components/ProfilePage/ProfilePageHeader';
import { H3 } from '@/components/ui/H3';

const ProfilePage = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <ProfilePageHeader />
      <div className='mt-5 w-[30%]'>
        <H3 className='text-center mb-5'>Edit Your Prifile</H3>
        <EditProfileForm />
      </div>
      
    </div>
  )
}

export default ProfilePage;