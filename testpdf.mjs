import PDFMerger from 'pdf-merger-js';

var merger = new PDFMerger();

// const mergePDFs = async (p1,p2,p3,p4,p5,p6,p7,p8,p9,p10) => {
//   await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
//   await merger.add(p2);  //merge all pages. parameter is the path to file and filename.


// //   await merger.add("C:\\Users\\saxen\\Desktop\\python project.pdf", 2); // merge only page 2
// //   await merger.add('pdf2.pdf', [1, 3]); // merge the pages 1 and 3
// //   await merger.add('pdf2.pdf', '4, 7, 8'); // merge the pages 4, 7 and 8
// //   await merger.add('pdf3.pdf', '3 to 5'); //merge pages 3 to 5 (3,4,5)
// //   await merger.add('pdf3.pdf', '3-5'); //merge pages 3 to 5 (3,4,5)



//   await merger.save('public/merged.pdf'); //save under given name and reset the internal document
  
//   // Export the merged PDF as a nodejs Buffer
//   // const mergedPdfBuffer = await merger.saveAsBuffer();
//   // fs.writeSync('merged.pdf', mergedPdfBuffer);
// };

// module.exports = {mergePDFs}
// testpdf.mjs


export async function mergePDFs(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10) {
  // Your implementation here

    await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
    await merger.add(p2);  //merge all pages. parameter is the path to file and filename.
    // await merger.add(p3);  //merge all pages. parameter is the path to file and filename.
    // await merger.add(p4);  //merge all pages. parameter is the path to file and filename.
    // await merger.add(p5);  //merge all pages. parameter is the path to file and filename.
    // await merger.add(p6);  //merge all pages. parameter is the path to file and filename.
    // await merger.add(p7);  //merge all pages. parameter is the path to file and filename.
    // await merger.add(p8);  //merge all pages. parameter is the path to file and filename.
    // await merger.add(p9);  //merge all pages. parameter is the path to file and filename.
    // await merger.add(p10);  //merge all pages. parameter is the path to file and filename.
  
  
  //   await merger.add("C:\\Users\\saxen\\Desktop\\python project.pdf", 2); // merge only page 2
  //   await merger.add('pdf2.pdf', [1, 3]); // merge the pages 1 and 3
  //   await merger.add('pdf2.pdf', '4, 7, 8'); // merge the pages 4, 7 and 8
  //   await merger.add('pdf3.pdf', '3 to 5'); //merge pages 3 to 5 (3,4,5)
  //   await merger.add('pdf3.pdf', '3-5'); //merge pages 3 to 5 (3,4,5)
  
  
    let d = new Date().getTime()
    await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
    return d
    // Export the merged PDF as a nodejs Buffer
    // const mergedPdfBuffer = await merger.saveAsBuffer();
    // fs.writeSync('merged.pdf', mergedPdfBuffer);
}
