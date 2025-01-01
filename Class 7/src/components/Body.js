import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestarurants, setListOfRestaurants] = useState([]);
  const [displayInputBox, setDisplayInputBox] = useState(['']);
  const [filteredRes, setFilteredRes] = useState(['']);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    console.log('Complete data', data);
    const json = await data.json(); // convert the data to json
    console.log('format data', json);
    console.log(
      'format data 1',
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRes(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return listOfRestarurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input
            type="text"
            className="search-box"
            value={displayInputBox}
            onChange={(e) => {
              setDisplayInputBox(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(displayInputBox);
              const filteredRes = listOfRestarurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(displayInputBox.toLowerCase())
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log('button clicked');
            const filteredList = listOfRestarurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Button
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
