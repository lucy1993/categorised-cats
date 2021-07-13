import styled from 'styled-components';
import * as style from '../../theme/globalVariables';

const SideBarWrapper = styled.ul`
  min-width: 100px;
  width: 30%;
  height: 100vh;
  background-color: ${style.colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  margin: 0;
  padding: 0;
  border-radius: 0 20px 20px 0;
  position: fixed;
  top: 0;
  left: 0;

  .cat {
    width: 80%;
    height: 50px;
    display: flex;
    align-items: center;
    color: ${style.colors.textMain};
    padding-left: 20px;
    margin-top: 20px;
    text-transform: capitalize;
    cursor: pointer;
  }

  .active {
    background-color: ${style.colors.primaryLight};
    border-radius: 18px;
  }
`;

export default SideBarWrapper