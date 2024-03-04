import { useEffect, useState } from "react";
import "./searchInputStyle.css";
import { textShorter } from "../../utils/utils";
import { useDebounce } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ placeHolder = "Search query...", data }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [debouncedValue] = useDebounce(searchText, 500);
  const [options, setOptions] = useState([]);
  const [showOption, setShowOption] = useState(false);

  useEffect(() => {
    onSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const onInputChange = (searchValue) => {
    if (!searchValue) {
      setShowOption(false);
      setOptions([]);
    }
    setSearchText(searchValue);
  };

  const onSubmit = () => {
    if (!searchText) {
      setShowOption(false);
      return null;
    } else {
      if (data instanceof Array) {
        const option = data?.filter((item) =>
          item.title.toLowerCase().includes(searchText)
        );
        setOptions(option);
      }
    }
  };

  return (
    <div id="search-input-mainWrapper">
      <input
        placeholder={placeHolder}
        onChange={(e) => onInputChange(e.target.value)}
        value={searchText}
      />
      <button onClick={onSubmit} disabled={!searchText}>
        Search
      </button>
      <div>
        {(options?.length > 0 || showOption) && (
          <div id="search-input-option">
            {options?.map((itm) => (
              <div
                key={itm?.id}
                onClick={() => navigate(`/product/${itm?.id}`, { state: itm })}
              >
                {textShorter(itm.title)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
