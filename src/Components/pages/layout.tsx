// src/components/Layout.tsx
import Header from '../pages/header';
import Navbar from '../pages/home';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Header />
            <Navbar />
            <main>{children}</main>
        </div>
    );
}

export default Layout;