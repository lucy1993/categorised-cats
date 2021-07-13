import styled from 'styled-components';
import * as style from '../../theme/globalVariables';

const HomeWrapper = styled.div`
  background-color: ${style.colors.themeColor};
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;

  .main-content {
    width: 70%;
    min-height: 100Vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-left: 30%;

  }
  .primary-button {
    width: 200px;
    height: 50px;
    background-color: ${style.colors.primary};
    color:  ${style.colors.light};
    border-radius: 8px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export default HomeWrapper