import React from 'react';
import * as styled from './Device.styled';
import site from '../../../assets/img/stronka.png'
import { useScrollValue } from '../../../hooks/useScrollValue';

const Device: React.FC = () => {

	const { scrollValue } = useScrollValue();

	return (
		<>
			<styled.Container>
				<styled.TextContainer pos={scrollValue} >
					<styled.Text>Check About section ;)</styled.Text>
				</styled.TextContainer>
				<styled.Mask />
				<styled.ImageConatiner>
					<img style={{ width: '100%', height: '100%' }} src={site} alt="" />
				</styled.ImageConatiner>
			</styled.Container>
		</>
	)
}

export default Device;