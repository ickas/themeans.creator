import { StaticImageData } from "next/image";

interface Team {
  avatar: string;
  name: string;
  twitter: string;
  bio: string;
  event: string;
}

export interface TeamProps {
  team: Team[];
}