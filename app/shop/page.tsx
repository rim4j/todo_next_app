const Shop = () => {
  return (
    <div>
      <form className='flex flex-col gap-5 max-w-xl p-8 mx-auto bg-slate-800 rounded-md '>
        <input
          type='text'
          placeholder='title'
          className='p-2 bg-slate-600 outline-none rounded-md'
        />
        <input
          type='text'
          placeholder='price'
          className='p-2 bg-slate-600 outline-none rounded-md'
        />
        <button className='p-2 bg-slate-900  text-slate-100 rounded-md'>
          add product
        </button>
      </form>
    </div>
  );
};

export default Shop;
