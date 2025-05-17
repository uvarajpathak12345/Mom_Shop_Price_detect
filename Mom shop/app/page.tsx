import Adding from "./page/Adding";
import Data from "./page/Data";

export default function Home() {
  return (
    <>
     <section className="mx-3 mt-3 relative">
       <div className="flex flex-wrap gap-2">
        <Data/>
        <Adding></Adding>
       </div>

     </section>
    </>
  );
}
