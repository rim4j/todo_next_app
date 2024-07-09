interface Post {
  id: number;
  title: string;
}

const PostList = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 5 },
  });
  let data: Post[] = await res.json();
  data = data.splice(0, 10);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
