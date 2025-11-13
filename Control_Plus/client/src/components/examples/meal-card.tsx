import { MealCard } from "../meal-card";

export default function MealCardExample() {
  return (
    <MealCard
      type="Desayuno"
      time="8:30"
      calories={450}
      items={[
        "Avena con frutos rojos",
        "Yogurt griego",
        "Jugo de naranja",
      ]}
    />
  );
}
