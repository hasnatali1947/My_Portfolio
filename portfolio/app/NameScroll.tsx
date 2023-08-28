// import React, { useState, useEffect } from 'react';

// const names = ['Name 1', 'Name 2', 'Name 3', 'Name 4']; // Add your names here

// const NameScroll = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
//     }, 1000); // Change the interval to control the scrolling speed (milliseconds)

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <div>
//         {names.map((name, index) => (
//           <div key={index}>{name}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NameScroll;
