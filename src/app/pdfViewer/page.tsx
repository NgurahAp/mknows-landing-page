export default function PDFPage() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/test.pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}
