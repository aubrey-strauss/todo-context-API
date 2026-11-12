import { useFilter } from "../context/FilterContext";
export default function FilterButtons() {
  const { filter, setFilter } = useFilter();
  return (
    <div>
      <button
        onClick={() => setFilter("all")}
        style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        style={{ fontWeight: filter === "active" ? "bold" : "normal" }}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        style={{ fontWeight: filter === "completed" ? "bold" : "normal" }}
      >
        Completed
      </button>
    </div>
  );
}
