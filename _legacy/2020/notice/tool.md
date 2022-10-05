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

| 언어 | 버전 및 실행 환경 (ubuntu)| 컴파일러 옵션 | 실행 옵션 |
|---|---|---|---|
| C | GNU C: gcc 7.5.0 | `-O2 -static` | |
| C 11 | GNU C: gcc 7.5.0 | `-O2 -static --std=c11` | |
| C++ | GNU C++: g++ 7.5.0 | `-O2 -static --std=c++03` | |
| C++ 11 | GNU C++: g++ 7.5.0 | `-O2 -static --std=c++11` | |
| C++ 14 | GNU C++: g++ 7.5.0 | `-O2 -static --std=c++14` | |
| C++ 17 | GNU C++: g++ 7.5.0 | `-O2 -static --std=c++17` | |
| C# | Mono C# 4.6.2.7 | `-codepage:utf8 -warn:0 -optimize+ -clscheck- -reference:System.Numerics.dll` | `--optimize=all` |
| Java | OpenJDK 1.8.0 | | |
| Python 2 | CPython 2.7.17 | | |
| Python 3 | CPython 3.6.9\* | | |
| Pypy 2 | Python 2.7.13 PyPy 5.10.0 with GCC 7.3.0 | | |

> *(\*) Windows 환경에서 CPython 3.6.9가 제공되지 않는 경우 참가자는 3.6.8 버전을 사용할 수 있습니다. 3.6.8과 3.6.9의 차이는 보안취약점 수정여부이지만, 만에 하나 버전 차이로 인해 채점 결과에 차이가 발생할 경우 주최측은 책임을 지지 않는 점 양해 부탁드립니다.*

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

### Code::Blocks IDE와 MinGW 설치하기

<div id="Code_Blocks_Install_Guide"></div>
<script>
	let videoTag_CodeBlocks = '<iframe width="560" height="315" src="https://www.youtube.com/embed/IUp4re9_iGw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
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
arr = s.split()
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

작성된 프로그램은 프로그램의 종료 코드가 항상 0 (정상종료)이 되어야합니다. 0으로 종료되지 않는 경우 맞는 답을 출력하는 프로그램을 제출하였더라도 채점이 되지 않을 수 있습니다.
특히 종료 코드를 0으로 하는 코드를 제출하였더라도 작성한 프로그램의 런타임 에러 여부에 따라 0이 아닌 코드로 종료될 수 있습니다.

## 문제풀이 튜토리얼 (소스코드제출/실행결과제출)

<div id="Tutorial_Source"></div>
<div id="Tutorial_Output"></div>
<script>
	let video_source = '<iframe width="560" height="315" src="https://www.youtube.com/embed/9I4PMuT-8qs?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	let video_output = '<iframe width="560" height="315" src="https://www.youtube.com/embed/J1LfZHij63M?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	let dom_Tutorial_Source = document.getElementById("Tutorial_Source");
	let dom_Tutorial_Output = document.getElementById("Tutorial_Output");
    dom_Tutorial_Source.insertAdjacentHTML('beforeend', video_source);
    dom_Tutorial_Output.insertAdjacentHTML('beforeend', video_output);
</script>


<!--END-->
