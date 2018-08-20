<script>
document.children[0].children[1].children[0].children[0].remove()
</script>
<!--BEGIN-->

# 개발 도구 사용 안내

코드 작성시 디버깅과 편의를 위해 로컬 컴퓨터의 개발 도구를 사용할 수 있습니다.

이 경우 로컬 컴퓨터에서의 개발 환경과 채점에서의 개발 환경이 달라 실행이나 채점이 되지 않는 불이익이 없도록 본 안내를 꼭 읽어보시기 바랍니다 (특히 Visual Studio / Visual C++ 사용시).

## 채점 환경

코드 제출 문제에 제출된 모든 코드의 실행과 채점은 이 사이트의 환경 위에서 이루어집니다. 해당 환경에서 동작하지 않는 코드는 채점이 되지 않습니다. 유념하여 개발 도구를 사용해주시기 바랍니다.

OS는 Ubuntu가 구동되며, 각 언어별로 사용되는 컴파일러는 다음과 같습니다:

| 언어 | 버전 및 실행 환경 (ubuntu)| 컴파일러 옵션 |
|---|---|---|
| C | GNU C: gcc 5.4.0 | `-O2 -static -DNYPC_GRADING` |
| C 11 | GNU C: gcc 5.4.0 | `-O2 -static --std=c11 -DNYPC_GRADING` |
| C++ | GNU C++: g++ 5.4.0 | `-O2 -static -DNYPC_GRADING` |
| C++ 11 | GNU C++: g++ 5.4.0 | `-O2 -static --std=c++11 -DNYPC_GRADING` |
| C++ 14 | GNU C++: g++ 5.4.0 | `-O2 -static --std=c++14 -DNYPC_GRADING` |
| C++ 17 | GNU C++: g++ 5.4.0 | `-O2 -static --std=c++17 -DNYPC_GRADING` |
| C# | Mono C# compiler version 4.2.1.0 | `-warn:0 -optimize+ -r:System.Numerics` |
| Java | Oracle Java 8 | |
| Python 2 | 2.7.12 | |
| Python 3 | 3.5.2 | |

각 문제에서 시간과 메모리 제한은 C/C++ 기준으로 책정됩니다.
그 이외의 언어에서는 시간과 메모리를 더 쓸 수 있도록 허용되는 경우가 있지만,
모든 문제를 모든 언어로 해결할 수 있다는 보장은 드리지 않습니다.
문제를 해결하는 데 계산 자원이 많이 필요하다고 판단되면 C/C++를 사용할 것을 권장합니다.

아래의 예시처럼 특정 플랫폼(특히, Windows나 Visual C++)에서만 동작하는 코드를 작성하지 않도록 유의하시기 바랍니다.

|사용금지 예시|비고|
|---|---|
|`void main()`|  표준에 따라 `int main`이어야 함|
|`getch()`| 대신 `getchar()`를 사용|
|`fflush(stdin)` | 비표준|
|`GetTickCount()` | Windows API 는 사용할 수 없음|
|`CString`| `CString` 은 표준이 아니며 사용할 수 없음. 대신 `std::string` 을 사용|
|`#include <stdafx.h>`|`stdafx.h` 는 Visual C++ 전용 precompiled header 임|

## Java 사용

클래스 이름은 반드시 `Main` 이어야 합니다.

## GNU C/C++ 컴파일러 / Code::Blocks 사용
GNU C/C++ 환경에서 프로그램을 작성할 경우 MinGW와 Code::Blocks 사용을 권장합니다. 아래의 URL에서 다운로드 받을 수 있습니다.

* MinGW - http://www.mingw.org/
* Code::Blocks - http://www.codeblocks.org/


### MinGW에서 GNU C/C++ 컴파일러(GCC) 설치하기

<div id="MinGW_Install_Guide"></div>
<script>
	let videoTag_MinGW = '<iframe width="560" height="315" src="https://www.youtube.com/embed/kRMELNEE2zk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	let dom_MinGW = document.getElementById("MinGW_Install_Guide");
    dom_MinGW.insertAdjacentHTML('beforeend', videoTag_MinGW);
</script>

### Code::Blocks IDE 설치하기

<div id="Code_Blocks_Install_Guide"></div>
<script>
	let videoTag_CodeBlocks = '<iframe width="560" height="315" src="https://www.youtube.com/embed/or8wDAhS840" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	let dom_CodeBlocks = document.getElementById("Code_Blocks_Install_Guide");
    dom_CodeBlocks.insertAdjacentHTML('beforeend', videoTag_CodeBlocks);
</script>

## 표준 입출력 사용하기

모든 코드 제출 문제에서는 주어진 입력 형식에 따라 표준 입력 (standard input)으로 입력을 받고 주어진 출력 형식에 따라 표준 출력(standard output)으로 출력해야 합니다.

아래 예시와 같이 두 개의 정수를 받아 곱하여 출력해야 하는 문제가 있다면, 언어별로 표준 입력과 표준 출력을 처리하는 방법은 아래와 같습니다.

### 입력 예시

```
8 4
```

### 출력 예시

```
32
```

### C

```
#include <stdio.h>

int main()
{
	int a, b;
	scanf("%d %d", &a, &b);
	printf("%d\n", a * b);
	return 0;
}
```

### C++

```
#include <iostream>

using namespace std;

int main()
{
	int a, b;
	cin >> a >> b;
	cout << a * b << endl;
	return 0;
}
```

### C++ (표준입출력을 input.txt의 내용으로 받아오고, 표준출력을 output.txt으로 내보내는 예제)

<div id="Standard_Input_Output_Guide_CPP"></div>
<script>
	let videoTag_Standard_Input_Output_Guide_CPP = '<iframe width="560" height="315" src="https://www.youtube.com/embed/EK_VhRZhEcc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	let dom_Standard_Input_Output_Guide_CPP = document.getElementById("Standard_Input_Output_Guide_CPP");
    dom_Standard_Input_Output_Guide_CPP.insertAdjacentHTML('beforeend', videoTag_Standard_Input_Output_Guide_CPP);
</script>
```
#include <iostream>

#ifndef NYPC_GRADING
    #define REDIRECT_STDIN() freopen("input.txt","r",stdin)
    #define REDIRECT_STDOUT() freopen("ouput.txt","w",stdout)
#else
    #define REDIRECT_STDIN()
    #define REDIRECT_STDOUT()
#endif

using namespace std;

int main()
{
    REDIRECT_STDIN();
    REDIRECT_STDOUT();

    int a, b;
    cin >> a >> b;
    cout << a * b << endl;
    return 0;
}

```

### C&#35;

```
using System;

public class Program {
    public static void Main() {
        string s = Console.ReadLine();
        string[] arr = s.Split();
        int a = int.Parse(arr[0]);
        int b = int.Parse(arr[1]);
        Console.WriteLine(a * b);
    }
}
```

### JavaScript (node.js)

```
var input = '';
process.stdin.resume();
process.stdin.on('data', function(data) {
    input += data;
});
process.stdin.on('end', function() {
    input = input.split(/\s+/);
    console.log(parseInt(input[0]) * parseInt(input[1]));
});
```

### Java

```
import java.util.*;
public class Main{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int a, b;
        a = sc.nextInt();
        b = sc.nextInt();
        System.out.println(a * b);
    }
}
```

### Python

```
s = raw_input()
arr = split()
a = int(arr[0])
b = int(arr[1])
print a*b
```

### Python 3

```
s = input()
arr = s.split()
a = int(arr[0])
b = int(arr[1])
print(a*b)
```

## 프로그램의 종료 코드 (exit code)

작성된 프로그램은 exit code 0 으로 종료하여야 합니다. exit code 가 0 이 아닐 경우 맞는 답을 출력하는 프로그램을 제출하였더라도 채점이 되지 않을 수 있습니다. 많은 언어에서, `main()`이 0을 리턴하는 것으로 해결됩니다.

<!--END-->
