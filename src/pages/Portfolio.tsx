const projects = [
    {
        title: "Projet 1",
        description: "Description du projet",
        image: "https://via.placeholder.com/300",
    },
    {
        title: "Projet 2",
        description: "Description du projet",
        image: "https://via.placeholder.com/300",
    },
    {
        title: "Projet 3",
        description: "Description du projet",
        image: "https://via.placeholder.com/300",
    },
];

function Portfolio() {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Portfolio</h1>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        style={{
                            border: "1px solid #ccc",
                            padding: "1rem",
                            width: "300px",
                        }}
                    >
                        <img src={project.image} alt={project.title} width="100%" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;