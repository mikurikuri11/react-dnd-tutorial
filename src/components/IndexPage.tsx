import { Column } from "../components/Column";

export const IndexPage = () => (
  <div className="flex gap-4 justify-center items-center mt-12">
    <div>
      <Column colNumber={1} />
    </div>
    <div>
      <Column colNumber={2} />
    </div>
    <div>
      <Column colNumber={3} />
    </div>
    <div>
      <Column colNumber={4} />
    </div>
  </div>
);
