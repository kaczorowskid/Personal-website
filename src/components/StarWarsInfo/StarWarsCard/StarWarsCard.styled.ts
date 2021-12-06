import styled from "styled-components";
import { Cross } from '@styled-icons/entypo';

export const Container = styled.div<{ data?: any }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 700px;
    border: 5px solid white;
    -webkit-box-shadow: 8px 10px 8px 0px rgba(255, 255, 255, 0.5);
    -moz-box-shadow: 8px 10px 8px 0px rgba(255, 255, 255, 0.5);
    box-shadow: 8px 10px 8px 0px rgba(255, 255, 255, 0.5);
    display: flex;

    ${({ data }) => data ? ({
        'flex-direction': 'column',
        'align-items': 'center'
    }) : ({
        'align-items': 'cente',
        'justify-content': 'center'
    })}
`;

export const TextContainer = styled.div`
    width: 80%;
    height: 10%;
    border-bottom: 3px dotted yellow;
    font-family: 'Press Start 2P';
    display: flex;
    align-items: flex-end;
`;

export const Text = styled.span`
    font-family: 'Press Start 2P';
    color: yellow;
    width: 70%;
    display: flex;
    justify-content: flex-end;
    font-size: 0.9rem;
    text-align: justify;
`;

export const LineTitle = styled.span`
    font-family: 'Press Start 2P';
    color: yellow;
    width: 30%;
`;

export const TextContainer1 = styled.div`
    width: 80%;
    height: 55%;
    border-bottom: 3px dotted yellow;
    position: relative;
    font-family: 'Press Start 2P';
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const ExitIcon = styled(Cross)`
    color: red;
    position: absolute;
    width: 60px;
    height: 60px;
    right: 0;
    cursor: pointer;
`;