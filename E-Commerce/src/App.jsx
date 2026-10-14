// App.jsx
import Header from './components/Header';  // Import your component 
import ProductCard from './components/ProductCard';  // Import your component
import Hero from './components/Hero';  // Import your component
import Footer from './components/Footer';  // Import your component

function App() {
  return (
    <div className="ap">
      <Header />
      <Hero
        title="Welcome to First E-commerce Store"
        subtitle="Your one-stop shop for all your needs"
        cta="Shop Now"
        image="https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics "
      />
      <h2 style={{ textAlign: 'center' }}>Featured Products</h2>
      <ProductCard />  
      <ProductCard />  
      <ProductCard />    
      <Footer />
    </div>
  );
}

export default App;