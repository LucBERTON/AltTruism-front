import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const UserProfileContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

function UserProfileCard() {
	return (
		<UserProfileContainer>
			<div>UserProfile</div>
			<FontAwesomeIcon icon={faUser} />
		</UserProfileContainer>
	);
}

export default UserProfileCard;
