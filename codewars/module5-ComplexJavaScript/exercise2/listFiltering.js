//* create a function that takes a list of non-negative integers and strings 
//* and returns a new list with the strings filtered out.

function filter_list(l) {
  // Filter out strings from the list
  return l.filter((item) => typeof item !== "string");
}