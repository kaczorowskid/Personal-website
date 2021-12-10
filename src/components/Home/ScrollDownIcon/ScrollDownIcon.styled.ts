import styled, { keyframes } from "styled-components";
import { colorConfig } from "../../../colorsConfig";

const scrollDownAnim = keyframes`
	0% {
		opacity: 0;
		transform: translate(0, -8px);
	}
	50% {
		opacity: 1;
		transform: translate(0, 0);
	}
	100% {
		opacity: 0;
		transform: translate(0, 8px);
	}
`;

export const Wrapper = styled.div`
	left: 50%;
	position: absolute;
	text-align: center;
	bottom: 0;
	transform: translate(-50%, -50%);
`;

export const ScrollDown = styled.div`
	border: 4px solid ${colorConfig.red};
	border-radius: 30px;
	height: 46px;
	margin: 0 auto 8px;
	text-align: center;
	width: 30px;
`;

export const SVGContainer = styled.svg``;
  
export const ScrollDownPoint = styled.circle<{isSecond?: boolean}>`
  animation-duration: 1.5s;
  animation-delay: ${({ isSecond }) => isSecond && '0.75s'};
	animation-name: ${scrollDownAnim};
	animation-iteration-count: infinite;
	fill: ${colorConfig.red};
`;

