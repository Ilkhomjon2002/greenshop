import styled from "styled-components";
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin: 0 auto;
	padding: 15px;
	background-color: white;
	align-items: flex-start;
	position: relative;
`;
const NavBarContainer = styled(Container)`
	align-items: center;
	&::after {
		content: "";
		width: 100%;
		height: 2px;
		background-color: rgba(178, 234, 178, 0.615);
		position: absolute;
		left: 0;
		bottom: 0px;
	}
`;
const SideBarContainer = styled.div`
	background-color: #fbfbfb;
	padding: 10px;
	width: 25%;
`;
const CartContainer = styled.div`
	padding: 10px;
	width: 100%;
`;
const Column = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;
const Row = styled(Column)`
	flex-direction: row;
	align-items: center;
`;
const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

export {
	NavBarContainer,
	Container,
	SideBarContainer,
	CartContainer,
	Column,
	Grid,
	Row,
};
