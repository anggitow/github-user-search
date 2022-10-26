const InputSearch = () => {
  return (
    <div className="flex justify-center gap-3">
      <div className="flex w-full flex-col gap-3 md:w-8/12 md:flex-row">
        <input
          type="text"
          placeholder="Type GitHub username here ..."
          className="input w-full shadow-lg focus:border-2 focus:border-dashed focus:border-black focus:outline-none"
        />
        <button className="btn btn-primary md:px-10">Search</button>
      </div>
    </div>
  );
};

export default InputSearch;
