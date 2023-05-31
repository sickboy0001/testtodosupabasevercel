import Header from "@/components/templates/Header";
import GuestTodoApp from "@/components/views/GuestTodoApp";
import { useState } from "react";
import Modal from "react-modal";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <main>
      <Header />
      <h1>sample</h1>
      <p>To Guest Page </p>

      <div className="z-10 w-full max-w-xl items-center font-mono text-sm mx-auto">
        <GuestTodoApp />
      </div>
    </main>
  );
}
