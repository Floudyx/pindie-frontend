'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/preloader/Preloader.jsx";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className="main-inner">
      {newGames ? (
        <CardsList id="new" title="Новинки" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
} 
