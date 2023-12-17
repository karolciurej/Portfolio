import { useRef, useEffect } from 'react';
import Home from './root/home';
import Works from './root/works';
import About from './root/about';
import { useScroll } from 'framer-motion';

const App = () => {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll()
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
  return (
    <>
      <div ref={containerRef} className='flex flex-col lg:flex-row overflow-x-scroll lg:snap-x snap-y snap-mandatory w-full'>
        <Home />
        <Works containerRef={containerRef} />
        <About />
      </div>
    </>
  );
};

export default App;
