import { Rocket, RocketLaunch } from "phosphor-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

interface Params {
  slug: string;
}

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [burguerOpen, setBurgerOpen] = useState(false);
  console.log(burguerOpen);
  return (
    <div className="flex flex-col min-h-screen">
      <Header burguerOpen={burguerOpen} setBurgerOpen={setBurgerOpen} />
      <main className="flex flex-1 mt-20">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1 flex flex-col justify-center items-center gap-2">
            <Rocket size={50} className="text-gray-200" />
            <strong className="text-5xl text-green-300">
              Boas vindas ao Ignite Lab
            </strong>
            <p className="text-2xl text-gray-200">
              Clique em uma aula para iniciar sua jornada
            </p>
          </div>
        )}
        <Sidebar burguerOpen={burguerOpen} />
      </main>
    </div>
  );
}
