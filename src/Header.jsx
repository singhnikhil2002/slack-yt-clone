import React from 'react'
import styled from "styled-components"
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon  from '@material-ui/icons/HelpOutline'

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderLeft>
            <HeaderAvatar />
            {/* Todo : App onclick */}
            <AccessTimeIcon />
        </HeaderLeft>
     
        <HeaderSearch>
            <SearchIcon />
            <input placeholder='Search hear ...' />
        </HeaderSearch>
     
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;

const HeaderSearch = styled.div`
    flex : 0.4;
    opacity: 1;
    text-align: center;
    background-color : #421f44;
    border-radius : 6px;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;

    > input {
        background-color : transparent;
        border: none;
        text-align: left;
        min-width: 30vw;
        color: white;
        outline : 0;

    }
`;

const HeaderContainer = styled.div`
    display : flex ;
    align-items: center;
    width: 100%;
    justify-content : space-between;
    background-color : var(--slack-color);
    padding: 10px 0;
    color: white;
`;

const HeaderLeft = styled.div`
    flex : 0.3;
    display : flex;
    align-items: center;
    margin-left: 30px;

    > .MuiSvgIcon-root{
        margin-left : auto;
        margin-right : 30px;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3 
    display : flex; 
    align-item: flex-end;

    > .MuiSvgIcon-root{
        margin-left : auto;
        margin-right : 20px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor : pointer;

    :hover{
        opacity: 0.8;
    }
`;
