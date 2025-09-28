export default function Projects() {
    const projects = [
        { title: "Blog Post App", desc: "A simple Blog Post app where users can create and view blog posts. Built using React, this app allows you to add posts with a title and content, and view them dynamically on the page.", link: "https://github.com/SoumaySoni/BlogPostApp-ReactJs"},
        { title: "Password Validator", desc: "A React application that validates password strength using multiple useState hooks in functional components. It provides real-time feedback on password validity based on defined criteria.", link:"https://github.com/SoumaySoni/Password-validator-ReactJs" }
    ]

    return (
        <section id="projects" className="py-20 px-6 bg-gray-50">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="p-6 rounded-xl shadow-lg bg-white hover:scale-105 transition-transform duration-300 border border-gray-200"
                    >
                        <h3 className="text-2xl font-semibold mb-2 text-indigo-700">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.desc}</p>
                        {/* Link to GitHub Repo */}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                            View the {project.title} on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}
