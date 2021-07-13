import styled from 'styled-components';
import * as style from '../../theme/globalVariables';

const CatListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;

  .cat-profile {
    width: 100px;
    height: 100px;
    margin: 10px;
    border-radius: 50%;
    background-color: ${style.colors.primaryLight};
    overflow: hidden;
  }
`;

export default CatListWrapper