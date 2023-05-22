import GoodThings from "@/components/views/GoodThings";
import Header from "@/components/views/Header";

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
