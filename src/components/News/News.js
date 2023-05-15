import FacebookFeed from './FacebookFeed';
import InstagramFeed from './InstagramFeed';
import './News.css';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

const News = () => {
  return (
    <div className="News">
      <div className='News__header'>
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
      </div>
    </div>
  );
};

export default News;
