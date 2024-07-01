import { MainComponent } from "./components/mainComponent";

export default function Page() {
  return (
    <main className="flex flex-col items-center md:px-4 px-2 max-w-8xl mx-auto text-gray-300 bg-custom-darkNavy">
      <MainComponent />
    </main>
  );
}
