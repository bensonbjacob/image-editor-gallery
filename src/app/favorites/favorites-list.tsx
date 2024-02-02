"use client";

import CloudinaryImage from "@/components/cloudinary-image";
import { SearchResult } from "../gallery/page";
import { useState } from "react";

export default function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(initialResources);

  return (
    <div className="grid grid-cols-4 gap-4">
      {resources.map((result) => (
        <CloudinaryImage
          key={result.public_id}
          imageData={result}
          width="400"
          height="300"
          alt="Description of my image"
          onUnheart={(unheartedResource) => {
            setResources((currentResources) => {
              return currentResources.filter(
                (resource) =>
                  resource.public_id !== unheartedResource.public_id
              );
            });
          }}
        />
      ))}
    </div>
  );
}
