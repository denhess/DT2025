/* projectSlider.tsx */

export function ProjectSlider() {
  const projects = [
    { title: "Projekt 1", description: "Beschreibung 1", img: "/project1.jpg" },
    { title: "Projekt 2", description: "Beschreibung 2", img: "/project2.jpg" },
    // add more project objects here
  ];

  return (
    <section className="project-slider h-screen flex items-center justify-center">
      <div className="slider-container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div className="slider-item" key={index}>
            <img src={project.img} alt={project.title} className="w-full h-64 object-cover rounded-md" />
            <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
            <p className="text-lg">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}