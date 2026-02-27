export const Languages = {
  c: "c",
  cpp: "cpp",
  python: "python",
  java: "java",
  rust: "rust",
  javascript: "javascript",
  csharp: "csharp",
  go: "go",
  lua: "lua",
  kotlin: "kotlin",
  kt: "kt",
};
export type LANGUAGES = keyof typeof Languages;

const stdin_examples: Record<LANGUAGES, string> = {
  c: `
#include <stdio.h>

int main()
{
	int a, b;
	scanf("%d %d", &a, &b);
	printf("%d\\n", a * b);
	return 0;
}
`,
  cpp: `
#include <iostream>

using namespace std;

int main()
{
	int a, b;
	cin >> a >> b;
	cout << a * b << endl;
	return 0;
}
`,
  python: `
a, b = map(int, input().split())
print(a * b)
`,
  java: `
import java.util.Scanner;
public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(a * b);
    }
}
`,
  rust: `
use std::io;
fn main() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    let nums: Vec<i32> = input.trim().split_whitespace()
        .map(|x| x.parse().unwrap())
        .collect();
    println!("{}", nums[0] * nums[1]);
}
`,
  javascript: `
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [a, b] = input.split(' ').map(Number);
console.log(a * b);
`,
  csharp: `
using System;
class Program {
    static void Main() {
        string[] input = Console.ReadLine().Split(' ');
        int a = int.Parse(input[0]);
        int b = int.Parse(input[1]);
        Console.WriteLine(a * b);
    }
}
`,
  go: `
package main
import (
    "fmt"
)
func main() {
    var a, b int
    fmt.Scanf("%d %d", &a, &b)
    fmt.Println(a * b)
}
`,
  lua: `
a, b = io.read("*n", "*n")
print(a * b)
`,
  kotlin: `
fun main() {
    val (a, b) = readLine()!!.split(" ").map { it.toInt() }
    println(a * b)
}
`,
  kt: `
fun main() {
    val (a, b) = readLine()!!.split(" ").map { it.toInt() }
    println(a * b)
}
`,
};

const data_bin_examples: Record<LANGUAGES, string> = {
  c: `
#include <stdio.h>

int main()
{
    FILE *f = fopen("data.bin", "rb");
    int byte;
    while ((byte = fgetc(f)) != EOF)
    {
        printf("%d ", byte);
    }
    fclose(f);
    printf("\\n");
}
`,
  cpp: `
#include <fstream>
#include <iostream>

using namespace std;

int main()
{
    ifstream file("data.bin", ios::binary);

    unsigned char byte;
    while (file.read((char *)&byte, 1))
    {
        cout << (int)byte << " ";
    }
    cout << endl;

    file.close();
    return 0;
}
`,
  python: `
with open("data.bin", "rb") as f:
    bytes_read = f.read()
    for byte in bytes_read:
        print(byte, end=" ")
    print()
`,
  java: `
import java.io.FileInputStream;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (FileInputStream fis = new FileInputStream("data.bin")) {
            int byteRead;
            while ((byteRead = fis.read()) != -1) {
                System.out.print(byteRead + " ");
            }
            System.out.println();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`,
  rust: `
use std::{fs::File, io::Read};

fn main() {
    let mut file = File::open("data.bin").unwrap();
    let mut buffer = [0u8; 1];
    while let Ok(n) = file.read(&mut buffer) {
        if n == 0 {
            break;
        }
        print!("{} ", buffer[0]);
    }
    println!();
}`,
  javascript: `
const fs = require("fs");

fs.readFile("data.bin", (_, data) => {
  data.forEach(byte => process.stdout.write(byte + " "));
  console.log();
});
`,
  csharp: `
using System;
using System.IO;

class Program {
    static void Main() {
        using (FileStream fs = new FileStream("data.bin", FileMode.Open, FileAccess.Read)) {
            int byteRead;
            while ((byteRead = fs.ReadByte()) != -1) {
                Console.Write(byteRead + " ");
            }
            Console.WriteLine();
        }
    }
}`,
  go: `
package main

import (
"fmt"
"os"
)

func main() {
  file, _ := os.Open("data.bin")
  defer file.Close()

  buf := make([]byte, 1)
  for {
    n, _ := file.Read(buf)
    if n == 0  {
      break
    }
    fmt.Printf("%d ", buf[0])
  }
  fmt.Println()
}
  `,
  lua: `
local file = assert(io.open("data.bin", "rb"))

while true do
  local byte = file:read(1)
  if not byte then break end
  io.write(string.byte(byte), " ")
end

file:close()
print()
`,
  kotlin: `
import java.io.File

fun main() {
    val bytes = File("data.bin").readBytes()
    for (b in bytes) {
        print("\${b.toInt() and 0xFF} ")
    }
    println()
}
`,
  kt: `
import kotlinx.cinterop.*
import platform.posix.*

@OptIn(ExperimentalForeignApi::class)
fun main() {
    fopen("data.bin", "rb")?.let { file ->
        while (true) {
            val b = fgetc(file)
            if (b == EOF) break
            print("$b ")
        }
        fclose(file)
    }
    println();
}
  `,
};

export const LANGUAGE_EXAMPLES = Object.fromEntries(
  Object.keys(Languages).map((lang: string) => [
    lang,
    {
      stdin: stdin_examples[lang as LANGUAGES],
      data_bin: data_bin_examples[lang as LANGUAGES],
    },
  ]),
) as Record<LANGUAGES, { stdin: string; data_bin: string }>;
