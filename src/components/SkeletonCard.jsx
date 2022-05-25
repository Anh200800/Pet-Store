import React from "react";
import Skeleton from "./Skeleton";
const SkeletonCard = () => {
  return (
        <div className="skeleton-list">
      {Array.from(new Array(9)).map((x, index) => {
        return (
          <div className="skeleton-card">
            <Skeleton type="img" />
            <Skeleton type="title" />
            <Skeleton type="desc" />
          </div>
          
        );
      })}
      </div>
  );
};
export default SkeletonCard;
