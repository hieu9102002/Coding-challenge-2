function seq(i:number, n:number, a:number, b:number):string[]{
    var result:string[] = new Array<string>();
    var currValinDec:number;
    var currValinString:string = i.toString();
    result.push(currValinString)
    for(var x:number = 1; x< n; x++ ){
        currValinDec = parseInt(currValinString, a);
        currValinString = currValinDec.toString(b)
        result.push(currValinString);
    }
    return result;
}

function main():void {
    console.log(seq(2, 5, 10, 2).toString())
}

main();