import React from "react";
import Image from "next/image";
import { daysOfWeek, scheduleData } from "@/data/scheduleData";

const WorkingSchedule = () => {
  return (
    <section className="bg-customGray text-customWhite">
      <div className="text-center max-w-[1100px] mx-auto py-[100px] mb-[100px]">
        <div className="pb-5">
          <span className="uppercase font-medium tracking-[4px] text-customGreen">
            Time table
          </span>
          <h4 className="text-2xl font-semibold">Working Schedule</h4>
        </div>
        <div>
          <ul className="mb-5 flex items-center text-[#878787] justify-center">
            {daysOfWeek.map((day) => (
              <li key={day}>
                <button className="px-5 py-2">{day}</button>
              </li>
            ))}
          </ul>
          <div className="container mx-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-[#2C323A]">
                <tr>
                  <th className="py-5 border border-b-0 font-normal border-[#3D4248]">
                    Time
                  </th>
                  <th className="py-5 border border-b-0 font-normal border-[#3D4248]">
                    Type
                  </th>
                  <th className="py-5 border border-b-0 font-normal border-[#3D4248]">
                    Workout
                  </th>
                  <th className="py-5 border border-b-0 font-normal border-[#3D4248]">
                    Trainer
                  </th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map(
                  ({ image, time, type, workout, trainer }, index) => (
                    <tr key={index}>
                      <td className="border border-[#3D4248] px-4 py-5">
                        {time}
                      </td>
                      <td
                        className={`${
                          type === "advanced"
                            ? "text-[#FF4B4B]"
                            : type === "intermediate"
                            ? "text-[#FFA24B]"
                            : type === "beginners" && "text-customGreen"
                        } border border-[#3D4248] px-4 py-5`}
                      >
                        {type}
                      </td>
                      <td className={`border border-[#3D4248] px-4 py-5`}>
                        {workout}
                      </td>
                      <td className="border flex items-center gap-2 border-[#3D4248] px-4 py-5 justify-center">
                        <Image src={image} width={24} height={24} />
                        {trainer}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingSchedule;
