import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';

interface ProductTileProps {
  image: string;
  name: string;
  price: number;
  originalPrice: number;
  rating?: number; // e.g., 4
  discount?: string; // e.g., "20%"
  label?: string; // e.g., "SALE", "NEW" 
}

export default function ProductTile({
  image,
  name,
  price,
  originalPrice,
  rating = 4,
  discount = "20%",
  label = "SALE",  
}: ProductTileProps) {
  return (
    <div className="relative border rounded p-4 w-full max-w-xs bg-white">
      {/* Discount badge */}
      <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-0.5 rounded-full">
        {discount}
      </span>

      {/* Optional label */}
      {label && (
        <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-sm uppercase">
          {label}
        </span>
      )}

      {/* Product Image */}
      <div className="mb-4">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="object-contain w-full h-64"
        />
      </div>

      {/* Product Name */}
      <Link href="#" className="block font-medium text-gray-500 hover:underline mb-1">
        {name}
      </Link>

      {/* Rating */}
      <div className="flex text-red-500 mb-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>

      {/* Price */}
      <div className="text-sm text-gray-500">
        <span className="line-through mr-2">${originalPrice.toFixed(2)}</span>
        <span className="text-black font-bold">${price.toFixed(2)}</span>
      </div>

       

       
       
    </div>
  );
}
