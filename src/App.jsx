// Import Home component from Pages directory
import Home from './Pages/Home/Home';

// Main App component - root component of the application
const App = () => {
  return (
    <>
      {/* Render the Home page component */}
      <Home/>
    </>
  )
}

// Export App as default for use in main.jsx
export default App