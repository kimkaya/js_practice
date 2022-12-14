let arr = [];

arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);
arr.push(50);

console.log(arr.length);
console.log(arr);

arr[2] = 100;
console.log(arr[2]);

/*
push 메서드 : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
pop 메서드 : 배열의 마지막 요소를 제거한 후, 제거한 요소를 반환
unshift 메서드 : 배열의 첫 번째 자리에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
shift 메서드 : 배열의 첫 번째 요소를 제거한 후, 제거한 요소를 반환
*/

let v = arr.pop(); // 배열의 마지막 요소를 제거한 후, 제거한 요소를 반환
console.log(v);
console.log(arr);

let s = arr.shift() //배열의 첫 번째 요소를 제거한 후, 제거한 요소를 반환
console.log(s);
console.log(arr);

arr.unshift(200); //배열의 첫 번째 자리에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
console.log(arr);
console.log(arr.toString());

let farr = [100, 200, 300, 400, 500];
let tot = 0;
for(let idx in farr) {
    tot += farr[idx];
}
console.log(tot);

tot = 0;
for (let n of farr) {
    tot += n;
}
console.log(tot);

//splice() : 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
farr.splice(2,1,600,700); // 2번째부터 1개 
console.log(farr);

farr.splice(-1,1); //-를 사용하여 뒤에서 부터 카운트 맨뒤에서 1개 제거.
console.log(farr);

//slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
let  narr = [1, 2, 3, 4, 5];
let subarr = narr.slice(1,3); // 1번째에서 (3-1)번째까지 부분 배열을 리턴한다.
console.log(subarr);
console.log(narr);

let arr1 = ['A','B','C'];
let arr2 = ['D','E', 'F'];
let totarr = [...arr1, ...arr2];
console.log(totarr);

let totarr2 = arr1.concat(arr2);
console.log(totarr2);


//Callback Function : 파라미터로 함수를 전달받아, 함수의 내부에서 실행하는 함수이다.
let varr = [11, 22, 33, 44, 55];
varr.forEach(function(item, index, array){
    console.log(`item:${item},idx:${index}`);
});

let uarr = [
    {name:"hong", age:20},
    {name:"song", age:30},
    {name:"kong", age:40},
    {name:"song", age:40}
]

let suser = uarr.find(item => item.name =="song");
console.log(suser);

let suserarr = uarr.filter(item => item.name =="song");
console.log(suserarr);

let sucharr = uarr.filter(item => item.age >=30);
console.log(sucharr);

let iarr = [1,2,3,4,5];
let marr = iarr.map(item=>item*2);
console.log(marr);

let stud = [
    {no:3, score:80},
    {no:2, score:75},
    {no:1, score:90},
];

let mstud = stud.map(item=>({no:item.no,score:item.score+5}))
console.log(mstud)

let obj1 = {id:1,title:'11'};
let obj2 = {...obj1,content:'33'};
let obj3 = {...obj1};
let obj4 = obj1;
console.log(obj2);

let board = {
    no:1,
    title:"제목",
    content:"내용",
    readcout:0
}

let boardcopy = {...board, readcount:board.readcount+1};

let iarr2 = [5,3,1,8,7];
console.log(iarr2);
iarr2.sort();
console.log(iarr2);
iarr2.sort((x,y)=>y-x);
console.log(iarr2);

//ascinding compare(오름차순 정렬 비교함수)
function asd_compare(x,y){
        // if (x>y) return 1;
        // else if(x<y) return -1;
        // else return 0;
        return x-y;
}
iarr2.sort(asd_compare);
console.log(iarr2);

//descinding compare(내림차순 정렬 비교함수)
function desc_compare(x,y){
    return y-x;
}
iarr2.sort(desc_compare);
console.log(iarr2);

stud.sort((s1,s2) => s1.no-s2.no);
console.log(stud);

stud.sort((s1,s2) => s2.no-s1.no);
console.log(stud);