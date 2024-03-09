import Orders from "@/components/Profile/Orders";
import Profile from "@/components/Profile/ProfileDetails";

const fakeData = {
	name: "amin",
	lastname: "haddadi",
	email: "aminHaddadi@gmail.com",
	number: "09900114232",
};

const ProfilePage: React.FC = (): JSX.Element => {
	return (
		<>
			<Profile {...fakeData} />
			<br />
			<br />
			<Orders />
		</>
	);
};

export default ProfilePage;
