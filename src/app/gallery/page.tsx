import UploadButton from "./upload-button";
import cloudinary from "cloudinary";

import { ImageGrid } from "@/components/image-grid";
import CloudinaryImage from "@/components/cloudinary-image";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>

        <ImageGrid
          images={results.resources}
          getImage={(imageData: SearchResult) => {
            return (
              <CloudinaryImage
                key={imageData.public_id}
                imageData={imageData}
                width="400"
                height="300"
                alt="Description of my image"
              />
            );
          }}
        />
      </div>
    </section>
  );
}
