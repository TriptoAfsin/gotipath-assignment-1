import Logo from "@/components/common/Logo";
import SpinnerLoader from "@/components/loaders/SpinnerLoader";

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Logo />
      <div className="my-5">
        <SpinnerLoader size="md" variant="primary" />
      </div>
    </main>
  );
}
