/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BestSellers from './components/BestSellers';
import CategoryShowcase from './components/CategoryShowcase';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import { useState } from 'react';

export default function App() {
  const [showProduct, setShowProduct] = useState(false);

  return (
    <div className="font-sans antialiased text-neutral-900 bg-black min-h-screen">
      <Navbar />
      {showProduct ? (
        <ProductPage onBack={() => setShowProduct(false)} />
      ) : (
        <>
          <Hero />
          <BestSellers onProductClick={() => setShowProduct(true)} />
          <CategoryShowcase />
        </>
      )}
      <Footer />
    </div>
  );
}
