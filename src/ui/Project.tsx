"use client";
import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { useRouter } from "next/navigation";

export const Project = ({ project }: any) => {
  const { name, description, stacks, link, github, type } = project;
  return (
    <Link
      href={`/projects/${name.toLowerCase().replaceAll(" ", "-")}`}
      className="cursor-pointer flex flex-col gap-5 px-4 py-4 pb-6 rounded-md shadow-md hover:scale-95 duration-200 ease-in-out bg-slate-800 hover:bg-slate-900 overflow-hidden"
    >
      <div className="flex gap-3 scrollbar-hide w-full flex-wrap md:flex-auto">
        {stacks.map((stack: any, i: number) => (
          <p
            key={i}
            className="text-xs px-3 py-2 rounded-md shadow-md font-medium cursor-pointer hover:scale-95 duration-200 ease-in-out"
          >
            {stack}
          </p>
        ))}
      </div>
      <h3 className="text-2xl font-medium text-slate-50">{name}</h3>
      <p
        className="text-sm text-slate-300 font-light line-clamp-3
      "
      >
        {description}
      </p>

      <div className="flex items-center justify-between">
        <span
          className={`text-xs px-3 py-1 rounded-md shadow-md font-medium capitalize ${
            type === "production" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {type}
        </span>
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
    </Link>
  );
};
