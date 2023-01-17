import Home from "./views/Home/Home";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

import "./App.css";

const StyledAppWrapper = styled.div`
	margin-top: 4rem;
`;

function App() {
	return (
		<StyledAppWrapper>
			<Home />
		</StyledAppWrapper>
	);
}

export default App;
