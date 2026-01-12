'use client';

import { useEffect } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center text-white px-4">
            <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
                <AlertTriangle size={48} className="text-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Something went wrong!</h2>
            <p className="text-secondary text-center max-w-md mb-8">
                We encountered an unexpected error. Our team has been notified.
            </p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="flex items-center gap-2 px-8 py-3 bg-white/10 border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all"
            >
                <RefreshCw size={20} />
                Try again
            </button>
        </div>
    );
}
