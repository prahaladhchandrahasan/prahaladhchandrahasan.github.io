import { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FileCopyIcon from "@mui/icons-material/FileCopy";

export default function CopyPageButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const res = await fetch("/llm-markdown.md");
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API may fail in some contexts
    }
  };

  const handleOpen = () => {
    window.open("/llm-markdown.md", "_blank");
  };

  return (
    <SpeedDial
      ariaLabel="Copy page actions"
      sx={{ position: "fixed", bottom: 24, right: 24 }}
      icon={
        copied ? (
          <ContentCopyIcon />
        ) : (
          <FileCopyIcon />
        )
      }
      onClick={handleCopy}
      FabProps={{
        size: "medium",
        sx: {
          bgcolor: copied ? "success.main" : "grey.800",
          "&:hover": { bgcolor: copied ? "success.dark" : "grey.700" },
        },
      }}
    >
      <SpeedDialAction
        icon={<ContentCopyIcon />}
        tooltipTitle="Copy page as Markdown"
        onClick={(e) => {
          e.stopPropagation();
          handleCopy();
        }}
      />
      <SpeedDialAction
        icon={<OpenInNewIcon />}
        tooltipTitle="Open Markdown"
        onClick={(e) => {
          e.stopPropagation();
          handleOpen();
        }}
      />
    </SpeedDial>
  );
}
