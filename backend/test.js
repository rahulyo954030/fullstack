function runProgram(input){
    input = input.split('\n') ;
    let [n,m] = input[0].trim().split(' ').map(Number), mat = [],l = 1,queue =[]
    for(let i=0; i<n; i++){
        mat.push(input[l++].trim().split(' ').map(Number))
    }
    console.log(check(mat,n,m,queue));
}
function check(mat,n,m,queue){
    for(let i=0; i<n; i++){
        let arr = [];
        for(let j=0; j<m; j++){
            arr.push(check2(mat,i,j))
        }
        queue.push(arr.join(" "))
    }
   return queue.join("\n")
}  
function check2(mat,i,j){
    let c1=0,c2=0,c3=0, c4=0,quant=0;
    if(i+1<mat.length){
        c1=mat[i+1][j]
       if(c1%2==1)quant++;
    }
    if(i-1>=0){
        c2=mat[i-1][j]
       if(c2%2==1)quant++;
    }
    if(j+1<mat[0].length){
        c3=mat[i][j+1]
        if(c3%2==1)quant++;
    }
    if(j-1>=0){
        c4=mat[i][j-1]
        if(c4%2==1)quant++;
    }
    if(quant>=2){ 
        return mat[i][j]*-1
    };
    return mat[i][j];
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}