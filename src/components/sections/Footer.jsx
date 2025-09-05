export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <img src="https://faheemonhub.github.io/Nexcent-Figma/assets/Icon.svg" alt="Nexcent Logo" className="h-8" />
                        <span className="text-xl font-bold">Nexcent</span>
                    </div>
                    <p className="text-sm">&copy; 2023 Nexcent Ltd. <br /> All rights reserved.</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-white">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.013 4.85.071 3.544.174 4.148.654 4.673 1.179s1.005 1.129 1.179 4.673c.058 1.266.071 1.646.071 4.85s-.013 3.584-.071 4.85c-.174 3.544-.654 4.148-1.179 4.673s-1.129 1.005-4.673 1.179c-1.266.058-1.646.071-4.85.071s-3.584-.013-4.85-.071c-3.544-.174-4.148-.654-4.673-1.179s-1.005-1.129-1.179-4.673c-.058-1.266-.071-1.646-.071-4.85s.013-3.584.071-4.85c.174-3.544.654-4.148 1.179-4.673s1.129-1.005 4.673-1.179c1.266-.058 1.646-.071 4.85-.071zm0-2.163c-3.376 0-3.791.014-5.116.072-4.464.218-6.131 1.96-6.354 6.354-.058 1.325-.072 1.74-.072 5.116s.014 3.791.072 5.116c.218 4.464 1.96 6.131 6.354 6.354 1.325.058 1.74.072 5.116.072s3.791-.014 5.116-.072c4.464-.218 6.131-1.96 6.354-6.354.058-1.325.072-1.74.072-5.116s-.014-3.791-.072-5.116c-.218-4.464-1.96-6.131-6.354-6.354-1.325-.058-1.74-.072-5.116-.072zm0 5.4c-3.646 0-6.6 2.954-6.6 6.6s2.954 6.6 6.6 6.6 6.6-2.954 6.6-6.6-2.954-6.6-6.6-6.6zm0 10.96c-2.403 0-4.36-1.957-4.36-4.36s1.957-4.36 4.36-4.36 4.36 1.957 4.36 4.36-1.957 4.36-4.36 4.36zm6.75-12.82c-.672 0-1.218.546-1.218 1.218s.546 1.218 1.218 1.218 1.218-.546 1.218-1.218-.546-1.218-1.218-1.218z" /></svg>
                        </a>
                        <a href="#" className="hover:text-white">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm8 10c0 .41-.03.82-.09 1.22l-4.52-4.52c.4-.06.81-.09 1.22-.09 2.05 0 3.71 1.66 3.71 3.71zm-4.72-2.31l-5.6 5.6c-.6-.4-1.22-.84-1.87-1.32.74-2.85 2.14-5.5 4.36-7.86l3.11 3.11zm-8.83-1.63c.6.4 1.22.84 1.87 1.32-2.12 1.4-3.77 3.33-4.91 5.58l3.04-3.04zM4.77 15.69c.6-.4 1.22-.84 1.87-1.32l5.6-5.6c-.6.4-1.22.84-1.87 1.32l-3.04 3.04zM12 20c-1.21 0-2.38-.28-3.41-.78l1.49-1.49c.5.17 1.03.26 1.57.26 2.05 0 3.71-1.66 3.71-3.71 0-.54-.09-1.07-.26-1.57l1.49-1.49c.5.99.78 2.06.78 3.14 0 4.42-3.58 8-8 8z" /></svg>
                        </a>
                        <a href="#" className="hover:text-white">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.34-1.59.57-2.43.68.89-.54 1.57-1.4 1.88-2.43-.84.5-1.78.86-2.77 1.05-1.95-2.08-5.32-2.26-7.58.11C8.25 6.32 8.7 8.35 9.77 9.87c-3.14-.15-5.91-1.66-7.77-4.14-.49.85-.77 1.83-.77 2.87 0 2.02 1.04 3.8 2.62 4.84-.77-.02-1.5-.24-2.13-.57v.03c0 2.26 1.61 4.14 3.75 4.57-1.61.44-3.3.16-4.75-.41.5 1.53 1.94 2.65 3.65 2.88-1.59 1.25-3.6 1.99-5.75 1.99-1.35 0-2.67-.09-3.95-.27C1.4 20.3 3.96 21 6.64 21c7.97 0 12.33-6.59 12.33-12.33V8.47c.8-.59 1.49-1.34 2.04-2.19z" /></svg>
                        </a>
                        <a href="#" className="hover:text-white">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.61 6.42a2.6 2.6 0 00-1.83-1.83C16.89 4 12 4 12 4s-4.89 0-5.78.59A2.6 2.6 0 004.39 6.42C4 7.31 4 12 4 12s0 4.69.39 5.58a2.6 2.6 0 001.83 1.83c.89.39 5.78.39 5.78.39s4.89 0 5.78-.39a2.6 2.6 0 001.83-1.83c.39-.89.39-5.58.39-5.58s0-4.69-.39-5.58zM10 15.01l5-3.01-5-3v6z" /></svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">About us</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Contact us</a></li>
                        <li><a href="#" className="hover:text-white">Pricing</a></li>
                        <li><a href="#" className="hover:text-white">Testimonials</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Help center</a></li>
                        <li><a href="#" className="hover:text-white">Terms of service</a></li>
                        <li><a href="#" className="hover:text-white">Legal</a></li>
                        <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                        <li><a href="#" className="hover:text-white">Status</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Stay up to date</h4>
                    <div className="relative">
                        <input type="email" placeholder="Your email address" className="bg-gray-700 text-white p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500" />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l4.53-1.409a1 1 0 00.671-.96V10a1 1 0 011-1h1a1 1 0 011 1v5.592a1 1 0 00.671.961l4.53 1.409a1 1 0 001.169-1.409l-7-14z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}