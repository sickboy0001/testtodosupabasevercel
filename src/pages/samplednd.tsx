import Header from "@/components/templates/Header";
import Dndapp from "@/components/views/Dndapp";

export default function samplednd() {
  return (
    <main>
      <Header />
      <div className="z-10 items-center font-mono text-sm">
        <Dndapp />
      </div>
    </main>
  );
}
