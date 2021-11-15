import styled from 'styled-components';
import { theme } from '../../utils/theme-styled';

export const Title = styled.div`
    text-transform: uppercase;
    color: ${theme.color.black.base};
    font-weight: bold;
    font-size: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 132px; 
`;

export const BlueBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.color.blue.base};
    color: ${theme.color.white.base};
    min-height: 110px; 
    padding: 0 85px 0 85px;
    font-size: 18px;
    padding: 10px;
`;

export const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`;

export const SearchInput = styled.input`
    width: 244px;
    height: 42px;
    background-color: ${theme.color.white.base};
    color: ${theme.color.silver.base};
    padding: 15px;
    border: 1px solid ${theme.color.silver.base};;
    box-sizing: border-box;
    border-radius: 3px;
    margin-left: 15px;
`;

export const BlockBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const SearchButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    flex-wrap: wrap;
    margin-top: 10px;
`;

export const SearchButtonFilter = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 68px;
    height: 42px;
    background-color: ${theme.color.black.base};
    color: ${theme.color.white.base};
    font-size: 18px;
    border-radius: 3px;
    border: 1px solid ${theme.color.black.base};
    margin-left: 10px;
    margin-bottom: 10px;
    &:hover {
        cursor: pointer;
    }
    &.active {
        background-color: ${theme.color.white.base};
        color: ${theme.color.black.base};
        border: 1px solid ${theme.color.white.base};
    }
`;

export const CommentsListWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: ${theme.color.silver.ligth};
    padding: 0 85px 0 85px;
`;

export const CommentsItem = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${theme.color.white.base};
    padding: 28px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    margin: 24px 0 0 0;
    width: 100%;
`;

export const CommentsItemTitle = styled.div`
    width: 100%;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    color: ${theme.color.black.base};
`;

export const CommentsItemLink = styled.a`
    width: 100%;
    font-size: 14px;
    color: ${theme.color.silver.ligthText};
    padding: 4px 0 4px 0;
    text-decoration: none;
`;

export const CommentsItemText = styled.div`
    font-size: 16px;
    color: ${theme.color.black.base};
`;

