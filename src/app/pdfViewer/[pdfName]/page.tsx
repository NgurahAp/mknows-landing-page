"use client";

import { useParams } from "next/navigation";

export default function PDFPage() {
  const params = useParams();
  const pdfSource =
    params.pdfName === "ai-sales" || params.pdfName === "virtual-reality"
      ? `/pdfs/newTrain/${params.pdfName}.pdf`
      : `/pdfs/bootcamp/${params.pdfName}.pdf`;

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src={pdfSource}
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}
