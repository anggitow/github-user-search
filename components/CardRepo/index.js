import { useDataRepositoriesStore } from "@store/storeDataRepositories";
import { useLoadingStore } from "@store/storeLoading";
import ItemRepo from "./ItemRepo";

const CardRepo = () => {
  let { dataRepositories } = useDataRepositoriesStore();
  const { loading } = useLoadingStore();

  return (
    <>
      {dataRepositories.length > 0 && !loading && (
        <div className="card mt-5 bg-base-100 shadow-xl">
          <div className="card-body p-6 md:px-10">
            <p className="font-semibold">Repositories</p>
            <div className="divide-y">
              {dataRepositories
                .sort((a, b) => {
                  const keyA = new Date(a.created_at),
                    keyB = new Date(b.created_at);

                  if (keyA < keyB) return 1;
                  if (keyA > keyB) return -1;
                  return 0;
                })
                .map((repo) => {
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
