const ItemRepo = () => {
  return (
    <div className="py-4 first:pt-0">
      <a
        href="https://github.com/anggitow/advice-generator-app"
        target="_blank"
        className="text-xl font-bold text-[#570DF8] hover:underline"
      >
        crud-backend-laravel
      </a>
      <p className="text-sm">CRUD Backend using Laravel</p>
      <div className="mt-4 flex items-center gap-4 text-sm">
        <span>PHP</span>
        <div className="flex">
          <img src="/star.png" className="h-4 w-4" /> 5
        </div>
        <div className="flex">
          <img src="/fork.png" className="h-4 w-4" /> 10
        </div>
        <span>Updated 2 hours ago</span>
      </div>
    </div>
  );
};

export default ItemRepo;
