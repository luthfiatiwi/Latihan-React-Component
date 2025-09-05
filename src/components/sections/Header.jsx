import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Header() {
    return (
        <header className="bg-[#F5F7FA] border-b border-gray-200 py-3">
            <Container>
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/vite.svg" alt="Nexcent Logo" className="h-6 w-6" />
                        <span className="font-bold text-xl text-gray-800">Nexcent</span>
                    </div>
                    {/* Menu */}
                    <ul className="flex items-center gap-7 text-sm text-gray-700 font-medium">
                        <li><a href="#" className="hover:text-green-600">Home</a></li>
                        <li><a href="#" className="hover:text-green-600">Service</a></li>
                        <li><a href="#" className="hover:text-green-600">Feature</a></li>
                        <li><a href="#" className="hover:text-green-600">Product</a></li>
                        <li><a href="#" className="hover:text-green-600">Testimonial</a></li>
                        <li><a href="#" className="hover:text-green-600">FAQ</a></li>
                    </ul>
                    {/* Auth */}
                    <div className="flex items-center gap-3">
                        <a href="#" className="text-green-600 text-sm font-medium hover:underline">Login</a>
                        <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Sign up</Button>
                    </div>
                </nav>
            </Container>
        </header>
    );
}
