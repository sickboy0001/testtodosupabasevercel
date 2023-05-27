import Header from "@/components/templates/Header";
import GoodThings from "@/components/views/GoodThings";

export default function goodthings() {
  return (
    <main>
      <Header />
      <div className="z-10 items-center font-mono text-sm">
        <GoodThings />
      </div>
    </main>
  );
}
