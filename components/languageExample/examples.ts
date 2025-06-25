const c = `
#include <stdio.h>

int main()
{
	int a, b;
	scanf("%d %d", &a, &b);
	printf("%d\\n", a * b);
	return 0;
}
`;

const cpp = `
#include <iostream>

using namespace std;

int main()
{
	int a, b;
	cin >> a >> b;
	cout << a * b << endl;
	return 0;
}
`;

const py3 = `
a, b = map(int, input().split())
print(a * b)
`;

const java = `
import java.util.Scanner;
public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(a * b);
    }
}
`;

const rust = `
use std::io;
fn main() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    let nums: Vec<i32> = input.trim().split_whitespace()
        .map(|x| x.parse().unwrap())
        .collect();
    println!("{}", nums[0] * nums[1]);
}
`;

const js = `
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [a, b] = input.split(' ').map(Number);
console.log(a * b);
`;

const csharp = `
using System;
class Program {
    static void Main() {
        string[] input = Console.ReadLine().Split(' ');
        int a = int.Parse(input[0]);
        int b = int.Parse(input[1]);
        Console.WriteLine(a * b);
    }
}
`;

const go = `
package main
import (
    "fmt"
)
func main() {
    var a, b int
    fmt.Scanf("%d %d", &a, &b)
    fmt.Println(a * b)
}
`;

const lua = `
a, b = io.read("*n", "*n")
print(a * b)
`;

const kotlin = `
fun main() {
    val (a, b) = readLine()!!.split(" ").map { it.toInt() }
    println(a * b)
}
`;

export const LANGUAGE_EXAMPLES = {
  c: {
    language: "c",
    code: c,
  },
  cpp: {
    language: "cpp",
    code: cpp,
  },
  py3: {
    language: "python",
    code: py3,
  },
  java: {
    language: "java",
    code: java,
  },
  rust: {
    language: "rust",
    code: rust,
  },
  js: {
    language: "javascript",
    code: js,
  },
  csharp: {
    language: "csharp",
    code: csharp,
  },
  go: {
    language: "go",
    code: go,
  },
  lua: {
    language: "lua",
    code: lua,
  },
  kt: {
    language: "kotlin",
    code: kotlin,
  },
};
