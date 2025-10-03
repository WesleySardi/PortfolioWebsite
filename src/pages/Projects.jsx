import { motion } from "framer-motion";

export default function Projects({ className, style }) {
  const icons = [
    { className: "devicon-react-original colored", title: "React.js" },
    { className: "devicon-javascript-plain colored", title: "Javascript" },
    { className: "devicon-typescript-plain colored", title: "Typescript" },
    { className: "devicon-java-plain colored", title: "Java" },
    { className: "devicon-dotnetcore-plain colored", title: ".NET" },
    { className: "devicon-csharp-plain colored", title: "C#" },
    { className: "devicon-postgresql-plain colored", title: "Postgres" },
    { className: "devicon-mysql-plain colored", title: "MySQL" },
    {
      className: "devicon-microsoftsqlserver-plain colored",
      title: "SQL Server",
    },
    { className: "devicon-git-plain colored", title: "Git" },
    { className: "devicon-github-original colored", title: "GitHub" },
  ];

  const iconRows = [icons.slice(0, 4), icons.slice(4, 8), icons.slice(8, 11)];

  return (
    <div className={`${className || ""}`} style={style || {}}>
      <div className="w-[90%] bg-gray-950 m-auto border-white border-x-1">
        {/* Bloco 1 */}
        <div
          className="w-full h-screen flex-1 flex flex-col justify-center items-center border-gray-900 border-b-1"
          style={{ height: "calc(100vh - 5rem)" }}
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Tecnologias:
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded"></div>
          </div>

          <div className="flex flex-col gap-10">
            {iconRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex justify-center gap-8 text-5xl md:text-6xl text-white"
              >
                {row.map((icon, i) => (
                  <motion.i
                    key={i}
                    className={icon.className}
                    title={icon.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.1 + rowIndex * 0.4,
                      duration: 0.5,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Bloco 1 */}
        {/* Bloco 2 */}
        <div className="w-full flex-1 flex flex-col justify-center items-center">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Tecnologias:
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded"></div>
          </div>

          <div className="flex flex-col gap-10"></div>
        </div>
        {/* Bloco 2 */}
        {/* Bloco 3 */}
        <div className="w-full flex-1 flex flex-col justify-center items-center">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Tecnologias:
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded"></div>
          </div>

          <div className="flex flex-col gap-10"></div>
        </div>
        {/* Bloco 3 */}
      </div>
    </div>
  );
}
