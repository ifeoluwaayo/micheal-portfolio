"use client";
import { useState, useEffect } from "react";
import { Header } from "@/ui";
import { PageWrapper } from "@/wrappers";
import AnimatedTitle from "@/ui/bits/AnimatedTitle";
import { AiOutlineCloudDownload, AiOutlineFolderView } from "react-icons/ai";
import { ViewResume } from "@/ui";
import { skills, projects } from "../../data";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window && typeof window !== "undefined") {
      setIsLoaded(true);
    }
  }, []);

  const handleDownload = () => {
    if (typeof window === "undefined") return;

    fetch("/pdf/Micheal(Resume).pdf").then((res) => {
      res.blob().then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Micheal (Resume).pdf");
        document.body.appendChild(link);
        link.click();
        (link.parentNode as any).removeChild(link);
      });
    });
  };

  return (
    <>
      {!isLoaded ? (
        <div className="h-screen w-full flex items-center justify-center">
          <AnimatedTitle title="Micheal Ighietsemhe." />
        </div>
      ) : (
        <PageWrapper>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-col flex-1 md:px-[10vh] px-10 mt-[70px] md:mt-[80px] min-h-[200vh]">
              <div className="flex flex-col mt-10">
                <h1 className="text-5xl font-medium text-slate-50 font-header">
                  Hi, I&apos;m{" "}
                  <span className="animate-text bg-gradient-to-r from-blue-500 via-slate-500 to-green-500 bg-clip-text text-transparent">
                    Micheal.
                  </span>{" "}
                  <span className="animate-wave">👋</span>
                </h1>
                <p className="text-lg text-slate-500 capitalize font-semibold mt-3">
                  Software Engineer
                </p>
                <p className="text-base text-slate-300 font-light mt-3">
                  I&apos;m a Software Engineer specialized in NODE.JS using
                  TypeScript.
                </p>
              </div>

              <div className="flex flex-col mt-6">
                <p className="text-base text-white font-light max-w-[80vw] tracking-wider leading-6">
                  As an accomplished Software Engineer with over 4 years of
                  industry experience, I bring a wealth of expertise in backend
                  engineering, with a focus on leveraging the power of Node.js
                  and TypeScript. Throughout my career, I have consistently
                  delivered exceptional results, ensuring software systems
                  achieve an impressive 99.9% uptime. My versatility extends
                  beyond languages and platforms, encompassing proficiency in
                  embedded systems, leading to a remarkable 30% acceleration in
                  development speed. Renowned for optimizing code efficiency by
                  40% and reducing resource consumption by 25%, I am dedicated
                  to maximizing performance.
                  <br />
                  <br />
                  A key asset to any team, I thrive in collaborative
                  environments, fostering increased productivity and cohesion
                  among colleagues. My commitment to growth is unwavering,
                  exemplified by my completion of 100 hours of training in
                  cutting-edge technologies. By staying ahead of the curve, I
                  consistently drive innovation and maintain a competitive edge.
                  <br />
                  <br />
                  With my proven track record and unwavering dedication, I am
                  poised to make a substantial impact in the field of software
                  engineering.
                </p>
                <div className="mt-5 flex gap-3">
                  <button
                    className="text-xs md:text-sm px-2 py-1 rounded-md bg-slate-300 shadow-md font-medium cursor-pointer hover:scale-95 duration-200 ease-in-out flex items-center"
                    onClick={handleDownload}
                  >
                    <AiOutlineCloudDownload className="inline-block mr-1" />{" "}
                    <p className="whitespace-nowrap">Download Resume</p>
                  </button>
                  <button
                    className="text-xs md:text-sm px-2 py-1 rounded-md bg-orange-300 shadow-md font-medium cursor-pointer hover:scale-95 duration-200 ease-in-out flex items-center"
                    onClick={() => setOpen(true)}
                  >
                    <AiOutlineFolderView className="inline-block mr-1" />{" "}
                    <p className="whitespace-nowrap">View Resume</p>
                  </button>
                </div>
              </div>

              <div className="flex flex-col mt-6">
                <h1 className="text-3xl font-medium text-slate-50 font-header">
                  Skills
                </h1>
                <div className="flex flex-wrap gap-4 mt-3">
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      className="px-3 py-1 rounded-md shadow-md text-slate-50 text-xs md:text-sm font-medium hover:scale-95 duration-200 ease-in-out"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col mt-6">
                <h1 className="text-3xl font-medium text-slate-50 font-header">
                  Projects
                </h1>
                <div className="flex flex-col gap-3 mt-3">
                  <p className="text-base text-slate-300 font-light">
                    Here&apos;s a list of some of my projects. You can find more
                    on my{" "}
                    <a
                      href="https://github.com/micheal081"
                      target="_blank"
                      className="text-blue-500"
                    >
                      Github
                    </a>
                    .
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3">
                    <div className="flex flex-col mt-3">
                      <p className="text-base text-slate-300 font-light">
                        I&apos;m a Software Engineer specialized in NODE.JS
                        using TypeScript.
                      </p>
                      <div className="flex flex-col mt-3">
                        <p className="text-base text-slate-300 font-light">
                          I&apos;m a Software Engineer specialized in NODE.JS
                          using TypeScript.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ViewResume open={open} setOpen={setOpen} />
        </PageWrapper>
      )}
    </>
  );
}
