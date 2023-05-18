import FacebookFeed from './FacebookFeed';
import InstagramFeed from './InstagramFeed';
import './News.css';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import bottomImage from './Images/Image-bottom-News.jpg';
import topImage from './Images/Image-top-News.jpg';

const News = () => {
  return (
    <div className="News">
      <div className="News__header">
        <h1>Pratite najnovije vesti naseg kluba, sve na jednom mestu!</h1>
      </div>
      <div className="News__Container">
        <div className="Instagram-News">
          <div className="News__timelines">
            <AiFillInstagram className="icons-ig" />
            <h2>INSTAGRAM</h2>
          </div>
          <InstagramFeed />
        </div>
        <div className="Facebook-News">
          <div className="News__timelines">
            <AiFillFacebook className="icons-fb" />
            <h2>FACEBOOK</h2>
          </div>
          <FacebookFeed />
        </div>
        <div className="Image-News">
          <img src={topImage} alt="" height="480" width='380' />
          <img src={bottomImage} alt="" height="380" width='380' />
        </div>
      </div>
    </div>
  );
};

export default News;
