import Image from "next/image";
import Section from "@modules/Section";
import Link from "next/link";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
export default function Home() {
  return (
    <>
      <NextSeo
        title='Bergen Johnston'
        description={`Hi, I'm Jordan Lambrecht, a Professional Something or Another in Lincoln, Nebraska.`}
        canonical='https://bergenjohnston.com'
        openGraph={{
          url: "https://bergenjohnston.com",
          title: "Bergen Johnston",
          description:
            "Hi, I'm Bergen Johnston, a Professional Something or Another in Lincoln, Nebraska.",
          siteName: "Bergen Johnston",
        }}
      />

      <Section id='landing' className={""}>
        <div className='h-full flex justify-center lg:flex-row gap-x-24 gap-y-16'>
          <div className='self-center prose prose-stone  font-body'>
            <h1 className='prose prose-gray text-4xl dark:prose-invert font-semibold opacity-75 tracking-wide'>
              This is literally a blank page.
            </h1>
            <p className='prose prose-gray prose-lg opacity-75'>
              It’s very mysterious and very intriguing.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
