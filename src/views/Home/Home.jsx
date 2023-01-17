import React from "react";
import styled from "styled-components";
import TopNavigationbar from "../../components/TopNavigationbar/TopNavigationbar";
import colors from "../../utils/style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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

const MainPage = styled.div`
	display: flex;
	flex-direction: row;
`;

const Home = () => {
	return (
		<HomeWrapper>
			<HomeContainer theme="light">
				<TopNavigationbar />
				<MainPage>
					<h1>Main Page</h1>
					<FontAwesomeIcon icon={faHeart} />
				</MainPage>
			</HomeContainer>
		</HomeWrapper>
	);
};

export default Home;
