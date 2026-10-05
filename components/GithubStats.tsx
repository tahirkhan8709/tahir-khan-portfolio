async function getGithubStats() {
  const res = await fetch("https://api.github.com/users/YOUR_USERNAME");
  return res.json();
}

export default async function GithubStats() {
  const data = await getGithubStats();

  return (
    <div className="p-4 rounded-xl border border-gray-800 bg-gray-900/30 inline-flex items-center gap-4">
      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-sm text-gray-400">
        Live GitHub Repos: <span className="text-white font-bold">{data.public_repos}</span>
      </span>
    </div>
  );
}