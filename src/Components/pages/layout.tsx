// src/components/Layout.tsx
import React from 'react';
import Header from '../pages/header';
import Navbar from '../pages/home';
import Footer from '../pages/footer'; // Footer komponentini import qilish

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer /> {/* Footer komponentini render qilish */}
    </div>
  );
}

export default Layout;