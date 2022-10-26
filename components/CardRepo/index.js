import { useDataRepositoriesStore } from "@store/storeDataRepositories";
import ItemRepo from "./ItemRepo";

const CardRepo = () => {
  const { dataRepositories } = useDataRepositoriesStore();

  return (
    <>
      {dataRepositories.length > 0 && (
        <div className="card mt-5 bg-base-100 shadow-xl">
          <div className="card-body p-6 md:px-10">
            <p className="font-semibold">Repositories</p>
            <div className="divide-y">
              {dataRepositories.map((repo) => {
                return <ItemRepo key={repo.id} {...repo} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardRepo;
