export default function Header() {
  const headerContent = (isPlaceholder) => (
    <div
      className={`w-full ${
        isPlaceholder ? "" : "fixed z-50"
      } bg-blue-600 h-20 flex items-center p-8`}
    >
      <h1 className="text-2xl font-bolder text-white">Meu portfólio</h1>
    </div>
  );

  return (
    <>
      {headerContent(true)}
      {headerContent(false)}
    </>
  );
}
