import { v4 as uuidv4 } from 'uuid';
// stiles
import SideBarWrapper from './style';

function Sidebar({data, activeCat, onCatChange}) {

  const handleActiveCat = (id) => {
    onCatChange(id)
  }

  return (
    <SideBarWrapper>
      <li
        onClick={() => handleActiveCat(0)}
        className={`cat ${activeCat || 'active'}`}
      > All </li>
      {data && data.map(cat => <li
        key={uuidv4()}
        className={`cat ${activeCat === cat.id && 'active'}`}
        onClick={() => handleActiveCat(cat.id)}
      > {cat?.name} </li>)}
    </SideBarWrapper>
  );
}

export default Sidebar;