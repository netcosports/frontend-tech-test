import { useState } from 'react';

function Slider({ data }) {
  /* const[test, setTest] = useState([])
  setTest(data.items) */
  const test = data || [];
  const items = test.items || [];
  console.log(items, 'slider items');
  return (
    <div className='bg-gray-900  flex overflow-x-scroll p-6 w-screen snap-mandatory scroll-p-6 h-screen'>
      {items.map((item) => (
        <div key={item.id} className='snap-start p-6 flex-[0_0_100%]'>
          <img src={item.poster} alt='Poster slider' className='bg-cover bg-center' />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
export default Slider;
