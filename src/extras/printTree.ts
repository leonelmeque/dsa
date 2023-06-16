export function printTree(n = 10) {
  let finalStr = "";
  for (let i = 1; i <= n; i++) {
    // add spaces for left and right
    let spaces = "".padStart(n - i, " ");

    // concat spaces with the *
    finalStr += spaces + " * ".repeat(i) + spaces + "\n";
  }

  //Adding tree trunk
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    //add spaces
    let spaces = "".padStart(Math.round(n / 2) + 1, " ");
    // concat spaces with *
    finalStr += spaces + " * ".repeat(n / 2) + spaces + "\n";
  }

  //add three ground
  finalStr += " * ".repeat(n);

  console.log(finalStr);
}

printTree(15);
