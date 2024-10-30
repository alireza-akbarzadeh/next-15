import Form from "next/form";
import { SearchFormReset } from "@/components/common/search-form-reset";
import { SearchIcon } from "lucide-react";

export async function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startup"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <SearchIcon />
        </button>
      </div>
    </Form>
  );
}
