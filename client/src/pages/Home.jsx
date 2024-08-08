import { Link } from "react-router-dom"
import BoxReveal from '../components/magicui/box-reveal'

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-green-100 dark:bg-black">
      <section className="w-full py-12 md:py-24 lg:py-26">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6  lg:gap-12 ">
            <div className="flex flex-row  space-y-4">
              <div className="space-y-6">
                <BoxReveal boxColor={"#aaa8c6"} duration={0.5}>


                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-[120px]/none">
                    Create & Listen The
                  </h1>
                </BoxReveal>
                <BoxReveal boxColor={"#aaa8c6"} duration={0.5}>

              
                <h1 className="text-4xl font-bold flex tracking-tighter sm:text-5xl xl:text-[120px]/none">
                  P <span> <img
                    src="/headphone.png"
                    className="lg:h-[125px]  h-[42px]"
                    alt="Hero"

                  /></span> dcast
                </h1>
                </BoxReveal>
                <p className="max-w-[800px] md:text-xl">
                  listen to the most popular podcasts on just one platform - <span className=" uppercase font-extrabold ">PodCaster</span>
                </p>
                <div className="flex flex-col justify-between gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-xl font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Login to listen
                  </Link>

                </div>
              </div>
              <div className="w-[50%] md:w-1/6 pt-[100px] mx-auto">
                <div className="py-4 border border-black dark:border-white rounded-full text-lg md:text-2xl font-semibold text-center transform -rotate-90">
                  Scroll Down
                </div>
              </div>

            </div>
            <p className=" md:text-right">
              Our app contains more than 2000 podcasts for year
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your Web Presence</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a suite of powerful features to help you build, deploy, and scale exceptional web
                  experiences.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <span>Seamless Collaboration</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <span>Automated CI/CD</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <span>Scalable Infrastructure</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <span>Real-time Insights</span>
                  </div>
                </li>
              </ul>
            </div>
            <img
              src="/podcast.jpg"
              width="550"
              height="310"
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Elevate Your Web Presence</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform offers a suite of powerful features to help you build, deploy, and scale exceptional web
              experiences.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}