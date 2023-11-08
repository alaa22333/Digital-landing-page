import { links } from "@/helpers/data";

export type Section = (typeof links)[number]["title"];

export interface ComponentProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  selectedPage?: Section;
  setSelectedPage: React.Dispatch<React.SetStateAction<Section>>;
  showNav?: boolean;
  setShowNav?: (showNav: boolean) => void;
}

export type ChildrenProps = {
  children: React.ReactNode;
};
