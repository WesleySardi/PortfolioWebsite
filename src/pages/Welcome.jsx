import { useNavigate } from "react-router-dom";

export default function Welcome({ className, style }) {
  const navigate = useNavigate();

  return (
    <div className={`${className || ""}`} style={style || {}}>
      <div className="flex-col text-center">
        <h1 className="text-5xl font-bolder text-white mb-6">Bem-vindo!</h1>
        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md transition transform duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Meus projetos
        </button>
      </div>
    </div>
  );
}
