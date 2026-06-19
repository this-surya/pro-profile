// import utilities, {FirstSection, SeconSection} from "./component/utilities";{ }
// import FirstSection from "./component/utilities";
// import Container from "./component/utilities";
// import Header from "./component/utilities";

// import SeconSection  from "./component/utilities";
import Container, { FirstSection, handleClick, Header, Card } from "./component/utilities"
import Navbar from "./component/userinterface";
import { Footer } from "./component/userinterface";
import Image from "next/image";




export default function Home() {
  return (
    <>
      <Navbar />
      <Container>


        <FirstSection>
          {/* <Header title="Hero Section" /> */}
          <section className="flex lg:flex-row flex-col w-full h-full mt-6" id="home">
            <div className="flex flex-col lg:w-1/2 h-screen justify-around p-5 order-last">
              <div className="leading-loose">
                <p>Welcome, who am i?</p>
                <Header title="Hi, I'm Surya Ahmad Afandi, Digital Busniss Students" size="5xl" />
                <p>Combining technical skills, leadership, and creativity to build impactful digital experiences.</p>
              </div>

              <div className=" flex w-full justify-evenly">
                <div>
                  <h2 className="mb-4 text-sm font-medium text-zinc-500">Social media</h2>
                  <div className="flex">
                    <a href="https://www.instagram.com/thissurya31/" target="_blank"><img src={"https://img.icons8.com/ios/50/instagram-new--v1.png"} /></a>
                    {/* <a href="https://www.instagram.com/thissurya31/" target="_black"> <img src={"https://img.icons8.com/ios/50/threads.png"} /></a> */}

                    <a href="https://www.linkedin.com/in/suryaproject" target="_black"> <img src={"https://img.icons8.com/ios/50/linkedin.png"} /></a>

                    {/* <a href="www.linkedin.com/in/suryaproject" target="_blank" > <img src={"https://img.icons8.com/ios/50/linkedin.png"} /></a> */}
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-sm font-medium text-zinc-500">Workspace</h2>
                  <div className="flex">
                    <a href="https://github.com/this-surya" target="_blank"><img src={"https://img.icons8.com/ios-filled/50/github.png"} /></a>
                    <a  href="mailto:uyahasibuan.123@gmail.com" target="_blank" ><img src={"https://img.icons8.com/ios/50/gmail-new.png"} /></a>
                  </div>
                </div>

              </div>
            </div>


            <div className="lg:w-1/2 lg:h-screen h-4/5 order-first justify-center flex pt-20">
              <Image className="w-86 h-[30rem] my-auto bg-zinc-200 shadow-xl/30 rounded-xl" src={"/surya.png"} width={200} height={200} alt="img" />
            </div>
          </section>
        </FirstSection>

        <FirstSection>
          <section className="min-h-screen flex flex-col justify-center" id="about">
            <div className="mb-5">
              <p>Service</p>
              <Header title="What i do" size="5xl" />
            </div>
            <div className="w-full  grid lg:grid-cols-2 place-items-center grid-cols-2 lg:gap-4 gap-1">
              {/* <div className="bg-gray-400 wh-64 grid grid-  rows-3 grid-flow-col gap-4"></div> */}
              <Card
                icon="https://img.icons8.com/ios/50/web.png"
                title="Web Development"
                description="Building modern, responsive websites using the latest web technologies with a focus on performance and user experience." />

              <Card
                icon="https://img.icons8.com/ios/50/database--v1.png"
                title="Database Design & Management"
                description="Create and manage digital content for social media to increase engagement and information delivery." />

              {/* <Card
                title="Database Design & Management"
                description="Design, optimize, and manage relational databases with MySQL and RDBMS principles to ensure data integrity and performance." /> */}

              <Card
                icon="https://img.icons8.com/sf-black/64/design.png"
                title="UI/UX Design"
                description="Create intuitive website and mobile application designs using Figma and Canva, focusing on usability and modern aesthetics." />

              <Card
                icon="https://img.icons8.com/ios-filled/50/cloud-database.png"
                title="API Integration"
                description="Integrate third-party services and APIs to enhance application functionality, automate workflows, and improve user experience." />

              {/* <Card
                title="Research & Data Collection"
                description="Conduct simple data collection and analysis to support service evaluation and decision making." /> */}



            </div>
          </section>
        </FirstSection>

        <FirstSection>
          <section className=" flex flex-col justify-around" id="experience">


            <div className="text-center mb-3 ">
              <p>Experience</p>
              <Header title="See my work" size="5xl" />
            </div>

            <div className=" grid lg:grid-cols-3 lg:gap-4 gap-1 lg:mx-20 mb-5">
              <Card title="Anime Streaming 'Unime'" path="/asset/gambar1.png" link="u-nime-api.vercel.app" picture />
      

              <Card title="Design figma of coffe shop mobile app" path="/asset/gambar2.png" link="https://www.figma.com/proto/Pzqk8WxuPOrGOdBOIN0PAK/UI-UX?t=uLtne6tRFi3u9LuR-1" picture />
      

              <Card title="Design figma of naluri cafe mobile app"path="/asset/gambar3.png" link="https://www.figma.com/proto/Q6TPD2jwjVf9JTtqVJx5LS/Wireframe-cafe-naluri?node-id=0-1&t=nmxOC7ECP56mPR4y-1" picture />
      

              <Card title="Personal web portofolio" path="/asset/gambar4.png" link="https://rondy-saputra.vercel.app/" picture />
      

              <Card title="Website e-commerce" path="/asset/gambar5.png" picture />
{/* 
              <Card title="Visitor Satisfaction Survey Enumerator" path="/asset/image3.jpeg" picture>
              </Card> */}
            </div>
          </section>
        </FirstSection>

        <FirstSection hidden>
          <section id="contact" className="py-24" >
            <div className="mx-auto max-w-6xl px-6">

              <div className="mb-12 text-center">
                <p className="mb-2 text-sm font-medium text-zinc-500">
                  CONTACT
                </p>
                <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
                  Let's Work Together
                </h2>
                <p className="mt-4 text-zinc-600">
                  Have a project, internship opportunity, or collaboration in mind?
                  Feel free to reach out.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2" >

                <div className="rounded-3xl border border-zinc-200 bg-white p-8">
                  <form className="space-y-5">

                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-zinc-900"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-zinc-900"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Message
                      </label>
                      <textarea
                        placeholder="Tell me about your project..."
                        className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-zinc-900"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-zinc-900 px-6 py-3 font-medium text-white transition hover:bg-zinc-800"
                    >
                      Send Message
                    </button>

                  </form>
                </div>

                <div className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8">

                  <div>
                    <h3 className="text-2xl font-semibold text-zinc-900">
                      Get In Touch
                    </h3>

                    <p className="mt-4 text-zinc-600">
                      I'm currently open to internship opportunities,
                      freelance projects, and collaborations.
                    </p>

                    <div className="mt-8 space-y-4">
                      <div>
                        <p className="text-sm text-zinc-500">Email</p>
                        <a
                          href="mailto:uyahasibuan.123@gmail.com"
                          className="font-medium hover:underline"
                        >
                          thissurya31@gmail.com
                        </a>
                      </div>

                      <div>
                        <p className="text-sm text-zinc-500">Location</p>
                        <p className="font-medium">
                          West Sumatra, Indonesia
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="mb-4 text-sm font-medium text-zinc-500">
                      SOCIAL LINKS
                    </p>

                    <div className="flex flex-wrap gap-3">

                      <a
                        href="https://instagram.com/thissurya31"
                        target="_blank"
                        className="flex h-12 w-12 items-center justify-center rounded-full  transition hover:bg-zinc-50"
                      >
                        <img src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="ig" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/suryaproject"
                        target="_blank"
                        className="flex h-12 w-12 items-center justify-center rounded-full  transition hover:bg-zinc-50"
                      >
                        <img src="https://img.icons8.com/ios/50/linkedin.png" alt="link" />
                      </a>

                      <a
                        href="https://github.com/thisSurya123"
                        target="_blank"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 transition hover:bg-zinc-50"
                      >
                        &lt;/&gt;
                      </a>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </section>
        </FirstSection>
      </Container>
      <Footer />
    </>

    // <div className="w-full lg:container lg:px-4">
    // {/* hero section */}
    // <div className="bg-sky-800 h-screen w-full">
    //   <h1 className="text-5xl font-extrabold text-white text-center pt-3">Hero Section</h1>
    // </div>

    // {/* about section */}
    // <div className="bg-sky-900 h-screen w-full">
    // <h1 className="text-5xl font-extrabold text-white text-center pt-3">About Section</h1>
    // </div>



    // {/* tech stack section */}
    // <div className="bg-sky-800 h-screen w-full">
    // <h1 className="text-5xl font-extrabold text-white text-center pt-3">Tech Section</h1>
    // </div>

    // {/* service section */}
    // <div className="bg-sky-900 h-screen w-full">
    // <h1 className="text-5xl font-extrabold text-white text-center pt-3">Service Section</h1>
    // </div>

    // {/* portofolio section */}
    // <div className="bg-sky-800 h-screen w-full">
    // <h1 className="text-5xl font-extrabold text-white text-center pt-3">Project Section</h1>
    // </div>

    // {/* contact section */}
    // <div className="bg-sky-900 h-screen w-full">
    // <h1 className="text-5xl font-extrabold text-white text-center pt-3">Contact Section</h1>
    // </div>
    // </div>
  );
}
