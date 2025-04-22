import Nav from "../_components/nav";

export default function Design() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <main className="full-width">
        <h1 className="text-4xl font-bold pb-4">Design Page</h1>
        <iframe
          src="https://htmltestcontent.s3.eu-central-1.amazonaws.com/design/index.html"
          style={{
            width: "100%",
            height: "100vh",
            border: "none",
          }}
          title="Main page"
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        App footer
      </footer>
    </div>
  );
}
