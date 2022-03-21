// Selecting all p element
const allParagraph = document.getElementsByTagName("p");

// Declearing eventlistener on button in other to click and make it more interactive
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  // receive the data and store it
  let allContent = "";
  // count start from zero
  let count = 0;

  // using for over all paragraph element
  for (let i = 0; i < allParagraph.length; i++) {
    // assign all the paragraph to node
    const node = allParagraph[i];
    // increment count
    count++;
    // added the count and text to allContent \n mean break to new line
    allContent += `${count} - ${node.textContent}\n`;
  }
  //   Show alert after loop with number, \n break to new line
  alert(`Found ${count} Paragraph. Their content: \n${allContent}`);
});
