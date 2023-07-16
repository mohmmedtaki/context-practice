import React from "react";
import { PriceContext, ItemContext } from "../App";

export default function ComponentZ() {
  return (
    <div>
      <PriceContext.Consumer>
        {(price) => {
          return (
            <ItemContext.Consumer>
              {(item) => {
                return (
                  <div>
                    PriceContext: {price}- ItemContext: {item}
                  </div>
                );
              }}
            </ItemContext.Consumer>
          );
        }}
      </PriceContext.Consumer>
    </div>
  );
}
