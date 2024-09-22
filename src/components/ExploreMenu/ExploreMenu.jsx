import React from 'react';
import PropTypes from 'prop-types';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Menu List</h1>
      <p className='explore-menu-text'>
        Embark on a culinary adventure with our curated menu, featuring a delightful blend of local favorites and exotic flavors from around the world. Whether you're a fan of spicy, sweet, or savory, there's something here to tantalize every palate. Dive in and discover your new favorite dish today!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div  onClick={() => setCategory(prev => prev === item.menu_name ? "ALL" : item.menu_name)}key={index} className='explore-menu-list-item'>
               <img   className={category === item.menu_name ? "active" : " "}src={item.menu_image} alt="" />
               <p>{item.menu_name}</p>
          
            
</div>

          );
        })}
      </div>
      <hr />
    </div>
  );
};

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExploreMenu;

