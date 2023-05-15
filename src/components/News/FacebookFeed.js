import './News.css';

const FacebookFeed = () => {
  return (
    <div className="Facebook-feed">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkkstariras&tabs=timeline&width=326&height=1200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
        title="Facebook Feed"
        style={{
          border: 'none',
          overflow: 'hidden',
          maxWidth: 540,
          minWidth: 326,
          height: 825,
          borderRadius: 3,
        }}
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
};

export default FacebookFeed;
