import { LoaderCircleIcon } from "lucide-react";

interface LoadingSpinnerProps {
  label?: string;
  className?: string;
}

export function LoadingSpinner({ label, className }: LoadingSpinnerProps) {
  return (
    <div className={className}>
      <LoaderCircleIcon className="animate-spin h-4 w-4" />
      {label}
    </div>
  )
}