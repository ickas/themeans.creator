import { StaticImageData } from "next/image";

interface Team {
  avatar: StaticImageData;
  name: string;
  twitter: string;
  bio: string;
}

export interface TeamProps {
  team: Team[];
}