export default function Header() {
    return (
        <section className="py-12">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-2">Our Clients</h2>
                <p className="text-gray-600 mb-8">We have been working with some Fortune 500+ clients</p>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    <img src="https://placehold.co/100x40" alt="Client 1" className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
                    <img src="https://placehold.co/100x40" alt="Client 2" className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
                    <img src="https://placehold.co/100x40" alt="Client 3" className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
                    <img src="https://placehold.co/100x40" alt="Client 4" className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
                    <img src="https://placehold.co/100x40" alt="Client 5" className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
            </div>
        </section>
    );
}
