import { clsx } from "clsx";
import { Info, Lightbulb, AlertTriangle } from "lucide-react";

const calloutConfig = {
  note: {
    icon: Info,
    className: "bg-blue-50 border-blue-200 text-blue-800",
  },
  tip: {
    icon: Lightbulb,
    className: "bg-green-50 border-green-200 text-green-800",
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-yellow-50 border-yellow-200 text-yellow-800",
  },
};

export function Callout({ children, type = 'note' }: { children: React.ReactNode, type?: keyof typeof calloutConfig }) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div className={clsx("my-6 flex items-start rounded-md border p-4", config.className)}>
      <Icon className="mr-4 h-6 w-6" />
      <div>{children}</div>
    </div>
  );
}
