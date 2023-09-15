import React from "react";
import Heading from "../common/Heading/Heading";

const Video = () => {
  return (
    <>
      <Heading
        para1={"Have a look here!"}
        heading={"What we do?"}
        para2={
          "Hands-on experience you need to secure your place in the ever-evolving job market."
        }
      />
      <video class="w-full p-20" controls>
        <source src="/assets/skillIntern.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Video;
