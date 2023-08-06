  
  
//   function HighlightHtmlContent({setmodifiedHtml,plainText,htmlContent,plainTextPositions}) {
//     let ans = [];    
//     let currPos = 0;

//     plainTextPositions.forEach(pos => {
//       const word = plainText.slice(pos.start, pos.end + 1);
//       const startId = htmlContent.indexOf(word, currPos);
//       const endId = startId + word.length;
//       ans.push(htmlContent.slice(currPos, startId));
//       ans.push('<mark>' + word + '</mark>');
//       currPos = endId;
//     });

//     ans.push(htmlContent.slice(currPos));
//     setmodifiedHtml(ans.join(''));
//   }

// export default HighlightHtmlContent;
