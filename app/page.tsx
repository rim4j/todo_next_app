import Link from 'next/link';

const Home = () => {
  return (
    <div className='text-lg'>
      <ul>
        <li>
          <Link href='/about'>about</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
