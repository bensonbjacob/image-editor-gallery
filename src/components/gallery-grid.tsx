import { SearchResult } from "@/app/gallery/page";
import CloudinaryImage from "./cloudinary-image";

const MAX_COLUMNS = 4;

export function GalleryGrid({ images }: { images: SearchResult[] }) {
  function getColumns(colIndex: number) {
    return images.filter(
      (resource, idx) => idx % MAX_COLUMNS === colIndex
    );
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {[
        getColumns(0),
        getColumns(1),
        getColumns(2),
        getColumns(3),
      ].map((column, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          {column.map((result) => (
            <CloudinaryImage
              key={result.public_id}
              imageData={result}
              width="400"
              height="300"
              alt="Description of my image"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
