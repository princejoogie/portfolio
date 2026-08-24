import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center">
      <div className="flex flex-col gap-y-2">
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="text-2xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="text-muted-foreground">
          The page you&apos;re looking for does not exist.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        Back home
      </Link>
    </div>
  );
}
