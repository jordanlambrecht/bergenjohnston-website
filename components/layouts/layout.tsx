import { Footer } from "@parts/modules/index";

export default function Layout({ children }) {
  return (
    <>
      {/* <Nav /> */}
      <main className='flex justify-center w-full bg-gray align-center h-screen max-h-screen px-8 lg:px-12 py-16'>
        {children}
      </main>
      <Footer />
    </>
  );
}
