import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
// actions
import { getCategories } from '../../redux/ducks/categorySlice';
import { getCats } from '../../redux/ducks/catsSlice';

// components
import Sidebar from '../../components/Sidebar';
import CatList from '../../components/CatList';
// style 
import HomeWrapper from './style';

function Home() {
  // history
  const history = useHistory();
  // store data
  const categories = useSelector(state => state.categories);
  const cats = useSelector(state => state.cats);


  // dispatch
  const dispatch = useDispatch();
  // state
  const [categoriesSt, setCategoriesSt] = useState([]);
  const [catsSt, setCats] = useState([]);

  const [activeCat, setActiveCat] = useState(JSON.parse(history.location.search.slice(4)))
  const [pagination, setPagination] = useState(10)

  // fetch 
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getCats({
      id: activeCat,
      limit: pagination
    }))
  }, [])
  
  useEffect(() => {
    setCategoriesSt(categories)
  }, [categories])

  useEffect(() => {
    setCats(cats)
  }, [cats])

  const handleCatChange = (id) => {
    history.push(`?id=${id}`);
    setActiveCat(id);
    dispatch(getCats({
      id: id,
      limit: pagination
    }))
  }

  const handleLoadMore = () => {
    setPagination(pagination+10)
    dispatch(getCats({
      id: activeCat,
      limit: pagination+10
    }))
  }
  
  return (
    <HomeWrapper>
       <Sidebar
          activeCat={activeCat}
          data={categoriesSt}
          onCatChange={handleCatChange}
        />
        <div className='main-content'>
          <div 
              className='primary-button'
              onClick={handleLoadMore}
            >
              Load More
          </div>
          <CatList 
            data={catsSt}
          />
        </div>
    </HomeWrapper>
  );
}

export default Home;