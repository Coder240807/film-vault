import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage:
          "url(https://images.wallpapersden.com/image/download/avengers-endgame-banner_a2lsbmqUmZqaraWkpJRsZmxorWhlZWU.jpg)",
      }}
    >
      <div className="text-black text-0.75xl text-center w-full bg-gray-100/60 p-2">Avengers Endgame</div>
    </div>
  );
}

export default Banner;
