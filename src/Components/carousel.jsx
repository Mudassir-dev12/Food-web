import { useEffect, useState } from "react";

const images = [
  "/1.1.jpg",
  "/2.1.jpg",
  "/3.1.jpg",
  "/4.1.jpg",
  "/5.1.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full overflow-hidden relative'>
      {/* Slider */}
      <div
        className='flex transition-transform duration-700 ease-in-out'
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className='min-w-full sm:min-w-1/2 md:min-w-1/3 lg:min-w-1/5 '
          >
            <img
              src={img}
              alt='carousel'
              className='w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[370px] object-cover rounded-xl'
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className='absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full'
      >
        ‹
      </button>

      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className='absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full'
      >
        ›
      </button>
    </div>
  );
}
