"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [page, setPage] = useState('home');
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-12 gap-16 sm:p-15">
      <Navbar setPage={setPage}/>
      <main className="flex flex-col justify-center gap-[32px] row-start-2 items-center sm:items-start transition-all duration-500">
        {page == 'home' && (
          <>
            <div className="highlight">
              Welcome to my portfolio! Glad to see you here.
            </div>
            <section className="max-w-3xl text-center sm:text-left">
              <h1 className="text-3xl font-bold mb-4">
                Shreejan [a.k.a The Spyke]
              </h1>
              <p className="mb-4">
                I am a passionate developer working with <strong>Next.js, React, TypeScript, Tailwind CSS</strong> and exploring <strong>AI, Web3, and game engines</strong>.
                You can check my projects on GitHub.
              </p>
              <a
                href="https://github.com/spyke7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-2 text-blue-500 hover:underline"
              >
                <FaGithub /> View GitHub
              </a>
            </section>
          </>
        )}
        {page === 'projects' && (
          <section className="text-center mt-10 text-xl font-semibold">
            Upcoming...
          </section>
        )}

      </main>

    </div>
  );
}
