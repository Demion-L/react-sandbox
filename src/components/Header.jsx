import Clock from "../ui/Clock";

const Header = () => {
  return (
    <header className='flex justify-between blur-10  py-2 px-4 mb-4'>
      <div className='flex ml-40'>
        <div className='text-2xl py-10 px-4 mr-10 font-bold tracking-wide border  border-stone-400 rounded cursor-pointer'>
          Alatyr Project
        </div>
        <div className='text-2xl py-10 px-4 font-bold tracking-wide border  border-stone-400 rounded cursor-pointer'>
          Alatyr Project
        </div>
      </div>

      <div className='flex mr-40'>
        <div className='text-2xl mr-10 py-10 px-4 font-bold tracking-wide border  border-stone-400 rounded cursor-pointer'>
          Alatyr Project
        </div>
        <div className='border h-full border-stone-400 rounded p-2'>
          <span className='text-gray-100 font-bold'>
            <Clock />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
