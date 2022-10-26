import { useDataProfileStore } from "@store/storeDataProfile";
import { useDataRepositoriesStore } from "@store/storeDataRepositories";
import { useLoadingStore } from "@store/storeLoading";
import { useUsernameStore } from "@store/storeUsername";
import { useEffect } from "react";

const InputSearch = () => {
  const { username, setUsername } = useUsernameStore();
  const { setDataProfile } = useDataProfileStore();
  const { setDataRepositories } = useDataRepositoriesStore();
  const { setLoading } = useLoadingStore();

  const fetchData = async () => {
    const responseDataProfile = await fetch(
      `https://api.github.com/users/${username}`
    );
    const dataProfile = await responseDataProfile.json();
    setDataProfile(dataProfile);

    const responseDataRepositories = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const dataRepositories = await responseDataRepositories.json();
    setDataRepositories(dataRepositories);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async () => {
    setLoading(true);
    fetchData();
  };

  return (
    <div className="flex justify-center gap-3">
      <div className="flex w-full flex-col gap-3 md:w-8/12 md:flex-row">
        <input
          type="text"
          placeholder="Type GitHub username here ..."
          className="input w-full shadow-lg focus:border-2 focus:border-dashed focus:border-black focus:outline-none"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="btn btn-primary md:px-10" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
