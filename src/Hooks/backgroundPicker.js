import clearBg from "../images/backgrounds/clear5.jpg";
import cloudsBg from "../images/backgrounds/cloudy2.jpg";
import rainBg from "../images/backgrounds/rain.jpg";

export default function useBackgroundPicker(value) {
  if (value?.details.includes("Clear")) return clearBg;
  if (value?.details.includes("Clouds")) return cloudsBg;
  if (value?.details.includes("Rain")) return rainBg;
}
