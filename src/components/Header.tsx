import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";

interface HeaderProps {
  burguerOpen: boolean;
  setBurgerOpen: any;
}

export function Header(props: HeaderProps) {
  return (
    <header className="fixed top-0  z-[99999] w-full py-6 flex items-center justify-between px-4 lg:justify-center bg-gray-700 border-b border-gray-600">
      <Link to="/">
        <Logo />
      </Link>

      <div className="right-4 flex lg:hidden items-center gap-2">
        <span className="text-sm">Aulas</span>
        <div
          onClick={() => props.setBurgerOpen(!props.burguerOpen)}
          className="space-y-2"
        >
          <div className="w-8 h-0.5 bg-blue-500"></div>
          <div className="w-8 h-0.5 bg-blue-500"></div>
          <div className="w-8 h-0.5 bg-blue-500"></div>
        </div>
      </div>
    </header>
  );
}
