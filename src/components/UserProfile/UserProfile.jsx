import styled from "styled-components";

const UserProfileContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

function UserProfile() {
	return (
		<UserProfileContainer>
			<div>UserProfile</div>
		</UserProfileContainer>
	);
}

export default UserProfile;
