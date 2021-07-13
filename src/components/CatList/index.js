import { v4 as uuidv4 } from 'uuid';
// stiles
import CatListWrapper from './style';

function CatList({data}) {
  return (
    <CatListWrapper>
      {data && data.map(cat => <li
        key={uuidv4()}
        className='cat-profile'
      >
        <img src={cat?.url} width='150%' alt="cat-avatar" />
      </li>)}
    </CatListWrapper>
  );
}

export default CatList;