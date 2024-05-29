'use client'
import { Banner } from "./components/Banner/Banner.jsx";
import { CardsList } from "./components/CardsList/CardsList.jsx";
import { Promo } from "./components/Promo/Promo.jsx";
import { useEffect } from "react";
import { endpoints } from "./api/config.js";
import { useGetDataByCategory } from "./api/api-hooks.js";


export default function Home() {
  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error("Ошибка получения данных");
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        return error;
      }
    };
    getData(endpoints.games);
  }, []);


  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");

  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярные" data={popularGames} />
      <CardsList id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
} 