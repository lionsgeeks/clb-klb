export function Container({ children }: { children: React.ReactNode }) {
    return <div className="container mx-auto px-4 lg:px-8">{children}</div>;
}

export default Container;
