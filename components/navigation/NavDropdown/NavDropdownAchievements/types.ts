export interface Props {
  setHeightAchievements: React.Dispatch<React.SetStateAction<number>>;
  heightAchievements: number;
  achievementsHeading?: string;
  achievements?: Array<{
    id: string;
    number: string;
    symbol: string;
    overText: string;
    description: string;
  }>;
}
