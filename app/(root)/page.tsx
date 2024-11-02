import { SearchForm } from "@/components/common/search-form";
import {
  StartupCard,
  StartupCardProps,
} from "@/components/common/startup.card";
import { STARTUPS_QUERY } from "@/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({
    query: STARTUPS_QUERY,
    params,
  });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Result For "${query}"` : "All Startup"}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
          {posts?.length > 0 ? (
            posts?.map((post: StartupCardProps) => (
              <StartupCard key={post._id} {...post} />
            ))
          ) : (
            <p className="no-result">No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
