import { FiSettings } from "react-icons/fi";
import { BsFilter, BsX } from "react-icons/bs";
import { GoZap } from "react-icons/go";

export default function page() {
  return (
    <main className="h-[92vh] mb-16 overflow-y-auto bg-background">
      <section className="pt-5 px-5 mb-2 flex justify-between"> 
        <h2 className="text-2xl mb-2 font-semibold">Notifications</h2>
        <FiSettings className="text-4xl bg-card p-1 rounded-full"/>
      </section>
      <section className="mb-2 flex gap-3 px-4">
        <div className="dropdown dropdown-bottom">
          <button tabIndex={0} role="button" className="btn rounded-full bg-card">Filter<BsFilter/></button>
          <ul tabIndex={0} className="mt-3 dropdown-content menu bg-card rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
        <button className="btn bg-card rounded-full">Unread</button>
      </section>

      {/* MAP OBJECTS */}
      <article className="flex items-center justify-between h-auto px-6 py-4 border-b-[1px] border-neutral-800">
        <div className="flex gap-3 items-center">
          <GoZap className="text-4xl rotate-[160deg]"/>
          <div className="*:p-0 *:m-0">
            <p className="border-neutral-800 text-sm">Time here</p>
            <h3 className="text-nd font-semibold">Welcome to the community!</h3>
            <p className="border-neutral-600 text-md">Message here</p>
          </div>
        </div>
        <BsX className="text-3xl p-0.5 bg-card rounded-full"/>
      </article>




    </main>
  );
}