/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';

// Lazy loading pages for speed optimization
const SellGold = lazy(() => import('./pages/SellGold').then(module => ({ default: module.SellGold })));
const SellSilver = lazy(() => import('./pages/SellSilver').then(module => ({ default: module.SellSilver })));
const DiamondsWatches = lazy(() => import('./pages/DiamondsWatches').then(module => ({ default: module.DiamondsWatches })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const GenericServicePage = lazy(() => import('./pages/GenericServicePage').then(module => ({ default: module.GenericServicePage })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Simple fallback loader
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-[#050505]">
    <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sell-gold" element={
            <Suspense fallback={<PageLoader />}><SellGold /></Suspense>
          } />
          <Route path="sell-silver" element={
            <Suspense fallback={<PageLoader />}><SellSilver /></Suspense>
          } />
          <Route path="diamonds-watches" element={
            <Suspense fallback={<PageLoader />}><DiamondsWatches /></Suspense>
          } />
          <Route path="about" element={
            <Suspense fallback={<PageLoader />}><About /></Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<PageLoader />}><Contact /></Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<PageLoader />}><GenericServicePage title="Page Not Found" description="The page you are looking for does not exist." /></Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
