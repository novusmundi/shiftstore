import AppRoutes from './routes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-6">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
