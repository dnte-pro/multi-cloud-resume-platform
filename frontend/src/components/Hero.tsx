export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-6xl font-black">
        Kiprono Daniel Yegon
      </h1>

      <h2 className="text-2xl text-blue-400 mt-4">
        Cloud & DevOps Engineer
      </h2>

      <p className="max-w-2xl mt-8 text-slate-300 text-lg">

        Building automated cloud deployments with AWS,
        Azure, Docker, Kubernetes, Terraform and GitHub
        Actions.

      </p>

      <div className="mt-10 flex gap-4">

        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">

          View Projects

        </button>

        <button className="border border-blue-500 px-6 py-3 rounded-lg">

          Contact Me

        </button>

      </div>

    </section>
  );
}