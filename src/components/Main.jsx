import Asaid from "./Asaid/Asaid";
import InfoSection from "./InfoSection";

const Main = () => {
  return (
    <main className='grid grid-cols-6 gap-4 h-full'>
      <Asaid />
      <InfoSection />
    </main>
  );
};

export default Main;
