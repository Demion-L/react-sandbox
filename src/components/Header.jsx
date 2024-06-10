const curentTime = new Date();

const Header = () => {
  return (
    <header className='flex justify-between border border-b-stone-300 py-2 px-4 mb-4'>
      <div className='text-2xl font-bold tracking-wide'>Result University</div>
      <div className='border border-black rounded p-2'>
        <span className='text-gray-600'>Current time:</span>{" "}
        <span className='text-gray-800 font-bold'>
          {curentTime.toLocaleTimeString()}
        </span>
      </div>
    </header>
  );
};

export default Header;
