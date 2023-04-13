import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

export default function PreBlurLoader({
  imgSrc,
  imgId,
  cssText,
  blurId,
  type,
}) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className={`${loading ? "hidden z-0" : "inline z-[5]"} ${cssText}`}>
        <Blurhash width={"100%"} height={"100%"} resolutionX={100} resolutionY={100} hash={blurId} punch={1} />
      </div>
      {type === "image" ? (
        <img
          src={imgSrc}
          alt={imgId}
          className={`${cssText} ${!loading ? "hidden" : "inline "} `}
          onLoad={() => setLoading(true)}
        />
      ) : type === "video" ? (
        <video
          onLoadedMetadata={() => setLoading(true)}
          src={imgSrc}
          alt={imgId}
          className={`${cssText} ${!loading ? "hidden" : "inline"}`}
          type="video/mp4"
          frameBorder="0"
          allowFullScreen
          autoPlay
          loop
          muted
        />
      ) : null}
    </>
  );
}
