import { CardItem, Filter } from '../../components/components';
import "./Explore.css";

const Explore = () => {
  return (
    <>
      <div className="explore-container">
      <div className="explore-items">
        <div className="explore-category-container">
          <div className="categories-listed">
            <div className="category-item active">
              <a href="/" className='category-item-name'>All</a>
            </div>
            <div className="category-item">
              <a href="/" className='category-item-name'>Hiring Challenges</a>
            </div>
            <div className="category-item">
              <a href="/" className='category-item-name'>Jobs</a>
            </div>
          </div>
        </div>
        <p className="explore-heading">
          Hiring Challenges
        </p>
        <div className="explore-data">
          <CardItem />
        </div>
      </div>

      <Filter />
    </div>
    </>
  )
};

export default Explore;