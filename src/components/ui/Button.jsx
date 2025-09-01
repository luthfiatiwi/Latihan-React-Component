export default function Button({ children, className, onClick }) {
    return (
        <button onClick={onClick} className={`px-4 py-4 bg-green-700 hover:bg-blue-200 ${className}`}>
            {children}
        </button>
    )
}