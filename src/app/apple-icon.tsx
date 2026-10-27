import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

const SD_LOGO_PATH =
  "M 56.25 31.25 L 37.5 31.25 L 37.5 0 L 56.25 0 L 56.25 6.25 L 62.5 6.25 L 62.5 25 L 56.25 25 L 56.25 31.25 Z M 6.25 6.25 L 0 6.25 L 0 12.5 L 6.25 12.5 L 6.25 18.75 L 18.75 18.75 L 18.75 25 L 25 25 L 25 18.75 L 18.75 18.75 L 18.75 12.5 L 6.25 12.5 L 6.25 6.25 Z M 43.75 6.25 L 43.75 25 L 56 25 L 56 6.25 L 43.75 6.25 Z M 25 6.25 L 6.25 6.25 L 6.25 0 L 25 0 L 25 6.25 Z M 18.75 25 L 0 25 L 0 31.25 L 18.75 31.25 L 18.75 25 Z";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
        }}
      >
        <svg
          width={140}
          height={70}
          viewBox="0 0 62.5 31.25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={SD_LOGO_PATH} fill="#fafafa" />
        </svg>
      </div>
    ),
    size
  );
}
