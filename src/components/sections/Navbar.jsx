import Button from "../ui/Button";

export default function Navbar() {
    return (
        <nav className="bg-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src="https://faheemonhub.github.io/Nexcent-Figma/assets/Icon.svg" alt="Nexcent Logo" className="h-8" />
                    <span className="text-xl font-bold">Nexcent</span>
                </div>
                <div className="hidden md:flex space-x-6 items-center">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Service</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Feature</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Product</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Testimonial</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Login</a>
                    <Button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Sign up</Button>
                </div>
                <div className="md:hidden">
                    <Button className="text-gray-600 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

