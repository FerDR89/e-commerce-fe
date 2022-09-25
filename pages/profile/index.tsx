import { LayOutWithOutSearchMobile } from "components/layout";
import { ProfilePage } from "components/profile-page";
import { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <LayOutWithOutSearchMobile>
      <ProfilePage />
    </LayOutWithOutSearchMobile>
  );
};

export default Profile;
