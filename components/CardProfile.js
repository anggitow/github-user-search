const CardProfile = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-6 md:px-10">
        <div className="flex justify-around sm:justify-start sm:gap-10">
          <div className="avatar items-center justify-center">
            <div className="h-[70px] w-[70px] rounded-full md:h-20 md:w-20">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold md:text-2xl">
              Anggito Wicaksono
            </span>
            <a
              href="https://github.com/anggitow"
              target="_blank"
              className="text-[#570DF8] hover:underline"
            >
              @anggitow
            </a>
            <span className="text-gray-500">Joined 27 March 2020</span>
          </div>
        </div>

        <div className="stats stats-vertical mt-5 bg-blue-50 shadow lg:stats-horizontal">
          <div className="stat py-3">
            <div className="stat-title text-slate-600 opacity-100">Repos</div>
            <div className="stat-value text-base">31K</div>
          </div>

          <div className="stat py-3">
            <div className="stat-title text-slate-600 opacity-100">
              Followers
            </div>
            <div className="stat-value text-base">4,200</div>
          </div>

          <div className="stat py-3">
            <div className="stat-title text-slate-600 opacity-100">
              Following
            </div>
            <div className="stat-value text-base">1,200</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
