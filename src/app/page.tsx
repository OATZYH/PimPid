import { TypeFixer } from "@/components/type-fixer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <TypeFixer />
      </main>
    </div>
  );
}
