function Footer() {
    return (
      <footer className="border-t border-zinc-200 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
  
            {/* Brand */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Surya Ahmad Afandi
              </h3>
  
              <p className="mt-2 max-w-md text-sm text-zinc-600">
                Digital Business Student, Web Developer, and Student Leader
                passionate about building digital solutions that create value
                through technology, innovation, and collaboration.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Quick Links
              </h4>
  
              <div className="flex flex-col gap-2 text-sm text-zinc-600">
                <a href="#about" className="hover:text-zinc-900">
                  About
                </a>
  
                <a href="#projects" className="hover:text-zinc-900">
                  Projects
                </a>
  
                <a href="#experience" className="hover:text-zinc-900">
                  Experience
                </a>
  
                <a href="#contact" className="hover:text-zinc-900">
                  Contact
                </a>
              </div>
            </div>
  
          </div>
  
          {/* Bottom Footer */}
          <div className="mt-10 flex flex-col gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
            
            <p>
              © {new Date().getFullYear()} Surya Ahmad Afandi. All rights reserved.
            </p>
  
            <p>
              Built with React, TypeScript & Tailwind CSS.
            </p>
  
          </div>
        </div>
      </footer>
    );
  }

export default function Navbar(){
    return(
        <div className="z-99 fixed flex w-full  bg-[#424245] p-5  justify-between">
            <h1 className="text-2xl font-bold text-white">Navbar</h1>
            <div className="hidden lg:grid grid-rows-1 grid-flow-col gap-4 text-white">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Project</a>
                <a href="#contact">Contact</a>
            </div>
                
        </div>
    )
}

export{
    Footer
}