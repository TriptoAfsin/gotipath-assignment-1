type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
type SpinnerVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";

interface SpinnerLoaderProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
}

function SpinnerLoader({
  size = "sm",
  variant = "primary",
}: SpinnerLoaderProps) {
  const sizeClasses: Record<SpinnerSize, string> = {
    xs: "w-4 h-4",
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  const variantClasses: Record<SpinnerVariant, string> = {
    primary: "border-primary",
    secondary: "border-secondary",
    danger: "border-red-500",
    success: "border-green-500",
    warning: "border-yellow-500",
  };

  return (
    <>
      <div
        className={`inline-block ${sizeClasses[size]} ${variantClasses[variant]}  animate-spin rounded-full border-4 border-solid  border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </>
  );
}

export default SpinnerLoader;
