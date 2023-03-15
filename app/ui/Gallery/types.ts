interface GalleryItem {
  image: string;
  name: string;
  artist?: string;
  collector?: string;
  url?: string;
}

export interface GalleryProps {
  items: GalleryItem[];
}