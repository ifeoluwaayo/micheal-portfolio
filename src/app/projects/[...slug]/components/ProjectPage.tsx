"use client";
import { Header } from "@/ui";
import { PageWrapper } from "@/wrappers";
import React from "react";
import { BsGithub } from "react-icons/bs";

const ProjectPage = ({ project }: any) => {
  const { name, description, stacks, images, useage, link, github, type } =
    project;
  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-col flex-1 md:px-[10vh] px-10 mt-[70px] md:mt-[80px] min-h-screen pb-10">
          <div className="flex flex-col md:mt-10 mt-5 gap-3">
            <h1 className="text-2xl font-medium text-slate-50 font-header">
              {name}
            </h1>
            <div className="flex gap-3 scrollbar-hide w-full flex-wrap md:flex-auto">
              <p className="">Tech Stacks: </p>
              {stacks.map((stack: any, i: number) => (
                <p
                  key={i}
                  className="text-xs px-2 py-1 rounded-md bg-orange-400 shadow-md font-medium cursor-pointer hover:scale-95 duration-200 ease-in-out"
                >
                  {stack}
                </p>
              ))}
            </div>
            <div className="flex gap-3 scrollbar-hide w-full flex-wrap md:flex-auto">
              <p className="">Production Level: </p>
              <span
                className={`text-xs px-3 py-1 rounded-md shadow-md w-fit font-medium capitalize ${
                  type === "production" ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {type}
              </span>
            </div>
            <div className="flex gap-4">
              {link !== "" && (
                <a href={link} target="_blank">
                  <p
                    className="whitespace-nowrap text-xs px-3 py-1 rounded-md shadow-md font-medium cursor-pointer bg-blue-500 hover:scale-95 duration-200 ease-in-out flex items-center"
                    onClick={(e: any) => {
                      e.preventDefault();
                      window.open(link, "_blank");
                    }}
                  >
                    Visit Website
                  </p>
                </a>
              )}
              {github !== "" && (
                <BsGithub
                  className="text-2xl cursor-pointer hover:scale-95"
                  onClick={(e: any) => {
                    e.preventDefault();
                    window.open(github, "_blank");
                  }}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col mt-6 gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-header font-medium">Description</h3>
              <p className="text-sm text-slate-50 font-light max-w-[80vw] tracking-wider leading-6">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap gap-5 items-center justify-center">
              {images.map((image: any, index: number) => (
                <img
                  src={image}
                  key={index}
                  alt={`Image of ${name}`}
                  className="w-[300px] h-auto"
                />
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-header font-medium">Useage</h3>
              <p className="text-sm text-slate-50 font-light max-w-[80vw] tracking-wider leading-6">
                {useage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProjectPage;
