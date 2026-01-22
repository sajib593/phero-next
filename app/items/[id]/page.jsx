"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const ItemDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3000/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching item:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading item details...
      </div>
    );
  }

  if (!item || item.message) {
    return (
      <div className="text-center py-20">
        Item not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Link
        href="/items"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Items
      </Link>

      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded shadow">
        <Image
          src={item.image}
          alt={item.name}
          className="w-full h-80 object-cover rounded"
          width={600}
          height={200}
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">
            {item.name}
          </h1>

          <p className="text-gray-600 mb-4">
            {item.description}
          </p>

          <p className="text-2xl font-semibold mb-6">
            ${item.price}
          </p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
