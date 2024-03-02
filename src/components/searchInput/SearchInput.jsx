import { useEffect, useState } from "react";
import "./searchInputStyle.css";

const SearchInput = ({
  onbtnClick,
  onClick,
  placeHolder = "Search query...",
  options,
}) => {
  const [searchText, setSearchText] = useState("");
  const [showOption, setShowOption] = useState(false);

  useEffect(() => {
    if (options?.length > 0) {
      setShowOption(true);
    }
    return () => setShowOption(false);
  }, [options]);

  const onInputChange = (e) => {
    setSearchText(e.target.value);
    if (!e.target.value) {
      setShowOption(false);
    }
  };

  const onSubmit = () => {
    onbtnClick(searchText);
  };
  return (
    <div id="search-input-mainWrapper">
      <input
        placeholder={placeHolder}
        onChange={(e) => onInputChange(e)}
        value={searchText}
      />
      <button onClick={onSubmit} disabled={!searchText}>
        Search
      </button>
      <div>
        {showOption && (
          <div id="search-input-option">
            {options.map((itm) => (
              <div key={itm} onClick={() => onClick(itm)}>
                {itm}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
