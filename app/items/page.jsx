"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading items...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">
        Items List
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded shadow-sm p-4 bg-white"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover rounded mb-4"
              width={600}
              height={240}
            />

            <h2 className="text-xl font-semibold">
              {item.name}
            </h2>

            <p className="text-gray-600 text-sm mt-1">
              {item.description}
            </p>

            <p className="font-bold mt-2">
              ${item.price}
            </p>

            <Link
              href={`/items/${item.id}`}
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
