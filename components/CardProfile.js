import { useDataProfileStore } from "@store/storeDataProfile";
import moment from "moment";

const CardProfile = () => {
  const { dataProfile } = useDataProfileStore();

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-6 md:px-10">
        {dataProfile?.id ? (
          <>
            <div className="flex justify-around sm:justify-start sm:gap-10">
              <div className="avatar items-center justify-center">
                <div className="h-[70px] w-[70px] rounded-full md:h-20 md:w-20">
                  <img src={dataProfile.avatar_url} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold md:text-2xl">
                  {dataProfile.name}
                </span>
                <a
                  href={dataProfile.html_url}
                  target="_blank"
                  className="text-[#570DF8] hover:underline"
                >
                  @{dataProfile.login}
                </a>
                <span className="text-gray-500">
                  Joined {moment(dataProfile.created_at).format("D MMMM YYYY")}
                </span>
              </div>
            </div>

            <div className="stats stats-vertical mt-5 bg-blue-50 shadow lg:stats-horizontal">
              <div className="stat py-3">
                <div className="stat-title text-slate-600 opacity-100">
                  Repos
                </div>
                <div className="stat-value text-base">
                  {dataProfile.public_repos}
                </div>
              </div>

              <div className="stat py-3">
                <div className="stat-title text-slate-600 opacity-100">
                  Followers
                </div>
                <div className="stat-value text-base">
                  {dataProfile.followers}
                </div>
              </div>

              <div className="stat py-3">
                <div className="stat-title text-slate-600 opacity-100">
                  Following
                </div>
                <div className="stat-value text-base">
                  {dataProfile.following}
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center">User {dataProfile.message}</p>
        )}
      </div>
    </div>
  );
};

export default CardProfile;
