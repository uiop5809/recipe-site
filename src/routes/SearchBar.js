import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const changeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  function click() {
    setSearch("");
  }

  return (
    <form>
      <input
        type="text"
        value={search}
        placeholder="요리할 음식을 검색하세요."
        onChange={changeSearch}
      />
      <Link to={`/search/${search}`}>
        <button type="submit" onClick={click}>
          검색
        </button>
      </Link>
    </form>
  );
}
