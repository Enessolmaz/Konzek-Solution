import SearchBar from "./components/SearchBar/SearchBar";
import ListItems from "./components/ListItems/ListItems";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-12 gap-8">
      <span className="hidden bg-red-500 bg-blue-500 bg-teal-500 bg-amber-500 bg-emerald-500 bg-indigo-500 bg-purple-500" />
      <SearchBar />
      <ListItems />
    </main>
  );
}
