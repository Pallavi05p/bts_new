import React from 'react';
import { Play } from "lucide-react";

const Aboutcards = () => {
  const videos = [
    { src: "/agriment.mp4", title: "Video 1" },
    { src: "/agrocill.mp4", title: "Video 2" },
    { src: "/Amish BedBug.mp4", title: "Video 3" },
    { src: "/bivera.mp4", title: "Video 4" },
    { src: "/Krushna kunj video.mp4", title: "Video 5" },
    { src: "/Level up.mp4", title: "Video 6" },
    { src: "/levelup 2.mp4", title: "Video 7" },
    { src: "/Narsimbha Cgi Banner 2.mp4", title: "Video 8" },
    { src: "/old To new Clip_1.mp4", title: "Video 11" },
    { src: "/Pochoniya.mp4", title: "Video 12" },
    { src: "/potash.mp4", title: "Video 13" },
    { src: "/Sandip sir cgi.mp4", title: "Video 14" },
    { src: "/Super Six.mp4", title: "Video 15" },
    { src: "/Trikon and sudon.mp4", title: "Video 16" },
  ];

  const handleVideoRedirect = (videoSrc) => {
    const videoPage = `
      <html>
        <head>
          <title>Video Player</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
          <style>
            html, body {
              margin: 0;
              padding: 0;
              background-color: black;
              height: 100%;
              width: 100%;
              overflow: hidden;
            }
            video {
              position: absolute;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              object-fit: contain;
              background-color: black;
            }
          </style>
        </head>
        <body>
          <video src="${videoSrc}" autoplay muted controls playsinline></video>
          <script>
            const vid = document.querySelector('video');
            vid.play().catch(() => {
              console.log('Autoplay was prevented');
            });
            vid.addEventListener('loadedmetadata', () => {
              if (vid.requestFullscreen) {
                vid.requestFullscreen();
              } else if (vid.webkitEnterFullscreen) {
                vid.webkitEnterFullscreen();
              }
            });
          </script>
        </body>
      </html>
    `;
    const win = window.open();
    win.document.write(videoPage);
    win.document.close();
  };

  return (
    <div className="min-h-screen mt-8 px-2 md:px-20 w-full pb-16">
      <h2 className="text-3xl font-semibold text-center text-white mb-2 font-kumbh">
        Visual Stories That Speak Volumes.
      </h2>
      <h3 className="text-base text-center text-white mb-6 font-dmsans">
        See how our videos bring brands to life with emotion, clarity, and creativity.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative">
              <video
                className="w-full h-64 object-cover"
                src={video.src}
                muted
                playsInline
              ></video>

              <button
                onClick={() => handleVideoRedirect(video.src)}
                className="absolute bottom-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <Play className="text-white" size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutcards;
