export function appendComments() {
  if(typeof document === "undefined") {

    body = document.getElementsByT
  const commentScript = document.createElement("scripts");
  commentScript.async = true
  commentScript.src = "https://utteranc.es/client.js"
  commentScript.setAttribute("repo", "optimistictrousers/comments")
  commentScript.setAttribute("issue-term", "title")
  commentScript.setAttribute("theme", "github-dark")
  commentScript.setAttribute("crossorigin", "anonymous")

  return commentScript;
  }
}