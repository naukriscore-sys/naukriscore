import { Progress } from "@/components/ui/progress";

export const StraightProgessbar = (props: any) => {
  const { value } = props;

  const percentage = (value / 1000) * 100;

  const getColor = () => {
    if (value <= 200) return "#fe4e4c";
    if (value <= 400) return "#ff9534";
    if (value <= 600) return "#f8cf00";
    if (value <= 800) return "#8ee326";
    if (value <= 1000) return "#00bd53";
  };

  return <Progress color={getColor()} value={percentage} />;
};
