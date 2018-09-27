/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
 exports.onClientEntry = () => {
  console.log("We've started!")
  require("gsap")
  require("scrollmagic")
}