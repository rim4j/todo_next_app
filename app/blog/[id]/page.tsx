'use client';
import { usePathname } from 'next/navigation';

const PostPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <h2 className='text-lg'> single post page </h2>
      <h1>post id {id}</h1>
    </div>
  );
};

export default PostPage;
