export default function VideoSection() {
  return (
    <div className="video-container">
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/1072267532?badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          title="Interview RocketVideos - Adrian - Tim"
        />
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}
