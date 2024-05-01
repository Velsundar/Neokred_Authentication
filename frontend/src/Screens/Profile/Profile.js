import React,{useState, useEffect} from 'react';
import NavBar from '../../components/navBar';
import ProfilePaper from '../../components/profilePaper';
import { getProfile } from '../../service/profilService'; 

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  console.log("profileData",profileData)
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log("profiletoken",token)
        if (!token) {
          throw new Error('Authentication Failed');
        }
        const data = await getProfile(token);
        console.log("profileresponse",data)
        setProfileData(data);
        setUsername(data.fullName);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchProfileData();
  }, []);


  return (
    <div>
     <NavBar username={username}/>
     {profileData && <ProfilePaper {...profileData} />}
    </div>
  );
};

export default Profile;
