function extractFile(str) {
    fileinfo = str.split("\\").pop();
    let lastIndexDot = fileinfo.lastIndexOf(".");

    let fileName = fileinfo.slice(0, lastIndexDot);
    let extractFile = fileinfo.slice(lastIndexDot + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extractFile}`);
} 
extractFile('C:\\Internal\\training-internal\\Template.pptx')