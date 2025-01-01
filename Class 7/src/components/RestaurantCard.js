import { CDN_URL } from '../../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h5>{avgRating} stars</h5>
      <h6>{deliveryTime}</h6>
      <h6>{costForTwo}</h6>
    </div>
  );
};

export default RestaurantCard;
