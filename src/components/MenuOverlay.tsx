import Link from "next/link";

interface MenuOverlayProps {
  onClose: () => void;
}

export function MenuOverlay({ onClose }: MenuOverlayProps) {
  return (
    <div className="fixed top-0 right-0 p-4 bg-white shadow-lg rounded-bl-lg z-50">
      <button
        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900"
        onClick={onClose}
      >
        X
      </button>
      <nav className="flex flex-col space-y-4 pt-8">
        <Link 
          href="/design-tech" 
          className="mr-4 cursor-pointer"
        >
          Design Tech
        </Link>
        <Link 
          href="/karriere" 
          className="mr-4  cursor-pointer"
        >
          Karriere
        </Link>
      </nav>
    </div>
  );
}