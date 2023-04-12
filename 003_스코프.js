// let과 const는 블록레벨 스코프를 가지고 있습니다.
// ✅✨면접질문 ->  스코프 : 변수에 접근할 수 있는 유효범위
// 전역 스코프
// 함수 스코프
// 블록 스코프 (ES6)
{
  var a = 100;
  let b = 10;
  const c = 20;
}

console.log(a);
console.log(b);
console.log(c);

// 지역변수와 전역변수
let x = 100; // 블록 밖에 선언하면 전역에서 접근할수 있는 변수가 된다 =전역변수
function 함수() {
  let y = 20; // 블록 안에 선언시 밖에서 접근 불가능 = 지역변수
  console.log(x); // x가 없으니 위로 올라가서 찾는다 = 스코프 체이닝(해당 영역에 변수가 없으면 계속해서 상위 스코프를 따라 올라간다 window 까지 따라 올라가도 없으면 error)
}
함수(); // 100 -> 변수 x는 전역변수이다

// 1
let x = 10;
function 함수1() {
  let x = 20;
  function 함수2() {
    function 함수3() {
      console.log(x);
    }
  }
}

함수1();

// 2
let x = 10;
function 함수1() {
  let x = 20;
  function 함수2() {
    function 함수3() {
      let x = 30;
      console.log(x);
    }
    함수3();
  }
  함수2();
}

함수1();

// 3
let x = 10;
function 함수1() {
  let x = 20;
  function 함수2() {
    function 함수3() {
      // let x = 10  // 주석을 풀면 10 이 출력된다
      console.log(x); // 20
    }
    함수3();
  }
  함수2();
}

함수1(); // 20 // let x = 10 을 지우면 가장 가까운 블록의 값인 let x = 20; 불러온다
console.log(x); // 10

//스코프 체이닝
let a = 10; // a=10,b=10,함수1 의 각각의 메모리공간이 있다
let b = 10;
function 함수1() {
  // 함수1은 a=20, b=20,함수2에 연결되어있다
  let a = 20;
  let b = 20;
  function 함수2() {
    //함수2는 a=30 에 연결되어있다
    // 여기서 만약 변수 c를 찾으면 스코프 체이닝(올라가며 c를 찾는다)한다
    let a = 30;
    console.log(a, b);
  }
  함수2();
}
함수1(); // 30 20

// 함수의 호이스팅
// (함수나 변수를 끌어올려 주는 것 처럼 보임)
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
// error 없이 실행 됩니다.

함수(10); // 함수를 먼저 호출 // 110

function 함수(x) {
  return x + 100;
}

// error가 생깁니다.
// 화살표 함수 시 스코프가 뒤바뀐다
함수(10);

let 함수 = (x) => x + 100;
// 위의 코드는
// console.log(x)
// let x = 10
// 과 같다

// error가 생깁니다.
함수(10);

const 함수 = function (x) {
  return x + 100;
};
