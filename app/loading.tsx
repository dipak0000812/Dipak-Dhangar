export default function Loading() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-accent rounded-full border-t-transparent animate-spin"></div>
                </div>
                <div className="text-accent font-mono text-sm tracking-widest animate-pulse">LOADING SYSTEM...</div>
            </div>
        </div>
    );
}
