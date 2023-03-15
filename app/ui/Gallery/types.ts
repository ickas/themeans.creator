interface GalleryItem {
  image: string;
  name: string;
  artist?: string;
  collector?: string;
  url: string;
  osUrl?: string;
  startDate?: string;
  endDate?: string;
}

export interface GalleryProps {
  items: GalleryItem[];
}