import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"

function Home() {
  return (
<>
<div className="mb-8">
<h1 className="text-2xl capitalize font-bold">Find a Github user:</h1>
</div>
<div className="mb-8">
<UserSearch />
<UserResults />
</div>
</>
)}

export default Home