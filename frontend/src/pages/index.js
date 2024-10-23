// pages/index.js
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl">Welcome to the Home Page</h1>
      </div>
    </>
  );
};

export default Home;