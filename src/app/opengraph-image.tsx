import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { USER } from "@/features/portfolio/data/user";

export const alt = `${USER.displayName} – ${USER.jobTitle}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const SD_LOGO_PATH =
  "M 56.25 31.25 L 37.5 31.25 L 37.5 0 L 56.25 0 L 56.25 6.25 L 62.5 6.25 L 62.5 25 L 56.25 25 L 56.25 31.25 Z M 6.25 6.25 L 0 6.25 L 0 12.5 L 6.25 12.5 L 6.25 18.75 L 18.75 18.75 L 18.75 25 L 25 25 L 25 18.75 L 18.75 18.75 L 18.75 12.5 L 6.25 12.5 L 6.25 6.25 Z M 43.75 6.25 L 43.75 25 L 56 25 L 56 6.25 L 43.75 6.25 Z M 25 6.25 L 6.25 6.25 L 6.25 0 L 25 0 L 25 6.25 Z M 18.75 25 L 0 25 L 0 31.25 L 18.75 31.25 L 18.75 25 Z";

export default async function Image() {
  const avatar = await readFile(
    join(process.cwd(), "public/assets/image/sdp.png")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#09090b",
          color: "#fafafa",
          padding: "72px 88px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <svg
            width={125}
            height={63}
            viewBox="0 0 62.5 31.25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={SD_LOGO_PATH} fill="#fafafa" />
          </svg>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
              {USER.displayName}
            </div>
            <div style={{ fontSize: 28, color: "#a1a1aa" }}>
              {USER.jobTitle}
            </div>
            <div style={{ fontSize: 22, color: "#71717a" }}>{USER.bio}</div>
          </div>
        </div>
        <img
          src={Uint8Array.from(avatar).buffer}
          width={280}
          height={280}
          alt=""
          style={{
            borderRadius: 999,
            objectFit: "cover",
            border: "4px solid #27272a",
          }}
        />
      </div>
    ),
    size
  );
}
