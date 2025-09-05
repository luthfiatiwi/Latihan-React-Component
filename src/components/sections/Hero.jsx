import Button from "../ui/Button";

export default function Hero() {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Lessons and insights <br className="hidden md:block" /> from 8 years
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        Where to grow your business as a photographer, site or social media?
                    </p>
                    <Button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600">Register</Button>
                </div>
                <div className="md:w-1/2">
                    <img src="https://placehold.co/600x400" alt="Illustration" className="w-full h-auto max-w-xl mx-auto" />
                </div>
            </div>
        </section>
    )
}