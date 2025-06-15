
import { Suspense, lazy } from "react";

const Lazydata = lazy(() => import("./Card"));

const LazyComponent = () => {
  return (
    <Suspense fallback={<p> Loading....</p>}>
      <Lazydata />
    </Suspense>
  );
};

export default LazyComponent;
