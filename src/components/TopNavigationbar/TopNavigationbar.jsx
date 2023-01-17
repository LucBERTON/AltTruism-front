import styled from "styled-components";

import React from "react";
import UserProfileCard from "../UserProfileCard/UserProfileCard";

//TopNavigationBar should be fixed at the top of screen
const StyledTopNavigationbar = styled.div`
	display: flex;
	flex-direction: row;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 4rem;
	background-color: #f1f1f1;
`;

function TopNavigationbar() {
	return (
		<StyledTopNavigationbar>
			<UserProfileCard />
			TopNavigationbar
		</StyledTopNavigationbar>
	);
}

export default TopNavigationbar;
