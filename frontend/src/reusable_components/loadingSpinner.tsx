export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-4 my-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
      <p>Loading...</p>
    </div>
  );
}
