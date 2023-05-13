import InstagramFeed from './InstagramFeed';
import './News.css';
import { AiFillInstagram } from 'react-icons/ai';

const News = () => {
  return (
    <div className="News">
      <div className="Instagram-News">
        <div className="Instagram-News__instagram">
          <AiFillInstagram className='icons-ig' />
          <h2>INSTAGRAM</h2>
        </div>
        <InstagramFeed />
      </div>
    </div>
  );
};

export default News;
