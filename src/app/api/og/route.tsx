import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") ?? "Learn Japanese, calmly.";
  const type = (searchParams.get("type") as "website" | "article" | "comparison") ?? "website";
  const author = searchParams.get("author") ?? "Bao Hua";
  const subtitle = searchParams.get("subtitle") ?? null;
  const competitor = searchParams.get("competitor") ?? "Duolingo";

  if (type === "article") {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#FAF8F2",
            width: "100%",
            height: "100%",
            padding: "80px",
            position: "relative",
            fontFamily: "Georgia, serif",
          }}
        >
          {/* Top label row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                color: "#2D8659",
                fontSize: 16,
                letterSpacing: "0.20em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 600,
              }}
            >
              From Inku
            </div>
            <div
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#8A8A8A",
              }}
            />
            <div
              style={{
                color: "#8A8A8A",
                fontSize: 16,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Article
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: "#1A1A1A",
                lineHeight: 1.15,
                maxWidth: "820px",
              }}
            >
              {title}
            </div>
            {subtitle && (
              <div
                style={{
                  fontSize: 26,
                  color: "#6B6B6B",
                  marginTop: "24px",
                  maxWidth: "780px",
                  lineHeight: 1.4,
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 400,
                }}
              >
                {subtitle}
              </div>
            )}
          </div>

          {/* Bottom row: author + wordmark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Author */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#2D8659",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FAF8F2",
                  fontSize: 18,
                  fontWeight: 700,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {author.charAt(0)}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    color: "#1A1A1A",
                    fontSize: 18,
                    fontWeight: 600,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {author}
                </div>
                <div
                  style={{
                    color: "#8A8A8A",
                    fontSize: 14,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  inkujapanese.com
                </div>
              </div>
            </div>

            {/* Wordmark */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  color: "#2D8659",
                  fontSize: 36,
                  fontWeight: 700,
                  fontFamily: "Georgia, serif",
                }}
              >
                墨
              </div>
              <div
                style={{
                  color: "#1A1A1A",
                  fontSize: 28,
                  fontWeight: 700,
                  fontFamily: "system-ui, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                Inku
              </div>
            </div>
          </div>

          {/* Brush-stroke accent: right edge vertical bar */}
          <div
            style={{
              position: "absolute",
              right: "0",
              top: "0",
              width: "10px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "40%",
                background: "#2D8659",
                opacity: 0.9,
              }}
            />
            <div
              style={{
                width: "6px",
                height: "20%",
                background: "#2D8659",
                opacity: 0.4,
                marginLeft: "2px",
              }}
            />
            <div
              style={{
                width: "4px",
                height: "10%",
                background: "#2D8659",
                opacity: 0.15,
                marginLeft: "3px",
              }}
            />
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  if (type === "comparison") {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#FAF8F2",
            width: "100%",
            height: "100%",
            fontFamily: "Georgia, serif",
            position: "relative",
          }}
        >
          {/* Title bar at top */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 80px 0",
            }}
          >
            <div
              style={{
                fontSize: 26,
                color: "#6B6B6B",
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "0.04em",
                textAlign: "center",
              }}
            >
              {title}
            </div>
          </div>

          {/* Split columns */}
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "stretch",
            }}
          >
            {/* Left: Inku */}
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
                background: "#FAF8F2",
                borderRight: "1px solid #E4DDC7",
                gap: "16px",
              }}
            >
              <div
                style={{
                  fontSize: 64,
                  color: "#2D8659",
                  fontWeight: 700,
                  fontFamily: "Georgia, serif",
                }}
              >
                墨
              </div>
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 700,
                  color: "#1A1A1A",
                  fontFamily: "system-ui, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Inku
              </div>
              <div
                style={{
                  width: "48px",
                  height: "4px",
                  background: "#2D8659",
                  borderRadius: "2px",
                }}
              />
              <div
                style={{
                  fontSize: 18,
                  color: "#2D8659",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Calm learning
              </div>
            </div>

            {/* Center: vs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                flexShrink: 0,
                background: "#FAF8F2",
              }}
            >
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#8A8A8A",
                  fontFamily: "system-ui, sans-serif",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                vs
              </div>
            </div>

            {/* Right: Competitor */}
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
                background: "#F3F0E8",
                borderLeft: "1px solid #E4DDC7",
                gap: "16px",
              }}
            >
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 700,
                  color: "#6B6B6B",
                  fontFamily: "system-ui, sans-serif",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                }}
              >
                {competitor}
              </div>
              <div
                style={{
                  width: "48px",
                  height: "4px",
                  background: "#8A8A8A",
                  borderRadius: "2px",
                  opacity: 0.5,
                }}
              />
              <div
                style={{
                  fontSize: 18,
                  color: "#8A8A8A",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Streak pressure
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 80px",
              borderTop: "1px solid #E4DDC7",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  color: "#2D8659",
                  fontSize: 22,
                  fontWeight: 700,
                  fontFamily: "Georgia, serif",
                }}
              >
                墨
              </div>
              <div
                style={{
                  color: "#1A1A1A",
                  fontSize: 18,
                  fontWeight: 700,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Inku
              </div>
              <div
                style={{
                  color: "#8A8A8A",
                  fontSize: 16,
                  fontFamily: "system-ui, sans-serif",
                  marginLeft: "8px",
                }}
              >
                inkujapanese.com
              </div>
            </div>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  // Default: type === "website"
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#FAF8F2",
          width: "100%",
          height: "100%",
          padding: "80px",
          position: "relative",
          fontFamily: "Georgia, serif",
          border: "1px solid #E4DDC7",
        }}
      >
        {/* Top-left label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              color: "#2D8659",
              fontSize: 18,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 600,
            }}
          >
            Inku
          </div>
          <div
            style={{
              color: "#E4DDC7",
              fontSize: 18,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            /
          </div>
          <div
            style={{
              color: "#8A8A8A",
              fontSize: 16,
              letterSpacing: "0.08em",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            inkujapanese.com
          </div>
        </div>

        {/* Centered title block */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.1,
              textAlign: "center",
              maxWidth: "940px",
            }}
          >
            {title}
          </div>
          {/* Matcha accent underline */}
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "#2D8659",
              borderRadius: "2px",
            }}
          />
          {subtitle && (
            <div
              style={{
                fontSize: 28,
                color: "#6B6B6B",
                textAlign: "center",
                maxWidth: "780px",
                lineHeight: 1.4,
                fontFamily: "system-ui, sans-serif",
                fontWeight: 400,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Bottom: wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              color: "#2D8659",
              fontSize: 36,
              fontWeight: 700,
              fontFamily: "Georgia, serif",
            }}
          >
            墨
          </div>
          <div
            style={{
              color: "#1A1A1A",
              fontSize: 30,
              fontWeight: 700,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            Inku
          </div>
          <div
            style={{
              color: "#8A8A8A",
              fontSize: 22,
              fontFamily: "system-ui, sans-serif",
              marginLeft: "8px",
            }}
          >
            Learn Japanese, calmly.
          </div>
        </div>

        {/* Decorative corner accent: top-right brushstroke suggestion */}
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "80px",
            width: "3px",
            height: "120px",
            background: "#2D8659",
            opacity: 0.25,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "88px",
            width: "2px",
            height: "60px",
            background: "#2D8659",
            opacity: 0.12,
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
