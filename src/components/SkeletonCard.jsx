import React from "react";
import Skeleton from "./Skeleton";
const SkeletonCard = () => {
  return (
        <div className="skeleton-list">
      {Array.from(new Array(9)).map((item, index) => {
        return (
          <div className="skeleton-card" key={index}>
            <Skeleton type="img" />
            <Skeleton  type="title"  />
            <Skeleton type="desc" />
          </div>
          
        );
      })}
      </div>
  );
};
export default SkeletonCard;
