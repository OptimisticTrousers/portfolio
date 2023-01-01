import React, { FC, useEffect, useRef } from "react";

const Comments: FC<any> = () => {
  return (
    <div
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement("script");
        scriptElem.src = "https://utteranc.es/client.js";
        scriptElem.async = true;
        scriptElem.crossOrigin = "anonymous";
        scriptElem.setAttribute("repo", "OptimisticTrousers/portfolio");
        scriptElem.setAttribute("issue-term", "title");
        scriptElem.setAttribute("label", "blog-comment");
        scriptElem.setAttribute("theme", "github-dark");
        elem.appendChild(scriptElem);
      }}
    />
  );
};

export default Comments;
