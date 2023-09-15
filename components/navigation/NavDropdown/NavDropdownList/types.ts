export interface Props {
  heightList: number;
  setHeightList: React.Dispatch<React.SetStateAction<number>>;
  subcategoriesHeading?: string;
  subcategories?: string[];
}
