import classNames from "classnames";

function Skeleton({ times, className }) {
    const outerClassName = classNames(
      'relative', 'overflow-hidden', 'bg-gray-300', 'rounded', 'mb-2.5',
      className
    );
  
    const innerClassName = classNames(
      'animate-shimmer',
      'absolute',
      'inset-0',
      '-translate-x-full',
      'bg-gradient-to-r',
      'from-gray-300',
      'via-white',
      'to-gray-300'
    );
  
    const boxes = Array(times).fill(0).map((_, i) => (
      <div key={i} className={outerClassName}>
        <div className={innerClassName}></div>
      </div>
    ));
  
    return boxes;
  }
  export default Skeleton;
  