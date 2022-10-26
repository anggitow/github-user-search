const ItemRepo = ({ ...prop }) => {
  return (
    <div className="py-4 first:pt-0">
      <a
        href={prop.html_url}
        target="_blank"
        className="text-xl font-bold text-[#570DF8] hover:underline"
      >
        {prop.name}
      </a>
      <p className="text-sm">{prop.description}</p>
      <div className="mt-4 flex items-center gap-4 text-sm">
        <span>{prop.language}</span>
        <div className="flex">
          <img src="/star.png" className="h-4 w-4" /> {prop.stargazers_count}
        </div>
        <div className="flex">
          <img src="/fork.png" className="h-4 w-4" /> {prop.forks_count}
        </div>
        <span>Updated {prop.updated_at}</span>
      </div>
    </div>
  );
};

export default ItemRepo;
