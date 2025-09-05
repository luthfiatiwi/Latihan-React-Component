import Button from "../ui/Button";

export default function CTA() {
    return (
        <section className="py-20 text-center bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Pellentesque suscipit fringilla libero eu.
                </h2>
                <Button className="bg-green-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-green-600">
                    Get a Demo →
                </Button>
            </div>
        </section>
    )
}