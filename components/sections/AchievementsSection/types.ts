export interface Props {
  sectionTitle: string;
  items: Array<{
    id: string;
    count: string;
    symbol: string;
    description: string;
    classname: string;
  }>;
}
