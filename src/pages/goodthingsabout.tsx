import Header from "@/components/templates/Header";
import GoodThingsAbout from "@/components/views/GoodThingsAbout";

export default function goodthingsabout() {
  return (
    <main>
      <Header />
      <div className="z-10 items-center font-mono text-sm">
        <GoodThingsAbout />
      </div>
    </main>
  );
}
