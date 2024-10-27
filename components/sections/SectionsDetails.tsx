"use client";
import { CourseType, SectionType } from "@/lib/types";
import {
  // Course,
  MuxData,
  Progress,
  Purchase,
  Resource,
  // Section,
} from "@prisma/client";
import toast from "react-hot-toast";
// import { useState } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { File, Loader2, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import ReadText from "@/components/custom/ReadText";
import MuxPlayer from "@mux/mux-player-react";
import Link from "next/link";
import ProgressButton from "./ProgressButton";
import SectionMenu from "../layout/SectionMenu";

interface SectionsDetailsProps {
  course: CourseType & { sections: SectionType[] };
  section: SectionType;
  // purchase: Purchase | null;
  // muxData: MuxData | null;
  // resources: Resource[] | [];
  // progress: Progress | null;
}

const SectionsDetails = ({
  course,
  section,
}: // purchase,
// muxData,
// resources,
// progress,
SectionsDetailsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  // const isLocked = !purchase && !section.isFree;

  // const buyCourse = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.post(`/api/courses/${course.id}/checkout`);
  //     window.location.assign(response.data.url);
  //   } catch (err) {
  //     console.log("Failed to chechout course", err);
  //     toast.error("Something went wrong!");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const [sectionContent, setSectionContent] = useState("");
  const [isClient, setIsClient] = useState(false); // Track if component has mounted on client

  useEffect(() => {
    setIsClient(true); // Set to true when client-side rendering
  }, []);

  useEffect(() => {
    const fetchSectionContent = async () => {
      try {
        const response = await fetch(`/resources/${course.id}/${section.id}.html`);
        if (response.ok) {
          const htmlContent = await response.text();
          setSectionContent(htmlContent);
        } else {
          console.error("Failed to load section content");
          toast.error("Failed to load section content.");
        }
      } catch (error) {
        console.error("Error fetching section content:", error);
        toast.error("Failed to load section content.");
      }
    };

    if (isClient) fetchSectionContent();
  }, [course.id, section.id, isClient]);

  if (!isClient) return null; // Render nothing on the server, only on the client


  return (
    <div className="px-6 py-4 flex flex-col gap-5">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold max-md:mb-4">{section.title}</h1>

        <div className="flex gap-4">
          <SectionMenu course={course} />
          {/* {!purchase ? (
            <Button onClick={buyCourse}>
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <p>Buy this course</p>
              )}
            </Button>
          ) : (
            <ProgressButton
              courseId={course.id}
              sectionId={section.id}
              isCompleted={!!progress?.isCompleted}
            /> // !! converts falsy values to boolean false
          )} */}
        </div>
      </div>

      {/* <ReadText value={section.description!} /> */}

      {/* {isLocked ? (
        <div className="px-10 flex flex-col gap-5 items-center bg-[#FFF8EB]">
          <Lock className="h-8 w-8" />
          <p className="text-sm font-bold">
            Video for this section is locked!. Please buy the course to access
          </p>
        </div>
      ) : (
        <MuxPlayer
          playbackId={muxData?.playbackId || ""}
          className="md:max-w-[600px]"
        />
      )} */}

      <div
        // className="section-content"
        dangerouslySetInnerHTML={{
          __html: sectionContent || "<p>Loading content...</p>",
        }}
      />
      {/* <div>
        <h2 className="text-xl font-bold mb-5">Resources</h2>
        {resources.map((resource) => (
          <Link
            key={resource.id}
            href={resource.fileUrl}
            target="_blank"
            className="flex items-center bg-[#FFF8EB] rounded-lg text-sm font-medium p-3"
          >
            <File className="h-4 w-4 mr-4" />
            {resource.name}
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default SectionsDetails;
