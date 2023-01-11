import React from "react";
import styled from "styled-components";
import TopNavigationbar from "../../components/TopNavigationbar/TopNavigationbar";
import colors from "../../utils/style/colors";

const HomeWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const HomeContainer = styled.div`
	margin: 30px;
	background-color: ${({ theme }) =>
		theme === "light" ? colors.backgroundLight : colors.backgroundDark};
	padding: 60px 90px;
	display: flex;
	flex-direction: row;
	max-width: 1200px;
`;

const Home = () => {
	return (
		<HomeWrapper>
			<HomeContainer theme="light">
				<TopNavigationbar />
				<div>
					<h1>Main Page</h1>
				</div>
			</HomeContainer>
		</HomeWrapper>
	);
};

export default Home;
