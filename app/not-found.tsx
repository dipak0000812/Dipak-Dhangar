import Link from 'next/link';
import { Home, FileQuestion } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center text-white px-4">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <FileQuestion size={48} className="text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">404 - Page Not Found</h1>
            <p className="text-secondary text-center max-w-md mb-8 text-lg">
                Oops! The page you are looking for seems to have wandered off into the digital void.
            </p>
            <Link
                href="/"
                className="flex items-center gap-2 px-8 py-3 bg-accent text-background rounded-full font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
            >
                <Home size={20} />
                Return Home
            </Link>
        </div>
    );
}
